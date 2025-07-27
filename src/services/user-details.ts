// services/auth.ts
import { apiClient } from '@/lib/api-client';
import type { UserProfile } from '@/types/services/auth.types';

export const fetchUserProfile = async (): Promise<UserProfile> => {
  const response = await apiClient.get('/api/auth/profile');
  return response.data;
};
