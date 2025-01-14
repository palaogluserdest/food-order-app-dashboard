export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}
