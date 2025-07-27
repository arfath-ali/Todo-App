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
  const [reorderedToDoList, setReorderedToDoList] = useState({
    list: [],
    path: '',
  });
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

      const all = getOrderedList(toDoOrder.allToDos || []);
      const active = getOrderedList(toDoOrder.activeToDos || []);
      const completed = getOrderedList(toDoOrder.completedToDos || []);

      setAllToDos(all);
      setActiveToDos(active);
      setCompletedToDos(completed);
    } catch (error) {
      console.log('Error during fetching todos: ', error);
    } finally {
      setIsFetchingToDos(false);
    }
  };

  useEffect(() => {
    const updatedMap = new Map(updatedToDos.map((toDo) => [toDo.toDoId, toDo]));

    setAllToDos([...updatedToDos]);

    setActiveToDos((prev) => [
      ...prev.filter(
        (toDo) =>
          updatedMap.has(toDo.toDoId) && !updatedMap.get(toDo.toDoId).isChecked,
      ),
      ...updatedToDos.filter(
        (toDo) =>
          !prev.find((p) => p.toDoId === toDo.toDoId) && !toDo.isChecked,
      ),
    ]);

    setCompletedToDos((prev) => [
      ...prev.filter(
        (toDo) =>
          updatedMap.has(toDo.toDoId) && updatedMap.get(toDo.toDoId).isChecked,
      ),
      ...updatedToDos.filter(
        (toDo) => !prev.find((p) => p.toDoId === toDo.toDoId) && toDo.isChecked,
      ),
    ]);
  }, [updatedToDos]);

  useEffect(() => {
    const { list, path } = reorderedToDoList;

    if (path === 'all') setAllToDos([...list]);
    else if (path === 'active') setActiveToDos([...list]);
    else if (path === 'completed') setCompletedToDos([...list]);
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
