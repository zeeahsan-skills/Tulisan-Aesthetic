import type { Metadata } from 'next';
import StarClientPage from './StarClientPage';

export const metadata: Metadata = {
  title: 'Simbol Bintang Aesthetic - Copy Paste 150+',
  description:
    '150+ simbol bintang aesthetic ★ ☆ ✦ ✧ ✨ untuk bio Instagram, TikTok, WhatsApp, Discord & game. Klik sekali untuk copy paste instan.',
  keywords: [
    'star symbols',
    'simbol bintang',
    'simbol bintang aesthetic',
    'simbol bintang hitam',
    'simbol bintang putih',
    'sparkle star symbols',
    'simbol rating 5 bintang',
    'simbol bintang unicode',
    'copy paste star symbol',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/simbol/bintang',
  },
  openGraph: {
    title: 'Simbol Bintang Aesthetic - Copy Paste 150+',
    description:
      '150+ simbol bintang aesthetic ★ ☆ ✦ ✧ ✨ untuk bio Instagram, TikTok, WhatsApp, Discord & game. Klik sekali untuk copy paste instan.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/bintang',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simbol Bintang Aesthetic - Copy Paste 150+',
    description:
      '150+ simbol bintang aesthetic ★ ☆ ✦ ✧ ✨ untuk bio Instagram, TikTok, WhatsApp, Discord & game. Klik sekali untuk copy paste instan.',
  },
  robots: 'index, follow',
};

export default function StarSymbolsPage() {
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
        name: 'Simbol Keren Hub',
        item: 'https://tulisan-aesthetic.vercel.app/simbol',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Star Symbols (Simbol Bintang)',
        item: 'https://tulisan-aesthetic.vercel.app/simbol/bintang',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <StarClientPage />
    </>
  );
}
