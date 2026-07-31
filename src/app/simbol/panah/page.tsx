import type { Metadata } from 'next';
import ArrowClientPage from './ArrowClientPage';

export const metadata: Metadata = {
  title: 'Arrow Symbols (Simbol Panah) Aesthetic ➜ ➤ ➔ ↔️ - Copy Paste 200+',
  description:
    'Salin 200+ Simbol Panah (Arrow Symbols) Aesthetic Unicode ➜ ➤ ➔ ➞ ↔️ ↩️ 🏹 1-klik copy gratis untuk bio Instagram, TikTok, WhatsApp, Discord, UI website, slide presentasi & dokumen.',
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
    canonical: 'https://tulisanaesthetic.id/simbol/panah',
  },
  openGraph: {
    title: 'Arrow Symbols (Simbol Panah) Aesthetic ➜ ➤ ➔ ↔️ - Copy Paste 200+',
    description:
      'Browse and copy stylish Unicode arrow symbols instantly for social media, gaming, presentations, websites, and creative text.',
    url: 'https://tulisanaesthetic.id/simbol/panah',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arrow Symbols (Simbol Panah) Aesthetic ➜ ➤ ➔ ↔️ - Copy Paste 200+',
    description: 'Koleksi 200+ simbol panah Unicode estetik 1-klik copy gratis tercepat di Indonesia.',
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
        name: 'Arrow Symbols (Simbol Panah)',
        item: 'https://tulisanaesthetic.id/simbol/panah',
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
