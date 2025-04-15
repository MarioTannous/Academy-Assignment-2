import axios from 'axios';
import { useStore } from '../store/store'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setAccessToken = useStore((state) => state.setAccessToken); 

  const handleLogin = async () => {
    
    setError('');
    setLoading(true);
    
    if (!email) {
      setError('Email is required.');
      setLoading(false);
      return;
    }

   
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setLoading(false);
      return;
    }

   
    if (!password) {
      setError('Password is required.');
      setLoading(false);
      return;
    }

   
    try {
      const response = await axios.post('/api/login', { email, password });
      
     
      if (response.data.status === 200) {
        const { accessToken } = response.data.result.data;
        setAccessToken(accessToken);
        localStorage.setItem('accessToken', accessToken); 
        navigate('/dashboard'); 
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error(error); 
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <div className="login-container">
        <h2 className="login-h2">Login</h2>

        
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Email</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-email-input"
        />

        
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Password</h3>
        <div className="relative mb-6">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-password-input"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="login-password-toggle-btns"
          >
            {showPassword ? '🙈' : '👁️‍🗨️'}
          </button>
        </div>

        
        <button
          onClick={handleLogin}
          className="login-loading-btns"
          disabled={loading} 
        >
          {loading ? 'Logging...' : 'Login'}
        </button>
        
        {error && <p className="error-handling-message">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
