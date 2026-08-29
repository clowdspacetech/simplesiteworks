import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  // ✅ No experimental flags needed
  // Add other options here if required, e.g.:
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  reactStrictMode: true,
  output: "standalone",
};

export default nextConfig;

