import type { Metadata } from 'next';
import DiscordClientPage from './DiscordClientPage';

export const metadata: Metadata = {
  title: 'Discord Font Generator - Converter Tulisan Keren Server & Profil',
  description:
    'Generator tulisan estetik Discord Unicode terbaik di Indonesia. Ubah nama akun, Display Name, nickname server, role VIP, channel & About Me dengan font Gothic, Small Caps & Zalgo 100% gratis.',
  keywords: [
    'discord font generator',
    'tulisan keren discord',
    'font server discord',
    'font role discord',
    'font nickname discord',
    'font channel discord',
    'discord bio aesthetic',
    'font gothic discord',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/platform/discord',
  },
  openGraph: {
    title: 'Discord Font Generator - Convert Teks Server, Role & Profil Aesthetic',
    description:
      'Konversi teks biasa menjadi font Discord estetik Unicode secara instan tanpa perlu instalasi bot.',
    url: 'https://tulisan-aesthetic.vercel.app/platform/discord',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Font Generator - Ubah Huruf Role & Server Discord',
    description: 'Generator font Discord Unicode tercepat dan terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function DiscordPage() {
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
        name: 'Platform Media Sosial',
        item: 'https://tulisan-aesthetic.vercel.app/platform',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Discord Font Generator',
        item: 'https://tulisan-aesthetic.vercel.app/platform/discord',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DiscordClientPage />
    </>
  );
}
