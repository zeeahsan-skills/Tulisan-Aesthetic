import type { Metadata } from 'next';
import GlitchClientPage from './GlitchClientPage';

export const metadata: Metadata = {
  title: 'Font Glitch dan Zalgo - Converter Tulisan Distorted',
  description:
    'Glitch & Zalgo text generator: efek teks rusak cyber aesthetic untuk nickname gamer & bio edgy.',
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
    title: 'Font Glitch dan Zalgo - Converter Tulisan Distorted',
    description:
      'Glitch & Zalgo text generator: efek teks rusak cyber aesthetic untuk nickname gamer & bio edgy.',
    url: 'https://tulisan-aesthetic.vercel.app/font/glitch',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Glitch dan Zalgo - Converter Tulisan Distorted',
    description:
      'Glitch & Zalgo text generator: efek teks rusak cyber aesthetic untuk nickname gamer & bio edgy.',
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
        name: 'Direktori Font',
        item: 'https://tulisan-aesthetic.vercel.app/font',
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
