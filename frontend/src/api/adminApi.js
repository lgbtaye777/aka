const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:8000' : window.location.origin);
const TOKEN_KEY = 'admin_token';
const APP_BASE_PATH = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
const ADMIN_LOGIN_PATH = `${APP_BASE_PATH}/admin/login`;

export const ADMIN_TOKEN_KEY = TOKEN_KEY;

export function getAdminToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setAdminToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearAdminToken() {
  localStorage.removeItem(TOKEN_KEY);
}

function buildQuery(params = {}) {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, value);
    }
  });
  const query = searchParams.toString();
  return query ? `?${query}` : '';
}

async function request(path, options = {}) {
  const headers = {
    ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(options.headers || {}),
  };
  const token = getAdminToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    clearAdminToken();
    if (window.location.pathname !== ADMIN_LOGIN_PATH) {
      window.location.href = ADMIN_LOGIN_PATH;
    }
    throw new Error('Unauthorized');
  }

  if (!response.ok) {
    let message = 'API request failed';
    try {
      const payload = await response.json();
      message = payload.detail || payload.message || message;
    } catch {
      message = response.statusText || message;
    }
    throw new Error(message);
  }

  if (response.status === 204) return null;
  return response.json();
}

export async function login(username, password) {
  return request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}

export async function getMe() {
  return request('/api/auth/me');
}

export async function getStatsSummary() {
  return request('/api/stats/summary');
}

export async function getAnalyticsSummary(params = {}) {
  return request(`/api/admin/analytics/summary${buildQuery(params)}`);
}

export async function getAnalyticsEvents(params = {}) {
  return request(`/api/admin/analytics/events${buildQuery(params)}`);
}

export async function getAnalyticsSessions(params = {}) {
  return request(`/api/admin/analytics/sessions${buildQuery(params)}`);
}

export async function getLeads(params = {}) {
  return request(`/api/leads${buildQuery(params)}`);
}

export async function getLead(id) {
  return request(`/api/leads/${id}`);
}

export async function updateLead(id, payload) {
  return request(`/api/leads/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
}

export async function updateLeadStatus(id, status) {
  return request(`/api/leads/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  });
}

export async function exportLeadsCsv(params = {}) {
  const token = getAdminToken();
  const response = await fetch(`${API_URL}/api/leads/export.csv${buildQuery(params)}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  if (response.status === 401) {
    clearAdminToken();
    window.location.href = ADMIN_LOGIN_PATH;
    throw new Error('Unauthorized');
  }

  if (!response.ok) {
    throw new Error('Не удалось экспортировать заявки');
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'leads.csv';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
