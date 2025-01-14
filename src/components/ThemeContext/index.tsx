'use client';
import { ThemeContext, ThemeContextProvider } from '@/contexts/ThemeContext';
import { FC, useContext } from 'react';
import { Barlow } from 'next/font/google';
import styles from './ThemeContext.module.scss';

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

type ThemeContextProps = {
  children: React.ReactNode;
};

const ThemeWrapper: FC<ThemeContextProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext) ?? { theme: 'light' };

  return (
    <ThemeContextProvider>
      <html lang="en" data-theme={theme}>
        <body className={`${barlow.variable}`}>
          <div className={styles.container}>
            <div className={styles.sidebar}>sidebar</div>
            <div className={styles.main}></div>
          </div>
          {children}
        </body>
      </html>
    </ThemeContextProvider>
  );
};

export default ThemeWrapper;
