import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //disable @typescript-eslint/no-explicit-any
  eslint: {
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
