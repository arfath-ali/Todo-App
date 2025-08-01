import { Suspense, lazy } from 'react';
import { useTheme } from '/src/context/ThemeContext';
import { useTodosByPath } from '/src/context/TodosByPathContext';
import { useWindowSize } from '/src/hooks/useWindowSize';

const WelcomeHeader = lazy(
  () => import('./components/header/WelcomeHeader.jsx'),
);
const Header = lazy(() => import('./components/header/Header.jsx'));
const TodoInput = lazy(
  () => import('./components/todo-controls/TodoInput.jsx'),
);
const DesktopTodoUtilityBar = lazy(
  () => import('./components/todo-controls/DesktopTodoUtilityBar.jsx'),
);
const TodoAppRoutes = lazy(() => import('./routes/TodoAppRoutes.jsx'));
const MobileTodoUtilityBar = lazy(
  () => import('./components/todo-controls/MobileTodoUtilityBar.jsx'),
);

const TodoAppPage = () => {
  const windowWidth = useWindowSize();
  const { theme } = useTheme();
  const { currentPath, displayTodos } = useTodosByPath() || {};

  const isAuthPage = currentPath === 'sign-in' || currentPath === 'sign-up';
  const isTodoPage =
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
              <TodoAppRoutes />
            </Suspense>
          </div>
        </div>
      )}

      {['forget-password', 'reset-password', 'profile', 'not-found'].includes(
        currentPath,
      ) && (
        <Suspense fallback={null}>
          <TodoAppRoutes />
        </Suspense>
      )}

      {isTodoPage && (
        <div
          className={`${
            theme === 'dark' ? 'body-dark-mode' : 'body-light-mode'
          } tablet:max-w-none mobile:max-w-[48rem] relative mx-auto h-screen max-w-[20rem] min-w-[20rem] overflow-hidden pr-6 pb-10 pl-[1.625rem]`}>
          <Suspense fallback={null}>
            <Header />
          </Suspense>

          <main className="desktop:max-w-[33.75rem] relative z-10 mx-auto max-w-[30rem]">
            <Suspense fallback={null}>
              <TodoInput windowWidth={windowWidth} />
            </Suspense>

            {windowWidth >= 768 && (
              <div className="shadow-custom-light dark:shadow-custom-dark desktop:shadow-none desktop:dark:shadow-none">
                <Suspense fallback={null}>
                  <DesktopTodoUtilityBar windowWidth={windowWidth} />
                </Suspense>
              </div>
            )}

            <div
              className={`todo-list-container ${displayTodos.length <= 0 ? 'shadow-custom-light dark:shadow-custom-dark' : ''} overflow-y-scroll rounded-[5px] ${
                windowWidth >= 768
                  ? currentPath === 'all'
                    ? 'mt-2'
                    : 'mt-21'
                  : currentPath === 'all'
                    ? 'mt-4'
                    : 'mt-16'
              } desktop:max-h-[62dvh] mb-2`}>
              <Suspense fallback={null}>
                <TodoAppRoutes />
              </Suspense>
            </div>

            {windowWidth < 768 && (
              <div>
                <Suspense fallback={null}>
                  <MobileTodoUtilityBar windowWidth={windowWidth} />
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

export default TodoAppPage;
