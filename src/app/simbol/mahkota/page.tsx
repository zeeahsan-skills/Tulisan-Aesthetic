import type { Metadata } from 'next';
import CrownClientPage from './CrownClientPage';

export const metadata: Metadata = {
  title: 'Simbol Mahkota Aesthetic - Copy Paste 150+',
  description:
    '150+ simbol mahkota aesthetic 👑 亗 ♛ untuk nickname FF, PUBG, MLBB & bio IG. Klik sekali untuk langsung copy paste gratis.',
  keywords: [
    'crown symbols',
    'simbol mahkota',
    'simbol mahkota ff',
    'simbol mahkota mlbb',
    'simbol mahkota catur',
    'simbol raja dan ratu',
    'king crown symbol',
    'queen crown symbol',
    'copy paste crown symbol',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/simbol/mahkota',
  },
  openGraph: {
    title: 'Simbol Mahkota Aesthetic - Copy Paste 150+',
    description:
      '150+ simbol mahkota aesthetic 👑 亗 ♛ untuk nickname FF, PUBG, MLBB & bio IG. Klik sekali untuk langsung copy paste gratis.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/mahkota',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simbol Mahkota Aesthetic - Copy Paste 150+',
    description:
      '150+ simbol mahkota aesthetic 👑 亗 ♛ untuk nickname FF, PUBG, MLBB & bio IG. Klik sekali untuk langsung copy paste gratis.',
  },
  robots: 'index, follow',
};

export default function CrownSymbolsPage() {
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
        name: 'Crown Symbols (Simbol Mahkota)',
        item: 'https://tulisan-aesthetic.vercel.app/simbol/mahkota',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CrownClientPage />
    </>
  );
}
