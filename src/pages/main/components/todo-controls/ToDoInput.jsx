import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useUserProfile } from '/src/context/UserProfileContext';
import { useTodos } from '/src/context/TodosContext';
import { useTodosByPath } from '/src/context/TodosByPathContext';

import axiosInstance from '/src/services/api.js';

const TodoInput = ({ windowWidth }) => {
  const { setTodoOrder, setTodos } = useTodos();
  const { currentPath } = useTodosByPath();
  const { userProfile, isSignedIn } = useUserProfile();
  const email = userProfile?.email;
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = async () => {
    if (!isSignedIn) {
      alert('Please sign in to add a Todo.');
      return;
    }

    if (input.trim() === '') return;

    const newTodo = {
      todoId: uuidv4(),
      todo: input,
      isChecked: false,
      createdAt: Date.now(),
      toggledIndexInActiveList: null,
      toggledIndexInCompletedList: null,
      toggledTimeInActiveList: null,
      toggledTimeInCompletedList: null,
    };

    setTodoOrder((prev) => ({
      ...prev,
      allTodos: [...(prev.allTodos || []), newTodo.todoId],
      activeTodos: [...(prev.activeTodos || []), newTodo.todoId],
    }));

    setTodos((prev) => [...(prev || []), newTodo]);

    const data = JSON.stringify({
      email,
      newTodo,
    });

    axiosInstance
      .post('/api/create-todo-list', {
        email,
        newTodo,
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
          className="tablet:w-[20.5rem] desktop:max-w-[24rem] desktop:w-[24rem] tablet:max-w-[20.5rem] w-[12.5rem] max-w-[12rem] outline-none placeholder:text-black placeholder:opacity-40 hover:cursor-pointer dark:placeholder:text-gray-400"
          onChange={handleInput}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
          value={input}
        />
      </div>
      <button
        className="button-gradient rounded-[5px] p-1 font-bold hover:cursor-pointer dark:text-black"
        onClick={() => addTodo()}>
        Create
      </button>
    </div>
  );
};

export default TodoInput;
