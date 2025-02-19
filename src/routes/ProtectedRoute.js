import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useContext(AuthContext);

  // Если нет пользователя — перекидываем на логин
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Если указаны allowedRoles и роль пользователя не входит в список, отказываем в доступе
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <h2>У вас нет доступа к этой странице</h2>;
    // Либо можно сделать <Navigate to="/dashboard" />
  }

  // Иначе рендерим дочерний компонент
  return children;
}

export default ProtectedRoute;
