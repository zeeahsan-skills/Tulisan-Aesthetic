import type { Metadata } from 'next';
import FlowerClientPage from './FlowerClientPage';

export const metadata: Metadata = {
  title: 'Simbol Bunga Aesthetic - Copy Paste 150+',
  description:
    '150+ simbol bunga aesthetic ✿ ❀ untuk bio Instagram & TikTok. Klik untuk copy paste instan.',
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
    title: 'Simbol Bunga Aesthetic - Copy Paste 150+',
    description:
      '150+ simbol bunga aesthetic ✿ ❀ untuk bio Instagram & TikTok. Klik untuk copy paste instan.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/bunga',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simbol Bunga Aesthetic - Copy Paste 150+',
    description:
      '150+ simbol bunga aesthetic ✿ ❀ untuk bio Instagram & TikTok. Klik untuk copy paste instan.',
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
