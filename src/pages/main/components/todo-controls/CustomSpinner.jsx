function Spinner() {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: '4px solid transparent',
          borderTop: '4px solid',
          borderImageSlice: 1,
          borderImageSource: 'var(--color-gradient-button)',
          animation: 'spin 1s linear infinite',
        }}
      />
    </>
  );
}

export default Spinner;
