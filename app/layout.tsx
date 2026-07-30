import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display,Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ToastProvider } from '@/components/providers/toast-provider';
import { NavigationEvents } from '@/components/navigation-events';
import { MainLayout } from '@/components/layouts/main-layout';
import { Suspense } from 'react';
import LoadingPage from './LoadingPage';

// Load fonts with CSS variable names
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'], // Optional: define weights you want to use
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Prayas NGO',
  description:
    'Prayas NGO is committed to creating sustainable social impact through community development, education, and health initiatives.',
  keywords: [
    'Prayas NGO',
    'Non-Profit',
    'Charity',
    'Community Development',
    'Social Work',
    'Education',
    'Health',
  ],
  authors: [{ name: 'Prayas NGO', url: 'https://prayas.ngo' }],
  creator: 'Prayas NGO',
  metadataBase: new URL('https://prayas.ngo'),
  openGraph: {
    title: 'Prayas NGO',
    description:
      'Join Prayas NGO in making a difference. Explore our initiatives and support our mission.',
    url: 'https://prayas.ngo',
    siteName: 'Prayas NGO',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Prayas NGO - Social Impact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prayas NGO',
    description:
      'Empowering communities through education, health, and support. Be a part of the change.',
    images: ['/og-image.png'],
    creator: '@prayasngo',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        />
        <script type="text/javascript">
          {`(function () {
            emailjs.init({
              publicKey: "-OBc7GDCXkLBa-Ot9",
            });
          })();`}
        </script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${poppins.variable} antialiased`}>
        <Suspense fallback={<LoadingPage />}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <ToastProvider />
            <NavigationEvents />
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
