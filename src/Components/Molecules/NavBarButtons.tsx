import { Button } from '../Atoms/Button';
import { useThemeStore } from '../../store/useThemeStore';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const NavButtons = () => {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setTheme('light');
    document.documentElement.classList.remove('dark');
    navigate('/login');
  };

  const newUser = () => {
    navigate('/dashboard/new'); 
  };

  return (
    <div className="space-x-3">
     <Button variant="primary" onClick={newUser} style={{ cursor: 'pointer' }}>Create User</Button>
      <Button variant="logout" onClick={handleLogout} style={{ cursor: 'pointer' }}>
        Logout
      </Button>
      <Button variant="icon" onClick={toggleTheme} style={{ cursor: 'pointer' }}>
          {theme === 'light' ? (
            <span className="label-light">🌙</span>
          ) : (
            <span className="label-dark">☀️</span>
          )}
      </Button>

    </div>
  );
};
