import { useEffect, useRef } from 'react';

export const useScrollPosition = (scrollRef, pageKey) => {
  const positions = useRef({});

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !pageKey) return;

    const savedPosition = positions.current[pageKey] || 0;
    el.scrollTop = savedPosition;

    const handleScroll = () => {
      positions.current[pageKey] = el.scrollTop;
    };

    el.addEventListener('scroll', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [pageKey, scrollRef]);
};
