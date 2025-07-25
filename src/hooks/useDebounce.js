import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setVersion((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return [debouncedValue, version];
};

export default useDebounce;
