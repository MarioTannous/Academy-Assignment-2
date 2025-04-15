import { Route, Routes, Navigate } from 'react-router-dom';
import { useStore } from './store/store'; 
import Login from './pages/Login';
import Layout from './Components/Templates/Layout';

const App: React.FC = () => {
  const accessToken = useStore((state) => state.accessToken); 
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={accessToken ? <Layout /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;