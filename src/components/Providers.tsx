import { ThemeProvider } from '@wits/next-themes';
import { ThemeProviderProps } from '@wits/next-themes/dist/types';

export function Providers({ children, ...props }: ThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
