import { useState, useEffect, useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { useUserProfile } from '/src/context/UserProfileContext';
import { useSignOut } from '/src/context/SignOutContext';
import { useTheme } from '/src/context/ThemeContext';

import useClearUserData from '/src/hooks/useClearUserData';

import signOut from '/src/utils/signOut.js';

import LightThemeIcon from '/src/assets/images/icons/icon-sun.svg';
import DarkThemeIcon from '/src/assets/images/icons/icon-moon.svg';
import UserIcon from '/src/assets/images/icons/icon-user.png';
import SignOutIcon from '/src/assets/images/icons/icon-sign-out.png';

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { userProfile, isSignedIn } = useUserProfile();
  const { isSignedOut, setIsSignedOut } = useSignOut();

  const clearAllUserData = useClearUserData();

  const [profileImageURL, setProfileImageURL] = useState(UserIcon);

  useEffect(() => {
    if (!userProfile) return;

    setProfileImageURL(userProfile?.profilePicture || UserIcon);
  }, [userProfile]);

  const menuRef = useRef(null);
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setDisplayMenu(false);
    }
  };

  useEffect(() => {
    if (displayMenu) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [displayMenu]);

  return (
    <>
      <header className="desktop:max-w-[33.75rem] relative z-10 mx-auto flex max-w-[30rem] items-center justify-between pt-12 pb-10">
        <h1 className="app-text-large text-white uppercase">todo</h1>

        <img
          src={theme === 'dark' ? LightThemeIcon : DarkThemeIcon}
          className="desktop:w-[26px] desktop:h-[26px] h-5 w-[1.2075rem] hover:cursor-pointer"
          alt="Light Theme Icon"
          onClick={toggleTheme}
        />
      </header>
      <div
        className="desktop:fixed desktop:top-4 absolute top-3 right-6 z-50"
        ref={menuRef}
        onClick={() => {
          setDisplayMenu((prev) => !prev);
        }}>
        {isSignedIn ? (
          <img
            src={profileImageURL}
            className="desktop:h-10 desktop:w-10 h-5 w-5 rounded-[100px] hover:cursor-pointer"
          />
        ) : (
          <button
            className="app-text-medium rounded-[5px] border border-gray-100 px-1 py-1 font-bold text-white hover:cursor-pointer hover:border-gray-100 hover:bg-gray-100 hover:text-black dark:border-gray-100 dark:text-white dark:hover:border-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-200"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigate('/sign-in');
            }}>
            Sign in
          </button>
        )}
      </div>

      {displayMenu && (
        <div className="desktop:top-16 app-text-medium absolute top-10 right-2 z-20 flex flex-col rounded-[5px] bg-white dark:bg-gray-700 dark:text-gray-400">
          <NavLink
            to="/profile"
            className="px-2 py-2.5 text-center dark:text-gray-300"
            onClick={(e) => e.stopPropagation()}>
            Profile
          </NavLink>
          <div className="h-0.5 border border-gray-400 dark:border-gray-600"></div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsSignedOut(true);
              setTimeout(() => {
                signOut(navigate, clearAllUserData);
                setIsSignedOut(false);
              }, 1000);
            }}
            className="signOut-button-gradient desktop:min-w-[112px] desktop:max-h-[38px] flex max-h-[34px] min-w-[96px] cursor-pointer items-center justify-center gap-2 rounded-b-[5px] px-2 py-2.5 dark:text-black">
            {isSignedOut ? <ClipLoader color="#fff" size={24} /> : 'Sign Out'}

            {!isSignedOut && <img src={SignOutIcon} className="h-4 w-4" />}
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
