import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { ReactNode } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAuthStore((state) => state.accessToken);
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
 