import { useEffect, useMemo, useState } from 'react';
import { getAnalyticsSummary } from '../../api/adminApi.js';
import { AdminCard, ErrorState, formatDate, LoadingState } from '../../admin/adminUi.jsx';

const ranges = [
  { label: 'Today', days: 0 },
  { label: '7 days', days: 7 },
  { label: '30 days', days: 30 },
  { label: 'All time', days: null },
];

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function getRangeParams(days) {
  if (days === null) return {};
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - days);
  return { date_from: isoDate(start), date_to: isoDate(end) };
}

function KpiCard({ label, value, suffix = '', hint }) {
  return (
    <AdminCard className="relative overflow-hidden p-5">
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-cyan-400/10 blur-2xl" />
      <div className="relative">
        <div className="text-sm text-slate-400">{label}</div>
        <div className="mt-3 font-display text-3xl font-bold text-white">{value}{suffix}</div>
        {hint && <div className="mt-2 text-xs text-slate-500">{hint}</div>}
      </div>
    </AdminCard>
  );
}

function ProgressRows({ title, data, labelMap = {} }) {
  const entries = Object.entries(data || {});
  const max = Math.max(...entries.map(([, value]) => value), 1);
  return (
    <AdminCard className="p-5">
      <h2 className="mb-5 font-display text-lg font-bold">{title}</h2>
      {entries.length ? (
        <div className="grid gap-4">
          {entries.map(([key, value]) => (
            <div key={key}>
              <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                <span className="truncate text-slate-300">{labelMap[key] || key}</span>
                <span className="font-semibold text-white">{value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-pink-500" style={{ width: `${Math.max((value / max) * 100, value ? 6 : 0)}%` }} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400">Данных пока нет.</p>
      )}
    </AdminCard>
  );
}

function Funnel({ data }) {
  const labels = {
    sessions: 'Sessions',
    hero_view: 'Hero viewed',
    services_view: 'Services viewed',
    contacts_view: 'Contacts viewed',
    form_start: 'Form started',
    form_submit_attempt: 'Submit attempted',
    form_submit_success: 'Lead created',
  };
  const entries = Object.entries(labels).map(([key, label]) => [key, label, data?.[key] || 0]);
  const max = Math.max(entries[0]?.[2] || 0, 1);
  return (
    <AdminCard className="p-5">
      <h2 className="mb-5 font-display text-lg font-bold">Conversion funnel</h2>
      <div className="grid gap-3">
        {entries.map(([key, label, value]) => (
          <div key={key} className="rounded-xl border border-white/5 bg-white/[.03] p-3">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-300">{label}</span>
              <span className="font-semibold text-white">{value}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-black/30">
              <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-pink-500" style={{ width: `${Math.max((value / max) * 100, value ? 5 : 0)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </AdminCard>
  );
}

export default function AdminAnalyticsPage() {
  const [range, setRange] = useState(ranges[1]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const params = useMemo(() => getRangeParams(range.days), [range]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    getAnalyticsSummary(params)
      .then((data) => {
        if (active) setSummary(data);
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [params]);

  if (loading) return <LoadingState label="Загружаем поведенческую аналитику..." />;
  if (error) return <ErrorState message={error} />;

  const scrollLabels = { 25: '25%', 50: '50%', 75: '75%', 100: '100%' };

  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Behavior analytics</p>
          <h1 className="font-display text-3xl font-bold">First-party analytics</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Сессии, клики, глубина скролла, воронка и взаимодействие с секциями без invasive fingerprinting.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {ranges.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setRange(item)}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-colors ${
                item.label === range.label
                  ? 'border-cyan-400/30 bg-cyan-400/10 text-cyan-100'
                  : 'border-white/10 text-slate-300 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-7">
        <KpiCard label="Sessions" value={summary.total_sessions} />
        <KpiCard label="Page views" value={summary.total_page_views} />
        <KpiCard label="Total clicks" value={summary.total_clicks} />
        <KpiCard label="CTA clicks" value={summary.total_cta_clicks} />
        <KpiCard label="Avg time" value={summary.avg_duration_seconds} suffix="s" />
        <KpiCard label="Avg scroll" value={summary.avg_scroll_depth} suffix="%" />
        <KpiCard label="Conversion" value={summary.conversion_rate} suffix="%" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
        <Funnel data={summary.funnel} />
        <ProgressRows title="Scroll depth" data={summary.scroll_depth_distribution} labelMap={scrollLabels} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <ProgressRows title="Devices" data={summary.by_device} />
        <ProgressRows title="Browsers" data={summary.by_browser} />
        <ProgressRows title="Operating systems" data={summary.by_os} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <ProgressRows title="Traffic sources" data={summary.by_referrer} />
        <ProgressRows title="UTM source" data={summary.by_utm_source} />
        <ProgressRows title="UTM campaign" data={summary.by_utm_campaign} />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AdminCard className="overflow-hidden">
          <div className="border-b border-white/10 p-5">
            <h2 className="font-display text-lg font-bold">Top sections</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.12em] text-slate-500">
                <tr>
                  <th className="px-5 py-4">Section</th>
                  <th className="px-5 py-4">Views</th>
                  <th className="px-5 py-4">Avg engagement</th>
                  <th className="px-5 py-4">Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {summary.top_sections.map((section) => {
                  const share = summary.total_sessions ? Math.round((section.views / summary.total_sessions) * 100) : 0;
                  return (
                    <tr key={section.section_id || section.section_name}>
                      <td className="px-5 py-4 text-white">{section.section_name || section.section_id}</td>
                      <td className="px-5 py-4 text-slate-300">{section.views}</td>
                      <td className="px-5 py-4 text-slate-300">{section.avg_engagement_seconds}s</td>
                      <td className="px-5 py-4 text-cyan-200">{share}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {!summary.top_sections.length && <div className="p-6 text-sm text-slate-400">Секций пока нет.</div>}
        </AdminCard>

        <AdminCard className="overflow-hidden">
          <div className="border-b border-white/10 p-5">
            <h2 className="font-display text-lg font-bold">Top clicked elements</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.12em] text-slate-500">
                <tr>
                  <th className="px-5 py-4">Element</th>
                  <th className="px-5 py-4">Section</th>
                  <th className="px-5 py-4">Role</th>
                  <th className="px-5 py-4">Clicks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {summary.top_clicked_elements.map((element, index) => (
                  <tr key={`${element.element_id || element.element_label}-${index}`}>
                    <td className="px-5 py-4 text-white">{element.element_label || element.element_id || 'Unknown'}</td>
                    <td className="px-5 py-4 text-slate-300">{element.section_id || '—'}</td>
                    <td className="px-5 py-4 text-slate-300">{element.element_role || '—'}</td>
                    <td className="px-5 py-4 text-cyan-200">{element.clicks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!summary.top_clicked_elements.length && <div className="p-6 text-sm text-slate-400">Кликов пока нет.</div>}
        </AdminCard>
      </div>

      <AdminCard className="overflow-hidden">
        <div className="border-b border-white/10 p-5">
          <h2 className="font-display text-lg font-bold">Recent events</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[780px] text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-5 py-4">Time</th>
                <th className="px-5 py-4">Event</th>
                <th className="px-5 py-4">Section</th>
                <th className="px-5 py-4">Element</th>
                <th className="px-5 py-4">Session</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {summary.recent_events.map((event) => (
                <tr key={event.id}>
                  <td className="px-5 py-4 text-slate-400">{formatDate(event.created_at)}</td>
                  <td className="px-5 py-4 text-white">{event.event_type}</td>
                  <td className="px-5 py-4 text-slate-300">{event.section_id || '—'}</td>
                  <td className="px-5 py-4 text-slate-300">{event.element_label || event.element_id || '—'}</td>
                  <td className="px-5 py-4 font-mono text-xs text-slate-500">{event.session_id.slice(0, 8)}...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!summary.recent_events.length && <div className="p-6 text-sm text-slate-400">Событий пока нет.</div>}
      </AdminCard>
    </div>
  );
}
