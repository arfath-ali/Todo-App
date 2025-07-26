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
  const [updatedToDos, setUpdatedToDos] = useState([]);
  const [reorderedToDoList, setReorderedToDoList] = useState([]);
  const [isFetchingToDos, setIsFetchingToDos] = useState(false);

  const fetchToDoList = async () => {
    setIsFetchingToDos(true);
    try {
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
    } catch (error) {
      console.log('Error during fetching todos: ', error);
    } finally {
      setIsFetchingToDos(false);
    }
  };

  useEffect(() => {
    if (Array.isArray(updatedToDos) && updatedToDos.length > 0) {
      setAllToDos([...updatedToDos]);
      setActiveToDos([...updatedToDos.filter((toDo) => !toDo.isChecked)]);
      setCompletedToDos([...updatedToDos.filter((toDo) => toDo.isChecked)]);
    }
  }, [updatedToDos]);

  useEffect(() => {
    if (Array.isArray(reorderedToDoList) && reorderedToDoList.length > 0) {
      const { list, path } = reorderedToDoList;

      if (path === 'all') setAllToDos([...list]);
      else if (path === 'active') setActiveToDos([...list]);
      else if (path === 'completed') setCompletedToDos([...list]);
    }
  }, [reorderedToDoList]);

  useEffect(() => {
    if (!email) return;

    fetchToDoList();
  }, [email]);

  function clearToDos() {
    setAllToDos([]);
    setActiveToDos([]);
    setCompletedToDos([]);
    setUpdatedToDos([]);
    setReorderedToDoList([]);
  }

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
        setUpdatedToDos,
        setReorderedToDoList,
        isFetchingToDos,
        clearToDos,
      }}>
      {children}
    </ToDosContext.Provider>
  );
}

export function useToDos() {
  return useContext(ToDosContext);
}
