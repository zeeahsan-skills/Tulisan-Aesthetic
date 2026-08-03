import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/font/bold',
        destination: '/bold',
        permanent: true,
      },
      {
        source: '/game/free-fire',
        destination: '/free-fire',
        permanent: true,
      },
      {
        source: '/game/pubg-mobile',
        destination: '/pubg-mobile',
        permanent: true,
      },
      {
        source: '/game/mobile-legends',
        destination: '/mobile-legends',
        permanent: true,
      },
      {
        source: '/game/roblox',
        destination: '/roblox',
        permanent: true,
      },
      {
        source: '/game/cod-mobile',
        destination: '/cod-mobile',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
