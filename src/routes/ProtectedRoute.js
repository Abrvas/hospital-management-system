// src/routes/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useContext(AuthContext);

  // Если пользователь не авторизован, перенаправляем на лендинг (или страницу логина)
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Если указаны allowedRoles и роль пользователя не входит в список, показываем сообщение об отсутствии доступа
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <h2>У вас нет доступа к этой странице</h2>;
  }

  // Иначе рендерим дочерний компонент
  return children;
}

export default ProtectedRoute;
