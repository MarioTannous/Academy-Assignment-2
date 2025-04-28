import { useQuery } from '@tanstack/react-query';
import { UserCard } from '../molecules/UserCard';
import { useAuthStore } from '../../store/useAuthStore';
import { getUsers, User } from '../../services/userService';

export const UserGrid = ({ search }: { search: string }) => {
  const token = useAuthStore((state) => state.accessToken);

 
  const { data, isLoading, isError, error } = useQuery(
    {
      queryKey: ['users', search], 
      queryFn: () => getUsers(token!, search), 
      enabled: !!token, 
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div className="text-red-600">{(error as Error).message}</div>;

  const users = data?.result?.data?.users || [];

  return (
    <div className="p-4">
      {users.length === 0 ? (
        <div className="no-results">No Results</div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
          {users.map((user: User) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};