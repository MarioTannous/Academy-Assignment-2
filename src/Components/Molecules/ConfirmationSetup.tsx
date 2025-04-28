import React from 'react';
import { Button } from '../atoms/Button';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[var(--bg-color)] p-6 rounded shadow-lg w-full max-w-sm">
        <p className="text-center mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <Button variant="delete" onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="primary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}; 