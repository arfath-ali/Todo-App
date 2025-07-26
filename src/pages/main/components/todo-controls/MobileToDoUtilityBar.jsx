import { useToDos } from '/src/context/ToDosContext';
import { useToDosPath } from '/src/context/ToDosPathContext';
import { useUserProfile } from '/src/context/UserProfileContext';

import ToDosCount from './ToDosCount';
import ClearCompletedButton from './ClearCompletedButton';
import ToDoAppNavigation from '../navigation/ToDoAppNavigation';
import CustomSpinner from './CustomSpinner.jsx';

const MobileToDoUtilityBar = ({ windowWidth }) => {
  const { isFetchingToDos } = useToDos();
  const { toDos } = useToDosPath();
  const { isUserProfileLoading } = useUserProfile();

  return (
    <>
      <div className="mt-2 flex items-center justify-between rounded-[5px] min-h-[58px] bg-gray-50 px-5 py-4 dark:bg-gray-900">
        {isFetchingToDos || isUserProfileLoading ? (
          <div className="flex w-full justify-center">
            <CustomSpinner />
          </div>
        ) : (
          <>
            <ToDosCount toDos={toDos} />
            <ClearCompletedButton windowWidth={windowWidth} />
          </>
        )}
      </div>

      <div
        className="fixed bottom-0 left-1/2 flex w-full -translate-x-1/2 transform items-center justify-center"
        style={{
          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
        }}>
        <ToDoAppNavigation />
      </div>
    </>
  );
};

export default MobileToDoUtilityBar;
