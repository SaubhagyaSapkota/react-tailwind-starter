import { apiClient } from '@/lib/api-client';
import type { userLoginPayload, userRegisterPayload } from '@/types/services/auth.types';

export const registerUser = async (userData: userRegisterPayload) => {
  const response = await apiClient.post(`/api/auth/register`, userData);
  return response.data;
};

export const loginUser = async (userData: userLoginPayload) => {
  const response = await apiClient.post(`/api/auth/login`, userData);
  return response.data;
};
