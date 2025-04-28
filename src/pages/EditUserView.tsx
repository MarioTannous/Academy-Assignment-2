import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from '../Components/Atoms/Button';
import { Input } from '../Components/Atoms/Input';
import { User } from '../services/userService';
import { Navbar } from '../Components/organisms/Navbar';
import { updateUser } from '../services/userService';
import { useAuthStore } from '../store/useAuthStore';
import axios from 'axios';

const userSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().optional(),
  email: z.string().email('Invalid email address'),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)'),
  status: z.enum(['active', 'locked']),
});

type UserFormValues = z.infer<typeof userSchema>;

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<UserFormValues>({
    resolver: zodResolver(userSchema),
  });

  const { isLoading } = useQuery<User>({
    queryKey: ['user', id],
    queryFn: async () => {
      try {
        const token = useAuthStore.getState().accessToken;
        const response = await axios.get(`/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const user = response.data.result.data.user;
        setValue('firstName', user.firstName);
        setValue('lastName', user.lastName || '');
        setValue('email', user.email);
        setValue('dateOfBirth', user.dateOfBirth);
        setValue('status', user.status as 'active' | 'locked');
        return user;
      } catch (error) {
        toast.error('Failed to load user data. Please try again.');
        navigate('/dashboard');
        throw error;
      }
    },
  });

  const mutation = useMutation<User, Error, UserFormValues>({
    mutationFn: async (updatedUser) => {
      return updateUser(id!, updatedUser); 
    },
    onSuccess: () => {
      toast.success('User updated successfully!');
      navigate('/dashboard');
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        console.error('API Error:', error.response.data);
        toast.error(error.response.data.result?.message || 'Failed to update user. Please try again.');
      } else {
        console.error('Unexpected Error:', error);
        toast.error('An unexpected error occurred. Please try again.');
      }
    },
  });

  const onSubmit = (data: UserFormValues) => {
    mutation.mutate(data);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[var(--bg-color)] p-8 rounded shadow-lg w-full max-w-md space-y-4">
          <h2 className="text-xl font-bold text-center">Edit User</h2>
          <div>
            <label className="block text-sm font-medium text-[var(--text-color)]">First Name</label>
            <Input {...register('firstName')} />
            {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-color)]">Last Name (Optional)</label>
            <Input {...register('lastName')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-color)]">Email</label>
            <Input {...register('email')} />
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-color)]">Date of Birth</label>
            <Input type="date" {...register('dateOfBirth')} />
            {errors.dateOfBirth && <p className="text-red-600 text-sm">{errors.dateOfBirth.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-color)]">Status</label>
            <select {...register('status')} className="input bg-[var(--bg-color)]">
              <option value="active">Active</option>
              <option value="locked">Locked</option>
            </select>
            {errors.status && <p className="text-red-600 text-sm">{errors.status.message}</p>}
          </div>
          <div className="text-center">
            <Button type="submit" variant="edit" disabled={mutation.status === 'pending'}>
              {mutation.status === 'pending' ? 'Loading...' : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser; 
