import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Enable React strict mode for catching potential issues
  reactStrictMode: true,

  // ✅ Ensure build checks are not skipped
  eslint: {
    ignoreDuringBuilds: false,
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  // ✅ Transpile packages (for Three.js / R3F compatibility)
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],

  // ✅ Enable gzip compression & disable the X-Powered-By header
  compress: true,

  poweredByHeader: false,

  // ✅ Avoid leaking source maps in production
  productionBrowserSourceMaps: false,

  // ✅ Optimize CSS usage and minimize preload warnings
  experimental: {
    // Inline critical CSS & merge small CSS chunks to prevent preload spam
    optimizeCss: true,

    // Optimize package imports to avoid large unused chunks
    optimizePackageImports: ['lucide-react'],
  },

  // ✅ Turbopack aliasing for better module resolution
  turbopack: {
    resolveAlias: {
      '@styles': './src/styles',
      '@components': './src/components',
      '@hooks': './src/hooks',
      '@functions': './src/functions',
    },
    rules: {},
  },

  // ✅ Configure custom headers for long-term caching of static assets
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
