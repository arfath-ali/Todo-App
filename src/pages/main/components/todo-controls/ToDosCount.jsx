const TodosCount = ({ todos = [] }) => {
  const count = todos?.length || 0;

  return (
    <div className="app-text-small">
      {count === 1 ? (
        <p>
          {' '}
          <span className="font-bold">{count}</span> item left
        </p>
      ) : (
        <p>
          <span className="font-bold">{count}</span> items left
        </p>
      )}
    </div>
  );
};

export default TodosCount;
