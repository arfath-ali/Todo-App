import { NavLink } from 'react-router-dom';

const TodoAppNavLinks = ({ navLinkName }) => {
  return (
    <>
      <NavLink
        to={`/${navLinkName.toLowerCase()}`}
        style={({ isActive }) =>
          isActive
            ? {
                backgroundImage: 'var(--color-gradient-button)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }
            : {}
        }
        className="app-text-medium font-bold">
        {navLinkName}
      </NavLink>
    </>
  );
};

export default TodoAppNavLinks;
