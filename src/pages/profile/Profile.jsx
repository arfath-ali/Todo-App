import { useState, useEffect, useRef } from 'react';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '/src/context/ThemeContext';
import { useUserProfile } from '/src/context/UserProfileContext';
import { useUsername } from '/src/context/UsernameContext';
import { useProfilePicture } from '/src/context/ProfilePictureContext';
import { useSignOut } from '/src/context/SignOutContext';

import { useWindowSize } from '/src/hooks/useWindowSize.js';
import useClearUserData from '/src/hooks/useClearUserData';

import CustomSpinner from './components/CustomSpinner';

import signOut from '/src/utils/signOut.js';

import axiosInstance from '/src/services/api.js';

import ProfilePictureUploadModal from './components/ProfilePictureUploadModal';
import DeleteAccountConfirmation from './components/DeleteAccountConfirmation';

import UserIcon from '/src/assets/images/icons/icon-user.png';
import CameraIcon from '/src/assets/images/icons/icon-camera.svg';
import EditIconLight from '/src/assets/images/icons/icon-edit-light.png';
import EditIconDark from '/src/assets/images/icons/icon-edit-dark.png';
import SignOutIcon from '/src/assets/images/icons/icon-sign-out.png';
import BinIcon from '/src/assets/images/icons/icon-bin.png';
import successIcon from '/src/assets/images/icons/icon-success.png';

