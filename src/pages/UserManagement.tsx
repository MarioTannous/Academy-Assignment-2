import { useState } from 'react';
import { Navbar } from '../Components/organisms/Navbar';
import { Input } from '../Components/Atoms/Input';
import { UserGrid } from '../Components/organisms/UserGrid';
import { Button } from '../Components/Atoms/Button';

const UserManagement = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setQuery(search.trim());
  };

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="p-4 flex items-center gap-2 w-full max-w-sm">
        <Input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <UserGrid search={query} />
    </div>
  );
};

export default UserManagement; 
