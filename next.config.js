/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.ctfassets.net',
      },
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}
