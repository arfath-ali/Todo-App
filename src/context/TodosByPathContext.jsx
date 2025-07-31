import { useState, useEffect, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { useTodos } from './TodosContext';

const TodosByPathContext = createContext();

export function TodosByPathProvider({ children }) {
  const location = useLocation();
  const { allTodos, activeTodos, completedTodos } = useTodos();
  const [currentPath, setCurrentPath] = useState('');
  const [displayTodos, setDisplayTodos] = useState([]);

  useEffect(() => {
    const path = location.pathname;

    if (path === '/sign-in') {
      setCurrentPath('sign-in');
      setDisplayTodos([]);
    } else if (path === '/forget-password') {
      setCurrentPath('forget-password');
      setDisplayTodos([]);
    } else if (path === '/reset-password') {
      setCurrentPath('reset-password');
      setDisplayTodos([]);
    } else if (path === '/sign-up') {
      setCurrentPath('sign-up');
      setDisplayTodos([]);
    } else if (path === '/all') {
      setCurrentPath('all');
      setDisplayTodos(allTodos);
    } else if (path === '/active') {
      setCurrentPath('active');
      setDisplayTodos(activeTodos);
    } else if (path === '/completed') {
      setCurrentPath('completed');
      setDisplayTodos(completedTodos);
    } else if (path === '/profile') {
      setCurrentPath('profile');
      setDisplayTodos([]);
    } else {
      setCurrentPath('not-found');
      setDisplayTodos([]);
    }
  }, [location, allTodos, activeTodos, completedTodos]);

  function clearTodosPath() {
    setDisplayTodos([]);
    setCurrentPath('');
  }

  return (
    <TodosByPathContext.Provider
      value={{
        displayTodos,
        setDisplayTodos,
        currentPath,
        clearTodosPath,
      }}>
      {children}
    </TodosByPathContext.Provider>
  );
}

export function useTodosByPath() {
  return useContext(TodosByPathContext);
}
