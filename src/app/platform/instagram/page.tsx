import type { Metadata } from 'next';
import InstagramClientPage from './InstagramClientPage';
import { INSTAGRAM_FAQS } from '@/lib/instagram-faqs';

export const metadata: Metadata = {
  title: 'Font Instagram Aesthetic - Bio & Caption Keren',
  description:
    'Generator font aesthetic untuk Instagram: bio, caption & story highlight. Copy paste font Unicode yang 100% terbaca.',
  keywords: [
    'instagram font generator',
    'font bio instagram aesthetic',
    'tulisan keren instagram',
    'font caption ig',
    'font username instagram',
    'tulisan aesthetic bio ig',
    'font unicode instagram',
    'tulisan sambung bio ig',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/platform/instagram',
  },
  openGraph: {
    title: 'Font Instagram Aesthetic - Bio & Caption Keren',
    description:
      'Generator font aesthetic untuk Instagram: bio, caption & story highlight. Copy paste font Unicode yang 100% terbaca.',
    url: 'https://tulisan-aesthetic.vercel.app/platform/instagram',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Instagram Aesthetic - Bio & Caption Keren',
    description:
      'Generator font aesthetic untuk Instagram: bio, caption & story highlight. Copy paste font Unicode yang 100% terbaca.',
  },
  robots: 'index, follow',
};

export default function InstagramPage() {
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
        name: 'Instagram Font Generator',
        item: 'https://tulisan-aesthetic.vercel.app/platform/instagram',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: INSTAGRAM_FAQS.map((faq) => ({
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
      <InstagramClientPage />
    </>
  );
}
