/** @type {import('next').NextConfig} */
const nextConfig = {
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
