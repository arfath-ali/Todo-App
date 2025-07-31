import { useUserProfile } from '/src/context/UserProfileContext';
import { useTheme } from '/src/context/ThemeContext';
import { useTodosByPath } from '/src/context/TodosByPathContext';
import { useUsername } from '/src/context/UsernameContext';
import { useSignOut } from '/src/context/SignOutContext';
import { useProfilePicture } from '/src/context/ProfilePictureContext';

const useClearUserData = () => {
  const { clearUserProfile } = useUserProfile();
  const { clearTheme } = useTheme();
  const { clearTodosPath } = useTodosByPath();
  const { clearUsername } = useUsername();
  const { clearSignOut } = useSignOut();
  const { clearProfilePicture } = useProfilePicture();

  const clearAllUserData = () => {
    clearUserProfile();
    clearTheme();
    clearTodosPath();
    clearUsername();
    clearSignOut();
    clearProfilePicture();
  };

  return clearAllUserData;
};

export default useClearUserData;
