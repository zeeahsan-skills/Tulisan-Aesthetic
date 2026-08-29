import type { Metadata } from 'next';
import RobloxClientPage from './RobloxClientPage';

export const metadata: Metadata = {
  title: 'Roblox Stylish Name Generator - Generator Nama Roblox Keren',
  description:
    'Generator nama Roblox keren & estetik terbaik di Indonesia. Ubah nama biasa menjadi username & display name bergaya pro gamer, anime, VIP, cute boba & font Unicode 100% gratis.',
  keywords: [
    'roblox stylish name generator',
    'generator nama roblox keren',
    'roblox display name aesthetic',
    'roblox username generator',
    'simbol nama roblox',
    'nama roblox blox fruits',
    'nama roblox cute',
    'font roblox aesthetic',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/game/roblox',
  },
  openGraph: {
    title: 'Roblox Stylish Name Generator - Generator Nama Roblox Keren',
    description:
      'Generate stylish Roblox usernames and display names instantly using Unicode fonts, symbols, and decorative characters.',
    url: 'https://tulisan-aesthetic.vercel.app/game/roblox',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roblox Stylish Name Generator - Nama Roblox Keren Aesthetic',
    description: 'Generator nickname & display name Roblox Unicode terlengkap dan tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function RobloxPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tulisan-aesthetic.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Game Nicknames',
        item: 'https://tulisan-aesthetic.vercel.app/#gaming-nicknames',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Roblox Stylish Name Generator',
        item: 'https://tulisan-aesthetic.vercel.app/game/roblox',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RobloxClientPage />
    </>
  );
}
