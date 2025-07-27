export const ROUTES = {
  HOME: '/',
  AUTH: {
    BASE: '/auth',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  DASHBOARD: {
    BASE: '/dashboard',
    PROFILE: '/profile',
    SETTINGS: '/dashboard/settings',
  },
  ERROR: {
    INTERNAL_SERVER_ERROR: '/500',
  },
} as const;
