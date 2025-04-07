import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-[#3251D0] p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 m-0 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-0 border-l-0 border-r-0">
     
      <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold mb-2 sm:mb-0">
        User Management
      </h1>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6 w-full sm:w-auto">
        
        <button
          className="bg-white text-[#3251D0] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3 xl:px-8 xl:py-3 rounded-md cursor-pointer hover:bg-[#f0f9ff] focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-base md:text-base lg:text-lg xl:text-lg"
          aria-label="Create User"
        >
          Create User
        </button>

        
        <button
          className="bg-red-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3 xl:px-8 xl:py-3 rounded-md cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg"
          aria-label="Logout"
        >
          Logout
        </button>

        
        <button
          title="Toggle Theme"
          aria-label="Toggle theme"
          className="p-2 sm:p-3 md:p-3.5 lg:p-4 xl:p-4 text-white hover:text-gray-100 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-8 xl:h-8"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
