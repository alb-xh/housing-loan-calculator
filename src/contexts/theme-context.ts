import { createContext } from 'react';

export type Theme = 'light' | 'dark';
export type ThemeContextValue = {
  theme: Theme, 
  setTheme: (language: Theme) => void,
};

export const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);
