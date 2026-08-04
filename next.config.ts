import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/font',
        destination: '/',
        permanent: true,
      },
      {
        source: '/font-media-sosial',
        destination: '/platform',
        permanent: true,
      },
      {
        source: '/bold',
        destination: '/font/tebal',
        permanent: true,
      },
      {
        source: '/font/bold',
        destination: '/font/tebal',
        permanent: true,
      },
      {
        source: '/font/bubble',
        destination: '/font/gelembung',
        permanent: true,
      },
      {
        source: '/font/gothic',
        destination: '/font/gothic-fraktur',
        permanent: true,
      },
      {
        source: '/font/kecil',
        destination: '/font/tiny',
        permanent: true,
      },
      {
        source: '/font/cursive',
        destination: '/font/miring-kursif',
        permanent: true,
      },
      {
        source: '/simbol/jantung',
        destination: '/simbol/hati',
        permanent: true,
      },
      {
        source: '/simbol/border-pembatas',
        destination: '/simbol/panah',
        permanent: true,
      },
      {
        source: '/simbol/emotikon',
        destination: '/simbol/emoji',
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
