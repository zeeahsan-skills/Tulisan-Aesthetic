import type { Metadata } from 'next';
import WhatsAppClientPage from './WhatsAppClientPage';
import { WHATSAPP_FAQS } from '@/lib/whatsapp-faqs';

export const metadata: Metadata = {
  title: 'Font WhatsApp - Teks Tebal, Miring & Monospace',
  description:
    'Percantik chat & status WhatsApp dengan font tebal, miring & monospace. Tanpa aplikasi, langsung copy paste.',
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
    title: 'Font WhatsApp - Teks Tebal, Miring & Monospace',
    description:
      'Percantik chat & status WhatsApp dengan font tebal, miring & monospace. Tanpa aplikasi, langsung copy paste.',
    url: 'https://tulisan-aesthetic.vercel.app/platform/whatsapp',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font WhatsApp - Teks Tebal, Miring & Monospace',
    description:
      'Percantik chat & status WhatsApp dengan font tebal, miring & monospace. Tanpa aplikasi, langsung copy paste.',
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
        name: 'Platform Media Sosial',
        item: 'https://tulisan-aesthetic.vercel.app/platform',
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
