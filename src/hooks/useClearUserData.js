import { useUserProfile } from '/src/context/UserProfileContext';
import { useTheme } from '/src/context/ThemeContext';
import { useToDosPath } from '/src/context/ToDosPathContext';
import { useUsername } from '/src/context/UsernameContext';
import { useSignOut } from '/src/context/SignOutContext';
import { useProfilePicture } from '/src/context/ProfilePictureContext';

const useClearUserData = () => {
  const { clearUserProfile } = useUserProfile();
  const { clearTheme } = useTheme();
  const { clearToDosPath } = useToDosPath();
  const { clearUsername } = useUsername();
  const { clearSignOut } = useSignOut();
  const { clearProfilePicture } = useProfilePicture();

  const clearAllUserData = () => {
    clearUserProfile();
    clearTheme();
    clearToDosPath();
    clearUsername();
    clearSignOut();
    clearProfilePicture();
  };

  return clearAllUserData;
};

export default useClearUserData;
