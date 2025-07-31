import { useTodos } from '/src/context/TodosContext';
import { useTodosByPath } from '/src/context/TodosByPathContext';
import { useUserProfile } from '/src/context/UserProfileContext';

import TodosCount from './TodosCount.jsx';
import ClearCompletedButton from './ClearCompletedButton.jsx';
import TodoAppNavigation from '../navigation/TodoAppNavigation.jsx';
import CustomSpinner from './CustomSpinner.jsx';

const DesktopTodoUtilityBar = ({ windowWidth }) => {
  const { isFetchingTodos } = useTodos();
  const { currentPath,displayTodos } = useTodosByPath();
  const { isUserProfileLoading } = useUserProfile();

  return (
    <div
      className={`flex min-h-[62px] items-center ${
        isFetchingTodos || isUserProfileLoading
          ? 'justify-center'
          : 'justify-between'
      } rounded-[5px] bg-gray-50 py-4 pr-5 pl-6 dark:bg-gray-900 ${
        currentPath === 'all' ? 'mt-4' : 'mt-[4.375rem]'
      }`}>
      {isFetchingTodos || isUserProfileLoading ? (
        <CustomSpinner />
      ) : (
        <>
          <TodosCount todos={displayTodos} />

          <div className="flex max-w-[33.75rem] items-center justify-center rounded-[5px]">
            <TodoAppNavigation />
          </div>

          <ClearCompletedButton windowWidth={windowWidth} />
        </>
      )}
    </div>
  );
};

export default DesktopTodoUtilityBar;
