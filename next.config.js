/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com', 'picsum.photos', 'upload.wikimedia.org', 'pixabay.com'],
  },
}

module.exports = nextConfig
