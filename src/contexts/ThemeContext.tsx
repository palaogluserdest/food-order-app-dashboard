'use client';
import { Theme, ThemeContextProviderProps, ThemeContextType } from '@/types/theme';
import { createContext, FC, useState } from 'react';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider: FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeContextProvider };
