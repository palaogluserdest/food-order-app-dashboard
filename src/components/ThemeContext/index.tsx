'use client';
import { ThemeContext, ThemeContextProvider } from '@/contexts/ThemeContext';
import { FC, useContext } from 'react';
import { Barlow } from 'next/font/google';
import Navbar from '@/components/Navbar';
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
  const { theme } = useContext(ThemeContext) ?? { theme: 'dark' };

  return (
    <ThemeContextProvider>
      <html lang="en" data-theme={theme}>
        <body className={`${barlow.variable}`}>
          <div className={styles.container}>
            <nav className={styles.sidebar}>
              <Navbar />
            </nav>
            <main className={styles.main}>{children}</main>
          </div>
        </body>
      </html>
    </ThemeContextProvider>
  );
};

export default ThemeWrapper;
