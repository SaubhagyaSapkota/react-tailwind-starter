import { loginUser } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';

interface LoginResponse {
  token: string;
}
export const useLogin = () =>
  useMutation<LoginResponse, Error, any>({
    mutationFn: loginUser,
    onSuccess: data => {
      localStorage.setItem('token', data.token);
      // eslint-disable-next-line no-console
      console.log(data);
    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  });
