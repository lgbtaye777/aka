import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getAdminToken } from '../api/adminApi.js';

export default function AdminProtectedRoute() {
  const location = useLocation();
  const token = getAdminToken();

  if (!token) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
