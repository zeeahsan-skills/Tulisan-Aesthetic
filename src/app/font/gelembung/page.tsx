import type { Metadata } from 'next';
import BubbleClientPage from './BubbleClientPage';

export const metadata: Metadata = {
  title: 'Bubble Font Generator - Tulisan Gelembung Aesthetic',
  description:
    'Bubble text generator: ubah huruf jadi teks gelembung aesthetic untuk bio & grup chat.',
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
    title: 'Bubble Font Generator - Tulisan Gelembung Aesthetic',
    description:
      'Bubble text generator: ubah huruf jadi teks gelembung aesthetic untuk bio & grup chat.',
    url: 'https://tulisan-aesthetic.vercel.app/font/gelembung',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bubble Font Generator - Tulisan Gelembung Aesthetic',
    description:
      'Bubble text generator: ubah huruf jadi teks gelembung aesthetic untuk bio & grup chat.',
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
        name: 'Direktori Font',
        item: 'https://tulisan-aesthetic.vercel.app/font',
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
