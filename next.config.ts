import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  cacheComponents: false,
  compress: true,
  reactStrictMode: false,
  crossOrigin: 'anonymous',
  images: {
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
    qualities: [100, 75, 50, 25],
  },
};

export default nextConfig;