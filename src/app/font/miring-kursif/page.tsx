import type { Metadata } from 'next';
import FontClientPage from '../FontClientPage';

export const metadata: Metadata = {
  title: 'Tulisan Miring Kursif (Cursive Font Generator) - Converter 2026',
  description:
    'Generator tulisan miring kursif dan kaligrafi Cursive Unicode terbaik di Indonesia. Ubah teks biasa menjadi font miring aesthetic 100% gratis.',
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/miring-kursif',
  },
  robots: 'index, follow',
};

export default function FontMiringKursifPage() {
  return <FontClientPage />;
}
