import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { exportLeadsCsv, getLeads, updateLeadStatus } from '../../api/adminApi.js';
import { AdminCard, ErrorState, formatDate, LoadingState, STATUSES, STATUS_LABELS, StatusBadge } from '../../admin/adminUi.jsx';

const initialFilters = {
  search: '',
  status: '',
  project_type: '',
  budget: '',
  sort_by: 'created_at',
  sort_order: 'desc',
  page: 1,
  limit: 20,
};

export default function AdminLeadsPage() {
  const [filters, setFilters] = useState(initialFilters);
  const [data, setData] = useState({ items: [], total: 0, page: 1, limit: 20, pages: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingId, setUpdatingId] = useState(null);

  const params = useMemo(() => filters, [filters]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    getLeads(params)
      .then((payload) => {
        if (active) setData(payload);
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

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value, page: key === 'page' ? value : 1 }));
  };

  const handleStatusChange = async (leadId, status) => {
    setUpdatingId(leadId);
    try {
      const updated = await updateLeadStatus(leadId, status);
      setData((current) => ({
        ...current,
        items: current.items.map((lead) => (lead.id === leadId ? updated : lead)),
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleExport = async () => {
    try {
      await exportLeadsCsv(filters);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Lead management</p>
          <h1 className="font-display text-3xl font-bold">Заявки</h1>
        </div>
        <button type="button" onClick={handleExport} className="btn-base btn-accent rounded-xl px-5">
          Экспорт CSV
        </button>
      </div>

      <AdminCard className="p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <input
            value={filters.search}
            onChange={(event) => updateFilter('search', event.target.value)}
            placeholder="Поиск по имени, email, компании..."
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />
          <select value={filters.status} onChange={(event) => updateFilter('status', event.target.value)} className="rounded-xl border border-white/10 bg-[#12141a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
            <option value="">Все статусы</option>
            {STATUSES.map((status) => (
              <option key={status} value={status}>{STATUS_LABELS[status]}</option>
            ))}
          </select>
          <input
            value={filters.project_type}
            onChange={(event) => updateFilter('project_type', event.target.value)}
            placeholder="Тип проекта"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />
          <input
            value={filters.budget}
            onChange={(event) => updateFilter('budget', event.target.value)}
            placeholder="Бюджет"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />
          <select value={filters.sort_order} onChange={(event) => updateFilter('sort_order', event.target.value)} className="rounded-xl border border-white/10 bg-[#12141a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
            <option value="desc">Сначала новые</option>
            <option value="asc">Сначала старые</option>
          </select>
          <select value={filters.limit} onChange={(event) => updateFilter('limit', Number(event.target.value))} className="rounded-xl border border-white/10 bg-[#12141a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </AdminCard>

      {error && <ErrorState message={error} />}
      {loading ? (
        <LoadingState label="Загружаем заявки..." />
      ) : (
        <AdminCard className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="border-b border-white/10 bg-white/[.03] text-xs uppercase tracking-[0.12em] text-slate-400">
                <tr>
                  <th className="px-4 py-4">ID</th>
                  <th className="px-4 py-4">Имя</th>
                  <th className="px-4 py-4">Email</th>
                  <th className="px-4 py-4">Компания</th>
                  <th className="px-4 py-4">Тип проекта</th>
                  <th className="px-4 py-4">Бюджет</th>
                  <th className="px-4 py-4">Статус</th>
                  <th className="px-4 py-4">Дата</th>
                  <th className="px-4 py-4">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {data.items.map((lead) => (
                  <tr key={lead.id} className="align-top transition-colors hover:bg-white/[.03]">
                    <td className="px-4 py-4 font-mono text-slate-400">#{lead.id}</td>
                    <td className="px-4 py-4 font-semibold text-white">{lead.name}</td>
                    <td className="px-4 py-4 text-slate-300">{lead.email}</td>
                    <td className="px-4 py-4 text-slate-300">{lead.company || '—'}</td>
                    <td className="px-4 py-4 text-slate-300">{lead.project_type || '—'}</td>
                    <td className="px-4 py-4 text-slate-300">{lead.budget || '—'}</td>
                    <td className="px-4 py-4">
                      <div className="grid gap-2">
                        <StatusBadge status={lead.status} />
                        <select
                          value={lead.status}
                          disabled={updatingId === lead.id}
                          onChange={(event) => handleStatusChange(lead.id, event.target.value)}
                          className="w-36 rounded-lg border border-white/10 bg-[#12141a] px-3 py-2 text-xs text-white outline-none focus:border-cyan-400 disabled:opacity-50"
                        >
                          {STATUSES.map((status) => (
                            <option key={status} value={status}>{STATUS_LABELS[status]}</option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-slate-400">{formatDate(lead.created_at)}</td>
                    <td className="px-4 py-4">
                      <Link to={`/admin/leads/${lead.id}`} className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-400/10">
                        Подробнее
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!data.items.length && (
            <div className="p-8 text-center text-slate-400">Заявок по текущим фильтрам нет.</div>
          )}

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 p-4 sm:flex-row">
            <div className="text-sm text-slate-400">
              Всего: {data.total}. Страница {data.page} из {Math.max(data.pages, 1)}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={filters.page <= 1}
                onClick={() => updateFilter('page', filters.page - 1)}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Назад
              </button>
              <button
                type="button"
                disabled={!data.pages || filters.page >= data.pages}
                onClick={() => updateFilter('page', filters.page + 1)}
                className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Вперёд
              </button>
            </div>
          </div>
        </AdminCard>
      )}
    </div>
  );
}
