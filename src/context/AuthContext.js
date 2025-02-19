import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Функция логина — эмуляция нескольких ролей
  const login = (username, password) => {
    // Здесь набор тестовых учетных данных:
    if (username === 'admin' && password === '123') {
      setUser({ username, role: 'admin' });
      return true;
    } else if (username === 'doctor' && password === '111') {
      setUser({ username, role: 'doctor' });
      return true;
    } else if (username === 'cashier' && password === '222') {
      setUser({ username, role: 'cashier' });
      return true;
    } else if (username === 'director' && password === '333') {
      setUser({ username, role: 'director' });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
