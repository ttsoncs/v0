/** @type {import('next').NextConfig} */
const nextConfig = {
  // Clean configuration - no external dependencies
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optimize for production
  swcMinify: true,
  // Remove powered by header
  poweredByHeader: false,
}

export default nextConfig
