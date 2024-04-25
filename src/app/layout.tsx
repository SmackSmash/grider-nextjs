import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grider Next.js',
  description: "Let's learn this fast"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Link href='/'>Home</Link>
        <Link href='/performance'>Performance</Link>
        <Link href='/reliability'>Reliability</Link>
        <Link href='/scale'>Scale</Link>
        {children}
      </body>
    </html>
  );
}
