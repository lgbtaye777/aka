import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getAdminToken, login, setAdminToken } from '../../api/adminApi.js';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  if (getAdminToken()) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await login(username, password);
      setAdminToken(data.access_token);
      navigate(location.state?.from?.pathname || '/admin', { replace: true });
    } catch (err) {
      setError(err.message === 'Unauthorized' ? 'Неверный логин или пароль' : err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-pattern opacity-80" />
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[rgba(18,20,26,.78)] p-6 shadow-[0_25px_80px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-8">
          <a href="/" className="mb-8 inline-flex text-sm font-semibold text-cyan-300 hover:text-white">
            ← Вернуться на сайт
          </a>
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Admin panel</p>
            <h1 className="font-display text-3xl font-bold">Вход администратора</h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">Доступ к заявкам, статусам и аналитике AKA Technology.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Username</span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400"
                autoComplete="username"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-300">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400"
                autoComplete="current-password"
                required
              />
            </label>

            {error && (
              <div className="rounded-xl border border-rose-400/20 bg-rose-950/30 px-4 py-3 text-sm text-rose-100">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-base btn-accent mt-2 min-h-[52px] rounded-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Входим...' : 'Войти'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