const Profile = () => {
  const navigate = useNavigate();
  const windowWidth = useWindowSize();
  const clearAllUserData = useClearUserData();

  const wasSignedIn = sessionStorage.getItem('wasSignedIn');

  const { theme } = useTheme();
  const { isSignedOut, setIsSignedOut } = useSignOut();
  const { userProfile, loadUserProfile, isUserProfileLoading } =
    useUserProfile();
  const [intialFullName, setIntialFullName] = useState('');
  const [fullName, setFullName] = useState('');
  const [fullNameChanged, setFullNameChanged] = useState(false);

  const [intialUsername, setIntialUsername] = useState('');
  const [profileUsername, setProfileUsername] = useState('');
  const [usernameChanged, setUsernameChanged] = useState(false);

  const {
    username: globalUsername,
    setUsername: setGlobalUsername,
    isUsernameFieldFocused,
    setIsUsernameFieldFocused,
    isUsernameValid,
    isSearchingUsername,
    setIsSearchingUsername,
    isUsernameAvailable,
    setIsUsernameAvailable,
    usernameStatus,
    setUsernameStatus,
  } = useUsername();

  const [email, setEmail] = useState('');

  const {
    profilePictureURL,
    setProfilePictureURL,
    previewImage,
    setPreviewImage,
    imageToUpload,
    setImageToUpload,
    noProfilePicture,
  } = useProfilePicture();
  const [profileImageChanged, setProfileImageChanged] = useState(false);
  const [isProfilePictureHovered, setIsProfilePictureHovered] = useState(false);
  const [isProfilePictureUploadMenu, setIsProfilePictureUploadMenu] =
    useState(false);

  const [isEditable, setIsEditable] = useState(false);
  const [isFullNameEditable, setIsFullNameEditable] = useState(false);
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);

  const [isNonUsernameFieldsEditable, setIsNonUsernameFieldsEditable] =
    useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [changesSaved, setChangesSaved] = useState(false);
  const [updateStatus, setUpdateStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCancelButtonClicked, setIsCancelButtonClicked] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const fullNameRef = useRef(null);
  const usernameRef = useRef(null);

  useEffect(() => {
    if (!wasSignedIn) navigate('/sign-in', { replace: true });
    document.title = 'Profile – Todo App';
  }, []);

  useEffect(() => {
    setIntialFullName(userProfile?.fullName || '');
    setIntialUsername(userProfile?.username || '');
    setEmail(userProfile?.email || '');
    setProfilePictureURL(userProfile?.profilePicture || UserIcon);
  }, [userProfile]);

  const handleProfileImageChange = () => {
    setProfileImageChanged(true);
  };

  const uploadNewProfilePicture = async () => {
    setIsLoading(true);

    const formData = new FormData();

    formData.append('email', userProfile.email);
    formData.append('newProfilePicture', imageToUpload);

    try {
      const res = await axiosInstance.post(
        '/api/new-profile-picture',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (res.status === 200) {
        await loadUserProfile();
        setIsLoading(false);
        setIsProfilePictureUploadMenu(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      console.log(
        err.response?.data?.error || 'An error occurred during upload.',
      );
    }
  };

  const removeProfilePicture = async () => {
    try {
      setIsLoading(true);
      const email = userProfile.email;

      const res = await axiosInstance.post('/api/remove-profile-picture', {
        email,
      });

      if (res.status === 200) {
        await loadUserProfile();
        setIsLoading(false);
        setIsProfilePictureUploadMenu(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      console.log(
        err.response?.data?.error || 'An error occurred during upload.',
      );
    }
  };

  useEffect(() => {
    setFullName(intialFullName);
    setProfileUsername(intialUsername);
  }, [intialFullName, intialUsername]);

  const handleEditProfileButton = () => {
    setIsCancelButtonClicked(false);
    setIsEditable(true);
    setChangesSaved(false);
    setUpdateStatus('');
  };

  useEffect(() => {
    if (fullNameRef.current) {
      if (isFullNameEditable) {
        fullNameRef.current.focus();
      }
    }
  }, [isFullNameEditable]);

  useEffect(() => {
    if (usernameRef.current) {
      if (isUsernameEditable) {
        usernameRef.current.focus();
      }
    }
  }, [isUsernameEditable, isUsernameValid]);

  useEffect(() => {
    setIsNonUsernameFieldsEditable(
      isFullNameEditable || isProfilePictureUploadMenu,
    );
  }, [isFullNameEditable, isProfilePictureUploadMenu]);

  useEffect(() => {
    setFullNameChanged(fullName !== intialFullName);
    setUsernameChanged(profileUsername !== intialUsername);
  }, [
    profileImageChanged,
    fullName,
    profileUsername,
    intialFullName,
    intialUsername,
  ]);

  useEffect(() => {
    setHasChanges(fullNameChanged || usernameChanged || profileImageChanged);
  }, [
    profileImageChanged,
    fullNameChanged,
    usernameChanged,
    intialFullName,
    intialUsername,
  ]);

  useEffect(() => {
    if (profileUsername !== intialUsername) {
      setGlobalUsername(profileUsername);
    } else {
      setGlobalUsername('');
      setIsSearchingUsername(false);
      setIsUsernameAvailable(false);
      setUsernameStatus('');
    }
  }, [profileUsername, intialUsername]);

  const handleUsernameBlur = () => {
    setIsUsernameEditable(false);
    setIsUsernameFieldFocused(false);
    setUsernameStatus('');
  };

  const handleSaveChangesButton = async () => {
    if (hasChanges) {
      if (profileImageChanged && imageToUpload) {
        await uploadNewProfilePicture();
      }

      if (noProfilePicture) {
        await removeProfilePicture();
      }

      if (fullNameChanged) {
        try {
          const res = await axiosInstance.post('/api/update-user/full-name', {
            fullName,
            email,
          });
          await loadUserProfile();
        } catch (error) {
          console.log(error);
          setIsLoading(false);
          setChangesSaved(false);
          setUpdateStatus(res.data.error);
          setIsEditable(false);
        }
      }

      if (usernameChanged) {
        if (isUsernameAvailable) {
          try {
            const res = await axiosInstance.post('/api/update-user/username', {
              newUsername: profileUsername,
              email,
            });
            await loadUserProfile();
            setUpdateStatus(res.data.message);
          } catch (error) {
            console.log(error);
            setIsLoading(false);
            setChangesSaved(false);
            setUpdateStatus(res.data.error);
            setIsEditable(false);
          }
        } else {
          setUsernameStatus('username already taken.');
        }
      }
      setIsLoading(false);
      setProfileImageChanged(false);
      setPreviewImage('');
      setImageToUpload('');
      setGlobalUsername('');
      setUpdateStatus('Updated successfully.');
      setChangesSaved(true);
      setHasChanges(false);
      setIsEditable(false);
    }
  };

  const handleCancelButton = () => {
    setIsCancelButtonClicked(true);
    setProfileImageChanged(false);
    setPreviewImage('');
    setImageToUpload('');
    setGlobalUsername('');
    setIsEditable(false);
    setIsUsernameAvailable(false);
    setIsFullNameEditable(false);
    setIsUsernameEditable(false);
    setIsNonUsernameFieldsEditable(false);
    setFullNameChanged(false);
    setUsernameChanged(false);
    setFullName(intialFullName);
    setProfileUsername(intialUsername);
  };

  return (
    <div className="app-text-medium relative bg-gray-300 dark:bg-gray-800">
      {isUserProfileLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <CustomSpinner />{' '}
        </div>
      ) : (
        <div className="mx-auto flex h-screen max-w-[300px] flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center gap-5">
            <div className="flex w-full justify-center">
              <div
                className={`relative h-32 w-32 ${isEditable ? 'cursor-pointer' : ''} overflow-hidden rounded-full`}>
                <img
                  src={
                    !isProfilePictureUploadMenu &&
                    profileImageChanged &&
                    previewImage
                      ? previewImage
                      : profilePictureURL || null
                  }
                  className="h-full"
                  alt="Profile Picture"
                  onMouseEnter={() => setIsProfilePictureHovered(true)}
                  onMouseLeave={() => setIsProfilePictureHovered(false)}
                  onClick={() => {
                    if (isEditable) setIsProfilePictureUploadMenu(true);
                  }}
                />
                {profileImageChanged && isLoading && (
                  <div className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60">
                    <ClipLoader color="#fff" size={24} />
                  </div>
                )}
                {isEditable && isProfilePictureHovered && (
                  <div className="pointer-events-none absolute bottom-0 flex h-[35%] w-full items-center justify-center rounded-b-full bg-black opacity-60">
                    <img src={CameraIcon} className="h-6 w-6" />
                  </div>
                )}
              </div>
            </div>

            {hasChanges && isUsernameAvailable && (
              <div className="text-success tablet:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center">
                <p>{usernameStatus}</p>
              </div>
            )}
            {hasChanges && !isUsernameAvailable && (
              <div className="text-error tablet:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center">
                <p>{usernameStatus}</p>
              </div>
            )}

            {updateStatus && changesSaved ? (
              <div className="text-success tablet:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center">
                <p>{updateStatus}</p>
              </div>
            ) : (
              updateStatus && (
                <div className="text-error tablet:mb-2 absolute top-[-25px] bottom-[100%] mx-auto w-full text-center">
                  <p>{updateStatus}</p>
                </div>
              )
            )}

            <div className="flex w-full flex-col gap-2">
              <label className="app-text-small font-bold dark:text-white">
                Name:
              </label>

              <div
                onClick={() => {
                  if (isEditable) setIsFullNameEditable(true);
                }}
                className={`fullNameEditable ${isFullNameEditable ? 'active' : ''} flex items-center justify-between border-b-1 dark:border-gray-700`}>
                <input
                  ref={fullNameRef}
                  type="text"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  className={`${isEditable ? 'cursor-text' : 'cursor-default'} outline-none`}
                  readOnly={!isFullNameEditable}
                  onBlur={() => setIsFullNameEditable(false)}
                />
                {isEditable && !isFullNameEditable && (
                  <img src={EditIconDark} className="mr-3 h-3 w-3" />
                )}
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label className="app-text-small font-bold dark:text-white">
                Username:
              </label>

              <div
                onClick={() => {
                  if (isEditable) setIsUsernameEditable(true);
                }}
                className={`usernameEditable ${isUsernameEditable ? 'active border-b-1' : ''} relative flex items-center justify-between border-b-1 dark:border-gray-700`}>
                <input
                  ref={usernameRef}
                  name="username"
                  autoComplete="off"
                  type="text"
                  onFocus={() => setIsUsernameFieldFocused(true)}
                  onChange={(e) => setProfileUsername(e.target.value)}
                  onBlur={() => handleUsernameBlur()}
                  value={profileUsername}
                  readOnly={!isUsernameEditable}
                  onKeyDown={(e) => {
                    if (e.key === ' ') e.preventDefault();
                  }}
                  maxLength={15}
                  className={`${isEditable ? 'cursor-text' : 'cursor-default'} outline-none`}
                />

                {isEditable && !isUsernameEditable && !isUsernameAvailable && (
                  <img src={EditIconDark} className="mr-3 h-3 w-3" />
                )}

                {isSearchingUsername && (
                  <ClipLoader
                    color="hsl(220, 90%, 56%)"
                    size={15}
                    className="mr-3"
                  />
                )}

                {isUsernameAvailable && (
                  <img src={successIcon} className="mr-3 h-[15px] w-[15px]" />
                )}
              </div>
              {isEditable &&
                globalUsername &&
                !isUsernameValid &&
                !isUsernameFieldFocused &&
                !isNonUsernameFieldsEditable &&
                !isCancelButtonClicked && (
                  <div
                    className={`${windowWidth >= 768 ? 'absolute' : ''} desktop:right-[-320px] right-[-230px] bottom-0`}>
                    <p className="text-error desktop:max-w-[300px] tablet:max-w-[200px] max-w-[300px]">
                      Username must be at least 3 characters long, start with a
                      lowercase letter or underscore(_), include at least one
                      number, use only lowercase letters, numbers, dots(.), or
                      underscores(_), and not end with a dot(.).
                    </p>
                  </div>
                )}
            </div>

            <div className="flex w-full flex-col gap-2">
              <label className="app-text-small font-bold dark:text-white">
                Email:
              </label>

              <input
                type="text"
                value={email}
                className="border-b-1 outline-none dark:border-gray-700"
                disabled
              />
            </div>

            {!isEditable && (
              <div
                onClick={() => handleEditProfileButton()}
                className={`absolute top-0 cursor-pointer rounded-[100px] p-[2px]`}
                style={{
                  background: 'var(--color-gradient-button)',
                  right:
                    windowWidth < 375
                      ? '-10px'
                      : windowWidth > 768
                        ? '-100px'
                        : '-30px',
                }}>
                {' '}
                {windowWidth >= 768 ? (
                  <button className="flex cursor-pointer justify-center gap-2 rounded-[100px] bg-gray-300 px-2 pt-3 pb-2 font-bold hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                    Edit Profile
                    <img
                      src={theme === 'dark' ? EditIconDark : EditIconLight}
                      className="h-3 w-3"
                      alt=""
                    />
                  </button>
                ) : (
                  <button className="flex cursor-pointer justify-center gap-2 rounded-[100px] bg-gray-300 px-3 pt-2 pb-1 font-bold hover:bg-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                    Edit
                    <img
                      src={theme === 'dark' ? EditIconDark : EditIconLight}
                      className="h-2 w-2"
                      alt=""
                    />
                  </button>
                )}
              </div>
            )}
          </div>

          {isEditable ? (
            <div className="mt-10 flex w-full items-center justify-between gap-4 dark:text-black">
              <button
                className="cancel-button-gradient flex-1 cursor-pointer rounded-[5px] py-3"
                onClick={() => {
                  handleCancelButton();
                }}>
                Cancel
              </button>
              <button
                className={`save-button-gradient tablet:max-h-[42px] flex max-h-[38px] flex-1 cursor-pointer items-center justify-center rounded-[5px] py-3 ${hasChanges && (!usernameChanged || (profileUsername && isUsernameAvailable)) && (!fullNameChanged || fullName) ? '' : 'opacity-20'}`}
                onClick={() => {
                  setIsLoading(true);

                  setTimeout(() => {
                    handleSaveChangesButton();
                  }, 1000);
                }}>
                {isLoading ? (
                  <ClipLoader color="#fff" size={22} />
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          ) : (
            <div className="w-full">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSignedOut(true);
                  setTimeout(() => {
                    signOut(navigate, clearAllUserData);
                    setIsSignedOut(false);
                  }, 1000);
                }}
                className="signOut-button-gradient mt-10 flex max-h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-4 font-bold dark:text-black">
                {isSignedOut ? (
                  <ClipLoader color="#fff" size={24} />
                ) : (
                  'Sign Out'
                )}

                {!isSignedOut && (
                  <img
                    src={SignOutIcon}
                    className="hover-cursor-pointer h-5 w-5"
                  />
                )}
              </button>

              <button
                onClick={() => {
                  setDeleteConfirmation(true);
                }}
                className="deleteAccount-button-gradient mt-4 flex max-h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[5px] py-3.5 font-bold dark:text-black">
                <img
                  src={BinIcon}
                  className="hover-cursor-pointer mb-1 h-5 w-5"
                />
                Delete Account
              </button>
            </div>
          )}
        </div>
      )}
      {isProfilePictureUploadMenu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <ProfilePictureUploadModal
            setIsProfilePictureUploadMenu={setIsProfilePictureUploadMenu}
            profileImage={profilePictureURL}
            onImageChange={handleProfileImageChange}
          />
        </div>
      )}

      {deleteConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <DeleteAccountConfirmation
            setDeleteConfirmation={setDeleteConfirmation}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
