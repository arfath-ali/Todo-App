import { useState, useRef } from 'react';
import { ClipLoader } from 'react-spinners';

import { useProfilePicture } from '/src/context/ProfilePictureContext';
import ImageCropModal from './ImageCropModal';

import UserIcon from '/src/assets/images/icons/icon-user.png';

const ProfilePictureUploadModal = ({
  setIsProfilePictureUploadMenu,
  onImageChange,
}) => {
  const {
    profilePictureURL,
    previewImage,
    setPreviewImage,
    setImageToUpload,
    isProfilePictureChanged,
    setIsProfilePictureChanged,
    setNoProfilePicture,
  } = useProfilePicture();

  const [isLoading, setIsLoading] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const [imageSrcForCrop, setImageSrcForCrop] = useState('');

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const objectURL = URL.createObjectURL(selectedFile);
      setImageSrcForCrop(objectURL);
      setShowCropper(true);
    }
    e.target.value = '';
  };

  const handleCroppedImage = (blob) => {
    const objectURL = URL.createObjectURL(blob);
    if (previewImage) URL.revokeObjectURL(previewImage);
    setImageToUpload(blob);
    setPreviewImage(objectURL);
    setIsProfilePictureChanged(true);
  };

  const removeProfilePicture = () => {
    setIsLoading(true);

    if (previewImage) {
      setTimeout(() => {
        URL.revokeObjectURL(previewImage);
        setPreviewImage('');
        setImageToUpload('');
        setIsProfilePictureChanged(true);
        setIsLoading(false);
      }, 1500);
      return;
    }

    if (profilePictureURL) {
      setTimeout(() => {
        setPreviewImage(UserIcon);
        setNoProfilePicture(true);
        setIsProfilePictureChanged(true);
        setIsLoading(false);
      }, 1500);
      return;
    }

    setIsProfilePictureChanged(false);
    setIsProfilePictureUploadMenu(false);
  };

  const handleSaveButton = () => {
    setIsProfilePictureChanged(false);
    if (previewImage) {
      setIsLoading(true);
      setTimeout(() => {
        onImageChange();
        setIsLoading(false);
        setIsProfilePictureUploadMenu(false);
      }, 1500);
    } else {
      setTimeout(() => {
        onImageChange();
        setIsProfilePictureUploadMenu(false);
      }, 500);
    }
  };

  const handleCancelButton = () => {
    setIsProfilePictureChanged(false);
    setIsProfilePictureUploadMenu(false);
  };

  return (
    <div className="profile-picture-upload-menu app-text-medium mx-auto max-w-[400px] rounded-[5px] px-4 py-5">
      <div className="flex items-center justify-between gap-2">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          <img
            src={previewImage || profilePictureURL || null}
            className="h-full w-full object-cover"
            alt="Profile Picture"
          />
          {isLoading && (
            <div className="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center bg-black opacity-60">
              <ClipLoader color="#fff" size={24} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 dark:text-black">
          <label
            htmlFor="profile-upload"
            className="upload-button-gradient cursor-pointer rounded-[5px] p-3">
            Upload Image
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => handleFileChange(e)}
          />
          <button
            className="remove-button-gradient cursor-pointer rounded-[5px] p-3"
            onClick={() => removeProfilePicture()}>
            Remove Image
          </button>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6 dark:text-black">
        <button
          className="cancel-button-gradient flex-grow cursor-pointer rounded-[5px] p-3"
          onClick={() => handleCancelButton()}>
          Cancel
        </button>
        <button
          className={`save-button-gradient flex-grow cursor-pointer rounded-[5px] p-3 ${isProfilePictureChanged ? '' : 'opacity-65'}`}
          onClick={() => handleSaveButton()}>
          Save
        </button>
      </div>

      <div>
        <p className="app-text-small mt-5 text-center italic dark:text-gray-400">
          Supported formats: JPG, PNG, WEBP — Max size: 2MB
        </p>
      </div>
      {showCropper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <ImageCropModal
            src={imageSrcForCrop}
            onCropDone={handleCroppedImage}
            onCancel={() => {
              setImageSrcForCrop('');
              setShowCropper(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePictureUploadModal;
