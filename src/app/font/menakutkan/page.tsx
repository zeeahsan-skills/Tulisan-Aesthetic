import type { Metadata } from 'next';
import MenakutkanClientPage from './MenakutkanClientPage';

export const metadata: Metadata = {
  title: 'Font Menakutkan Generator - Converter Tulisan Glitch & Zalgo Creepy 2026',
  description:
    'Generator tulisan Menakutkan (Glitch / Zalgo / Creepy / Horror) Unicode terbaik di Indonesia. Ubah teks biasa menjadi font seram & distorted untuk Game Nickname, Discord, TikTok & Halloween 100% gratis.',
  keywords: [
    'font menakutkan generator',
    'tulisan glitch unicode',
    'zalgo text generator',
    'font seram free fire',
    'creepy font tiktok',
    'horror font generator',
    'distorted text generator',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/menakutkan',
  },
  openGraph: {
    title: 'Font Menakutkan Generator - Converter Tulisan Glitch & Zalgo Creepy',
    description:
      'Konversi teks biasa menjadi font Menakutkan (Glitch / Zalgo / Horror) estetik secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/font/menakutkan',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Menakutkan Generator - Converter Tulisan Glitch & Zalgo',
    description: 'Generator font Menakutkan Zalgo Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function MenakutkanPage() {
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
        name: 'Font Menakutkan Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/menakutkan',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MenakutkanClientPage />
    </>
  );
}
