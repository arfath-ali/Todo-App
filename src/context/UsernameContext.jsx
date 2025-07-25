import { createContext, useContext, useState, useEffect } from 'react';

import useDebounce from '../hooks/useDebounce.js';
import axiosInstance from '../services/api.js';

const UsernameContext = createContext();

export function UsernameProvider({ children }) {
  const [username, setUsername] = useState('');
  const [debouncedUsername, debouncedUsernameVersion] = useDebounce(
    username,
    1000,
  );

  const [isUsernameFieldFocused, setIsUsernameFieldFocused] = useState(true);

  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const [isSearchingUsername, setIsSearchingUsername] = useState(false);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);

  const [usernameStatus, setUsernameStatus] = useState('');

  useEffect(() => {
    if (username) {
      setIsUsernameAvailable(false);
      setUsernameStatus('');
      const regex = /^(?=.*\d)[a-z0-9_][a-z0-9_.]{1,}[a-z0-9_]$/;
      const usernameValidity = regex.test(username);
      setIsUsernameValid(usernameValidity);

      if (usernameValidity) setIsSearchingUsername(true);
    }
  }, [username]);

  useEffect(() => {
    const searchUsername = async () => {
      if (isUsernameValid && debouncedUsername) {
        try {
          const res = await axiosInstance.post('/api/check-username', {
            username: debouncedUsername,
          });

          setIsSearchingUsername(false);
          setIsUsernameAvailable(true);
          setUsernameStatus(res.data.message);
        } catch (error) {
          console.log(error);
          setIsSearchingUsername(false);
          setIsUsernameAvailable(false);
          setUsernameStatus(error.response.data.error);
        }
      } else {
        setIsSearchingUsername(false);
        setIsUsernameAvailable(false);
        setUsernameStatus('');
      }

      if (!isUsernameFieldFocused) {
        setUsernameStatus('');
      }
    };
    searchUsername();
  }, [debouncedUsernameVersion]);

  const clearUsername = () => {
    setUsername('');
    setIsUsernameFieldFocused(true);
    setIsUsernameValid(false);
    setIsSearchingUsername(false);
    setIsUsernameAvailable(false);
    setUsernameStatus('');
  };

  return (
    <UsernameContext.Provider
      value={{
        username,
        setUsername,
        isUsernameFieldFocused,
        setIsUsernameFieldFocused,
        isUsernameValid,
        isSearchingUsername,
        setIsSearchingUsername,
        isUsernameAvailable,
        setIsUsernameAvailable,
        usernameStatus,
        setUsernameStatus,
        clearUsername,
      }}>
      {children}
    </UsernameContext.Provider>
  );
}

export function useUsername() {
  return useContext(UsernameContext);
}
