// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Контекст авторизации
import AuthProvider from './context/AuthContext';

// Навигационная панель
import NavBar from './components/NavBar';

// Страницы
import LandingPage from './pages/LandingPage';      // Лендинг страница
import LoginPage from './pages/LoginPage';          // Страница логина
import DashboardPage from './pages/DashboardPage';  // Общий дашборд
import DoctorDashboard from './pages/DoctorDashboard';
import CashierDashboard from './pages/CashierDashboard';
import DirectorDashboard from './pages/DirectorDashboard';

// Защищённый маршрут
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Навигация отображается на всех страницах */}
        <NavBar />
        <Routes>
          {/* Лендинг страница */}
          <Route path="/" element={<LandingPage />} />

          {/* Страница логина */}
          <Route path="/login" element={<LoginPage />} />

          {/* Общий дашборд (для всех авторизованных пользователей) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Дашборд для врача (доступен для ролей doctor и admin) */}
          <Route
            path="/doctor"
            element={
              <ProtectedRoute allowedRoles={['doctor', 'admin']}>
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />

          {/* Дашборд для кассира (доступен для ролей cashier и admin) */}
          <Route
            path="/cashier"
            element={
              <ProtectedRoute allowedRoles={['cashier', 'admin']}>
                <CashierDashboard />
              </ProtectedRoute>
            }
          />

          {/* Дашборд для директора (доступен для ролей director и admin) */}
          <Route
            path="/director"
            element={
              <ProtectedRoute allowedRoles={['director', 'admin']}>
                <DirectorDashboard />
              </ProtectedRoute>
            }
          />

          {/* Если маршрут не найден */}
          <Route path="*" element={<h2>Страница не найдена</h2>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
