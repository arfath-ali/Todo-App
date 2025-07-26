import { useState, useEffect } from 'react';

import { useToDos } from '/src/context/ToDosContext.jsx';
import { useToDosPath } from '/src/context/ToDosPathContext.jsx';
import { useUserProfile } from '/src/context/UserProfileContext.jsx';

import axiosInstance from '/src/services/api.js';

import CreateToDoItem from './components/CreateToDoItem.jsx';

const TodoItems = () => {
  const { setUpdatedToDos, setReorderedToDoList } = useToDos();
  const { currentPath, toDos } = useToDosPath();
  const { userProfile } = useUserProfile();
  const email = userProfile?.email;

  const [draggedId, setDraggedId] = useState('');

  let updatedToDoList, data;

  useEffect(() => {
    document.title = 'All ToDos – ToDo App';
  }, []);

  const handleDragAndDrop = (droppedId) => {
    if (draggedId === null || draggedId === droppedId) return;

    const currentToDosIds = toDos.map((toDo) => toDo.toDoId);

    const draggedIndex = currentToDosIds.findIndex((id) => id === draggedId);
    const droppedIndex = currentToDosIds.findIndex((id) => id === droppedId);

    if (draggedIndex === -1 || droppedIndex === -1) return;

    const updatedToDosIds = [...currentToDosIds];
    updatedToDosIds[draggedIndex] = droppedId;
    updatedToDosIds[droppedIndex] = draggedId;

    updatedToDoList = updatedToDosIds.map((id) =>
      toDos.find((toDo) => toDo.toDoId === id),
    );

    setReorderedToDoList({ list: updatedToDoList, path: currentPath });

    data = JSON.stringify({
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

  const handleToggleToDoCheckedStatus = (id) => {
    updatedToDoList = toDos.map((toDo) =>
      toDo.toDoId === id ? { ...toDo, isChecked: !toDo.isChecked } : toDo,
    );

    setUpdatedToDos(updatedToDoList);

    const updatedToDoItem = updatedToDoList.find((item) => item.toDoId === id);

    if (!updatedToDoItem) return;

    data = JSON.stringify({
      email,
      toggledId: updatedToDoItem.toDoId,
      isChecked: updatedToDoItem.isChecked,
    });

    axiosInstance
      .post('/api/update-todo-status', {
        email,
        toggledId: updatedToDoItem.toDoId,
        isChecked: updatedToDoItem.isChecked,
      })
      .catch(() => {
        if (navigator.sendBeacon) {
          const blob = new Blob([data], { type: 'application/json' });
          navigator.sendBeacon('/api/update-todo-status', blob);
        }
      });
  };

  const handleClearToDoById = (id) => {
    updatedToDoList = toDos.filter((toDo) => toDo.toDoId !== id);
    setUpdatedToDos(updatedToDoList);

    data = JSON.stringify({
      email,
      deletedId: id,
    });

    axiosInstance
      .post('/api/delete-todo-item', {
        email,
        deletedId: id,
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
      {toDos.map((item, index) => (
        <CreateToDoItem
          key={item.toDoId}
          input={item.toDo}
          id={item.toDoId}
          isChecked={item.isChecked}
          setDraggedId={setDraggedId}
          handleDrop={handleDragAndDrop}
          toggleToDoCheckedStatus={handleToggleToDoCheckedStatus}
          clearToDoById={handleClearToDoById}
        />
      ))}
    </ul>
  );
};

export default TodoItems;
