import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import Login from './pages/Login';
import UserManagement from './pages/UserManagement';
import NotFound from './pages/NotFound';
import ProtectedRoute from './Components/ProtectedRoute';
import AddUser from './pages/AddUserView'; 
import EditUser from './pages/EditUserView'; 
import { useThemeStore } from './store/useThemeStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient(); 

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <UserManagement />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
    },
    {
      path: '/dashboard/new', 
      element: (
        <ProtectedRoute>
          <AddUser />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
    },
    {
      path: '/dashboard/edit/:id', 
      element: (
        <ProtectedRoute>
          <EditUser />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
