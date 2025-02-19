import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h2>Дашборд</h2>
      <p>Добро пожаловать, {user?.username}! Ваша роль: {user?.role}</p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}

export default DashboardPage;
