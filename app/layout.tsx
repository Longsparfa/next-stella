import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Stella Events | Premium Event Planning',
    template: '%s | Stella Events'
  },
  description: 'Creating unforgettable experiences for your special occasions',
  keywords: ['events', 'wedding', 'corporate', 'planning'],
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