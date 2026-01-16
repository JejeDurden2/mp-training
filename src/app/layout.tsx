import type { Metadata } from 'next';
import './globals.css';

// TODO: Customize metadata when starting your project
export const metadata: Metadata = {
  title: 'Your App Name - Change Me',
  description: 'Your app description - Change Me',
  keywords: ['keyword1', 'keyword2'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your App Name',
    description: 'Your app description',
    type: 'website',
    // url: 'https://yourapp.com',
    // images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your App Name',
    description: 'Your app description',
    // images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
