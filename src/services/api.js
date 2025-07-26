import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

let isRedirecting = false;

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401 && !isRedirecting) {
      const errorMessage = error.response.data?.error;
      const currentPath = window.location.pathname;
      const wasSignedIn = sessionStorage.getItem('wasSignedIn');
      if (
        errorMessage === 'Session expired' &&
        !currentPath.includes('/sign-in') &&
        !currentPath.includes('/sign-up') &&
        wasSignedIn
      ) {
        isRedirecting = true;
        alert('Session expired, please sign in again');
        window.location.replace('/sign-in');
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
