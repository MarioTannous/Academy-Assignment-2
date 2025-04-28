import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';

export type User = {
  id: number;
  firstName: string;
  lastName?: string;
  email: string;
  status: string;
  dateOfBirth: string;
};

export type UsersResponse = {
  result: { 
    data: {
      users: User[];
    };
    message: string;
  };
  status: number;
};

export const getUsers = async (token: string, search: string = ''): Promise<UsersResponse> => {
  const url = search ? `/api/users?search=${search}` : `/api/users`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
    const token = useAuthStore.getState().accessToken; 
    if (!token) {
      throw new Error('No access token found');
    }
  
    const response = await axios.post('/api/users', user, {
      headers: {
        Authorization: `Bearer ${token}`, 
        'Content-Type': 'application/json',
      },
      validateStatus: (status) => status >= 200 && status < 300, 
    });
  
    return response.data.result.data.user; 
  };

  export const updateUser = async (id: string, updatedUser: Omit<User, 'id'>): Promise<User> => {
  const token = useAuthStore.getState().accessToken;
  if (!token) {
    throw new Error('No access token found');
  }

  const response = await axios.put(`/api/users/${id}`, updatedUser, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    validateStatus: (status) => status >= 200 && status < 300,
  });

  return response.data.result.data.user;
};


export const deleteUser = async (id: string): Promise<void> => {
  const token = useAuthStore.getState().accessToken;
  if (!token) {
    throw new Error('No access token found');
  }

  await axios.delete(`/api/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    validateStatus: (status) => status >= 200 && status < 300,
  });
};