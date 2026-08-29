import type { Metadata } from 'next';
import EmojiClientPage from './EmojiClientPage';

export const metadata: Metadata = {
  title: 'Emoji Collection 😀 ❤️ 🔥 ✨ 🎮 - Copy Paste Thousands of Emoji',
  description:
    'Direktori Emoji Collection Unicode terlengkap di Indonesia. Copy paste ribuan emoji smileys (😀), cinta (❤️), api (🔥), bintang (✨), game (🎮), makanan (🍕), dan bendera gratis untuk IG, TikTok, WA & Discord.',
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
    title: 'Emoji Collection 😀 ❤️ 🔥 ✨ 🎮 - Copy Paste Thousands of Emoji',
    description:
      'Browse, search, and copy thousands of emoji instantly for Instagram, TikTok, WhatsApp, Facebook, Discord, gaming, blogs, and creative content.',
    url: 'https://tulisan-aesthetic.vercel.app/simbol/emoji',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emoji Collection 😀 ❤️ 🔥 ✨ 🎮 - Copy Paste Thousands of Emoji',
    description: 'Direktori emoji Unicode berwarna 1-klik copy gratis dan tercepat di Indonesia.',
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
