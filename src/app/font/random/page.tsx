import type { Metadata } from 'next';
import RandomClientPage from './RandomClientPage';

export const metadata: Metadata = {
  title: 'Font Random & Acak Generator - Mix Styles & Symbol Randomizer 2026',
  description:
    'Generator Font Random & Acak Unicode terbaik di Indonesia. Acak & kombinasikan 50+ gaya font aesthetic (Small Caps, Script, Bubble, Gothic) untuk Nickname Game, Bio IG, TikTok & WA 100% gratis.',
  keywords: [
    'font random',
    'generator font acak',
    'tulisan random aesthetic',
    'random text generator',
    'mix font generator',
    'font acak copy paste',
    'generator tulisan unik',
    'font random free fire',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/random',
  },
  openGraph: {
    title: 'Font Random & Acak Generator - Mix Styles & Symbol Randomizer Unicode',
    description:
      'Acak dan kombinasikan 50+ gaya font Unicode & simbol aesthetic secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/random',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Random & Acak Generator - Mix Styles & Symbol Randomizer',
    description: 'Generator font Random Acak Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function RandomPage() {
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
        name: 'Font Random & Acak Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/random',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RandomClientPage />
    </>
  );
}
