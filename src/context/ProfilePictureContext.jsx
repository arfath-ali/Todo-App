import { createContext, useContext, useState } from 'react';

const ProfilePictureContext = createContext();

export function ProfilePictureProvider({ children }) {
  const [profilePictureURL, setProfilePictureURL] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [imageToUpload, setImageToUpload] = useState('');
  const [isProfilePictureChanged, setIsProfilePictureChanged] = useState(false);
  const [noProfilePicture, setNoProfilePicture] = useState(false);

  const clearProfilePicture = () => {
    setProfilePictureURL('');
    setPreviewImage('');
    setImageToUpload('');
    setIsProfilePictureChanged(false);
    setNoProfilePicture(false);
  };

  return (
    <ProfilePictureContext.Provider
      value={{
        profilePictureURL,
        setProfilePictureURL,
        previewImage,
        setPreviewImage,
        imageToUpload,
        setImageToUpload,
        isProfilePictureChanged,
        setIsProfilePictureChanged,
        noProfilePicture,
        setNoProfilePicture,
        clearProfilePicture,
      }}>
      {children}
    </ProfilePictureContext.Provider>
  );
}

export function useProfilePicture() {
  return useContext(ProfilePictureContext);
}
