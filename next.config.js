/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "poly-trade-admin.onrender.com",
      },
      {
        protocol: "https",
        hostname: "polytrade-admin-jvkg.onrender.com",
      },
    ],
  },
};

module.exports = withPWA(withImages(nextConfig));
