import React, { useState, useEffect } from 'react';
import SearchBar from '../Molecules/SearchBar';
import UserCard from '../Molecules/UserCard';
import { useStore } from '../../store/store'; 
import '../../App.css';

const UserManagement: React.FC = () => {
  type User = {
    id: string;
    userInitial: string;
    firstName: string;
    lastName?: string;
    email: string;
    status: 'ACTIVE' | 'LOCKED';
    dob: string;
  }

  const [users, setUsers] = useState<User[]>([]); 
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); 
  const accessToken = useStore((state) => state.accessToken); 

  const handleSearch = async () => {
    setLoading(true); 
    try {
      const response = await fetch(`/api/users?search=${search}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data.result.data.users); 
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    
    handleSearch();
  }, [accessToken]); 

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-transparent">
        <p className="text-black dark:text-white">Loading...</p>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="user-management-container">
        <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-black dark:text-white">No users found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="user-management-container">
      <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <div className="grids">
        {users.map((user) => (
          <UserCard key={user.id} user={{ ...user, lastName: user.lastName || '' }} />
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
