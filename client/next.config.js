/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  env: {
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY
  },
}

module.exports = nextConfig
