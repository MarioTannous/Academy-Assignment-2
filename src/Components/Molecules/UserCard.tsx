import { useState } from 'react';
import { Avatar } from '../Atoms/Avatar';
import { Button } from '../Atoms/Button';
import { useNavigate } from 'react-router-dom';
import { ConfirmationModal } from './ConfirmationSetup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteUser } from '../../services/userService';

export type User = {
  id: number;
  firstName: string;
  lastName?: string;
  email: string;
  status: string;
  dateOfBirth: string;
};

export const UserCard = ({ user }: { user: User }) => {
  const navigate = useNavigate(); 
  const initials = `${user.firstName[0]}${user.lastName?.[0] || ''}`;
  const handleEdit = () => {
    navigate(`/dashboard/edit/${user.id}`); 
  };
  const queryClient = useQueryClient();
  const [isModalOpen, setModalOpen] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: async () => {
      return deleteUser(user.id.toString()); 
    },
    onSuccess: () => {
      toast.success('User deleted successfully!');
      queryClient.invalidateQueries({ queryKey: ['users'] }); 
    },
    onError: () => {
      toast.error('Failed to delete user. Please try again.');
    },
  });

  const handleDelete = () => {
    setModalOpen(true);
  };

  const confirmDelete = () => {
    setModalOpen(false);
    deleteMutation.mutate();
  };
  return (
    <div className="card"style={{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
    }}>
      <Avatar initials={initials} />
      <div className="w-full text-left">
        <h2 className="font-bold text-lg mt-2">{user.firstName} {user.lastName || ''}</h2>
        <div className="text-gray-400">
          <p>Email: {user.email}</p>
          <p>Status: <span className={user.status}>{user.status}</span></p>
          <p>Date of Birth: {user.dateOfBirth}</p>
        </div>
      </div>
      <div className="mt-2 space-x-2 w-full text-right">
        <Button variant="edit" onClick={handleEdit}>Edit</Button>
        <Button variant="delete" onClick={handleDelete}>Delete</Button>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete ${user.firstName} ${user.lastName || ''}?`}
      />
    </div>
  );
};
