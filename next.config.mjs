/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '10guards.com',
        port: '',
        pathname: '/**',
      },
    ],
  },};

export default nextConfig;
