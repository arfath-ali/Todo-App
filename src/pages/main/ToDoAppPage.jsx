import { Suspense, lazy } from 'react';
import { useTheme } from '/src/context/ThemeContext';
import { useToDosPath } from '/src/context/ToDosPathContext';
import { useUserProfile } from '/src/context/UserProfileContext';
import { useWindowSize } from '/src/hooks/useWindowSize';

const WelcomeHeader = lazy(() => import('./components/header/WelcomeHeader'));
const Header = lazy(() => import('./components/header/Header'));
const ToDoInput = lazy(() => import('./components/todo-controls/ToDoInput'));
const DesktopToDoUtilityBar = lazy(
  () => import('./components/todo-controls/DesktopToDoUtilityBar.jsx'),
);
const ToDoAppRoutes = lazy(() => import('./routes/ToDoAppRoutes'));
const MobileToDoUtilityBar = lazy(
  () => import('./components/todo-controls/MobileToDoUtilityBar.jsx'),
);

const ToDoAppPage = () => {
  const windowWidth = useWindowSize();
  const { theme } = useTheme();
  const { currentPath, toDos } = useToDosPath();

  const isAuthPage = currentPath === 'sign-in' || currentPath === 'sign-up';
  const isToDoPage =
    currentPath === 'all' ||
    currentPath === 'active' ||
    currentPath === 'completed';

  return (
    <div className="font-josefinSans font-weight-regular bg-white text-black dark:bg-gray-900 dark:text-gray-400">
      {isAuthPage && (
        <div className="flex h-screen items-center justify-center">
          <div>
            <Suspense fallback={null}>
              <WelcomeHeader />
              <ToDoAppRoutes />
            </Suspense>
          </div>
        </div>
      )}

      {['forget-password', 'reset-password', 'profile', 'not-found'].includes(
        currentPath,
      ) && (
        <Suspense fallback={null}>
          <ToDoAppRoutes />
        </Suspense>
      )}

      {isToDoPage && (
        <div
          className={`${
            theme === 'dark' ? 'body-dark-mode' : 'body-light-mode'
          } tablet:max-w-none mobile:max-w-[48rem] relative mx-auto h-screen max-w-[20rem] min-w-[20rem] overflow-hidden pr-6 pb-10 pl-[1.625rem]`}>
          <Suspense fallback={null}>
            <Header windowWidth={windowWidth} />
          </Suspense>

          <main className="desktop:max-w-[33.75rem] relative z-10 mx-auto max-w-[30rem]">
            <Suspense fallback={null}>
              <ToDoInput windowWidth={windowWidth} />
            </Suspense>

            {windowWidth >= 768 && (
              <div>
                <Suspense fallback={null}>
                  <DesktopToDoUtilityBar windowWidth={windowWidth} />
                </Suspense>
              </div>
            )}

            <div
              className={`${toDos.length !== 0 ? 'shadow-custom-light dark:shadow-custom-dark' : ''} overflow-y-scroll rounded-[5px] ${
                windowWidth >= 768
                  ? currentPath === 'all'
                    ? 'mt-2'
                    : 'mt-21'
                  : currentPath === 'all'
                    ? 'mt-4'
                    : 'mt-16'
              } desktop:max-h-[65vh] desktop:mt-4 mobile:max-h-[64vh] max-h-[61.5vh]`}>
              <Suspense fallback={null}>
                <ToDoAppRoutes />
              </Suspense>
            </div>

            {windowWidth < 768 && (
              <div>
                <Suspense fallback={null}>
                  <MobileToDoUtilityBar windowWidth={windowWidth} />
                </Suspense>
              </div>
            )}
          </main>

          <footer></footer>
        </div>
      )}
    </div>
  );
};

export default ToDoAppPage;
