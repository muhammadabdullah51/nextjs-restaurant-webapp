import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'websitedemos.net',
        pathname: '/**', // allow all image paths
      },
    ],
  },
};

export default nextConfig;
