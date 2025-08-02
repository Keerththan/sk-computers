// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ❗ This should disable ESLint during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
