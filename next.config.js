/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  output: 'export',
  assetPrefix: './',
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  },
}

export default nextConfig
