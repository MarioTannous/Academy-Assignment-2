import React from 'react';
import Navbar from './Components/Navbar';
import UserManagement from './Components/UserManagement';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <UserManagement />
    </div>
  );
};

export default App;
