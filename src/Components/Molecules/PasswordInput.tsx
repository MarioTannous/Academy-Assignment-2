import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          className="input pr-10"
          placeholder="Enter your password"
        />
         <Button
          variant="password"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="pass-toggle"

        >
          {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
        </Button>
      </div>
    </div>
  );
};

export default PasswordInput;
