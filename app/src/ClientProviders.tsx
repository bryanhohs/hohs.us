'use client'

import { Box, Paper } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import type React from 'react'
import theme from './theme'

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper
          elevation={1}
          square
          sx={{ minHeight: '100vh', background: 'transparent' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            {children}
          </Box>
        </Paper>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
