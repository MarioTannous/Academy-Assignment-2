import React from 'react';
import '../../App.css';

type User = {
  userInitial: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  dob: string;
}

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="cards">
      <div className="cards-Initial">{user.userInitial}</div>

      <div className="cards-info">
        <p className="cards-first-last-name">
          {user.firstName} {user.lastName}
        </p>
        <p className="cards-email">Email: {user.email}</p>
        <p className="cards-status">Status: {user.status}</p>
        <p className="cards-dob">Date of Birth: {user.dob}</p>
      </div>

      <div className="cards-btns">
        <button className="cards-edit-btns" aria-label={`Edit ${user.firstName} ${user.lastName}`}>
          Edit
        </button>
        <button className="cards-delete-btns" aria-label={`Delete ${user.firstName} ${user.lastName}`}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
