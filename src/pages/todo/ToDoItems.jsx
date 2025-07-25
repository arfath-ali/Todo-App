import { useState, useEffect } from 'react';

import { useToDos } from '/src/context/ToDosContext.jsx';
import { useToDosPath } from '/src/context/ToDosPathContext.jsx';
import { useUserProfile } from '/src/context/UserProfileContext.jsx';

import axiosInstance from '/src/services/api.js';

import CreateToDoItem from './components/CreateToDoItem.jsx';

const TodoItems = () => {
  const { fetchToDoList } = useToDos();
  const { currentPath, toDos } = useToDosPath();
  const { userProfile } = useUserProfile();
  const email = userProfile?.email;

  const [draggedId, setDraggedId] = useState('');

  useEffect(() => {
    document.title = 'All ToDos – ToDo App';
  }, []);

  const handleDragAndDrop = async (droppedId) => {
    if (draggedId === null || draggedId === droppedId) return;
    try {
      await axiosInstance.post('/api/todos-reorder', {
        currentPath,
        email,
        draggedId,
        droppedId,
      });

      fetchToDoList();
      setDraggedId('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleToDoCheckedStatus = async (id) => {
    const updatedToDoList = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, isChecked: !toDo.isChecked } : toDo,
    );

    const updatedToDoItem = updatedToDoList.find((item) => item.toDoId === id);

    if (!updatedToDoItem) return;

    await axiosInstance.post('/api/update-todo-status', {
      email,
      toggledId: updatedToDoItem.toDoId,
      isChecked: !updatedToDoItem.isChecked,
    });

    fetchToDoList();
  };

  const handleClearToDoById = async (id) => {
    await axiosInstance.post('/api/delete-todo-item', {
      email,
      deletedId: id,
    });

    fetchToDoList();
  };

  return (
    <ul>
      {toDos.map((item, index) => (
        <CreateToDoItem
          key={index}
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
