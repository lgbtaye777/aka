const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:8000' : window.location.origin);
const SESSION_KEY = 'akatech_analytics_session_id';

function getApiUrls() {
  const configuredUrl = API_URL.replace(/\/$/, '');
  const urls = [configuredUrl];

  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host === '127.0.0.1' && configuredUrl.includes('localhost')) {
      urls.push(configuredUrl.replace('localhost', '127.0.0.1'));
    }
    if (host === 'localhost' && configuredUrl.includes('127.0.0.1')) {
      urls.push(configuredUrl.replace('127.0.0.1', 'localhost'));
    }
  }

  return Array.from(new Set(urls));
}

function reportAnalyticsError(path, error) {
  if (import.meta.env.DEV) {
    console.warn(`[analytics] ${path} was not delivered`, error);
  }
}

async function postWithFallback(path, body, preferBeacon = false) {
  let lastError = null;

  for (const baseUrl of getApiUrls()) {
    const url = `${baseUrl}${path}`;
    try {
      if (preferBeacon && navigator.sendBeacon) {
        const blob = new Blob([body], { type: 'application/json' });
        if (navigator.sendBeacon(url, blob)) return;
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: preferBeacon,
      });

      if (response.ok) return;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Unknown analytics delivery error');
}

function safePost(path, payload, preferBeacon = false) {
  try {
    const body = JSON.stringify(payload);
    return postWithFallback(path, body, preferBeacon).catch((error) => {
      reportAnalyticsError(path, error);
    });
  } catch (error) {
    reportAnalyticsError(path, error);
    return Promise.resolve();
  }
}

export function getOrCreateSessionId() {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export function parseUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    utm_content: params.get('utm_content'),
    utm_term: params.get('utm_term'),
  };
}

export function detectDeviceType() {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

export function detectBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes('Edg/')) return 'Edge';
  if (ua.includes('Chrome/') && !ua.includes('Edg/')) return 'Chrome';
  if (ua.includes('Safari/') && !ua.includes('Chrome/')) return 'Safari';
  if (ua.includes('Firefox/')) return 'Firefox';
  return 'Other';
}

export function detectOS() {
  const ua = navigator.userAgent;
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac OS')) return 'macOS';
  if (ua.includes('Android')) return 'Android';
  if (/iPhone|iPad|iPod/.test(ua)) return 'iOS';
  if (ua.includes('Linux')) return 'Linux';
  return 'Other';
}

export function collectSessionInfo() {
  return {
    session_id: getOrCreateSessionId(),
    landing_path: window.location.pathname,
    current_path: window.location.pathname,
    referrer: document.referrer || '',
    ...parseUtmParams(),
    device_type: detectDeviceType(),
    browser: detectBrowser(),
    os: detectOS(),
    language: navigator.language || '',
    screen_width: window.screen?.width || null,
    screen_height: window.screen?.height || null,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    consent_analytics: true,
  };
}

export function startAnalyticsSession() {
  return safePost('/api/analytics/session', collectSessionInfo());
}

export function trackEvent(event, preferBeacon = false) {
  const payload = {
    session_id: getOrCreateSessionId(),
    page_path: window.location.pathname,
    ...event,
  };
  return safePost('/api/analytics/event', payload, preferBeacon);
}

export function trackClick(eventData) {
  return trackEvent(eventData);
}

export function trackSectionView(sectionData) {
  return trackEvent({
    event_type: 'section_view',
    event_name: `${sectionData.section_id}_view`,
    ...sectionData,
  });
}

export function trackScrollDepth(depth) {
  return trackEvent({
    event_type: 'scroll_depth',
    event_name: `scroll_${depth}`,
    scroll_depth: depth,
  });
}

export function trackTimeOnPage(duration) {
  return trackEvent({
    event_type: 'time_on_page',
    event_name: 'time_on_page',
    duration_seconds: duration,
  }, true);
}

export function endAnalyticsSession(duration) {
  return safePost('/api/analytics/session/end', {
    session_id: getOrCreateSessionId(),
    duration_seconds: duration,
  }, true);
}
