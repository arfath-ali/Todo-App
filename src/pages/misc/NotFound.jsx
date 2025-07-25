import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="app-text-medium flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-gray-700 dark:bg-black dark:text-gray-400"
      style={{ fontFamily: 'var(--font-josefinSans)' }}>
      <h1 className="app-text-large-tight text-gradient-heading mb-4 font-bold">
        404
      </h1>
      <p className="text-18 mb-6 leading-20">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={() => navigate('/all', { replace: true })}
        className="button-gradient cursor-pointer rounded-[5px] px-6 py-3 font-bold text-black hover:opacity-90">
        Go to Home page
      </button>
    </div>
  );
};

export default NotFound;
