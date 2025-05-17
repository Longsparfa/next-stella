import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Stellaux Global | Premium Event Planning',
    template: '%s | Stellaux Global'
  },
  description: 'Creating unforgettable experiences for your special occasions',
  keywords: ['events', 'wedding', 'Stellaux Global', 'planning'],
  themeColor: '#4f46e5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        {children}
      </body>
    </html>
  );
}