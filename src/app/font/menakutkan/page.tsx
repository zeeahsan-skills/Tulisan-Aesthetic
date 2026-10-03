import type { Metadata } from 'next';
import MenakutkanClientPage from './MenakutkanClientPage';

export const metadata: Metadata = {
  title: 'Font Horor - Tulisan Seram & Glitch',
  description:
    'Font horor menakutkan dengan efek glitch creepy untuk nickname game & bio Halloween.',
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
    title: 'Font Horor - Tulisan Seram & Glitch',
    description:
      'Font horor menakutkan dengan efek glitch creepy untuk nickname game & bio Halloween.',
    url: 'https://tulisan-aesthetic.vercel.app/font/menakutkan',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Horor - Tulisan Seram & Glitch',
    description:
      'Font horor menakutkan dengan efek glitch creepy untuk nickname game & bio Halloween.',
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
        name: 'Direktori Font',
        item: 'https://tulisan-aesthetic.vercel.app/font',
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
