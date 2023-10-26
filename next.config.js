/** @type {import('next').NextConfig} */
// const withOptimizedImages = require('next-optimized-images');
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  // withOptimizedImages: {
  //   optimizeImages : true,
  //   optimizeImagesInDev: true,
  //   handleImages: [/.*\.jpg$/, /.*\.webp$/],
  //   imagesFolder: '/public/images',
  // },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
