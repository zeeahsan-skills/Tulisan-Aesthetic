import type { Metadata } from 'next';
import WhatsAppClientPage from './WhatsAppClientPage';
import { WHATSAPP_FAQS } from '@/lib/whatsapp-faqs';

export const metadata: Metadata = {
  title: 'WhatsApp Font Generator - Convert Teks Nama, Info & Status Aesthetic 2026',
  description:
    'Generator WhatsApp Font terbaik di Indonesia. Ubah teks biasa menjadi font Unicode estetik untuk nama profil WA, Info/bio, status, chat & grup 100% gratis & tanpa aplikasi.',
  keywords: [
    'whatsapp font generator',
    'font nama whatsapp aesthetic',
    'tulisan keren whatsapp',
    'font status wa',
    'font info whatsapp',
    'tulisan aesthetic bio wa',
    'font unicode whatsapp',
    'tulisan miring wa',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisan-aesthetic.vercel.app/platform/whatsapp',
  },
  openGraph: {
    title: 'WhatsApp Font Generator - Tulisan Aesthetic Nama, Info & Status',
    description:
      'Generate stylish WhatsApp fonts instantly for profile names, status updates, chats, and group names using Unicode text.',
    url: 'https://tulisan-aesthetic.vercel.app/platform/whatsapp',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Font Generator - Teks Keren Profil & Status WA',
    description: 'Generator font WhatsApp Unicode terlengkap di Indonesia.',
  },
  robots: 'index, follow',
};

export default function WhatsAppPage() {
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
        name: 'Platforms',
        item: 'https://tulisan-aesthetic.vercel.app/#platforms',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'WhatsApp Font Generator',
        item: 'https://tulisan-aesthetic.vercel.app/platform/whatsapp',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: WHATSAPP_FAQS.map((faq) => ({
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
      <WhatsAppClientPage />
    </>
  );
}
