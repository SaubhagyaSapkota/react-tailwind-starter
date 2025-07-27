export type UserRole = 'admin' | 'user' | 'guest';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
}

export interface userRegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface userLoginPayload {
  email: string;
  password: string;
}
