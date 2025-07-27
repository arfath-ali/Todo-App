import axiosInstance from '../services/api.js';

export default async function deleteAccount(
  email,
  username,
  navigate,
  clearAllUserData,
) {
  try {
    const response = await axiosInstance.post('/api/delete-account', {
      email,
      username,
    });
    clearAllUserData();
    sessionStorage.clear();
    localStorage.clear();

    if (response.status === 200) {
      navigate('/sign-in', {
        state: { message: 'Account deleted successfully' },
      });
      return '';
    } else {
      return response.data?.error || 'Failed to delete account';
    }
  } catch (error) {
    return error?.response?.data?.error || 'Something went wrong';
  }
}
