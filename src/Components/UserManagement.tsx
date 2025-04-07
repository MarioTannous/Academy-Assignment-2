import React from 'react';
import UserCard from './UserCard';
import SearchBar from './SearchBar';

interface User {
  userInitial: string;
  firstName: string;
  lastName: string;
  email: string;
  status: 'active' | 'locked';
  dob: string;
}

const UserManagement: React.FC = () => {

const users: User[] = [
  {
    userInitial: 'JD',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    status: 'active',
    dob: '1990-05-15',
  },
  {
    userInitial: 'JS',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    status: 'locked',
    dob: '1988-10-22',
  },
  {
    userInitial: 'AJ',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    status: 'active',
    dob: '1995-02-10',
  },
  {
    userInitial: 'B',
    firstName: 'Bob',
    lastName: '',
    email: 'bob.martin@example.com',
    status: 'locked',
    dob: '1980-08-05',
  },
  {
    userInitial: 'CB',
    firstName: 'Charlie',
    lastName: 'Brown',
    email: 'charlie.brown@example.com',
    status: 'active',
    dob: '1992-11-30',
  },
  {
    userInitial: 'DL',
    firstName: 'David',
    lastName: 'Lee',
    email: 'david.lee@example.com',
    status: 'locked',
    dob: '1987-07-14',
  },
  {
    userInitial: 'E',
    firstName: 'Eve',
    lastName: '',
    email: 'eve.green@example.com',
    status: 'active',
    dob: '1993-09-21',
  },
  {
    userInitial: 'FW',
    firstName: 'Frank',
    lastName: 'White',
    email: 'frank.white@example.com',
    status: 'active',
    dob: '1994-01-25',
  },
  {
    userInitial: 'GB',
    firstName: 'Grace',
    lastName: 'Black',
    email: 'grace.black@example.com',
    status: 'locked',
    dob: '1985-03-17',
  },
  {
    userInitial: 'H',
    firstName: 'Hannah',
    lastName: '',
    email: 'hannah.purple@example.com',
    status: 'active',
    dob: '1996-12-03',
  },
];

return (
  <div className="p-6">
    
    <div className="flex justify-left mb-8">
      <SearchBar />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  </div>
  );
};
export default UserManagement;
