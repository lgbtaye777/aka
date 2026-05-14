import { useEffect } from 'react';
import {
  endAnalyticsSession,
  getOrCreateSessionId,
  startAnalyticsSession,
  trackClick,
  trackEvent,
  trackScrollDepth,
  trackSectionView,
  trackTimeOnPage,
} from '../analytics/analyticsClient.js';

const SECTION_NAMES = {
  home: ['hero', 'Hero'],
  services: ['services', 'Services'],
  approach: ['approach', 'Approach'],
  advantages: ['advantages', 'Advantages'],
  showcases: ['showcases', 'Showcases'],
  process: ['process', 'Process'],
  stack: ['stack', 'Technology Stack'],
  reviews: ['reviews', 'Reviews'],
  contacts: ['contacts', 'Contacts'],
  blog: ['blog', 'Blog'],
  footer: ['footer', 'Footer'],
};

function applySectionAnalyticsAttributes() {
  Object.entries(SECTION_NAMES).forEach(([id, [section, name]]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.dataset.analyticsSection = section;
    el.dataset.analyticsSectionName = name;
  });
}

function applyInteractiveAnalyticsAttributes() {
  const mappings = [
    ['#menuToggle', 'mobile_menu_open', 'mobile_menu_button', 'header', 'menu'],
    ['a[href="#services"]', 'nav_click', 'nav_services', 'header', 'navigation'],
    ['a[href="#showcases"]', 'nav_click', 'nav_showcases', 'header', 'navigation'],
    ['a[href="#process"]', 'nav_click', 'nav_process', 'header', 'navigation'],
    ['a[href="#stack"]', 'nav_click', 'nav_stack', 'header', 'navigation'],
    ['a[href="#reviews"]', 'nav_click', 'nav_reviews', 'header', 'navigation'],
    ['a[href="#contacts"]', 'cta_click', 'contact_cta', 'header', 'cta'],
    ['a[href^="tel:"]', 'external_link_click', 'phone_link', 'contacts', 'external_link'],
    ['a[href^="mailto:"]', 'external_link_click', 'email_link', 'contacts', 'external_link'],
    ['form#leadForm button[type="submit"]', 'form_submit_attempt', 'contact_form_submit', 'contacts', 'submit'],
    ['footer a', 'nav_click', 'footer_link', 'footer', 'navigation'],
  ];

  mappings.forEach(([selector, event, name, section, role]) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.dataset.analyticsEvent = event;
      el.dataset.analyticsName = index ? `${name}_${index + 1}` : name;
      el.dataset.analyticsSection = section;
      el.dataset.analyticsRole = role;
    });
  });

  const heroLinks = Array.from(document.querySelectorAll('#home a[href="#contacts"]'));
  heroLinks.forEach((el, index) => {
    el.dataset.analyticsEvent = 'cta_click';
    el.dataset.analyticsName = index === 0 ? 'hero_primary_cta' : 'hero_secondary_cta';
    el.dataset.analyticsSection = 'hero';
    el.dataset.analyticsRole = index === 0 ? 'primary_cta' : 'secondary_cta';
  });
}

function getSectionContext(target) {
  const section = target.closest('[data-analytics-section]');
  return {
    section_id: target.dataset.analyticsSection || section?.dataset.analyticsSection || null,
    section_name: section?.dataset.analyticsSectionName || null,
  };
}

function sanitizeText(text) {
  return (text || '').replace(/\s+/g, ' ').trim().slice(0, 120);
}

export function useAnalyticsTracking() {
  useEffect(() => {
    const startedAt = Date.now();
    const sectionEnterTimes = new Map();
    const viewedSections = new Set();
    const sentScrollDepths = new Set();

    getOrCreateSessionId();
    applySectionAnalyticsAttributes();
    applyInteractiveAnalyticsAttributes();
    startAnalyticsSession();
    trackEvent({ event_type: 'page_view', event_name: 'landing_page_view' });

    const sectionElements = Array.from(document.querySelectorAll('[data-analytics-section][data-analytics-section-name]'));
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.dataset.analyticsSection;
        const sectionName = entry.target.dataset.analyticsSectionName;
        if (entry.isIntersecting) {
          sectionEnterTimes.set(sectionId, Date.now());
          if (!viewedSections.has(sectionId)) {
            viewedSections.add(sectionId);
            trackSectionView({ section_id: sectionId, section_name: sectionName });
          }
        } else if (sectionEnterTimes.has(sectionId)) {
          const duration = Math.max(1, Math.round((Date.now() - sectionEnterTimes.get(sectionId)) / 1000));
          sectionEnterTimes.delete(sectionId);
          trackEvent({
            event_type: 'section_engagement',
            event_name: `${sectionId}_engagement`,
            section_id: sectionId,
            section_name: sectionName,
            duration_seconds: duration,
          }, true);
        }
      });
    }, { threshold: 0.45 });
    sectionElements.forEach((section) => sectionObserver.observe(section));

    const onClick = (event) => {
      const target = event.target.closest('[data-analytics-event], a, button');
      if (!target) return;
      const href = target.getAttribute('href') || '';
      const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
      const eventType = target.dataset.analyticsEvent || (isExternal ? 'external_link_click' : 'click');
      const { section_id, section_name } = getSectionContext(target);
      trackClick({
        event_type: eventType,
        event_name: target.dataset.analyticsName || `${eventType}_${section_id || 'unknown'}`,
        section_id,
        section_name,
        element_id: target.id || target.dataset.analyticsName || null,
        element_label: target.dataset.analyticsName || sanitizeText(target.getAttribute('aria-label') || target.innerText),
        element_role: target.dataset.analyticsRole || target.getAttribute('role') || target.tagName.toLowerCase(),
        target_text: sanitizeText(target.getAttribute('aria-label') || target.innerText),
        target_href: href || null,
      });
    };

    let scrollTicking = false;
    const onScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
        const depth = Math.min(100, Math.round((window.scrollY / maxScroll) * 100));
        [25, 50, 75, 100].forEach((threshold) => {
          if (depth >= threshold && !sentScrollDepths.has(threshold)) {
            sentScrollDepths.add(threshold);
            trackScrollDepth(threshold);
          }
        });
        scrollTicking = false;
      });
    };

    const flushTime = () => {
      const duration = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
      sectionEnterTimes.forEach((enteredAt, sectionId) => {
        const sectionEl = document.querySelector(`[data-analytics-section="${sectionId}"]`);
        trackEvent({
          event_type: 'section_engagement',
          event_name: `${sectionId}_engagement`,
          section_id: sectionId,
          section_name: sectionEl?.dataset.analyticsSectionName || null,
          duration_seconds: Math.max(1, Math.round((Date.now() - enteredAt) / 1000)),
        }, true);
      });
      trackTimeOnPage(duration);
      endAnalyticsSession(duration);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') flushTime();
    };

    document.addEventListener('click', onClick);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', flushTime);
    onScroll();

    return () => {
      flushTime();
      sectionObserver.disconnect();
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pagehide', flushTime);
    };
  }, []);
}
