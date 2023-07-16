import Head from 'next/head';
import '../css/main.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to Develop Bharat!',
  description:
    'Welcome to Develop Bharat: We Develop Products That Serve Humanity. Join us to Empower a Self-Reliant Nation through Digital Innovation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicons and Site Manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/meta/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
        <link rel="manifest" href="/meta/developbharat.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
