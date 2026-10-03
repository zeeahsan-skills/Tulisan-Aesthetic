import type { Metadata } from 'next';
import EmojiClientPage from './EmojiClientPage';

export const metadata: Metadata = {
  title: 'Koleksi Emoji Aesthetic - Copy Paste Ribuan Emoji',
  description:
    'Koleksi ribuan emoji 😀 🔥 untuk copy paste ke bio, caption & chat. Cari dan salin dalam sekali klik.',
  keywords: [
    'emoji collection',
    'simbol emoji',
    'emoji copy paste',
    'emoji hati',
    'emoji api',
    'emoji bintang',
    'emoji wa',
    'emoji aesthetic',
    'kaomoji dan emoji',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/simbol/emoji',
  },
  openGraph: {
    title: 'Koleksi Emoji Aesthetic - Copy Paste Ribuan Emoji',
    description:
      'Koleksi ribuan emoji 😀 🔥 untuk copy paste ke bio, caption & chat. Cari dan salin dalam sekali klik.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/emoji',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koleksi Emoji Aesthetic - Copy Paste Ribuan Emoji',
    description:
      'Koleksi ribuan emoji 😀 🔥 untuk copy paste ke bio, caption & chat. Cari dan salin dalam sekali klik.',
  },
  robots: 'index, follow',
};

export default function EmojiCollectionPage() {
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
        name: 'Emoji Collection',
        item: 'https://tulisan-aesthetic.vercel.app/simbol/emoji',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <EmojiClientPage />
    </>
  );
}
