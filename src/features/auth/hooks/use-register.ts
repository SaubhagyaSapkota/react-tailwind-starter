import { registerUser } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
export const useRegister = () =>
  useMutation({
    mutationFn: registerUser,
    onSuccess: data => {
      // eslint-disable-next-line no-console
      console.log(data);
    },
    onError: error => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  });
