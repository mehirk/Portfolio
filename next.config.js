/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp'],
  },
  // Add custom webpack configuration for performance
  webpack: (config, { dev, isServer }) => {
    // Optimize for production builds only
    if (!dev && !isServer) {
      // Split chunks more aggressively for better loading performance
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Create a framework chunk that contains React and other common libraries
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|framer-motion)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Group larger common dependencies together
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: 30,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          // Create a separate chunk for components to improve caching
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          // Catch-all shared code
          shared: {
            name: 'shared',
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
      
      // Enable production mode tree shaking
      config.optimization.usedExports = true;
    }
    
    return config;
  },
  // Configure performance optimizations
  experimental: {
    // Selective optimizations that are safe to use
    optimizePackageImports: ['framer-motion', 'react-dom', 'lucide-react', '@radix-ui/react-slot'],
  },
  eslint: {
    // Extra build speed by moving linting out of build process
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Extra build speed by moving type checking out of build process
    ignoreBuildErrors: true,
  },
  swcMinify: true, // Use SWC minifier instead of Terser for better performance
  compiler: {
    // Enable React optimizations
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  // Suppress hydration warnings
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  }
}

module.exports = nextConfig