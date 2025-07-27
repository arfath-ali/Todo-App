import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { useUserProfile } from '/src/context/UserProfileContext';

import useClearUserData from '/src/hooks/useClearUserData';

import deleteAccount from '/src/utils/deleteAccount.js';

const UsernameVerification = ({
  setDeleteConfirmation,
  setUsernameAuthentication,
}) => {
  const navigate = useNavigate();

  const { userProfile } = useUserProfile();
  const email = userProfile?.email;

  const clearAllUserData = useClearUserData();

  const [username, setUsername] = useState('');
  const [usernameStatus, setUsernameStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleProceedButton = async () => {
    if (!username) return;
    setIsLoading(true);
    setTimeout(async () => {
      if (username && username.length >= 3) {
        const resError = await deleteAccount(
          email,
          username,
          navigate,
          clearAllUserData,
        );
        if (resError) setUsernameStatus(resError);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setUsernameStatus('Enter your username');
      }
    }, 1000);
  };

  return (
    <div className="mx-auto rounded-[5px] bg-white px-4 py-5 dark:bg-gray-800">
      <div>
        <h1 className="text-20 mb-8 flex gap-2 font-bold">
          Confirm your username
        </h1>
        <p>Please confirm your username to permanently delete your account.</p>
        <p className="mt-4">This step is required for security reasons.</p>
      </div>

      <div className="mt-4 flex items-center">
        <fieldset className="border-light-grayish-blue desktop:max-w-[300px] flex max-w-[200px] flex-grow flex-col rounded-[5px] border-1">
          <legend htmlFor="username" className="mb-1 ml-3"></legend>

          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            minLength="3"
            maxLength="15"
            placeholder="Enter username to proceed"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="rounded-[5px] py-2 pl-3 outline-none"
          />
        </fieldset>
        {usernameStatus && (
          <p className="text-error mt-1 ml-2">{usernameStatus}!</p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-6 dark:text-black">
        <button
          className="cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3"
          onClick={() => {
            setUsernameAuthentication(false);
            setDeleteConfirmation(false);
          }}>
          Cancel
        </button>
        <button
          className={`deleteAccount-button-gradient desktop:max-h-[42px] desktop:min-w-[255px] max-h-[38px] min-w-[163px] flex-grow cursor-pointer rounded-[5px] p-3 ${username.length >= 3 ? '' : 'opacity-55'}`}
          onClick={() => {
            handleProceedButton();
          }}>
          {isLoading ? <ClipLoader color="#fff" size={16} /> : 'Proceed'}
        </button>
      </div>
    </div>
  );
};

export default UsernameVerification;
