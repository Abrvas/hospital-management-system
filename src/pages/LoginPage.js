import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Вызываем login из AuthContext
    const success = login(username, password);

    if (success) {
      // Если логин успешен — переходим на /dashboard
      navigate('/dashboard');
    } else {
      alert('Неверный логин или пароль!');
    }
  };

  return (
    <div>
      <h1>Страница логина</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя пользователя: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
          />
        </div>
        <div>
          <label>Пароль: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123"
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;
