import { useState, createContext, useContext } from 'react';

const SignOutContext = createContext();

export function SignOutProvider({ children }) {
  const [isSignedOut, setIsSignedOut] = useState(false);

  const clearSignOut = () => setIsSignedOut(false);

  return (
    <SignOutContext.Provider
      value={{ isSignedOut, setIsSignedOut, clearSignOut }}>
      {children}
    </SignOutContext.Provider>
  );
}

export function useSignOut() {
  return useContext(SignOutContext);
}
