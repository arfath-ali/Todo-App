import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { useUserProfile } from '/src/context/UserProfileContext';
import { useTheme } from '/src/context/ThemeContext';
import { useUsername } from '/src/context/UsernameContext';

import { useWindowSize } from '/src/hooks/useWindowSize.js';

import axiosInstance from '/src/services/api.js';

import successIcon from '/src/assets/images/icons/icon-success.png';
import displayPasswordIcon from '/src/assets/images/icons/icon-password-display.png';
import displayPasswordIconDark from '/src/assets/images/icons/icon-password-display-dark.png';
import hidePasswordIcon from '/src/assets/images/icons/icon-password-hide.png';
import hidePasswordIconDark from '/src/assets/images/icons/icon-password-hide-dark.png';

const SignUp = () => {
  useEffect(() => {
    document.title = 'Sign Up – ToDo App';
  }, []);

  const navigate = useNavigate();
  const windowWidth = useWindowSize();

  const { loadUserProfile } = useUserProfile();
  const { theme } = useTheme();

  const [fullName, setFullName] = useState('');

  const {
    username,
    setUsername,
    isUsernameFieldFocused,
    setIsUsernameFieldFocused,
    isUsernameValid,
    isSearchingUsername,
    isUsernameAvailable,
    setIsUsernameAvailable,
    usernameStatus,
    setUsernameStatus,
  } = useUsername();

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [isEmailFieldFocused, setIsEmailFieldFocused] = useState(true);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState();
  const [isPasswordFieldFocused, setIsPasswordFieldFocused] = useState(true);
  const [displayPassword, setDisplayPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatched, setIsPasswordMatched] = useState();
  const [isConfirmPasswordFieldFocused, setIsConfirmPasswordFieldFocused] =
    useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [signUpError, setSignUpError] = useState('');
  const [isSubmittingSignUp, setIsSubmittingSignUp] = useState(false);

  const handleFullName = (fullNameInput) => {
    const refinedFullName = fullNameInput.replace(/\s+/g, ' ');
    setFullName(refinedFullName);
  };

  useEffect(() => {
    setUsername('');
    setIsUsernameAvailable(false);
  }, []);

  const handleUsernameBlur = () => {
    setIsUsernameFieldFocused(false);
    setUsernameStatus('');
  };

  const checkEmail = (emailInput) => {
    setSignUpError('');
    setEmail(emailInput.toLowerCase());

    const regex = /^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/;
    const emailValidity = regex.test(emailInput);

    setIsEmailValid(emailValidity);
  };

  const checkPassword = (passwordInput) => {
    setPassword(passwordInput);

    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/;
    const passwordValidity = regex.test(passwordInput);

    setIsPasswordValid(passwordValidity);
  };

  const validatePasswordMatch = (confirmPasswordInput) => {
    setConfirmPassword(confirmPasswordInput);

    setIsPasswordMatched(confirmPasswordInput === password);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName || !username || !email || !password || !confirmPassword) {
      setSignUpError('All fields are required.');
      return;
    }

    if (isUsernameValid && !isUsernameAvailable) {
      setSignUpError('Username already taken');
    }

    if (
      isUsernameValid &&
      isUsernameAvailable &&
      isEmailValid &&
      isPasswordValid &&
      isPasswordMatched
    ) {
      setUsernameStatus('');
      setIsSubmittingSignUp(true);

      setTimeout(async () => {
        try {
          await axiosInstance.post('/api/signup', {
            fullName,
            username,
            email,
            password,
          });

          await loadUserProfile();

          navigate('/all', { replace: true });
        } catch (err) {
          if (err.response) {
            setSignUpError(err.response.data.error);
          } else {
            setSignUpError('Something went wrong. Please try again later.');
          }
        } finally {
          setUsername('');
          setIsSubmittingSignUp(false);
        }
      }, 1000);
    }
  };

  return (
    <div className="app-text-medium">
      <form
        className="desktop:mt-10 relative mx-auto mt-6 flex max-w-[300px] min-w-[300px] flex-col gap-4"
        onSubmit={(e) => {
          handleSignUp(e);
        }}>
        {signUpError && (
          <div className="text-error desktop:mb-2 absolute bottom-full mx-auto w-full text-center">
            <p>{signUpError}</p>
          </div>
        )}

        {usernameStatus &&
          (isUsernameAvailable ? (
            <div className="text-success desktop:mb-3 absolute bottom-full mx-auto w-full text-center">
              <p>{usernameStatus}</p>
            </div>
          ) : (
            <div className="text-error desktop:mb-3 absolute bottom-full mx-auto w-full text-center">
              <p>{usernameStatus}</p>
            </div>
          ))}

        <div>
          <fieldset className="flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700">
            <legend htmlFor="fullName" className="legend-base">
              Full Name
            </legend>
            <input
              type="text"
              id="fullName"
              name="fullName"
              autoComplete="off"
              placeholder="Enter your full name"
              onChange={(e) => handleFullName(e.target.value)}
              onBlur={() => setFullName(fullName.trim())}
              value={fullName}
              className="rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"
            />
          </fieldset>
        </div>

        <div className="relative">
          <fieldset className="flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700">
            <legend htmlFor="username" className="legend-base">
              Username
            </legend>
            <div className="flex items-center justify-between">
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="off"
                placeholder="Enter username"
                onKeyDown={(e) => {
                  if (e.key === ' ') e.preventDefault();
                }}
                onFocus={() => setIsUsernameFieldFocused(true)}
                onChange={(e) => {
                  setSignUpError('');
                  setUsername(e.target.value);
                  setUsernameStatus('');
                  setIsUsernameAvailable(false);
                }}
                onBlur={() => handleUsernameBlur()}
                value={username}
                maxLength={15}
                className="rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"
              />
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
          </fieldset>

          {username && !isUsernameValid && !isUsernameFieldFocused && (
            <div
              className={`${windowWidth >= 768 ? 'absolute' : ''} desktop:right-[-320px] top-0 right-[-230px]`}>
              <p className="text-error desktop:max-w-[300px] tablet:max-w-[200px] max-w-[300px]">
                Username must be at least 3 characters long, start with a
                lowercase letter or underscore(_), include at least one number,
                use only lowercase letters, numbers, dots(.), or underscores(_),
                and not end with a dot(.).
              </p>
            </div>
          )}
        </div>

        <div>
          <fieldset className="flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700">
            <legend htmlFor="email" className="legend-base">
              Email Address
            </legend>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              onKeyDown={(e) => {
                if (e.key === ' ') e.preventDefault();
              }}
              onFocus={() => setIsEmailFieldFocused(true)}
              onChange={(e) => checkEmail(e.target.value)}
              onBlur={() => setIsEmailFieldFocused(false)}
              value={email}
              className="rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"
            />
          </fieldset>

          {email && !isEmailValid && !isEmailFieldFocused && (
            <div>
              <p className="text-error">Please enter a valid email address.</p>
            </div>
          )}
        </div>

        <div className="relative">
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
                placeholder="Enter password"
                onKeyDown={(e) => {
                  if (e.key === ' ') e.preventDefault();
                }}
                onFocus={() => setIsPasswordFieldFocused(true)}
                onChange={(e) => checkPassword(e.target.value)}
                onBlur={() => setIsPasswordFieldFocused(false)}
                value={password}
                className="rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"
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

          {password && !isPasswordValid && !isPasswordFieldFocused && (
            <div
              className={`${windowWidth >= 768 ? 'absolute' : ''} desktop:left-[-280px] top-0 left-[-200px]`}>
              <p className="text-error desktop:max-w-[300px] tablet:max-w-[200px] max-w-[300px]">
                Password must contain at least 8 characters, including
                uppercase, lowercase, number, and special character.
              </p>
            </div>
          )}
        </div>

        <div>
          <fieldset className="flex flex-col rounded-[5px] border-1 border-black dark:border-gray-700">
            <legend htmlFor="confirm-password" className="legend-base">
              Confirm Password
            </legend>
            <div className="flex items-center justify-between">
              <input
                type={`${showConfirmPassword ? 'text' : 'password'}`}
                id="confirm-password"
                name="password-confirmation"
                autoComplete="off"
                placeholder="Confirm your password"
                onKeyDown={(e) => {
                  if (e.key === ' ') e.preventDefault();
                }}
                onFocus={() => setIsConfirmPasswordFieldFocused(true)}
                onChange={(e) => validatePasswordMatch(e.target.value)}
                onBlur={() => setIsConfirmPasswordFieldFocused(false)}
                value={confirmPassword}
                className="rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-40 dark:placeholder:text-gray-400"
              />
              <img
                src={
                  showConfirmPassword
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
                  const input = document.getElementById('confirm-password');
                  const position = input.selectionStart;
                  setShowConfirmPassword((prev) => !prev);
                  setTimeout(() => {
                    input.setSelectionRange(position, position);
                    input.focus();
                  }, 0);
                }}
              />
            </div>
          </fieldset>

          {confirmPassword &&
            !isPasswordMatched &&
            !isConfirmPasswordFieldFocused && (
              <div>
                <p className="text-error">Passwords do not match.</p>
              </div>
            )}
        </div>

        <button className="button-gradient mt-2 flex cursor-pointer items-center justify-center rounded-[5px] py-4.5 dark:text-black">
          {isSubmittingSignUp ? (
            <ClipLoader color="#fff" size={24} />
          ) : (
            'Sign Up'
          )}
        </button>
      </form>

      <div className="mt-6 flex justify-center gap-1">
        <p>Already have an account?</p>

        <NavLink
          to="/todo-app/sign-in"
          onClick={(e) => {
            e.preventDefault();
            navigate('/sign-in', { replace: true });
          }}
          className="text-gradient-link font-bold">
          Sign In
        </NavLink>
      </div>
    </div>
  );
};
export default SignUp;
