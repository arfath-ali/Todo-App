import { useUserProfile } from '/src/context/UserProfileContext';
import { useTodos } from '/src/context/TodosContext';
import { useTodosByPath } from '/src/context/TodosByPathContext';

import axiosInstance from '/src/services/api.js';

const ClearCompletedButton = ({ windowWidth }) => {
  const { setTodos, allTodos, completedTodos, setTodoOrder } = useTodos();
  const { currentPath } = useTodosByPath();
  const { userProfile } = useUserProfile();
  const email = userProfile?.email;

  const clearCompletedTasks = () => {
    const remainingTasks = allTodos.filter((item) => !item.isChecked);
    const completedTasks = allTodos.filter((item) => item.isChecked);

    setTodos(remainingTasks);

    const remainingTasksIds = remainingTasks.map((task) => task.todoId);
    const completedTasksIds = completedTasks.map((task) => task.todoId);

    setTodoOrder((prev) => {
      return {
        ...prev,
        allTodos: remainingTasksIds || [],
        activeTodos: remainingTasksIds || [],
        completedTodos: [],
      };
    });

    const data = JSON.stringify({
      email,
      deletedId: completedTasksIds,
    });

    axiosInstance
      .post('/api/delete-todo-item', {
        email,
        deletedId: completedTasksIds,
      })
      .catch(() => {
        if (navigator.sendBeacon) {
          const blob = new Blob([data], { type: 'application/json' });
          navigator.sendBeacon('/api/delete-todo-item', blob);
        }
      });
  };
  return (
    <button
      className={`button-gradient dark:text-black ${currentPath === 'active' || completedTodos.length === 0 ? 'invisible' : 'block'} text-very-dark-blue app-text-medium rounded-[5px] p-1.5 font-bold hover:cursor-pointer`}
      onClick={clearCompletedTasks}>
      {windowWidth < 1440 ? 'Clear' : 'Clear Completed'}
    </button>
  );
};

export default ClearCompletedButton;
