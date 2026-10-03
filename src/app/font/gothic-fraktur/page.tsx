import type { Metadata } from 'next';
import GothicClientPage from './GothicClientPage';

export const metadata: Metadata = {
  title: 'Font Gothic Fraktur - Blackletter Keren',
  description:
    'Font gothic fraktur blackletter misterius untuk nickname FF & PUBG. Gaya abad pertengahan yang elegan.',
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
    canonical: 'https://tulisan-aesthetic.vercel.app/font/gothic-fraktur',
  },
  openGraph: {
    title: 'Font Gothic Fraktur - Blackletter Keren',
    description:
      'Font gothic fraktur blackletter misterius untuk nickname FF & PUBG. Gaya abad pertengahan yang elegan.',
    url: 'https://tulisan-aesthetic.vercel.app/font/gothic-fraktur',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Gothic Fraktur - Blackletter Keren',
    description:
      'Font gothic fraktur blackletter misterius untuk nickname FF & PUBG. Gaya abad pertengahan yang elegan.',
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
        name: 'Font Gothic / Fraktur',
        item: 'https://tulisan-aesthetic.vercel.app/font/gothic-fraktur',
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
