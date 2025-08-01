import { useTodos } from '/src/context/TodosContext';
import { useTodosByPath } from '/src/context/TodosByPathContext';
import { useUserProfile } from '/src/context/UserProfileContext';

import TodosCount from './TodosCount.jsx';
import ClearCompletedButton from './ClearCompletedButton.jsx';
import TodoAppNavigation from '../navigation/TodoAppNavigation.jsx';
import CustomSpinner from './CustomSpinner.jsx';

const MobileTodoUtilityBar = ({ windowWidth }) => {
  const { isFetchingTodos } = useTodos();
  const { displayTodos } = useTodosByPath();
  const { isUserProfileLoading } = useUserProfile();

  return (
    <>
      <div className="shadow-custom-light dark:shadow-custom-dark mt-2 flex min-h-[58px] items-center justify-between rounded-[5px] bg-gray-50 px-5 py-4 dark:bg-gray-900">
        {isFetchingTodos || isUserProfileLoading ? (
          <div className="flex w-full justify-center">
            <CustomSpinner />
          </div>
        ) : (
          <>
            <TodosCount todos={displayTodos} />
            <ClearCompletedButton windowWidth={windowWidth} />
          </>
        )}
      </div>

      <div
        className="fixed bottom-0 left-1/2 flex w-full -translate-x-1/2 transform items-center justify-center bg-gray-50 dark:bg-gray-900 p-4"
        style={{
          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
        }}>
        <TodoAppNavigation />
      </div>
    </>
  );
};

export default MobileTodoUtilityBar;
