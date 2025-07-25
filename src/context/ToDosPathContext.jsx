import { useState, useEffect, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { useToDos } from './ToDosContext';

const ToDosPathContext = createContext();

export function ToDosPathProvider({ children }) {
  const location = useLocation();
  const { allToDos, activeToDos, completedToDos } = useToDos();
  const [currentPath, setCurrentPath] = useState('');
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const path = location.pathname;

    if (path === '/sign-in') {
      setCurrentPath('sign-in');
      setToDos([]);
    } else if (path === '/forget-password') {
      setCurrentPath('forget-password');
      setToDos([]);
    } else if (path === '/reset-password') {
      setCurrentPath('reset-password');
      setToDos([]);
    } else if (path === '/sign-up') {
      setCurrentPath('sign-up');
      setToDos([]);
    } else if (path === '/all') {
      setCurrentPath('all');
      setToDos(allToDos);
    } else if (path === '/active') {
      setCurrentPath('active');
      setToDos(activeToDos);
    } else if (path === '/completed') {
      setCurrentPath('completed');
      setToDos(completedToDos);
    } else if (path === '/profile') {
      setCurrentPath('profile');
      setToDos([]);
    } else {
      setCurrentPath('not-found');
      setToDos([]);
    }
  }, [location, allToDos, activeToDos, completedToDos]);

  const clearToDosPath = () => {
    setCurrentPath('');
    setToDos([]);
  };

  return (
    <ToDosPathContext.Provider
      value={{ toDos, setToDos, currentPath, clearToDosPath }}>
      {children}
    </ToDosPathContext.Provider>
  );
}

export function useToDosPath() {
  return useContext(ToDosPathContext);
}
