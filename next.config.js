/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    //   formats: ["image/avif", "image/webp"],
    // domains: ['img.clerk.com'],
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: '*',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'http',
        // hostname: '*',
        hostname: 'img.clerk.com',
      },
    ],
  },
};

module.exports = nextConfig;
