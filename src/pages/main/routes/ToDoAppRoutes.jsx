import { Routes, Route, Navigate } from 'react-router-dom';

import SignUp from '/src/pages/auth/SignUp';
import SignIn from '/src/pages/auth/SignIn';
import ForgetPassword from '/src/pages/auth/ForgetPassword';
import ResetPassword from '/src/pages/auth/ResetPassword';
import TodoItems from '/src/pages/todo/ToDoItems';
import Profile from '/src/pages/profile/Profile';
import NotFound from '/src/pages/misc/NotFound';

const ToDoAppRoutes = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/all" replace />} />

      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/forget-password" element={<ForgetPassword />} />

      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/all" element={<TodoItems />} />

      <Route path="/active" element={<TodoItems />} />

      <Route path="/completed" element={<TodoItems />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ToDoAppRoutes;
