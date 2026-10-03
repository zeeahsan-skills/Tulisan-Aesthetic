import type { Metadata } from 'next';
import GameClientPage from './GameClientPage';
import { GAME_PILLAR_FAQS } from '@/lib/game-pillar-faqs';

export const metadata: Metadata = {
  title: 'Nickname Game Aesthetic - FF, PUBG, ML & Valorant',
  description:
    'Buat nickname game aesthetic untuk Free Fire, PUBG Mobile, MLBB, Valorant, Roblox & CODM dengan simbol keren.',
  keywords: [
    'nickname game aesthetic',
    'font game generator',
    'nama game keren',
    'simbol nama ff payung',
    'nama ff mahkota',
    'nickname pubg aesthetic',
    'nama squad mlbb pro',
    'username roblox aesthetic',
    'spasi kosong ff',
    'esports name generator',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/game',
  },
  openGraph: {
    title: 'Nickname Game Aesthetic - FF, PUBG, ML & Valorant',
    description:
      'Buat nickname game aesthetic untuk Free Fire, PUBG Mobile, MLBB, Valorant, Roblox & CODM dengan simbol keren.',
    url: 'https://tulisan-aesthetic.vercel.app/game',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nickname Game Aesthetic - FF, PUBG, ML & Valorant',
    description:
      'Buat nickname game aesthetic untuk Free Fire, PUBG Mobile, MLBB, Valorant, Roblox & CODM dengan simbol keren.',
  },
  robots: 'index, follow',
};

export default function GamePage() {
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
        name: 'Gaming Nickname Generator',
        item: 'https://tulisan-aesthetic.vercel.app/game',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: GAME_PILLAR_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Esports Gaming Nickname Generators Hub',
    description: 'Central hub for Free Fire, PUBG Mobile, Mobile Legends, Roblox, and COD Mobile nickname generators.',
    url: 'https://tulisan-aesthetic.vercel.app/game',
    mainEntity: [
      {
        '@type': 'ItemPage',
        name: 'Free Fire Name Generator',
        url: 'https://tulisan-aesthetic.vercel.app/free-fire',
      },
      {
        '@type': 'ItemPage',
        name: 'PUBG Mobile Name Generator',
        url: 'https://tulisan-aesthetic.vercel.app/pubg-mobile',
      },
      {
        '@type': 'ItemPage',
        name: 'Mobile Legends Name Generator',
        url: 'https://tulisan-aesthetic.vercel.app/mobile-legends',
      },
      {
        '@type': 'ItemPage',
        name: 'Roblox Username Generator',
        url: 'https://tulisan-aesthetic.vercel.app/roblox',
      },
      {
        '@type': 'ItemPage',
        name: 'COD Mobile Name Generator',
        url: 'https://tulisan-aesthetic.vercel.app/cod-mobile',
      },
      {
        '@type': 'ItemPage',
        name: 'Valorant Nickname Generator',
        url: 'https://tulisan-aesthetic.vercel.app/valorant',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <GameClientPage />
    </>
  );
}
