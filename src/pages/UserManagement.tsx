import { useState } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Input } from '../components/atoms/Input';
import { UserGrid } from '../components/organisms/UserGrid';
import { Button } from '../components/atoms/Button';

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