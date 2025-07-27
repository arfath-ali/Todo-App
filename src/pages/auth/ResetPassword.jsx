import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, NavLink } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { useTheme } from '/src/context/ThemeContext';

import { useWindowSize } from '/src/hooks/useWindowSize.js';

import axiosInstance from '/src/services/api.js';

import displayPasswordIcon from '/src/assets/images/icons/icon-password-display.png';
import displayPasswordIconDark from '/src/assets/images/icons/icon-password-display-dark.png';
import hidePasswordIcon from '/src/assets/images/icons/icon-password-hide.png';
import hidePasswordIconDark from '/src/assets/images/icons/icon-password-hide-dark.png';

const ResetPassword = () => {
  const navigate = useNavigate();
  const windowWidth = useWindowSize();

  const { theme } = useTheme();

  const [newPassword, setNewPassword] = useState('');
  const [isNewPasswordValid, setIsNewPasswordValid] = useState();
  const [isPasswordFieldFocused, setIsPasswordFieldFocused] = useState(true);
  const [displayPassword, setDisplayPassword] = useState(false);

  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isPasswordMatched, setIsPasswordMatched] = useState();
  const [isConfirmPasswordFieldFocused, setIsConfirmPasswordFieldFocused] =
    useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Reset Password – ToDo App';
  }, []);

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      navigate('/sign-in', { replace: true });
    }
  }, [token, navigate]);

  const checkPassword = (passwordInput) => {
    setNewPassword(passwordInput);

    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z0-9a-z!@#$%^&*]{8,}$/;
    const passwordValidity = regex.test(passwordInput);

    setIsNewPasswordValid(passwordValidity);
  };

  const validatePasswordMatch = (confirmPasswordInput) => {
    setConfirmNewPassword(confirmPasswordInput);

    setIsPasswordMatched(confirmPasswordInput === newPassword);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmNewPassword) {
      setFormError('All fields are required.');
      return;
    }
    if (isNewPasswordValid && isPasswordMatched) {
      setIsLoading(true);
      setFormError('');

      setTimeout(async () => {
        try {
          await axiosInstance.post('/api/reset-password', {
            token,
            newPassword,
          });
          setIsSubmitted(true);
        } catch (err) {
          if (err.response) {
            setFormError(err.response.data.error);
          } else {
            setFormError('Something went wrong. Please try again later.');
          }
        } finally {
          setIsLoading(false);
        }
      }, 1000);
    }
  };

  return (
    <div className="app-text-medium">
      {!isSubmitted && (
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-center">
            <span className="text-gradient-heading app-text-large-tight">
              Reset Your Password
            </span>
          </h1>

          <form
            onSubmit={(e) => handleResetPassword(e)}
            className="relative max-w-[300px] min-w-[300px]">
            {formError && (
              <div className="absolute top-4 w-full text-center">
                <p className="text-error">{formError}</p>
              </div>
            )}

            <div className="relative mt-18">
              <fieldset
                className={`${!newPassword ? 'border-light-grayish-blue' : isPasswordFieldFocused ? 'border-light-grayish-blue' : isNewPasswordValid ? 'border-light-grayish-blue' : 'border-error-red'} flex flex-col rounded-[5px] border-1`}>
                <legend htmlFor="password" className="legend-base">
                  New Password
                </legend>
                <div className="flex items-center justify-between">
                  <input
                    type={`${displayPassword ? 'text' : 'password'}`}
                    id="password"
                    name="password"
                    autoComplete="off"
                    required
                    placeholder="Enter password"
                    onKeyDown={(e) => {
                      if (e.key === ' ') e.preventDefault();
                    }}
                    onFocus={() => setIsPasswordFieldFocused(true)}
                    onChange={(e) => checkPassword(e.target.value)}
                    onBlur={() => setIsPasswordFieldFocused(false)}
                    value={newPassword}
                    className="flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"
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

              {newPassword &&
                !isNewPasswordValid &&
                !isPasswordFieldFocused && (
                  <div
                    className={`${windowWidth >= 768 ? 'absolute' : ''} desktop:left-[-280px] top-0 left-[-200px]`}>
                    <p className="text-error desktop:max-w-[300px] tablet:max-w-[200px] max-w-[300px]">
                      Password must contain at least 8 characters, including
                      uppercase, lowercase, number, and special character.
                    </p>
                  </div>
                )}
            </div>

            <div className="relative mt-4">
              <fieldset
                className={`${!confirmNewPassword ? 'border-light-grayish-blue' : isConfirmPasswordFieldFocused ? 'border-light-grayish-blue' : isPasswordMatched ? 'border-light-grayish-blue' : 'border-error-red'} flex flex-col rounded-[5px] border-1`}>
                <legend htmlFor="confirm-password" className="legend-base">
                  Confirm New Password
                </legend>
                <div className="flex items-center justify-between">
                  <input
                    type={`${showConfirmPassword ? 'text' : 'password'}`}
                    id="confirm-password"
                    name="password-confirmation"
                    autoComplete="off"
                    required
                    placeholder="Confirm your password"
                    onKeyDown={(e) => {
                      if (e.key === ' ') e.preventDefault();
                    }}
                    onFocus={() => setIsConfirmPasswordFieldFocused(true)}
                    onChange={(e) => validatePasswordMatch(e.target.value)}
                    onBlur={() => setIsConfirmPasswordFieldFocused(false)}
                    value={confirmNewPassword}
                    className="flex-grow rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"
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

              {confirmNewPassword &&
                !isPasswordMatched &&
                !isConfirmPasswordFieldFocused && (
                  <div className="absolute">
                    <p className="text-error">Passwords do not match.</p>
                  </div>
                )}
            </div>

            <button className="button-gradient mt-10 flex w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black">
              {isLoading ? (
                <ClipLoader color="#fff" size={24} />
              ) : (
                'Reset Password'
              )}
            </button>
          </form>
        </div>
      )}
      {isSubmitted && (
        <div className="flex h-screen flex-col items-center justify-center text-center">
          <h1 className="app-text-large-tight">
            <span className="text-success">Password changed successfully!</span>
          </h1>
          <p className="mt-6">You can now sign in with your new password.</p>

          <div className="mt-6 flex justify-center gap-1">
            <p>Go to</p>

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
      )}
    </div>
  );
};

export default ResetPassword;
