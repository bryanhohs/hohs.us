'use client';

import React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Paper, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Container maxWidth="lg" disableGutters sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Paper elevation={1} square sx={{ minHeight: '100vh', background: 'transparent' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                {children}
              </Box>
            </Paper>
          </Container>
        </ThemeProvider>
      </AppRouterCacheProvider>
  );
}
