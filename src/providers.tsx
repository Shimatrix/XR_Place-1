import { PropsWithChildren } from 'react';
import { ThemeContextProvider } from './contexts/theme/provider';

const Providers = ({ children }: PropsWithChildren) => (
  <ThemeContextProvider>{children}</ThemeContextProvider>
);

export default Providers;
