import { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../services/api.js';

const UserProfileContext = createContext();

export function UserProfileProvider({ children }) {
  const [userProfile, setUserProfile] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isUserProfileLoading, setIsUserProfileLoading] = useState(true);

  const fetchUserProfile = async () => {
    try {
      const res = await axiosInstance.get('/api/profile');
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const loadUserProfile = async () => {
    setIsUserProfileLoading(true);
    try {
      const data = await fetchUserProfile();

      if (data) {
        setUserProfile(data);
        setIsSignedIn(true);
        sessionStorage.setItem('wasSignedIn', 'true');
      } else {
        setUserProfile(null);
        setIsSignedIn(true);
        sessionStorage.removeItem('wasSignedIn');
      }
    } catch (err) {
      setUserProfile(null);
      setIsSignedIn(false);
    } finally {
      setIsUserProfileLoading(false);
    }
  };

  useEffect(() => {
    loadUserProfile();
  }, []);

  function clearUserProfile() {
    setUserProfile('');
    setIsSignedIn('');
  }

  return (
    <UserProfileContext.Provider
      value={{
        userProfile,
        isSignedIn,
        loadUserProfile,
        isUserProfileLoading,
        clearUserProfile,
      }}>
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfile() {
  return useContext(UserProfileContext);
}
