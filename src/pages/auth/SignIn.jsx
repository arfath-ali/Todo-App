import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import GoogleSpinner from './components/GoogleSpinner';

import { useUserProfile } from '/src/context/UserProfileContext';
import { useTheme } from '/src/context/ThemeContext';

import { auth, provider, signInWithPopup } from '/src/services/firebase.js';
import axiosInstance from '/src/services/api.js';

import displayPasswordIcon from '/src/assets/images/icons/icon-password-display.png';
import displayPasswordIconDark from '/src/assets/images/icons/icon-password-display-dark.png';
import hidePasswordIcon from '/src/assets/images/icons/icon-password-hide.png';
import hidePasswordIconDark from '/src/assets/images/icons/icon-password-hide-dark.png';
import googleIcon from '/src/assets/images/icons/icon-google.svg';

const SignIn = () => {
  useEffect(() => {
    document.title = 'Sign In – ToDo App';
  }, []);

  const location = useLocation();
  const message = location.state?.message;

  const { loadUserProfile } = useUserProfile();
  const { theme } = useTheme();

  const [successMessage, setSuccessMessage] = useState(message || '');
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleSignInLoading, setIsGoogleSignInLoading] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);

      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!usernameOrEmail || !password) {
      setSignInError('Enter user details.');
      return;
    }

    if (usernameOrEmail && password) {
      setSignInError('');
      setIsLoading(true);
    }

    setTimeout(async () => {
      try {
        await axiosInstance.post('/api/signin', {
          usernameOrEmail,
          password,
        });

        await loadUserProfile();

        navigate('/all', { replace: true });
      } catch (err) {
        if (err.response) {
          setSignInError(err.response.data.error || 'Sign In failed');
        } else {
          setSignInError('Network error');
        }
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleSignInLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      await axiosInstance.post('/api/firebase-signin', {
        token,
      });

      await loadUserProfile();

      setSignInError('');

      navigate('/all', { replace: true });
    } catch (error) {
      console.error('Google sign-in error:', error);
      setSignInError('Google sign-in failed. Please try again.');
    } finally {
      setIsGoogleSignInLoading(false);
    }
  };

  return (
    <div className="app-text-medium">
      {successMessage && (
        <div className="text-error desktop:mb-2 mb-2 w-full text-center font-semibold">
          <p>{successMessage}</p>
        </div>
      )}
      <form
        className="desktop:mt-10 relative mx-auto mt-9 flex max-w-[300px] flex-col gap-4"
        onSubmit={(e) => handleSignIn(e)}>
        {signInError && (
          <div className="text-error desktop:mb-2 absolute bottom-full mx-auto mb-1 w-full text-center">
            <p>{signInError}</p>
          </div>
        )}

        <fieldset className="flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700">
          <legend htmlFor="usernameOrEmail" className="legend-base">
            Username or Email
          </legend>

          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            autoComplete="off"
            required
            placeholder="Enter username or email"
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            value={usernameOrEmail}
            className="rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"
          />
        </fieldset>

        <fieldset className="flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700">
          <legend htmlFor="password" className="legend-base">
            Password
          </legend>
          <div className="flex items-center justify-between">
            <input
              type={`${displayPassword ? 'text' : 'password'}`}
              id="password"
              name="password"
              autoComplete="off"
              required
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"
            />
            <img
              src={
                displayPassword
                  ? theme === 'dark'
                    ? displayPasswordIconDark
                    : displayPasswordIcon
                  : theme === 'dark'
                    ? hidePasswordIconDark
                    : hidePasswordIcon
              }
              className="mr-3 h-5 w-5 cursor-pointer"
              onMouseDown={(e) => e.preventDefault()}
              onClick={(e) => {
                e.preventDefault();
                const input = document.getElementById('password');
                const position = input.selectionStart;
                setDisplayPassword((prev) => !prev);
                setTimeout(() => {
                  input.setSelectionRange(position, position);
                  input.focus();
                }, 0);
              }}
            />
          </div>
        </fieldset>
        <button
          className="button-gradient mt-2 flex cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black"
          type="submit">
          {isLoading ? <ClipLoader color="#fff" size={24} /> : 'Sign In'}
        </button>
      </form>

      <p className="desktop:my-4 my-2 text-center">Or</p>

      <div className="mx-auto max-w-[300px]">
        <button
          onClick={handleGoogleSignIn}
          className="darkborder-gray-300 flex w-full cursor-pointer items-center justify-center gap-3 rounded-[5px] border border-black py-3.5 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
          type="button">
          {isGoogleSignInLoading ? (
            <GoogleSpinner />
          ) : (
            <>
              <img
                src={googleIcon}
                alt="Google logo"
                className="mb-1 h-5 w-5"
              />
              Sign in with Google
            </>
          )}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <NavLink
          to="/todo-app/forget-password"
          className="text-gradient-link font-bold"
          onClick={(e) => {
            e.preventDefault();
            navigate('/forget-password', { replace: true });
          }}>
          Forgot password?
        </NavLink>
      </div>

      <div className="mt-6 flex justify-center gap-1">
        <p>Don't have an account?</p>
        <NavLink
          to="/todo-app/sign-up"
          className="text-gradient-link font-bold"
          onClick={(e) => {
            e.preventDefault();
            navigate('/sign-up', { replace: true });
          }}>
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default SignIn;
