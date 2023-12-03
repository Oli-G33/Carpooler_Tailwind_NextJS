'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const isBrowser = typeof window !== 'undefined';

  const storedTheme = isBrowser ? localStorage.getItem('theme') : null;
  const [theme, setTheme] = useState(storedTheme || 'light');

  // Toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Update local storage when the theme changes
  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, isBrowser]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
