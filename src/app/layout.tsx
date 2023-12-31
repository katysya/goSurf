import Sidebar from '@/components/layout/Sidebar/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Fira_Sans } from 'next/font/google';

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'GO SURF',
  description: 'Surf',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        {/* <Sidebar /> */}
        {children}
      </body>
    </html>
  );
}
