import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLead, updateLead } from '../../api/adminApi.js';
import { AdminCard, ErrorState, formatDate, LoadingState, STATUSES, STATUS_LABELS, StatusBadge } from '../../admin/adminUi.jsx';

const editableFields = [
  ['name', 'Имя'],
  ['email', 'Email'],
  ['company', 'Компания'],
  ['project_type', 'Тип проекта'],
  ['budget', 'Бюджет'],
];

export default function AdminLeadDetailsPage() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    getLead(id)
      .then((data) => {
        if (!active) return;
        setLead(data);
        setForm({
          name: data.name || '',
          email: data.email || '',
          company: data.company || '',
          message: data.message || '',
          project_type: data.project_type || '',
          budget: data.budget || '',
          status: data.status || 'new',
        });
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
  }, [id]);

  const setField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    setNotice('');
    try {
      const updated = await updateLead(id, form);
      setLead(updated);
      setForm({
        name: updated.name || '',
        email: updated.email || '',
        company: updated.company || '',
        message: updated.message || '',
        project_type: updated.project_type || '',
        budget: updated.budget || '',
        status: updated.status || 'new',
      });
      setNotice('Заявка сохранена.');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <LoadingState label="Загружаем заявку..." />;
  if (error && !lead) return <ErrorState message={error} />;

  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Link to="/admin/leads" className="mb-4 inline-flex text-sm font-semibold text-cyan-300 hover:text-white">
            ← Назад к списку
          </Link>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Lead #{lead.id}</p>
          <h1 className="font-display text-3xl font-bold">{lead.name}</h1>
        </div>
        <StatusBadge status={lead.status} />
      </div>

      {error && <ErrorState message={error} />}
      {notice && (
        <AdminCard className="border-emerald-300/20 bg-emerald-950/20 p-4 text-emerald-100">
          {notice}
        </AdminCard>
      )}

      <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
        <AdminCard className="p-5 sm:p-6">
          <form onSubmit={handleSave} className="grid gap-5">
            <div className="grid gap-4 md:grid-cols-2">
              {editableFields.map(([field, label]) => (
                <label key={field} className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-300">{label}</span>
                  <input
                    value={form[field]}
                    onChange={(event) => setField(field, event.target.value)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                    required={field === 'name' || field === 'email'}
                  />
                </label>
              ))}
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-slate-300">Статус</span>
                <select
                  value={form.status}
                  onChange={(event) => setField('status', event.target.value)}
                  className="rounded-xl border border-white/10 bg-[#12141a] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400"
                >
                  {STATUSES.map((status) => (
                    <option key={status} value={status}>{STATUS_LABELS[status]}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Сообщение</span>
              <textarea
                value={form.message}
                onChange={(event) => setField('message', event.target.value)}
                rows={8}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white outline-none focus:border-cyan-400"
                required
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" disabled={saving} className="btn-base btn-accent rounded-xl px-5 disabled:cursor-not-allowed disabled:opacity-60">
                {saving ? 'Сохраняем...' : 'Сохранить'}
              </button>
              <a href={`mailto:${lead.email}`} className="btn-base btn-secondary rounded-xl px-5">
                Написать клиенту
              </a>
            </div>
          </form>
        </AdminCard>

        <AdminCard className="p-5 sm:p-6">
          <h2 className="mb-5 font-display text-lg font-bold">Детали</h2>
          <dl className="grid gap-4 text-sm">
            <div className="rounded-xl border border-white/5 bg-white/[.03] p-4">
              <dt className="mb-1 text-slate-500">Email</dt>
              <dd><a href={`mailto:${lead.email}`} className="text-cyan-200 hover:text-white">{lead.email}</a></dd>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[.03] p-4">
              <dt className="mb-1 text-slate-500">Компания</dt>
              <dd className="text-slate-200">{lead.company || '—'}</dd>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[.03] p-4">
              <dt className="mb-1 text-slate-500">Создана</dt>
              <dd className="text-slate-200">{formatDate(lead.created_at)}</dd>
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[.03] p-4">
              <dt className="mb-1 text-slate-500">Обновлена</dt>
              <dd className="text-slate-200">{formatDate(lead.updated_at)}</dd>
            </div>
          </dl>
        </AdminCard>
      </div>
    </div>
  );
}
