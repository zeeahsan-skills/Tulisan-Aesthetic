import type { Metadata } from 'next';
import CrownClientPage from './CrownClientPage';

export const metadata: Metadata = {
  title: 'Crown Symbols (Simbol Mahkota) Aesthetic ♛ ♔ 👑 - Copy Paste 150+',
  description:
    'Salin 150+ Simbol Mahkota (Crown Symbols) Aesthetic Unicode ♛ ♔ ♚ ♕ 👑 亗 ⚜️ 1-klik copy gratis untuk bio Instagram, TikTok, WhatsApp, Discord & nickname game FF, MLBB, PUBG.',
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
    canonical: 'https://tulisanaesthetic.id/simbol/mahkota',
  },
  openGraph: {
    title: 'Crown Symbols (Simbol Mahkota) Aesthetic ♛ ♔ 👑 - Copy Paste 150+',
    description:
      'Browse and copy stylish Unicode crown symbols instantly for social media, gaming, usernames, and creative text.',
    url: 'https://tulisanaesthetic.id/simbol/mahkota',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crown Symbols (Simbol Mahkota) Aesthetic ♛ ♔ 👑 - Copy Paste 150+',
    description: 'Koleksi 150+ simbol mahkota Unicode estetik 1-klik copy gratis tercepat di Indonesia.',
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
        item: 'https://tulisanaesthetic.id',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Simbol Keren Hub',
        item: 'https://tulisanaesthetic.id/simbol',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Crown Symbols (Simbol Mahkota)',
        item: 'https://tulisanaesthetic.id/simbol/mahkota',
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
