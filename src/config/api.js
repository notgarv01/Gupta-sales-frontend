const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173';

export const config = {
  API_URL,
  FRONTEND_URL
};

export default API_URL;
