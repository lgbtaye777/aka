import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { clearAdminToken, getMe } from '../../api/adminApi.js';

const navLinkClass = ({ isActive }) =>
  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
    isActive
      ? 'bg-cyan-400/12 text-cyan-200 ring-1 ring-cyan-400/25'
      : 'text-slate-300 hover:bg-white/5 hover:text-white'
  }`;

export default function AdminLayout() {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let active = true;
    getMe()
      .then((data) => {
        if (active) setAdmin(data);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const logout = () => {
    clearAdminToken();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-pattern opacity-70" />
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <aside className="border-b border-white/10 bg-[#0b0c10]/85 p-4 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r lg:p-6">
          <div className="mb-6 flex items-center justify-between gap-4 lg:mb-10 lg:block">
            <div>
              <div className="font-display text-xl font-bold tracking-tight">AKA Admin</div>
              <div className="mt-1 text-xs text-slate-400">{admin?.username || 'admin'}</div>
            </div>
            <button
              type="button"
              onClick={logout}
              className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-rose-300/30 hover:bg-rose-400/10 hover:text-rose-100 lg:hidden"
            >
              Выйти
            </button>
          </div>

          <nav className="grid gap-2 sm:grid-cols-4 lg:grid-cols-1">
            <NavLink to="/admin" end className={navLinkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/admin/leads" className={navLinkClass}>
              Leads
            </NavLink>
            <NavLink to="/admin/analytics" className={navLinkClass}>
              Analytics
            </NavLink>
            <a href="/" className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/5 hover:text-white">
              Back to site
            </a>
          </nav>

          <button
            type="button"
            onClick={logout}
            className="mt-8 hidden w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-rose-300/30 hover:bg-rose-400/10 hover:text-rose-100 lg:block"
          >
            Logout
          </button>
        </aside>

        <main className="w-full min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
