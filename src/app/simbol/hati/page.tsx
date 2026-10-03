import type { Metadata } from 'next';
import HeartClientPage from './HeartClientPage';

export const metadata: Metadata = {
  title: 'Simbol Hati Aesthetic - Copy Paste 150+',
  description:
    '150+ simbol hati aesthetic ♡ ♥ untuk bio & caption. Klik simbol untuk menyalin langsung ke clipboard.',
  keywords: [
    'simbol hati',
    'simbol hati aesthetic',
    'simbol hati copy paste',
    'heart symbol',
    'emoji hati',
    'hati unicode',
    'simbol cinta',
    'simbol hati keren',
    'heart text',
    'dekorasi hati',
    'white heart symbol',
    'black heart symbol',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/simbol/hati',
  },
  openGraph: {
    title: 'Simbol Hati Aesthetic - Copy Paste 150+',
    description:
      '150+ simbol hati aesthetic ♡ ♥ untuk bio & caption. Klik simbol untuk menyalin langsung ke clipboard.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/hati',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simbol Hati Aesthetic - Copy Paste 150+',
    description:
      '150+ simbol hati aesthetic ♡ ♥ untuk bio & caption. Klik simbol untuk menyalin langsung ke clipboard.',
  },
  robots: 'index, follow',
};

export default function HeartSymbolsPage() {
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
        name: 'Heart Symbols (Simbol Hati)',
        item: 'https://tulisan-aesthetic.vercel.app/simbol/hati',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeartClientPage />
    </>
  );
}
