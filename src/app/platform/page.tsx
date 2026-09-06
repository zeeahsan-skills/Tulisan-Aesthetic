import type { Metadata } from 'next';
import PlatformClientPage from './PlatformClientPage';
import { PLATFORM_PILLAR_FAQS } from '@/lib/platform-pillar-faqs';

export const metadata: Metadata = {
  title: 'Font Generator Platform Media Sosial - Bio IG, TikTok, WA & Discord',
  description:
    'Pusat alat generator font media sosial gratis. Ubah tulisan biasa menjadi font aesthetic untuk bio Instagram, caption TikTok, status WhatsApp, postingan Facebook & role Discord.',
  keywords: [
    'font platform media sosial',
    'font bio instagram',
    'font caption tiktok',
    'font status whatsapp',
    'font facebook aesthetic',
    'font discord server role',
    'generator tulisan medsos',
    'unicode font converter',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/platform',
  },
  openGraph: {
    title: 'Font Generator Platform Media Sosial - Bio IG, TikTok, WA & Discord',
    description:
      'Pusat converter font aesthetic terlengkap untuk Instagram, TikTok, WhatsApp, Facebook, dan Discord secara instan tanpa aplikasi.',
    url: 'https://tulisan-aesthetic.vercel.app/platform',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Generator Platform Media Sosial',
    description: 'Bikin bio & caption media sosial aesthetic dengan font Unicode unik.',
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
        item: 'https://tulisan-aesthetic.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Platform Font Generators',
        item: 'https://tulisan-aesthetic.vercel.app/platform',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PLATFORM_PILLAR_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Social Media Platform Font Generators Hub',
    description: 'Central hub for Instagram, TikTok, WhatsApp, Facebook, and Discord font generators.',
    url: 'https://tulisan-aesthetic.vercel.app/platform',
    mainEntity: [
      {
        '@type': 'ItemPage',
        name: 'Instagram Font Generator',
        url: 'https://tulisan-aesthetic.vercel.app/platform/instagram',
      },
      {
        '@type': 'ItemPage',
        name: 'TikTok Font Generator',
        url: 'https://tulisan-aesthetic.vercel.app/platform/tiktok',
      },
      {
        '@type': 'ItemPage',
        name: 'WhatsApp Font Generator',
        url: 'https://tulisan-aesthetic.vercel.app/platform/whatsapp',
      },
      {
        '@type': 'ItemPage',
        name: 'Facebook Font Generator',
        url: 'https://tulisan-aesthetic.vercel.app/platform/facebook',
      },
      {
        '@type': 'ItemPage',
        name: 'Discord Font Generator',
        url: 'https://tulisan-aesthetic.vercel.app/platform/discord',
      },
      {
        '@type': 'ItemPage',
        name: 'Twitter / X Font Generator',
        url: 'https://tulisan-aesthetic.vercel.app/platform/twitter-x',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <PlatformClientPage />
    </>
  );
}
