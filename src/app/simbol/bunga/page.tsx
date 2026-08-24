import type { Metadata } from 'next';
import FlowerClientPage from './FlowerClientPage';

export const metadata: Metadata = {
  title: 'Flower Symbols (Simbol Bunga) Aesthetic ✿ ❀ 🌸 🌹 - Copy Paste 150+',
  description:
    'Salin 150+ Simbol Bunga (Flower Symbols) Aesthetic Unicode ✿ ❀ ❁ 🌸 🌹 🌿 🪷 1-klik copy gratis untuk bio Instagram, TikTok, WhatsApp, Discord, undangan pernikahan & kartu ucapan.',
  keywords: [
    'flower symbols',
    'simbol bunga',
    'simbol bunga sakura',
    'simbol bunga mawar',
    'simbol bunga aesthetic',
    'simbol daun dan tanaman',
    'cherry blossom unicode',
    'flower symbol copy paste',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/simbol/bunga',
  },
  openGraph: {
    title: 'Flower Symbols (Simbol Bunga) Aesthetic ✿ ❀ 🌸 🌹 - Copy Paste 150+',
    description:
      'Browse and copy beautiful Unicode flower symbols instantly for social media, creative text, and decorative designs.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/bunga',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flower Symbols (Simbol Bunga) Aesthetic ✿ ❀ 🌸 🌹 - Copy Paste 150+',
    description: 'Koleksi 150+ simbol bunga Unicode estetik 1-klik copy gratis tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function FlowerSymbolsPage() {
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
        name: 'Flower Symbols (Simbol Bunga)',
        item: 'https://tulisan-aesthetic.vercel.app/simbol/bunga',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FlowerClientPage />
    </>
  );
}
