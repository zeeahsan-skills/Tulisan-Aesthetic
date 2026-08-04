import type { Metadata } from 'next';
import EmojiClientPage from '../emoji/EmojiClientPage';

export const metadata: Metadata = {
  title: 'Simbol Emotikon & Emoji Aesthetic Generator 2026',
  description:
    'Koleksi simbol emotikon aesthetic, emoji lucu, dan 50 gaya font Unicode unik siap salin.',
  alternates: {
    canonical: 'https://tulisanaesthetic.id/simbol/emotikon',
  },
  robots: 'index, follow',
};

export default function SimbolEmotikonPage() {
  return <EmojiClientPage />;
}
