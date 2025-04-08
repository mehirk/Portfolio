/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add compiler options to suppress hydration warnings in production
  compiler: {
    // Suppress hydration warnings that are caused by style attributes
    // injected by browser extensions or elements like fdprocessedid
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error"],
    } : false,
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