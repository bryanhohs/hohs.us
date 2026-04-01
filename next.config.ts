import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  crossOrigin: 'anonymous',
  devIndicators: false,
  images: {
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
    qualities: [100, 75, 50, 25],
  },
}

export default nextConfig
