import { NavLink } from 'react-router-dom';

const ToDoAppNavLinks = ({ navLinkName }) => {
  return (
    <>
      <NavLink
        to={`/${navLinkName.toLowerCase()}`}
        style={({ isActive }) =>
          isActive ? { color: 'var(--color-bright-blue)' } : {}
        }
        className="app-text-medium font-bold">
        {navLinkName}
      </NavLink>
    </>
  );
};

export default ToDoAppNavLinks;
