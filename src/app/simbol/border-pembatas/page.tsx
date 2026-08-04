import type { Metadata } from 'next';
import SymbolsClientPage from '../SymbolsClientPage';

export const metadata: Metadata = {
  title: 'Simbol Border Pembatas & Panah Aesthetic 2026',
  description:
    'Ragam simbol border pembatas, garis hiasan, panah aesthetic, dan 50 gaya font Unicode aesthetic.',
  alternates: {
    canonical: 'https://tulisanaesthetic.id/simbol/border-pembatas',
  },
  robots: 'index, follow',
};

export default function SimbolBorderPembatasPage() {
  return <SymbolsClientPage />;
}
