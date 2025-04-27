import { createContext, useContext } from 'react';

type Theme = 'light' | 'dark';
type ContextValue = { theme: Theme; toggleTheme: () => void };
export const ThemeContext = createContext<ContextValue | null>(null);

export const useThemeContext = () => {
  const result = useContext(ThemeContext);

  return result;
};
