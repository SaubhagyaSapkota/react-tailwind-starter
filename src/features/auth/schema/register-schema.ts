import * as z from 'zod';

export const registerSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .email({ message: 'Please enter a valid email' })
    .min(1, { message: 'Email is required' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  role: z.string(),
});

export type LoginFormData = z.infer<typeof registerSchema>;
