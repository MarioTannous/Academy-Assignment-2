import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore, useThemeStore } from '../../store/store';
import '../../App.css'; 
const Navbar: React.FC = () => {

  const navigate = useNavigate();
  const { toggleTheme} = useThemeStore();

  const handleLogout = () => {
    useStore.getState().setAccessToken('');
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  return (
    <nav className="Navbar">
      <h1 className="h1">
        User Management
      </h1>

      <div className="Navbar-btns">
        <button
          className="create-btns"
          aria-label="Create User"
        >
          Create User
        </button>

        <button
          onClick={handleLogout}
          className="logout-btns"
          aria-label="Logout"
        >
          Logout
        </button>

        <button
          title="Toggle Theme"
          aria-label="Toggle theme"
          className="theme-toggle-btns"
          onClick={toggleTheme}
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather-moon"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
         
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
