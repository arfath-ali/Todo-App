import { useState, useEffect } from 'react';

import { useTodos } from '/src/context/TodosContext.jsx';
import { useTodosByPath } from '/src/context/TodosByPathContext.jsx';
import { useUserProfile } from '/src/context/UserProfileContext.jsx';

import axiosInstance from '/src/services/api.js';

import CreateTodoItem from './components/CreateTodoItem.jsx';

const TodoItems = () => {
  const { setTodoOrder, todos, setTodos, allTodos, setReorderedTodoList } =
    useTodos();
  const { currentPath, displayTodos } = useTodosByPath();
  const { userProfile } = useUserProfile();
  const email = userProfile?.email;

  const [draggedId, setDraggedId] = useState('');

  useEffect(() => {
    const pageName =
      currentPath.charAt(0).toUpperCase() + currentPath.slice(1).toLowerCase();
    document.title = [`${pageName} Todos – Todo App`];
  }, []);

  const handleDragAndDrop = (droppedId) => {
    if (draggedId === null || draggedId === droppedId) return;

    const currentTodosIds = allTodos.map((todo) => todo.todoId);

    const draggedIndex = currentTodosIds.findIndex((id) => id === draggedId);
    const droppedIndex = currentTodosIds.findIndex((id) => id === droppedId);

    if (draggedIndex === -1 || droppedIndex === -1) return;

    const updatedTodosIds = [...currentTodosIds];
    updatedTodosIds[draggedIndex] = droppedId;
    updatedTodosIds[droppedIndex] = draggedId;

    setTodoOrder((prev) => ({
      ...prev,
      allTodos: updatedTodosIds,
    }));

    const updatedTodoList = updatedTodosIds.map((id) =>
      displayTodos.find((todo) => todo.todoId === id),
    );

    setReorderedTodoList(updatedTodoList);

    const data = JSON.stringify({
      currentPath,
      email,
      draggedId,
      droppedId,
    });

    axiosInstance
      .post('/api/todos-reorder', {
        currentPath,
        email,
        draggedId,
        droppedId,
      })
      .catch(() => {
        if (navigator.sendBeacon) {
          const blob = new Blob([data], { type: 'application/json' });
          navigator.sendBeacon('/api/todos-reorder', blob);
        }
      });

    setDraggedId('');
  };

  const handleToggleTodoCheckedStatus = (toggledTodoId) => {
    const toggledTodoItem = todos.find((todo) => todo.todoId === toggledTodoId);
    const isChecked = !toggledTodoItem.isChecked;

    const sourceKey = isChecked ? 'active' : 'completed';
    const targetKey = isChecked ? 'completed' : 'active';

    setTodos((prev) =>
      prev.map((todo) =>
        todo.todoId === toggledTodoId
          ? { ...todo, isChecked: !todo.isChecked }
          : todo,
      ),
    );

    setTodoOrder((prev) => ({
      ...prev,
      [`${sourceKey}Todos`]: (prev[`${sourceKey}Todos`] || []).filter(
        (todoId) => todoId !== toggledTodoId,
      ),
      [`${targetKey}Todos`]: [
        ...(prev[`${targetKey}Todos`] || []),
        toggledTodoId,
      ],
    }));

    const data = JSON.stringify({
      email,
      toggledTodoId: toggledTodoItem.todoId,
      isChecked,
    });

    axiosInstance
      .post('/api/update-todo-status', {
        email,
        toggledTodoId: toggledTodoItem.todoId,
        isChecked,
      })
      .catch(() => {
        if (navigator.sendBeacon) {
          const blob = new Blob([data], { type: 'application/json' });
          navigator.sendBeacon('/api/update-todo-status', blob);
        }
      });
  };

  const handleClearTodoById = (deletedTodoId) => {
    const updatedTodos = todos.filter((todo) => todo.todoId !== deletedTodoId);

    setTodoOrder((prev) => {
      return {
        ...prev,
        allTodos: updatedTodos.map((todo) => todo.todoId) || [],
        activeTodos:
          updatedTodos
            .filter((todo) => !todo.isChecked)
            .map((todo) => todo.todoId) || [],
        completedTodos:
          updatedTodos
            .filter((todo) => todo.isChecked)
            .map((todo) => todo.todoId) || [],
      };
    });

    setTodos(updatedTodos);

    const data = JSON.stringify({
      email,
      deletedId: deletedTodoId,
    });

    axiosInstance
      .post('/api/delete-todo-item', {
        email,
        deletedId: deletedTodoId,
      })
      .catch(() => {
        if (navigator.sendBeacon) {
          const blob = new Blob([data], { type: 'application/json' });
          navigator.sendBeacon('/api/delete-todo-item', blob);
        }
      });
  };

  return (
    <ul>
      {Array.isArray(displayTodos) &&
        displayTodos.map((item) => (
          <CreateTodoItem
            currentPath={currentPath}
            key={item.todoId}
            input={item.todo}
            id={item.todoId}
            isChecked={item.isChecked}
            setDraggedId={setDraggedId}
            handleDrop={handleDragAndDrop}
            handleToggleTodoCheckedStatus={handleToggleTodoCheckedStatus}
            clearTodoById={handleClearTodoById}
          />
        ))}
    </ul>
  );
};

export default TodoItems;
