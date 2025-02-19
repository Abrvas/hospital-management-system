// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
// Импортируем иконки из react-icons (пример)
import { FaUserMd, FaCashRegister, FaUserTie, FaUserShield, FaHome } from 'react-icons/fa';
import './NavBar.css'; // Подключим стили

function NavBar() {
  return (
    <nav className="navbar">
      {/* Пример ссылок: меняй на свой вкус */}
      <Link to="/">
        <FaHome className="icon" />
        Login
      </Link>
      <Link to="/dashboard">
        <FaUserShield className="icon" />
        Dashboard
      </Link>
      <Link to="/doctor">
        <FaUserMd className="icon" />
        Doctor
      </Link>
      <Link to="/cashier">
        <FaCashRegister className="icon" />
        Cashier
      </Link>
      <Link to="/director">
        <FaUserTie className="icon" />
        Director
      </Link>
    </nav>
  );
}

export default NavBar;
