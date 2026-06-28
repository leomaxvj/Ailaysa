import axios from 'axios';

// Base Axios instance
const api = axios.create({
  baseURL: typeof window !== 'undefined' ? window.location.origin + '/api' : 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor skeleton
api.interceptors.request.use(
  (config) => {
    // Add token from localStorage or Redux state if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor skeleton
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Standard error handling, network error diagnostics
    const message = error.response?.data?.message || error.message || 'Something went wrong';
    console.error('[API Error]:', message);
    return Promise.reject(new Error(message));
  }
);

export default api;
