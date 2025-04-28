import React, { useState, useEffect } from 'react';
import LoginInput from '../atoms/LoginInput';
import PasswordInput from '../molecules/PasswordInput';
import { Button } from '../atoms/Button';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../services/authService';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const accessToken = useAuthStore((state) => state.accessToken); 
  const { mutate } = useLogin();

  
  useEffect(() => {
    if (accessToken) {
      navigate('/dashboard');
    }
  }, [accessToken, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    mutate({ email, password }, {
      onSuccess: (data) => {
        const { accessToken, expiresIn } = data.result.data;
        setAuth(accessToken, expiresIn);
        navigate('/dashboard');
        console.log('Login successful:', data);
      },
      onError: (error) => {
        console.error('Login failed:', error);
        setError('Invalid credentials');
      },
      onSettled: () => {
        setLoading(false);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="error-message">{error}</div>}
      <LoginInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="text-center">
        <Button variant="login" type="submit" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;