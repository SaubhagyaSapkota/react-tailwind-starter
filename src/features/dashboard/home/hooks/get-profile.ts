// hooks/useUserProfile.ts
import { fetchUserProfile } from '@/services/user-details';
import type { UserProfile } from '@/types/services/auth.types';
import { useQuery } from '@tanstack/react-query';

export const useUserProfile = () =>
  useQuery<UserProfile, Error>({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
  });
