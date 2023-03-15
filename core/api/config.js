export const API_ROOT = process.env.SERVER_URI;

export const TIMEOUT = 15000;

export const API = {
  AUTH: {
    LOGIN: {
      EMAIL: '/customer/login',
    },
    // LOGOUT: '/visitor/logout',
    REGISTER: '/customer/register',
    // PASSWORD: {
    //   FORGOT: '/visitor/forgot-password',
    //   OTP: '/visitor/verify-otp',
    //   RESET: '/visitor/reset-password',
    // },
  },
};
