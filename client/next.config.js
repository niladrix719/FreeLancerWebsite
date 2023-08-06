/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'fipezo-server.vercel.app' , 'fipezo.com' , 'fipezo', 'fipezo-website']
  },
  env: {
    CAPTCHA_SITE_KEY: process.env.CAPTCHA_SITE_KEY,
    SERVER_URL: process.env.SERVER_URL
  },
}

module.exports = nextConfig
