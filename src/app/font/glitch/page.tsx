import type { Metadata } from 'next';
import GlitchClientPage from './GlitchClientPage';

export const metadata: Metadata = {
  title: 'Font Glitch & Zalgo Generator - Converter Tulisan Distorted 2026',
  description:
    'Generator Font Glitch & Zalgo Text Unicode terbaik di Indonesia. Ubah teks biasa menjadi font terdistorsi, cyber, & horror creepy untuk Nickname FF, Discord, Bio IG & TikTok 100% gratis.',
  keywords: [
    'font glitch',
    'tulisan glitch',
    'zalgo text',
    'cyber font',
    'distorted text generator',
    'teks glitch aesthetic',
    'zalgo font copy paste',
    'font seram free fire',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/font/glitch',
  },
  openGraph: {
    title: 'Font Glitch & Zalgo Generator - Converter Tulisan Distorted Unicode',
    description:
      'Konversi teks biasa menjadi font Glitch & Zalgo Text terdistorsi bergaya Cyberpunk & Horror secara instan.',
    url: 'https://tulisan-aesthetic.vercel.app/font/glitch',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Glitch & Zalgo Generator - Converter Tulisan Distorted',
    description: 'Generator font Glitch Zalgo Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function GlitchPage() {
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
        name: 'Font Glitch & Zalgo Generator',
        item: 'https://tulisan-aesthetic.vercel.app/font/glitch',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GlitchClientPage />
    </>
  );
}
