/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      { hostname: "raw.githubusercontent.com" },
      { hostname: "www.google.com" },
    ],
  },
};
