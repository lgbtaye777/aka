export const STATUSES = ['new', 'in_progress', 'contacted', 'done', 'rejected'];

export const STATUS_LABELS = {
  new: 'Новая',
  in_progress: 'В работе',
  contacted: 'Связались',
  done: 'Готово',
  rejected: 'Отклонена',
};

export const STATUS_BADGES = {
  new: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200',
  in_progress: 'border-amber-300/30 bg-amber-300/10 text-amber-100',
  contacted: 'border-blue-300/30 bg-blue-300/10 text-blue-100',
  done: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100',
  rejected: 'border-rose-300/30 bg-rose-300/10 text-rose-100',
};

export function StatusBadge({ status }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${STATUS_BADGES[status] || STATUS_BADGES.new}`}>
      {STATUS_LABELS[status] || status}
    </span>
  );
}

export function formatDate(value) {
  if (!value) return '—';
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

export function AdminCard({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-[rgba(18,20,26,.78)] shadow-[0_18px_50px_rgba(0,0,0,.28)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

export function LoadingState({ label = 'Загрузка данных...' }) {
  return (
    <AdminCard className="p-8 text-center text-slate-300">
      <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
      {label}
    </AdminCard>
  );
}

export function ErrorState({ message }) {
  return (
    <AdminCard className="border-rose-400/20 bg-rose-950/20 p-5 text-rose-100">
      {message || 'Что-то пошло не так. Попробуйте обновить страницу.'}
    </AdminCard>
  );
}
