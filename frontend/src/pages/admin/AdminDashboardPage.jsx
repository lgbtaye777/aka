import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAnalyticsSummary, getStatsSummary } from '../../api/adminApi.js';
import { AdminCard, ErrorState, formatDate, LoadingState, STATUS_LABELS, StatusBadge } from '../../admin/adminUi.jsx';

function StatCard({ label, value, tone = 'cyan', hint }) {
  const toneClass = {
    cyan: 'text-cyan-200 bg-cyan-400/10 border-cyan-400/20',
    amber: 'text-amber-100 bg-amber-300/10 border-amber-300/20',
    emerald: 'text-emerald-100 bg-emerald-300/10 border-emerald-300/20',
    rose: 'text-rose-100 bg-rose-300/10 border-rose-300/20',
    pink: 'text-pink-100 bg-pink-300/10 border-pink-300/20',
    slate: 'text-slate-100 bg-white/5 border-white/10',
  }[tone];

  return (
    <AdminCard className={`border p-5 ${toneClass}`}>
      <div className="text-sm text-slate-300">{label}</div>
      <div className="mt-3 font-display text-3xl font-bold">{value}</div>
      {hint && <div className="mt-2 text-xs text-slate-400">{hint}</div>}
    </AdminCard>
  );
}

function ProgressList({ title, data, labelMap = STATUS_LABELS }) {
  const entries = Object.entries(data || {});
  const max = Math.max(...entries.map(([, value]) => value), 1);

  return (
    <AdminCard className="p-5">
      <h2 className="mb-5 font-display text-lg font-bold">{title}</h2>
      {entries.length ? (
        <div className="grid gap-4">
          {entries.map(([label, value]) => (
            <div key={label}>
              <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                <span className="truncate text-slate-300">{labelMap[label] || label}</span>
                <span className="font-semibold text-white">{value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-pink-500"
                  style={{ width: `${Math.max((value / max) * 100, value ? 6 : 0)}%` }}
                />
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

function FunnelPreview({ data }) {
  const labels = {
    sessions: 'Сессии',
    hero_view: 'Hero',
    services_view: 'Услуги',
    contacts_view: 'Контакты',
    form_start: 'Старт формы',
    form_submit_attempt: 'Попытка',
    form_submit_success: 'Лид создан',
  };
  const entries = Object.entries(labels).map(([key, label]) => [key, label, data?.[key] || 0]);
  const max = Math.max(entries[0]?.[2] || 0, 1);

  return (
    <AdminCard className="p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="font-display text-lg font-bold">Conversion funnel</h2>
        <Link to="/admin/analytics" className="text-sm font-semibold text-cyan-200 hover:text-white">
          Подробнее
        </Link>
      </div>
      <div className="grid gap-3">
        {entries.map(([key, label, value]) => (
          <div key={key} className="rounded-xl border border-white/5 bg-white/[.03] p-3">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-300">{label}</span>
              <span className="font-semibold text-white">{value}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-black/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-pink-500"
                style={{ width: `${Math.max((value / max) * 100, value ? 5 : 0)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </AdminCard>
  );
}

function TopSections({ sections, total }) {
  return (
    <AdminCard className="overflow-hidden">
      <div className="border-b border-white/10 p-5">
        <h2 className="font-display text-lg font-bold">Популярные секции</h2>
      </div>
      {sections?.length ? (
        <div className="divide-y divide-white/10">
          {sections.slice(0, 5).map((section) => (
            <div key={section.section_id || section.section_name} className="grid gap-2 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="min-w-0">
                <div className="truncate font-semibold text-white">{section.section_name || section.section_id || 'Section'}</div>
                <div className="mt-1 text-xs text-slate-500">{section.section_id}</div>
              </div>
              <div className="text-left sm:text-right">
                <div className="font-display text-lg font-bold">{section.views}</div>
                <div className="text-xs text-slate-500">{total ? Math.round((section.views / total) * 100) : 0}% visits</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 text-sm text-slate-400">Просмотров секций пока нет.</div>
      )}
    </AdminCard>
  );
}

function RecentEvents({ events }) {
  return (
    <AdminCard className="overflow-hidden">
      <div className="border-b border-white/10 p-5">
        <h2 className="font-display text-lg font-bold">Последние события</h2>
      </div>
      {events?.length ? (
        <div className="divide-y divide-white/10">
          {events.slice(0, 6).map((event) => (
            <div key={event.id} className="grid gap-3 p-4 sm:grid-cols-[1fr_auto]">
              <div className="min-w-0">
                <div className="truncate font-semibold text-white">{event.event_name || event.event_type}</div>
                <div className="mt-1 truncate text-sm text-slate-400">
                  {[event.section_name || event.section_id, event.element_label || event.element_id].filter(Boolean).join(' · ') || 'Landing'}
                </div>
              </div>
              <div className="text-xs text-slate-500 sm:text-right">{formatDate(event.created_at)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 text-sm text-slate-400">Событий пока нет.</div>
      )}
    </AdminCard>
  );
}

function formatSeconds(value) {
  if (!value) return '0с';
  if (value < 60) return `${value}с`;
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return `${minutes}м ${seconds}с`;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    Promise.all([getStatsSummary(), getAnalyticsSummary()])
      .then(([leadStats, analyticsStats]) => {
        if (!active) return;
        setStats(leadStats);
        setAnalytics(analyticsStats);
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
  }, []);

  const byDay = useMemo(() => stats?.by_day || {}, [stats]);
  const analyticsKpis = useMemo(() => {
    if (!analytics) return [];
    return [
      { label: 'Сессии', value: analytics.total_sessions, tone: 'slate' },
      { label: 'Page views', value: analytics.total_page_views, tone: 'cyan' },
      { label: 'Клики', value: analytics.total_clicks, tone: 'amber' },
      { label: 'CTA clicks', value: analytics.total_cta_clicks, tone: 'pink' },
      { label: 'Время на сайте', value: formatSeconds(analytics.avg_duration_seconds), tone: 'emerald' },
      { label: 'Scroll depth', value: `${analytics.avg_scroll_depth || 0}%`, tone: 'cyan' },
      { label: 'Conversion', value: `${analytics.conversion_rate || 0}%`, tone: 'emerald' },
    ];
  }, [analytics]);

  if (loading) return <LoadingState label="Загружаем dashboard..." />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="grid gap-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Admin dashboard</p>
          <h1 className="font-display text-3xl font-bold">Заявки и аналитика</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Основная панель теперь объединяет заявки, конверсию и поведенческую аналитику лендинга.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/admin/leads" className="btn-base rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-bold text-white hover:bg-white/10">
            Открыть заявки
          </Link>
          <Link to="/admin/analytics" className="btn-base btn-accent rounded-xl px-5">
            Полная аналитика
          </Link>
        </div>
      </div>

      <section className="grid gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Leads</p>
          <h2 className="mt-1 font-display text-2xl font-bold">Заявки</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard label="Всего заявок" value={stats.total_leads} tone="slate" />
          <StatCard label="Новые" value={stats.new_leads} tone="cyan" />
          <StatCard label="В работе" value={stats.in_progress_leads} tone="amber" />
          <StatCard label="Готово" value={stats.done_leads} tone="emerald" />
          <StatCard label="Отклонено" value={stats.rejected_leads} tone="rose" />
        </div>
      </section>

      <section className="grid gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Behavior analytics</p>
          <h2 className="mt-1 font-display text-2xl font-bold">Поведение посетителей</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-7">
          {analyticsKpis.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
        <FunnelPreview data={analytics?.funnel} />
        <div className="grid gap-6">
          <ProgressList title="Устройства" data={analytics?.by_device} labelMap={{ desktop: 'Desktop', mobile: 'Mobile', tablet: 'Tablet' }} />
          <ProgressList title="Источники трафика" data={analytics?.by_referrer} labelMap={{ direct: 'Direct' }} />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <TopSections sections={analytics?.top_sections} total={analytics?.total_sessions || 0} />
        <RecentEvents events={analytics?.recent_events} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <ProgressList title="По статусам" data={stats.by_status} />
        <ProgressList title="По типам проекта" data={stats.by_project_type} />
        <ProgressList title="По бюджету" data={stats.by_budget} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1.3fr]">
        <AdminCard className="p-5">
          <h2 className="mb-5 font-display text-lg font-bold">По дням</h2>
          <div className="grid gap-3">
            {Object.entries(byDay).length ? (
              Object.entries(byDay).map(([day, value]) => (
                <div key={day} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[.03] px-4 py-3">
                  <span className="text-sm text-slate-300">{day}</span>
                  <span className="font-display text-lg font-bold">{value}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-400">Заявок по дням пока нет.</p>
            )}
          </div>
        </AdminCard>

        <AdminCard className="overflow-hidden">
          <div className="border-b border-white/10 p-5">
            <h2 className="font-display text-lg font-bold">Последние заявки</h2>
          </div>
          {stats.recent_leads.length ? (
            <div className="divide-y divide-white/10">
              {stats.recent_leads.map((lead) => (
                <Link key={lead.id} to={`/admin/leads/${lead.id}`} className="grid gap-3 p-5 transition-colors hover:bg-white/[.03] sm:grid-cols-[1fr_auto]">
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-white">{lead.name}</div>
                    <div className="mt-1 truncate text-sm text-slate-400">{lead.email}</div>
                    <div className="mt-2 text-xs text-slate-500">{formatDate(lead.created_at)}</div>
                  </div>
                  <div className="flex items-start sm:justify-end">
                    <StatusBadge status={lead.status} />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-6 text-sm text-slate-400">Заявок пока нет.</div>
          )}
        </AdminCard>
      </div>
    </div>
  );
}
