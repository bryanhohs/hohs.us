import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  cacheComponents: true,
  compress: true,
  crossOrigin: "anonymous",
  devIndicators: false,
  reactStrictMode: false,
};

export default nextConfig;
