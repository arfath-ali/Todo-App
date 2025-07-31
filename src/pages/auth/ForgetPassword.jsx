import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import axiosInstance from '/src/services/api.js';

const ForgetPassword = () => {
  useEffect(() => {
    document.title = 'Forgot Password – Todo App';
  }, []);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState();
  const [isEmailFieldFocused, setIsEmailFieldFocused] = useState(true);

  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checkEmail = (emailInput) => {
    setFormError('');
    setEmail(emailInput.toLowerCase());

    const regex = /^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/;
    const emailValidity = regex.test(emailInput);

    setIsEmailValid(emailValidity);
  };

  const handleResetLink = async (e) => {
    e.preventDefault();

    if (!email) setFormError('Please enter your email');

    if (isEmailValid) {
      setIsLoading(true);
      setFormError('');

      setTimeout(async () => {
        try {
          await axiosInstance.post('/api/forgot-password', { email });
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
    <div
      className={`${isSubmitted ? 'bg-gray-300 dark:bg-gray-900' : ''} app-text-medium flex h-screen items-center justify-center`}>
      {!isSubmitted && (
        <div className="relative">
          <h1 className="text-gradient-heading app-text-large-tight mb-18 text-center">
            Forgot Password?
          </h1>

          {formError && (
            <div className="absolute top-13 w-full text-center">
              <p className="text-error">{formError}</p>
            </div>
          )}

          <p className="text-18 tracking-negative-17 font-weight-regular mb-6 max-w-[300px] text-center leading-18">
            Enter your email address below and we'll send you a link to reset
            your password:
          </p>

          <form
            className="mx-auto max-w-[300px]"
            onSubmit={(e) => handleResetLink(e)}>
            <div className="relative">
              <fieldset
                className={`${!email ? 'border-light-grayish-blue' : isEmailFieldFocused ? 'border-light-grayish-blue' : isEmailValid ? 'border-light-grayish-blue' : 'border-error-red'} flex flex-col rounded-[5px] border-1`}>
                <legend htmlFor="email" className=" legend-base">
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
                  className="rounded-[5px] py-3 pl-3 outline-none placeholder:text-black placeholder:opacity-50 dark:placeholder:text-gray-400"
                />
              </fieldset>

              {email && !isEmailValid && !isEmailFieldFocused && (
                <div className="absolute">
                  <p className="text-error">
                    Please enter a valid email address.
                  </p>
                </div>
              )}
            </div>

            <button
              className="button-gradient mt-8 flex w-full cursor-pointer items-center justify-center rounded-[5px] py-4.5 outline-none dark:text-black"
              type="submit">
              {isLoading ? (
                <ClipLoader color="#fff" size={24} />
              ) : (
                'Send reset link'
              )}
            </button>
          </form>

          <div className="mt-6 flex justify-center gap-1">
            <p>Back to</p>

            <NavLink
              to="/sign-in"
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

      {isSubmitted && (
        <div className="text-center">
          <h1 className="app-text-large-tight text-success mb-6">Success!</h1>
          <p>If this email is registered, you will receive a reset link.</p>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
