/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure basePath for GitHub Pages (will be portfolio-v2 based on repo name)
  // Comment these out for local development
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio-v2' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-v2' : '',
}

module.exports = nextConfig