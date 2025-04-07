import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-6 px-2 sm:px-0">
      <input
        type="text"
        aria-label="Search users"
        className="w-full sm:w-64 md:w-80 lg:w-96 xl:w-[28rem] 
                   p-2 sm:p-2.5 md:p-3 rounded-md border border-gray-300 
                   bg-white shadow-sm text-sm sm:text-base md:text-base lg:text-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search users..."
      />
    </div>
  );
};

export default SearchBar;
