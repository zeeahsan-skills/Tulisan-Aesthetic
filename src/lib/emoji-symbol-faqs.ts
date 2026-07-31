export interface FAQItem {
  q: string;
  a: string;
}

export const EMOJI_FAQS: FAQItem[] = [
  {
    q: 'Apa itu Emoji Collection Hub?',
    a: 'Emoji Collection Hub adalah direktori ribuan emoji Unicode berwarna (seperti 😀, ❤️, 🔥, ✨, 🎮, 🌸, 👑) yang disusun berdasarkan 9 kategori utama & 10 koleksi populer yang dapat dicopy-paste secara instan untuk Instagram, TikTok, WA, Discord, dan game.',
  },
  {
    q: 'Apa perbedaan antara emoji dan simbol Unicode teks?',
    a: 'Emoji (seperti 😀, ❤️, 🔥) adalah karakter grafik berwarna yang ilustrasinya dirender oleh font emoji sistem operasi (Apple Color Emoji di iOS atau Noto Color Emoji di Android). Sedangkan simbol Unicode teks (seperti ★, ♡, ➜) adalah karakter vektor berwarna tunggal yang mengikuti warna teks.',
  },
  {
    q: 'Mengapa tampilan emoji terlihat sedikit berbeda di iPhone (iOS) dan Android?',
    a: 'Karena masing-masing produsen perangkat lunak (Apple, Google, Samsung, Microsoft) memiliki desain set font emoji bawaan tersendiri. Namun titik kode Unicode (Code Point) dasarnya tetap 100% sama.',
  },
  {
    q: 'Bagaimana cara menggunakan emoji di bio Instagram, TikTok, dan status WhatsApp?',
    a: 'Cukup klik atau ketuk pada kartu emoji yang Anda inginkan. Emoji akan secara otomatis tersimpan di clipboard HP/komputer Anda dan siap ditempelkan (paste) di aplikasi manapun.',
  },
  {
    q: 'Apakah penyalinan emoji ini gratis?',
    a: 'Layanan ini 100% gratis selamanya tanpa Perlu pendaftaran akun atau biaya aplikasi apapun.',
  },
  {
    q: 'Dapatkah saya menggabungkan beberapa emoji sekaligus dalam satu baris?',
    a: 'Tentu! Anda dapat memilih dan mengombinasikan berbagai emoji kegemaran Anda untuk membuat caption, bio estetik, atau status WhatsApp.',
  },
  {
    q: 'Kategori emoji apa saja yang tersedia di halaman ini?',
    a: 'Terdapat 9 kategori utama: Smileys & Emotion, People & Body, Animals & Nature, Food & Drink, Travel & Places, Activities, Objects, Symbols, dan Flags.',
  },
  {
    q: 'Bagaimana cara menyimpan emoji favorit saya?',
    a: 'Ketuk ikon Hati (Heart) pada kartu emoji yang Anda sukai. Emoji favorit akan secara otomatis tersimpan di memori browser (localStorage) Anda.',
  },
  {
    q: 'Apakah semua emoji kompatibel untuk pembaca layar (Accessibility/Screen Readers)?',
    a: 'Ya! Semua emoji Unicode memiliki label deskripsi terjemahan standar (Alt Text) yang dapat dibaca secara aksesibel oleh software pembaca layar untuk penyandang disabilitas.',
  },
  {
    q: 'Bagaimana cara mencari emoji secara cepat?',
    a: 'Gunakan kolom pencarian live di bagian atas halaman. Ketik nama emoji (seperti "love", "fire", "star", "cat", "game") untuk memfilter secara instan.',
  },
];
