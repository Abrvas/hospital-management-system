// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import NavBar from './components/NavBar'; // Импортируем NavBar

// Импортируем страницы
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import DoctorDashboard from './pages/DoctorDashboard';
import CashierDashboard from './pages/CashierDashboard';
import DirectorDashboard from './pages/DirectorDashboard';

// Импортируем защищенный маршрут
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Добавляем навигационную панель */}
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctor"
            element={
              <ProtectedRoute allowedRoles={['doctor', 'admin']}>
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cashier"
            element={
              <ProtectedRoute allowedRoles={['cashier', 'admin']}>
                <CashierDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/director"
            element={
              <ProtectedRoute allowedRoles={['director', 'admin']}>
                <DirectorDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<h2>Страница не найдена</h2>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
