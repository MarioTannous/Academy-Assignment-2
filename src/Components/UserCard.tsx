import React from 'react';

interface UserCardProps {
  user: {
    userInitial: string;
    firstName: string;
    lastName: string;
    email: string;
    status: 'active' | 'locked';
    dob: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 
                    p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 
                    rounded-lg shadow-md flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6">
      
      
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full 
                      bg-[#3251D0] text-white text-xl sm:text-2xl font-bold">
        {user.userInitial}
      </div>

      
      <div className="w-full text-left">
        <p className="text-lg sm:text-xl font-semibold text-black mb-1 sm:mb-2">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-1">Email: {user.email}</p>
        <p className="text-sm sm:text-base text-gray-600 mb-1">Status: {user.status}</p>
        <p className="text-sm sm:text-base text-gray-600">Date of Birth: {user.dob}</p>
      </div>

      
      <div className="w-full flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          className="bg-[#3251D0] hover:bg-[#273ea6] text-white text-sm sm:text-base px-4 py-2 rounded-md"
          aria-label={`Edit ${user.firstName} ${user.lastName}`}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base px-4 py-2 rounded-md"
          aria-label={`Delete ${user.firstName} ${user.lastName}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
