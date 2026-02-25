import type { Metadata } from "next";
import VideoBackground from "./src/background";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';
import EmotionRegistry from './src/EmotionRegistry';
import responsiveTheme from './src/theme';
import Icons from "./src/icons";
import "./globals.css";
import "./src/styles.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryan C. Hohs",
  description: "Bryan C. Hohs' personal website.",
  keywords: "hohs, bryan hohs, bryanhohs, bryanchohs",
  authors: [{ name: "Bryan C. Hohs", url: "https://www.hohs.us" }],
  creator: "Bryan C. Hohs",
  publisher: "Bryan C. Hohs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${notoMono.variable} antialiased`}
      >
          <Icons />
            <ThemeProvider theme={responsiveTheme} defaultMode="light">
              <EmotionRegistry>
                <VideoBackground />
                  <Paper elevation={1} square={true} sx={{ minHeight: '100vh', background: 'transparent' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                      }}>
                        {children}
                    </Box>
                  </Paper>
                </EmotionRegistry>
              </ThemeProvider>
            <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}
