import type { Metadata } from 'next';
import PlatformClientPage from './PlatformClientPage';

export const metadata: Metadata = {
  title: 'Font Aesthetic Media Sosial - Instagram, TikTok, WhatsApp, Discord & FB',
  description:
    'Generator tulisan aesthetic terbaik untuk semua platform media sosial: Bio IG, Caption TikTok, Info WhatsApp, Server Discord & Status Facebook 100% kompatibel.',
  keywords: [
    'font instagram bio',
    'font tiktok caption',
    'font whatsapp aesthetic',
    'discord channel font',
    'facebook text generator',
    'tulisan aesthetic media sosial',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id/platform',
  },
  openGraph: {
    title: 'Font Aesthetic Media Sosial - Instagram, TikTok, WhatsApp & Discord',
    description:
      'Temukan gaya font aesthetic khusus yang kompatibel 100% untuk Instagram, TikTok, WhatsApp, Discord & Facebook.',
    url: 'https://tulisanaesthetic.id/platform',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Aesthetic Multi-Platform Support',
    description: 'Ubah teks media sosial kamu jadi lebih keren & aesthetic.',
  },
  robots: 'index, follow',
};

export default function PlatformPage() {
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
        name: 'Platform Media Sosial',
        item: 'https://tulisanaesthetic.id/platform',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PlatformClientPage />
    </>
  );
}
