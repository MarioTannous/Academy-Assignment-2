import React from 'react';
import '../../App.css';

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch?: () => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <button 
      onClick={handleSearch} 
      className="search-btns">Search</button>
    </div>
  );
};

export default SearchBar;