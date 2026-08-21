import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tulisan Aesthetic — Generator Tulisan Keren & Font Aesthetic',
  description:
    'Generator tulisan aesthetic & font keren Unicode di Indonesia. Ubah teks biasa menjadi gaya font aesthetic instan untuk Bio Instagram, TikTok, WhatsApp & Gaming Nickname.',
  keywords: [
    'tulisan aesthetic',
    'font aesthetic generator',
    'font keren bio ig',
    'tulisan keren tiktok',
    'nickname ff aesthetic',
    'unicode text generator',
    'font whatsapp tebal',
    'simbol aesthetic kaomoji',
  ],
  authors: [{ name: 'Tulisan Aesthetic Team' }],
  alternates: {
    canonical: 'https://tulisanaesthetic.id',
  },
  openGraph: {
    title: 'Tulisan Aesthetic — Generator Tulisan Keren & Font Aesthetic',
    description:
      'Konversi teks biasa menjadi font Unicode aesthetic keren untuk Instagram, TikTok, WhatsApp & Game Nickname secara instan.',
    url: 'https://tulisanaesthetic.id',
    siteName: 'Tulisan Aesthetic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tulisan Aesthetic — Generator Tulisan Keren & Font Aesthetic',
    description: 'Generator font aesthetic Unicode praktis untuk Bio, Caption & Game Nickname.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite Schema JSON-LD
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tulisan Aesthetic',
    url: 'https://tulisanaesthetic.id',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://tulisanaesthetic.id/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // Organization Schema JSON-LD
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tulisan Aesthetic',
    url: 'https://tulisanaesthetic.id',
    logo: 'https://tulisanaesthetic.id/favicon.ico',
    sameAs: [
      'https://facebook.com/tulisanaesthetic',
      'https://instagram.com/tulisanaesthetic',
    ],
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen selection:bg-purple-500 selection:text-white`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
