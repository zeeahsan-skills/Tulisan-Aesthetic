import type { Metadata } from 'next';
import BerkilauClientPage from '../berkilau/BerkilauClientPage';

export const metadata: Metadata = {
  title: 'Tulisan Tebal (Bold Font Generator) - Converter Teks Aesthetic 2026',
  description:
    'Generator tulisan tebal Unicode (Bold Sans & Bold Serif) terbaik di Indonesia. Ubah teks biasa menjadi font tebal hitam aesthetic untuk Bio IG, WA, TikTok & Gaming 100% gratis.',
  alternates: {
    canonical: 'https://tulisanaesthetic.id/font/tebal',
  },
  robots: 'index, follow',
};

export default function FontTebalPage() {
  return <BerkilauClientPage />;
}
