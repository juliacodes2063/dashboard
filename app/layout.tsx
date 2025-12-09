import type { Metadata } from 'next';
import { openSans, fixelDisplay } from './fonts';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'Location-Based Forecasting',
  description: 'Location-Based Forecasting',
  icons: {
    icon: [
      {
        url: '/favicon-light.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-dark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  type Theme = 'light' | 'dark';

  const defaultTheme = 'light' as Theme;

  return (
    <html lang="en" className={defaultTheme === 'dark' ? 'dark' : ''}>
      <body
        className={`${openSans.variable} ${fixelDisplay.variable} antialiased`}
      >
        <div className="min-h-screen flex">
          <Sidebar />

          <div className="flex-1 flex flex-col h-screen min-w-0">
            <Header />
            <main className="flex-1 overflow-auto min-w-0">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
