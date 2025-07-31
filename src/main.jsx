import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import { TodosProvider } from './context/TodosContext';
import { TodosByPathProvider } from './context/TodosByPathContext';
import { UserProfileProvider } from './context/UserProfileContext';
import { ProfilePictureProvider } from './context/ProfilePictureContext';
import { UsernameProvider } from './context/UsernameContext';
import { SignOutProvider } from './context/SignOutContext';

import App from './App.jsx';
import './assets/styles/App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <UserProfileProvider>
        <SignOutProvider>
          <ThemeProvider>
            <TodosProvider>
              <TodosByPathProvider>
                <ProfilePictureProvider>
                  <UsernameProvider>
                    <App />
                  </UsernameProvider>
                </ProfilePictureProvider>
              </TodosByPathProvider>
            </TodosProvider>
          </ThemeProvider>
        </SignOutProvider>
      </UserProfileProvider>
    </Router>
  </StrictMode>,
);
