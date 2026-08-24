import type { Metadata } from 'next';
import KaomojiClientPage from './KaomojiClientPage';

export const metadata: Metadata = {
  title: 'Kaomoji Collection (◕‿◕) ¯\\_(ツ)_/¯ - Copy Paste 500+ Japanese Text Faces',
  description:
    'Salin 500+ Kaomoji (Emotikon Teks Jepang) Aesthetic (◕‿◕), (╯°□°）╯︵ ┻━┻, ¯\\_(ツ)_/¯, (｡♥‿♥｡), (•‿•) 1-klik copy gratis untuk WA, IG, TikTok, Discord & game.',
  keywords: [
    'kaomoji collection',
    'kaomoji aesthetic',
    'emotikon teks jepang',
    'kaomoji copy paste',
    'shrug kaomoji',
    'table flip kaomoji',
    'cute kaomoji',
    'happy kaomoji',
    'sad kaomoji',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/simbol/kaomoji',
  },
  openGraph: {
    title: 'Kaomoji Collection (◕‿◕) ¯\\_(ツ)_/¯ - Copy Paste 500+ Japanese Text Faces',
    description:
      'Browse and copy hundreds of Japanese Kaomoji instantly for Instagram, TikTok, WhatsApp, Discord, Facebook, gaming, blogs, and messages.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/kaomoji',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaomoji Collection (◕‿◕) ¯\\_(ツ)_/¯ - Copy Paste 500+ Japanese Text Faces',
    description: 'Direktori 500+ emotikon teks Jepang Kaomoji 1-klik copy gratis dan tercepat di Indonesia.',
  },
  robots: 'index, follow',
};

export default function KaomojiCollectionPage() {
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
        name: 'Kaomoji Collection',
        item: 'https://tulisan-aesthetic.vercel.app/simbol/kaomoji',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <KaomojiClientPage />
    </>
  );
}
