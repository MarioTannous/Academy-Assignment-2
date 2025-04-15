import React from 'react';
import '../../App.css'; 

interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input"
      onChange={onChange}
    />
  );
};

export default Input;
