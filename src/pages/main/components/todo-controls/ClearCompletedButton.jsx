import { useUserProfile } from '/src/context/UserProfileContext';
import { useToDos } from '/src/context/ToDosContext';
import { useToDosPath } from '/src/context/ToDosPathContext';

import axiosInstance from '/src/services/api.js';

const ClearCompletedButton = ({ windowWidth }) => {
  const { allToDos, completedToDos, fetchToDoList } = useToDos();
  const { currentPath } = useToDosPath();
  const { userProfile } = useUserProfile();
  const email = userProfile?.email;

  const clearCompletedTasks = async () => {
    const completedTasks = allToDos.filter((item) => item.isChecked);
    if (!completedTasks) return;

    const completedTasksIds = completedTasks.map((task) => task.toDoId);

    await axiosInstance.post('/api/delete-todo-item', {
      email,
      deletedId: completedTasksIds,
    });

    fetchToDoList();
  };
  return (
    <button
      className={`button-gradient dark:text-black ${currentPath === 'active' || completedToDos.length === 0 ? 'invisible' : 'block'} text-very-dark-blue app-text-medium rounded-[5px] p-1.5 font-bold hover:cursor-pointer`}
      onClick={clearCompletedTasks}>
      {windowWidth < 375 ? 'Clear' : 'Clear Completed'}
    </button>
  );
};

export default ClearCompletedButton;
