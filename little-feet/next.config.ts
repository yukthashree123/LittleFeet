import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "images.pexels.com",
      "unsplash.com",
      "www.istockphoto.com",
    ],
  },
  webpack: (config) => config,
};

export default nextConfig;
