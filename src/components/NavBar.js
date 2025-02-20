// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
// Импортируем иконки из react-icons
import { FaUserMd, FaCashRegister, FaUserTie, FaUserShield, FaHome } from 'react-icons/fa';
import './NavBar.css'; // Подключение стилей

function NavBar() {
  return (
    <nav className="navbar">
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
