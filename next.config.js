const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_SERVER_URL}`, 'loremflickr.com']
  },
  reactStrictMode: true
};

module.exports = nextConfig;
