/** @type {import('next').NextConfig} */
const { resolve } = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname)
    }
    return config
  }
}

module.exports = nextConfig
