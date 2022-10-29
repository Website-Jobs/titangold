/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upcdn.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
