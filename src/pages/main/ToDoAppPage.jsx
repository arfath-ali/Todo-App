import React, { Suspense, lazy } from 'react';
import { useTheme } from '/src/context/ThemeContext';
import { useToDosPath } from '/src/context/ToDosPathContext';
import { useWindowSize } from '/src/hooks/useWindowSize';

const WelcomeHeader = lazy(() => import('./components/header/WelcomeHeader'));
const Header = lazy(() => import('./components/header/Header'));
const ToDoAppNavigation = lazy(() => import('./components/navigation/ToDoAppNavigation'));
const ToDoInput = lazy(() => import('./components/todo-controls/ToDoInput'));
const ToDosCount = lazy(() => import('./components/todo-controls/ToDosCount'));
const ClearCompletedButton = lazy(() => import('./components/todo-controls/ClearCompletedButton'));
const ToDoAppRoutes = lazy(() => import('./routes/ToDoAppRoutes'));

const ToDoAppPage = () => {
  const windowWidth = useWindowSize();
  const { theme } = useTheme();
  const { currentPath, toDos } = useToDosPath();

  const isAuthPage = currentPath === 'sign-in' || currentPath === 'sign-up';
  const isToDoPage =
    currentPath === 'all' || currentPath === 'active' || currentPath === 'completed';

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

      {['forget-password', 'reset-password', 'profile', 'not-found'].includes(currentPath) && (
        <Suspense fallback={null}>
          <ToDoAppRoutes />
        </Suspense>
      )}

      {isToDoPage && (
        <div
          className={`${
            theme === 'dark' ? 'body-dark-mode' : 'body-light-mode'
          } relative mx-auto h-screen overflow-hidden pr-6 pb-10 pl-[1.625rem] tablet:max-w-none mobile:max-w-[48rem] max-w-[20rem] min-w-[20rem]`}>
          <Suspense fallback={null}>
            <Header />
          </Suspense>

          <main className="relative z-10 mx-auto desktop:max-w-[33.75rem] max-w-[30rem]">
            <Suspense fallback={null}>
              <ToDoInput windowWidth={windowWidth} />
            </Suspense>

            {windowWidth >= 768 && (
              <div
                className={`flex items-center justify-between rounded-[5px] bg-gray-50 py-4 pr-5 pl-6 dark:bg-gray-900 ${
                  currentPath === 'all' ? 'mt-4' : 'mt-[4.375rem]'
                }`}>
                <Suspense fallback={null}>
                  <ToDosCount toDos={toDos} />
                </Suspense>

                <div className="text-dark-grayish-blue-alt flex max-w-[33.75rem] items-center justify-center rounded-[5px]">
                  <Suspense fallback={null}>
                    <ToDoAppNavigation />
                  </Suspense>
                </div>

                <Suspense fallback={null}>
                  <ClearCompletedButton windowWidth={windowWidth} />
                </Suspense>
              </div>
            )}

            <div
              className={`shadow-custom-light dark:shadow-custom-dark overflow-y-scroll rounded-[5px] ${
                windowWidth < 375
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
              <>
                <div className="mt-2 flex items-center justify-between rounded-[5px] bg-gray-50 px-5 py-4 dark:bg-gray-900">
                  <Suspense fallback={null}>
                    <ToDosCount toDos={toDos} />
                    <ClearCompletedButton windowWidth={windowWidth} />
                  </Suspense>
                </div>

                <div
                  className="fixed bottom-0 left-1/2 flex w-full -translate-x-1/2 transform items-center justify-center"
                  style={{
                    paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
                  }}>
                  <Suspense fallback={null}>
                    <ToDoAppNavigation />
                  </Suspense>
                </div>
              </>
            )}
          </main>
          <footer></footer>
        </div>
      )}
    </div>
  );
};

export default ToDoAppPage;
