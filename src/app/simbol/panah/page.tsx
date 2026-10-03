import type { Metadata } from 'next';
import ArrowClientPage from './ArrowClientPage';

export const metadata: Metadata = {
  title: 'Simbol Panah Aesthetic - Copy Paste 200+',
  description:
    '200+ simbol panah aesthetic ➜ ➤ untuk nickname & bio. Klik untuk menyalin langsung.',
  keywords: [
    'arrow symbols',
    'simbol panah',
    'simbol panah kanan',
    'simbol panah bio ig',
    'simbol panah ke bawah',
    'panah unicode',
    'simbol panah melengkung',
    'arrow symbol copy paste',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/simbol/panah',
  },
  openGraph: {
    title: 'Simbol Panah Aesthetic - Copy Paste 200+',
    description:
      '200+ simbol panah aesthetic ➜ ➤ untuk nickname & bio. Klik untuk menyalin langsung.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/panah',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simbol Panah Aesthetic - Copy Paste 200+',
    description:
      '200+ simbol panah aesthetic ➜ ➤ untuk nickname & bio. Klik untuk menyalin langsung.',
  },
  robots: 'index, follow',
};

export default function ArrowSymbolsPage() {
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
        name: 'Arrow Symbols (Simbol Panah)',
        item: 'https://tulisan-aesthetic.vercel.app/simbol/panah',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArrowClientPage />
    </>
  );
}
