import { useTheme } from '/src/context/ThemeContext';

import crossIcon from '/src/assets/images/icons/icon-cross.svg';
import checkIcon from '/src/assets/images/icons/icon-check.svg';
import dragIconLightSvg from '/src/assets/images/icons/icon-drag-light.svg';
import dragIconDarkSvg from '/src/assets/images/icons/icon-drag-dark.svg';

const CreateTodoItem = ({
  currentPath,
  input,
  isChecked,
  id,
  setDraggedId,
  handleDrop,
  handleToggleTodoCheckedStatus,
  clearTodoById,
}) => {
  const { theme } = useTheme();

  return (
    <li
      draggable
      onDragStart={(e) => {
        if (currentPath === 'all') {
          setDraggedId(id);
          e.target.classList.add('dragging');
        }
      }}
      onDragOver={(e) => {
        if (currentPath === 'all') e.preventDefault();
      }}
      onDrop={() => {
        if (currentPath === 'all') handleDrop(id);
      }}
      onDragEnd={(e) => {
        e.target.classList.remove('dragging');
      }}
      className="bg-gray-50 dark:bg-gray-900">
      <div>
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            {currentPath === 'all' && (
              <img
                src={theme === 'dark' ? dragIconDarkSvg : dragIconLightSvg}
                className="tablet:w-[18px] tablet:h-[18px] h-3 w-3 cursor-grab"
              />
            )}
            <div
              className="radio-btn tablet:h-6 tablet:w-6 flex h-5 w-5 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border-1 border-gray-300 dark:border-gray-700"
              style={
                isChecked
                  ? {
                      backgroundImage: 'var(--color-gradient-check)',
                      border: 0,
                    }
                  : {}
              }
              onClick={() => handleToggleTodoCheckedStatus(id)}
              id={id}>
              {isChecked && <img src={checkIcon} />}
            </div>

            <p
              className={`mobileLarge:max-w-[16rem] desktop:max-w-[25rem] mobile:max-w-[13rem] max-w-[9rem] break-words [@media(min-width:500px)]:max-w-[21rem] ${
                theme === 'dark'
                  ? isChecked
                    ? 'text-gray-600 line-through'
                    : ''
                  : isChecked
                    ? 'text-gray-400 line-through'
                    : ''
              }`}>
              {input}
            </p>
          </div>
          <img
            src={crossIcon}
            alt="Cross Icon"
            onClick={() => clearTodoById(id)}
            className="tablet:w-[18px] tablet:h-[18px] h-3 w-3 cursor-pointer"
          />
        </div>
        <div className="h-[1px] border-1 border-gray-300 dark:border-gray-700"></div>
      </div>
    </li>
  );
};

export default CreateTodoItem;
