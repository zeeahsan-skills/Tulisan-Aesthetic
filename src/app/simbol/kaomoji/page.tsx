import type { Metadata } from 'next';
import KaomojiClientPage from './KaomojiClientPage';

export const metadata: Metadata = {
  title: 'Kaomoji Jepang - Copy Paste 500+ Text Faces',
  description:
    '500+ kaomoji Jepang aesthetic (◕‿◕) ¯\\_(ツ)_/¯ untuk WA, TikTok, IG & Discord. Salin emotikon teks lucu dan unik sekali klik gratis.',
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
    title: 'Kaomoji Jepang - Copy Paste 500+ Text Faces',
    description:
      '500+ kaomoji Jepang aesthetic (◕‿◕) ¯\\_(ツ)_/¯ untuk WA, TikTok, IG & Discord. Salin emotikon teks lucu dan unik sekali klik gratis.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/kaomoji',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaomoji Jepang - Copy Paste 500+ Text Faces',
    description:
      '500+ kaomoji Jepang aesthetic (◕‿◕) ¯\\_(ツ)_/¯ untuk WA, TikTok, IG & Discord. Salin emotikon teks lucu dan unik sekali klik gratis.',
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
