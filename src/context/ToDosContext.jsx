import { useState, useEffect, createContext, useContext } from 'react';

import { useUserProfile } from './UserProfileContext';

import axiosInstance from '../services/api.js';

const ToDosContext = createContext();

export function ToDosProvider({ children }) {
  const { userProfile } = useUserProfile() || {};
  const email = userProfile?.email;

  const [allToDos, setAllToDos] = useState([]);
  const [activeToDos, setActiveToDos] = useState([]);
  const [completedToDos, setCompletedToDos] = useState([]);

  const fetchToDoList = async () => {
    const toDoOrderRes = await axiosInstance.post('/api/get-todo-order', {
      email,
    });
    const toDoListRes = await axiosInstance.post('/api/get-todo-list', {
      email,
    });

    const toDoOrder = toDoOrderRes.data?.result || {};
    const toDoList = toDoListRes.data?.result || [];

    const idToToDoMap = new Map(toDoList.map((toDo) => [toDo.toDoId, toDo]));

    const getOrderedList = (ids) =>
      (ids || []).map((id) => idToToDoMap.get(id)).filter(Boolean);

    setAllToDos(getOrderedList((toDoOrder.allToDos || []).map((id) => id)));
    setActiveToDos(
      getOrderedList((toDoOrder.activeToDos || []).map((id) => id)),
    );
    setCompletedToDos(
      getOrderedList((toDoOrder.completedToDos || []).map((id) => id)),
    );
  };

  function clearToDos() {
    setAllToDos([]);
    setActiveToDos([]);
    setCompletedToDos([]);
  }

  useEffect(() => {
    if (!email) return;

    fetchToDoList();
  }, [email]);

  return (
    <ToDosContext.Provider
      value={{
        allToDos,
        setAllToDos,
        activeToDos,
        setActiveToDos,
        completedToDos,
        setCompletedToDos,
        fetchToDoList,
        clearToDos,
      }}>
      {children}
    </ToDosContext.Provider>
  );
}

export function useToDos() {
  return useContext(ToDosContext);
}
