import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow common development origins including IPv6 loopback to avoid
  // cross-origin blocking for `/_next/*` resources when accessing via [::1]
  allowedDevOrigins: ['http://localhost:3000', 'http://[::1]:3000'],
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false, // fail fast for TS errors
  },

  transpilePackages: ['three'],
};

export default nextConfig;
