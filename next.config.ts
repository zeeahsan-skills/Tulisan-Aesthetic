import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/font/bold',
        destination: '/bold',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
