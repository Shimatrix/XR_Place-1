import { useState } from 'react';
import { PropsWithChildren } from 'react';
import { ThemeContext } from './index';

type Theme = 'light' | 'dark';

const INITIAL_THEME: Theme = 'light';

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(INITIAL_THEME);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
