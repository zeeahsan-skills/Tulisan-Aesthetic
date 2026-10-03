import type { Metadata } from 'next';
import DiscordClientPage from './DiscordClientPage';

export const metadata: Metadata = {
  title: 'Font Discord Aesthetic - Nickname & Chat Keren',
  description:
    'Generator font Discord aesthetic: ubah teks bio, nickname & chat server dengan gaya Unicode unik dan format Markdown keren.',
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
    title: 'Font Discord Aesthetic - Nickname & Chat Keren',
    description:
      'Generator font Discord aesthetic: ubah teks bio, nickname & chat server dengan gaya Unicode unik dan format Markdown keren.',
    url: 'https://tulisan-aesthetic.vercel.app/platform/discord',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Discord Aesthetic - Nickname & Chat Keren',
    description:
      'Generator font Discord aesthetic: ubah teks bio, nickname & chat server dengan gaya Unicode unik dan format Markdown keren.',
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
