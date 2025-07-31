import { useState, useEffect, createContext, useContext } from 'react';

import { useUserProfile } from './UserProfileContext';

import axiosInstance from '/src/services/api.js';

const TodosContext = createContext();

export function TodosProvider({ children }) {
  const { userProfile } = useUserProfile() || {};
  const email = userProfile?.email;

  const [todoOrder, setTodoOrder] = useState({
    allTodos: [],
    activeTodos: [],
    completedTodos: [],
  });

  const [todos, setTodos] = useState([]);

  const [allTodos, setAllTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [reorderedTodoList, setReorderedTodoList] = useState({
    list: [],
    path: '',
  });
  const [isFetchingTodos, setIsFetchingTodos] = useState(false);

  const fetchTodoList = async () => {
    setIsFetchingTodos(true);
    try {
      const todoOrderRes = await axiosInstance.post('/api/get-todo-order', {
        email,
      });
      const todoListRes = await axiosInstance.post('/api/get-todo-list', {
        email,
      });

      const todoOrderDoc = todoOrderRes.data?.result || {};
      const todosDoc = todoListRes.data?.result || [];

      setTodoOrder(todoOrderDoc);
      setTodos(todosDoc);
    } catch (error) {
      console.log('Error during fetching todos: ', error);
    } finally {
      setIsFetchingTodos(false);
    }
  };

  useEffect(() => {
    const idToTodoMap = new Map(todos.map((todo) => [todo.todoId, todo]));

    const getOrderedList = (ids) =>
      (ids || []).map((id) => idToTodoMap.get(id)).filter(Boolean);

    setAllTodos(getOrderedList(todoOrder.allTodos || []));
    setActiveTodos(getOrderedList(todoOrder.activeTodos || []));
    setCompletedTodos(getOrderedList(todoOrder.completedTodos || []));
  }, [todos, todoOrder]);

  useEffect(() => {
    setAllTodos(reorderedTodoList);
  }, [reorderedTodoList]);

  useEffect(() => {
    if (!email) return;

    fetchTodoList();
  }, [email]);

  function clearTodos() {
    setAllTodos([]);
    setActiveTodos([]);
    setCompletedTodos([]);
    setReorderedTodoList([]);
  }

  return (
    <TodosContext.Provider
      value={{
        todoOrder,
        setTodoOrder,
        todos,
        setTodos,
        allTodos,
        setAllTodos,
        activeTodos,
        setActiveTodos,
        completedTodos,
        setCompletedTodos,
        fetchTodoList,
        setReorderedTodoList,
        isFetchingTodos,
        clearTodos,
      }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodosContext);
}
