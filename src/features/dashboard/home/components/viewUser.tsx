import { useUserProfile } from '../hooks/get-profile';

export const ProfilePage = () => {
  const { data: user, isLoading, isError, error } = useUserProfile();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
      {user?.gender && <p>Gender: {user.gender}</p>}
      {user?.address && <p>Address: {user.address}</p>}
      {user?.education && <p>Education: {user.education}</p>}
    </div>
  );
};
