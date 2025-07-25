import axiosInstance from '../services/api.js';

export default async function signOut(navigate, clearAllUserData) {
  try {
    await axiosInstance.post('/api/sign-out');
    localStorage.clear();
    sessionStorage.clear();
    clearAllUserData();
    navigate('/sign-in');
    window.location.reload();
  } catch (err) {
    console.error('Failed to sign out', err);
  }
}
