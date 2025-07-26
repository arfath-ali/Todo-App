import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useUserProfile } from '/src/context/UserProfileContext';
import { useToDos } from '/src/context/ToDosContext';
import { useToDosPath } from '/src/context/ToDosPathContext';

import axiosInstance from '/src/services/api.js';

const ToDoInput = ({ windowWidth }) => {
  const { allToDos, setUpdatedToDos } = useToDos();
  const { currentPath } = useToDosPath();
  const { userProfile, isSignedIn } = useUserProfile();
  const email = userProfile?.email;
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addToDo = async () => {
    if (!isSignedIn) {
      alert('Please sign in to add a ToDo.');
      return;
    }

    if (input.trim() === '') return;

    const newToDo = {
      toDoId: uuidv4(),
      toDo: input,
      isChecked: false,
      createdAt: Date.now(),
    };

    setUpdatedToDos((prev) => [...prev, newToDo]);

    const data = JSON.stringify({
      email,
      newToDo,
      index: allToDos.length,
    });

    axiosInstance
      .post('/api/create-todo-list', {
        email,
        newToDo,
        index: allToDos.length,
      })
      .catch(() => {
        if (navigator.sendBeacon) {
          const blob = new Blob([data], { type: 'application/json' });
          navigator.sendBeacon('/api/create-todo-list', blob);
        }
      });

    setInput('');
  };

  return (
    <div
      className={`bg-white dark:bg-gray-900 ${currentPath === 'all' ? 'flex' : 'hidden'} ${windowWidth < 375 ? 'flex-col items-end justify-center gap-2' : 'flex-row items-center justify-between'} app-text-medium rounded-[5px] px-5 py-[0.875rem]`}>
      <div className="flex items-center gap-3">
        <div className="desktop:h-6 desktop:w-6 box-border h-5 w-5 rounded-full border-1 border-gray-300 dark:border-gray-700"></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="w-[12.5rem] max-w-[12.5rem] outline-none placeholder:text-black placeholder:opacity-40 hover:cursor-pointer dark:placeholder:text-gray-400"
          onChange={handleInput}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addToDo();
            }
          }}
          value={input}
        />
      </div>
      <button
        className="button-gradient rounded-[5px] p-1 font-bold hover:cursor-pointer dark:text-black"
        onClick={() => addToDo()}>
        Create
      </button>
    </div>
  );
};

export default ToDoInput;
