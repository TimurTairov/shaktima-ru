/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "sun9-63.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-48.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-13.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-22.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-38.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-8.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-21.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-61.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-74.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun1-21.userapi.com",
      },
      {
        protocol: 'https',
        hostname: "sun9-71.userapi.com",
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
};



export default nextConfig;
