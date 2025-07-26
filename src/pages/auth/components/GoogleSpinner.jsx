function GoogleSpinner() {
  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: '4px solid transparent',
          background:
            'conic-gradient(#4285F4, #34A853, #FBBC05, #EA4335, #4285F4)',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'spin 1s linear infinite',
          margin: 'auto',
        }}
        aria-label="Loading"
      />
    </>
  );
}

export default GoogleSpinner;
