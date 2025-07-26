import { useToDos } from '/src/context/ToDosContext';
import { useToDosPath } from '/src/context/ToDosPathContext';
import { useUserProfile } from '/src/context/UserProfileContext';

import ToDosCount from './ToDosCount';
import ClearCompletedButton from './ClearCompletedButton';
import ToDoAppNavigation from '../navigation/ToDoAppNavigation';
import CustomSpinner from './CustomSpinner.jsx';

const DesktopToDoUtilityBar = ({ windowWidth }) => {
  const { isFetchingToDos } = useToDos();
  const { currentPath, toDos } = useToDosPath();
  const { isUserProfileLoading } = useUserProfile();

  return (
    <div
      className={`flex min-h-[62px] items-center ${
        isFetchingToDos || isUserProfileLoading
          ? 'justify-center'
          : 'justify-between'
      } rounded-[5px] bg-gray-50 py-4 pr-5 pl-6 dark:bg-gray-900 ${
        currentPath === 'all' ? 'mt-4' : 'mt-[4.375rem]'
      }`}>
      {isFetchingToDos || isUserProfileLoading ? (
        <CustomSpinner />
      ) : (
        <>
          <ToDosCount toDos={toDos} />

          <div className="flex max-w-[33.75rem] items-center justify-center rounded-[5px]">
            <ToDoAppNavigation />
          </div>

          <ClearCompletedButton windowWidth={windowWidth} />
        </>
      )}
    </div>
  );
};

export default DesktopToDoUtilityBar;
