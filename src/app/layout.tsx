import type { Metadata } from 'next';
// import { Barlow } from 'next/font/google';
import './globals.scss';
import ThemeWrapper from '@/components/ThemeContext';

// const barlow = Barlow({
//   variable: '--font-barlow',
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });

export const metadata: Metadata = {
  title: "Archi's Food Admin Dashboard",
  description: "Archi's Food Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeWrapper>{children}</ThemeWrapper>;
}
