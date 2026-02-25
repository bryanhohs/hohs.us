'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import EmotionRegistry from './EmotionRegistry';
import theme from './theme';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <EmotionRegistry>
        <CssBaseline />
          <Paper elevation={1} square sx={{ minHeight: '100vh', background: 'transparent' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              {children}
            </Box>
          </Paper>
        </EmotionRegistry>
      </ThemeProvider>
  );
}
