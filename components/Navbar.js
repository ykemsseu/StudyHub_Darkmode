import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1>StudyHub</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
