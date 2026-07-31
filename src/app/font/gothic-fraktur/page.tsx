import type { Metadata } from 'next';
import GothicClientPage from './GothicClientPage';

export const metadata: Metadata = {
  title: 'Font Gothic / Fraktur Generator - Converter Tulisan Blackletter & Old English 2026',
  description:
    'Generator tulisan Gothic, Fraktur, Medieval, dan Old English Unicode terbaik di Indonesia. Ubah teks biasa menjadi font Gothic keren untuk Nickname FF, MLBB, Discord & Bio Instagram 100% gratis.',
  keywords: [
    'font gothic generator',
    'tulisan fraktur unicode',
    'blackletter font generator',
    'old english text generator',
    'nickname ff gothic',
    'font medieval aesthetic',
    'tulisan jerman kuno',
    'font gothic instagram bio',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/gothic-fraktur',
  },
  openGraph: {
    title: 'Font Gothic / Fraktur Generator - Tulisan Aesthetic Unicode',
    description:
      'Konversi teks biasa menjadi font Gothic, Fraktur, dan Old English estetik secara instan tanpa aplikasi.',
    url: 'https://tulisanaesthetic.id/font/gothic-fraktur',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Gothic / Fraktur Generator - Teks Old English & Medieval',
    description: 'Generator font Gothic Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function GothicPage() {
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
        name: 'Font Styles',
        item: 'https://tulisanaesthetic.id/#popular-fonts',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Font Gothic / Fraktur',
        item: 'https://tulisanaesthetic.id/font/gothic-fraktur',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GothicClientPage />
    </>
  );
}
