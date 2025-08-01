import { useState } from 'react';

import { useTheme } from '/src/context/ThemeContext';

import UsernameVerification from './UsernameVerification';

import BinIcon from '/src/assets/images/icons/icon-bin.png';
import BinIconDark from '/src/assets/images/icons/icon-bin-dark.png';

const DeleteAccountConfirmation = ({ setDeleteConfirmation }) => {
  const { theme } = useTheme();
  const [usernameAuthentication, setUsernameAuthentication] = useState(false);
  return (
    <div className="tablet:mx-auto mx-4 rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800">
      <div>
        <h1 className="mb-8 flex items-center gap-2 font-bold">
          <img
            src={theme === 'dark' ? BinIconDark : BinIcon}
            className="hover-cursor-pointer mb-1 h-5 w-5"
          />
          Delete Account?
        </h1>
        <p>Are you sure you want to permanently delete your account?</p>
        <p className="mt-4 font-bold">
          This action cannot be undone and will erase all your data.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <button
          className="cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black"
          onClick={() => setDeleteConfirmation(false)}>
          Cancel
        </button>
        <button
          className={
            'deleteAccount-button-gradient flex-grow cursor-pointer rounded-[5px] p-4 dark:text-black'
          }
          onClick={() => {
            setUsernameAuthentication(true);
          }}>
          Yes, delete my account
        </button>
      </div>

      {usernameAuthentication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <UsernameVerification
            setDeleteConfirmation={setDeleteConfirmation}
            setUsernameAuthentication={setUsernameAuthentication}
          />
        </div>
      )}
    </div>
  );
};

export default DeleteAccountConfirmation;
