import type { Metadata } from 'next';
import HeartClientPage from './HeartClientPage';

export const metadata: Metadata = {
  title: 'Simbol Hati (Heart Symbols) Aesthetic ♡ ♥ ❥ ❣ - Copy Paste 150+',
  description:
    'Salin 150+ Simbol Hati (Heart Symbols) Aesthetic Unicode ♡ ♥ ❥ ❣ ❦ ᰔ ʚ♡ɞ 1-klik copy gratis untuk bio Instagram, TikTok, WhatsApp, Discord, couple nickname & pesan cinta.',
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
    title: 'Simbol Hati (Heart Symbols) Aesthetic ♡ ♥ ❥ ❣ - Copy Paste 150+',
    description:
      'Koleksi 150+ simbol hati Unicode, kaomoji cinta, dan ornamen border aesthetic 1-klik salin gratis untuk bio medsos dan nickname game.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/hati',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simbol Hati (Heart Symbols) Aesthetic ♡ ♥ ❥ ❣ - Copy Paste 150+',
    description: 'Salin 150+ simbol hati estetik Unicode gratis tercepat di Indonesia.',
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
