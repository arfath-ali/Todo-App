import ToDoAppNavLinks from './ToDoAppNavLinks';

const ToDoAppNavigation = () => {
  const navLinkNames = ['All', 'Active', 'Completed'];

  return (
    <nav className="tablet:gap-[18px] mobileLarge:gap-26 flex items-center justify-center gap-15">
      {navLinkNames.map((linkName, index) => (
        <ToDoAppNavLinks key={index} navLinkName={linkName} />
      ))}
    </nav>
  );
};

export default ToDoAppNavigation;
