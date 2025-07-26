import { useUserProfile } from '/src/context/UserProfileContext';
import { useToDos } from '/src/context/ToDosContext';
import { useToDosPath } from '/src/context/ToDosPathContext';

import axiosInstance from '/src/services/api.js';

const ClearCompletedButton = ({ windowWidth }) => {
  const { allToDos, completedToDos, setUpdatedToDos } = useToDos();
  const { currentPath } = useToDosPath();
  const { userProfile } = useUserProfile();
  const email = userProfile?.email;

  const clearCompletedTasks = async () => {
    const remainingTasks = allToDos.filter((item) => !item.isChecked);
    const completedTasks = allToDos.filter((item) => item.isChecked);

    if (!completedTasks) return;

    setUpdatedToDos(remainingTasks);

    const completedTasksIds = completedTasks.map((task) => task.toDoId);

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
      className={`button-gradient dark:text-black ${currentPath === 'active' || completedToDos.length === 0 ? 'invisible' : 'block'} text-very-dark-blue app-text-medium rounded-[5px] p-1.5 font-bold hover:cursor-pointer`}
      onClick={clearCompletedTasks}>
      {windowWidth < 1440 ? 'Clear' : 'Clear Completed'}
    </button>
  );
};

export default ClearCompletedButton;
