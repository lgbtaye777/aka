import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AdminProtectedRoute from './admin/AdminProtectedRoute.jsx';
import AdminLayout from './components/admin/AdminLayout.jsx';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage.jsx';
import AdminDashboardPage from './pages/admin/AdminDashboardPage.jsx';
import AdminLeadDetailsPage from './pages/admin/AdminLeadDetailsPage.jsx';
import AdminLeadsPage from './pages/admin/AdminLeadsPage.jsx';
import AdminLoginPage from './pages/admin/AdminLoginPage.jsx';
import LandingPage from './pages/LandingPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="analytics" element={<AdminAnalyticsPage />} />
            <Route path="leads" element={<AdminLeadsPage />} />
            <Route path="leads/:id" element={<AdminLeadDetailsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
