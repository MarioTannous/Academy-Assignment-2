import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      try {
        const response = await axios.post('/api/login', { email, password });
        console.log('Login response:', response);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Login error:', error.response?.data || error.message);
          throw error;
        }
        console.error('Unexpected error:', error);
        throw new Error('An unexpected error occurred');
      }
    }
  });
}; 