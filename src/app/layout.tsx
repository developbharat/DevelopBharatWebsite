import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';
import { Providers } from '~components/Providers';
import { SiteFooter } from '~components/SiteFooter';
import { SiteHeader } from '~components/SiteHeader';
import { fontSans } from '~lib/fonts';
import { cn } from '~lib/utils';
import { SiteSettings } from '~settings/site';
import '../css/main.css';
import { ServerThemeProvider } from '@wits/next-themes';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  title: { default: SiteSettings.name, template: `%s - ${SiteSettings.name}` },
  description: SiteSettings.description,
  keywords: ['Develop Bharat', 'Develop Bharat Website', 'India', 'Bharat'],
  authors: [{ name: 'Develop Bharat', url: 'https://www.developbharat.com' }],
  creator: 'Develop Bharat',

  metadataBase: new URL(SiteSettings.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SiteSettings.url,
    title: SiteSettings.name,
    description: SiteSettings.description,
    siteName: SiteSettings.name,
    images: [{ url: SiteSettings.ogUrl, width: 1200, height: 600, alt: SiteSettings.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteSettings.name,
    description: SiteSettings.description,
    images: [SiteSettings.ogUrl],
    creator: '@shadcn',
  },
  icons: { icon: '/meta/logo.svg', shortcut: '/meta/favicon-16x16.png', apple: '/meta/apple-touch-icon.png' },
  manifest: `${SiteSettings.url}/meta/developbhrat.webmanifest`,
  verification: { google: 'FjY0frqHCJQTIT5QuG9zrCZdj7PK0-GoVX0UG2ay_HU' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ServerThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <html lang="en">
        <body
          className={cn(
            'min-h-screen bg-buttercup-50 dark:bg-gradient-to-t dark:from-[#434343] dark:to-[#000000] font-sans antialiased',
            fontSans.variable,
          )}>
          <Providers attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1 py-6 relative">{children}</div>
              <SiteFooter />
            </div>
          </Providers>
          <Analytics />
        </body>
      </html>
    </ServerThemeProvider>
  );
}
