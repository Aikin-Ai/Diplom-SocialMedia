/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn-icons-png.flaticon.com', 'picsum.photos', 'upload.wikimedia.org', 'pixabay.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/feed?id=1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig