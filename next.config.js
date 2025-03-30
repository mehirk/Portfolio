/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add compiler options to suppress hydration warnings in production
  compiler: {
    // Suppress hydration warnings that are caused by style attributes
    // injected by browser extensions or elements like fdprocessedid
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error"],
    } : false,
  },
  // Only include necessary polyfills
  optimizeFonts: true,
}

module.exports = nextConfig 