import type { Metadata } from "next";
import config from "./src/config";
import VideoBackground from "./src/background";
import ClientProviders from './src/ClientProviders';
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import "./src/styles.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.meta_title,
  description: config.meta_description,
  keywords: config.meta_keywords,
  authors: [{ name: config.meta_author_name, url: config.meta_author_url }],
  creator: config.meta_creator,
  publisher: config.meta_publisher,
  applicationName: config.meta_title,
  icons: {
    apple: [
      { url: '/assets/icons/apple-touch-icon-57x57.png', sizes: '57x57' },
      { url: '/assets/icons/apple-touch-icon-114x114.png', sizes: '114x114' },
      { url: '/assets/icons/apple-touch-icon-72x72.png', sizes: '72x72' },
      { url: '/assets/icons/apple-touch-icon-144x144.png', sizes: '144x144' },
      { url: '/assets/icons/apple-touch-icon-60x60.png', sizes: '60x60' },
      { url: '/assets/icons/apple-touch-icon-120x120.png', sizes: '120x120' },
      { url: '/assets/icons/apple-touch-icon-76x76.png', sizes: '76x76' },
      { url: '/assets/icons/apple-touch-icon-152x152.png', sizes: '152x152' },
    ],
    icon: [
      { url: '/assets/icons/favicon-196x196.png', sizes: '196x196', type: 'image/png' },
      { url: '/assets/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/icons/favicon-128.png', sizes: '128x128', type: 'image/png' },
    ],
  },
  other: {
    'msapplication-TileColor': '#0a0a0a',
    'msapplication-TileImage': '/assets/icons/mstile-144x144.png',
    'msapplication-square70x70logo': '/assets/icons/mstile-70x70.png',
    'msapplication-square150x150logo': '/assets/icons/mstile-150x150.png',
    'msapplication-wide310x150logo': '/assets/icons/mstile-310x150.png',
    'msapplication-square310x310logo': '/assets/icons/mstile-310x310.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoMono.variable} antialiased`}>
        <ClientProviders>
          <VideoBackground />
          {children}
        </ClientProviders>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
