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
          border: '1.5px solid transparent',
          background: `
            conic-gradient(
              rgba(66, 133, 244, 0.85) 0%,
              rgba(66, 133, 244, 0.85) 25%,
              rgba(52, 168, 83, 0.85) 25%,
              rgba(52, 168, 83, 0.85) 50%,
              rgba(251, 188, 5, 0.85) 50%,
              rgba(251, 188, 5, 0.85) 75%,
              rgba(234, 67, 53, 0.85) 75%,
              rgba(234, 67, 53, 0.85) 100%
            )
          `,
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          boxShadow:
            'inset 0 0 6px rgba(255, 255, 255, 0.3), 0 2px 6px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(4px)',
          animation: 'spin 1s linear infinite',
          margin: 'auto',
        }}
        aria-label="Loading"
      />
    </>
  );
}

export default GoogleSpinner;
