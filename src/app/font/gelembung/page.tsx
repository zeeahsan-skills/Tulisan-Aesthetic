import type { Metadata } from 'next';
import BubbleClientPage from './BubbleClientPage';

export const metadata: Metadata = {
  title: 'Bubble Font Generator - Converter Tulisan Gelembung Aesthetic 2026',
  description:
    'Generator tulisan Bubble (gelembung melingkar) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font gelembung imut untuk Bio IG, TikTok, WhatsApp & Gaming Nickname 100% gratis.',
  keywords: [
    'bubble font generator',
    'tulisan gelembung unicode',
    'font melingkar aesthetic',
    'font lingkaran bio ig',
    'font bubble tiktok',
    'font whatsapp bulat',
    'font imut cute generator',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/gelembung',
  },
  openGraph: {
    title: 'Bubble Font Generator - Tulisan Gelembung Aesthetic Unicode',
    description:
      'Konversi teks biasa menjadi font Bubble gelembung melingkar imut dan cantik secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/gelembung',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bubble Font Generator - Converter Tulisan Gelembung Melingkar',
    description: 'Generator font Bubble Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function BubblePage() {
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
        name: 'Font Styles',
        item: 'https://tulisan-aesthetic.vercel.app/#popular-fonts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Bubble Font Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/gelembung',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BubbleClientPage />
    </>
  );
}
