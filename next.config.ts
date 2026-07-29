import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Both carry the mascot artwork's alpha channel through the optimizer.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
