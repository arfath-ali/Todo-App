import { useState, useEffect, createContext, useContext } from 'react';
import { useUserProfile } from './UserProfileContext';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const { isSignedIn } = useUserProfile() || {};

  const getInitialTheme = () => {
    if (!isSignedIn && document.documentElement.classList.contains('dark')) {
      return 'dark';
    }

    const userTheme = localStorage.getItem('color-theme') || 'light';
    return userTheme;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      if (isSignedIn) localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      if (isSignedIn) localStorage.setItem('color-theme', 'light');
    }
  }, [theme, isSignedIn]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const clearTheme = () => setTheme('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, clearTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
