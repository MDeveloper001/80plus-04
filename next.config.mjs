/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for Netlify static export
  },
};

module.exports = nextConfig;
