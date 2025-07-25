import { useTheme } from '/src/context/ThemeContext';

import crossIcon from '/src/assets/images/icons/icon-cross.svg';
import checkIcon from '/src/assets/images/icons/icon-check.svg';
import dragIconLightSvg from '/src/assets/images/icons/icon-drag-light.svg';
import dragIconDarkSvg from '/src/assets/images/icons/icon-drag-dark.svg';

const CreateToDoItem = ({
  input,
  isChecked,
  id,
  setDraggedId,
  handleDrop,
  toggleToDoCheckedStatus,
  clearToDoById,
}) => {
  const { theme } = useTheme();

  return (
    <li
      draggable
      onDragStart={(e) => {
        setDraggedId(id);
        e.target.classList.add('dragging');
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        handleDrop(id);
      }}
      onDragEnd={(e) => {
        e.target.classList.remove('dragging');
      }}
      className="bg-gray-50 dark:bg-gray-900">
      <div>
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark' ? dragIconDarkSvg : dragIconLightSvg}
              className="desktop:w-[18px] desktop:h-[18px] h-3 w-3 cursor-grab"
            />
            <div
              className="radio-btn desktop:h-6 desktop:w-6 box-border flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-1 border-gray-300 dark:border-gray-700"
              style={
                isChecked
                  ? {
                      backgroundImage: 'var(--color-gradient-check)',
                      border: 0,
                    }
                  : {}
              }
              onClick={() => toggleToDoCheckedStatus(id)}
              id={id}>
              {isChecked && <img src={checkIcon} />}
            </div>

            <p
              className={` ${
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
            onClick={() => clearToDoById(id)}
            className="desktop:w-[18px] desktop:h-[18px] h-3 w-3 cursor-pointer"
          />
        </div>
        <div className="h-[1px] border-1 border-gray-300 dark:border-gray-700"></div>
      </div>
    </li>
  );
};

export default CreateToDoItem;
