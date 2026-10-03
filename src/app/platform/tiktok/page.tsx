import type { Metadata } from 'next';
import TikTokClientPage from './TikTokClientPage';
import { TIKTOK_FAQS } from '@/lib/tiktok-faqs';

export const metadata: Metadata = {
  title: 'Font TikTok Aesthetic - Caption & Bio FYP',
  description:
    'Buat caption & bio TikTok aesthetic dengan font Unicode keren. Tingkatkan tampilan profil agar FYP-ready.',
  keywords: [
    'tiktok font generator',
    'font bio tiktok aesthetic',
    'tulisan keren tiktok',
    'font caption tiktok',
    'font nama tiktok',
    'tulisan aesthetic bio tiktok',
    'font unicode tiktok',
    'tulisan sambung bio tiktok',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/platform/tiktok',
  },
  openGraph: {
    title: 'Font TikTok Aesthetic - Caption & Bio FYP',
    description:
      'Buat caption & bio TikTok aesthetic dengan font Unicode keren. Tingkatkan tampilan profil agar FYP-ready.',
    url: 'https://tulisan-aesthetic.vercel.app/platform/tiktok',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font TikTok Aesthetic - Caption & Bio FYP',
    description:
      'Buat caption & bio TikTok aesthetic dengan font Unicode keren. Tingkatkan tampilan profil agar FYP-ready.',
  },
  robots: 'index, follow',
};

export default function TikTokPage() {
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
        name: 'TikTok Font Generator',
        item: 'https://tulisan-aesthetic.vercel.app/platform/tiktok',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TIKTOK_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
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
      <TikTokClientPage />
    </>
  );
}
