import React from 'react';
import '../../App.css'; 

interface AvatarProps {
  initials: string;
}

const Avatar: React.FC<AvatarProps> = ({ initials }) => {
  return (
    <div className="avatar">
      {initials}
    </div>
  );
};

export default Avatar;
