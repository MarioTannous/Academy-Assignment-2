import React from 'react';
import Navbar from '../Molecules/Navbar';
import UserManagement from '../Organisms/UserManagement';
import '../../App.css'
const Layout: React.FC = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <UserManagement />
    </div>
  );
};

export default Layout;
