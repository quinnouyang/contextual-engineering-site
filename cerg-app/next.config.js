const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withOptimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
};

module.exports = withPlugins([
  [withBundleAnalyzer],
  // [withOptimizedImages],
  nextConfig,
]);
