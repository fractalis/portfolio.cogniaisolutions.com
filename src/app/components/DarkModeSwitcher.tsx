'use client';

import { useEffect } from 'react';

const DarkModeSwitcher: React.FC = () => {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const htmlRoot = document.documentElement;

    const handleDarkModeChange = (e: MediaQueryList) => {
      if (e.matches) {
        htmlRoot.classList.add('dark');
      } else {
        htmlRoot.classList.remove('dark');
      }
    };

    const handleChange = (e: MediaQueryListEvent) => {
      handleDarkModeChange(e.target as MediaQueryList);
    };

    handleDarkModeChange(prefersDarkScheme);
    prefersDarkScheme.addEventListener('change', handleChange);

    return () => {
      prefersDarkScheme.removeEventListener('change', handleChange);
    };
  }, []);

  return null;
};

export default DarkModeSwitcher;