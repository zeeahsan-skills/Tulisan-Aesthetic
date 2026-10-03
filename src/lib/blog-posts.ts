export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category:
    | 'Font Guides'
    | 'Unicode'
    | 'Instagram'
    | 'TikTok'
    | 'WhatsApp'
    | 'Discord'
    | 'Gaming Names'
    | 'Free Fire'
    | 'PUBG'
    | 'Mobile Legends'
    | 'Roblox'
    | 'Symbols'
    | 'Emoji'
    | 'Kaomoji';
  readingTime?: string;
  author: string;
  publishDate?: string;
  coverGradient: string;
  isPopular?: boolean;
}

export const BLOG_CATEGORIES_LIST = [
  'All Articles',
  'Font Guides',
  'Unicode',
  'Instagram',
  'TikTok',
  'WhatsApp',
  'Discord',
  'Gaming Names',
  'Free Fire',
  'PUBG',
  'Mobile Legends',
  'Roblox',
  'Symbols',
  'Emoji',
  'Kaomoji',
] as const;

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    slug: 'font-whatsapp',
    title: 'Font WhatsApp Aesthetic - Teks Tebal & Miring',
    description:
      'Pelajari cara menggunakan Unicode untuk membuat tulisan keren di WhatsApp, mulai dari nama profil, bio, status, hingga pesan.',
    category: 'WhatsApp',
    author: 'Tulisan Aesthetic Editorial Team',
    coverGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    isPopular: true,
  },
  {
    slug: 'font-tiktok',
    title: 'Font TikTok Aesthetic - Generator Tulisan FYP',
    description:
      'Pelajari cara menggunakan font TikTok dengan Unicode untuk membuat profil, username, bio, caption, dan komentar menjadi lebih menarik.',
    category: 'TikTok',
    author: 'Tulisan Aesthetic Editorial Team',
    coverGradient: 'from-cyan-500 via-pink-500 to-purple-600',
    isPopular: true,
  },
  {
    slug: 'font-instagram',
    title: 'Font Instagram: Panduan Lengkap Tulisan Aesthetic',
    description:
      'Panduan lengkap mengubah teks bio Instagram dengan font aesthetic Unicode, simbol bintang, dan kaomoji unik agar profil terlihat aesthetic.',
    category: 'Instagram',
    author: 'Aesthetic Team',
    coverGradient: 'from-pink-600 to-purple-600',
    isPopular: true,
  },
  {
    slug: 'cara-membuat-nama-keren',
    title: 'Cara Membuat Nama Keren Aesthetic untuk Game & Sosmed',
    description:
      'Cara membuat nama keren aesthetic untuk IG, TikTok, WA & game. Tips memilih font Unicode dan simbol yang cocok.',
    category: 'Gaming Names',
    author: 'Tulisan Aesthetic Editorial Team',
    coverGradient: 'from-orange-600 to-amber-600',
    isPopular: true,
  },
  {
    slug: 'rahasia-font-miring-tebal-whatsapp-tanpa-aplikasi',
    title: 'Rahasia Font Miring & Tebal WhatsApp Tanpa Aplikasi',
    description:
      'Trik mudah memformat tulisan WhatsApp menjadi cetak tebal, miring, tercoret, dan font gelembung lingkaran hanya menggunakan generator online.',
    category: 'WhatsApp',
    author: 'Tech Writer',
    coverGradient: 'from-emerald-600 to-teal-600',
    isPopular: true,
  },
  {
    slug: 'kumpulan-kaomoji-jepang-lucu-terpopuler',
    title: 'Kumpulan Kaomoji Jepang Lucu Terpopuler',
    description:
      'Mengenal emotikon teks Jepang (Kaomoji) (◕‿◕) dan cara menggunakannya di postingan TikTok, pesan WhatsApp, dan bio Discord.',
    category: 'Kaomoji',
    author: 'Aesthetic Team',
    coverGradient: 'from-teal-600 to-cyan-600',
    isPopular: true,
  },
  {
    slug: 'cara-ganti-display-name-roblox-font-keren',
    title: 'Cara Ganti Display Name Roblox Font Keren',
    description:
      'Tutorial step-by-step mengubah nama tampilan di Roblox agar keren dan beda dari pemain lain menggunakan Unicode generator.',
    category: 'Roblox',
    author: 'Gaming Strategist',
    coverGradient: 'from-cyan-600 to-blue-600',
    isPopular: true,
  },
  {
    slug: 'apa-itu-unicode',
    title: 'Apa itu Unicode Font? Mengapa Teks Aesthetic Bisa Terbaca di Semua Perangkat?',
    description:
      'Panduan lengkap Unicode: cara kerja, sejarah, perbedaan dengan ASCII, dan mengapa dipakai untuk membuat tulisan aesthetic.',
    category: 'Unicode',
    author: 'SEO Architect',
    coverGradient: 'from-purple-600 to-indigo-600',
    isPopular: true,
  },
  {
    slug: 'rekomen-squad-name-mobile-legends-aesthetic',
    title: 'Nama Squad ML Aesthetic - 50+ Rekomendasi Keren',
    description:
      'Ide nama squad MLBB bahasa Inggris & Latin dengan lambang panah, mahkota, dan huruf gothic fraktur untuk turnamen esport.',
    category: 'Mobile Legends',
    author: 'Gaming Strategist',
    coverGradient: 'from-blue-600 to-sky-600',
  },
  {
    slug: 'tulisan-aesthetic-tiktok-caption-fyp',
    title: 'Tulisan Aesthetic untuk Caption TikTok FYP',
    description:
      'Tips mengoptimalkan teks caption TikTok dengan kombinasi font miring, emoji berwarna, dan hashtag estetik untuk menaikkan engagement.',
    category: 'TikTok',
    author: 'Content Marketer',
    coverGradient: 'from-pink-600 to-rose-600',
  },
  {
    slug: 'cara-format-teks-discord-markdown-font',
    title: 'Format Teks Discord - Bold, Italic & Unicode',
    description:
      'Trik mempercantik tampilan chat server Discord dan deskripsi profil menggunakan sintaks Markdown serta karakter generator font.',
    category: 'Discord',
    author: 'Tech Writer',
    coverGradient: 'from-indigo-600 to-violet-600',
  },
  {
    slug: 'simbol-bintang-dan-bunga-untuk-desain-bio',
    title: 'Simbol Bintang & Bunga untuk Bio Aesthetic',
    description:
      'Jelajahi variasi simbol Unicode bintang (★, ✦, ✨) dan bunga (🌸, 🌹, 🌺) untuk dekorasi bio Instagram dan postingan blog.',
    category: 'Symbols',
    author: 'Aesthetic Team',
    coverGradient: 'from-amber-600 to-yellow-600',
  },
  {
    slug: 'pubg-mobile-nickname-clan-name-aesthetic',
    title: 'Nickname PUBG Mobile Aesthetic & Clan Keren',
    description:
      'Daftar nama klan PUBGM elegan dengan ornamen panah ➜, petir ⚡, dan huruf kecil subscript superscript yang siap digunakan.',
    category: 'PUBG',
    author: 'Gaming Strategist',
    coverGradient: 'from-orange-600 to-yellow-600',
  },
  {
    slug: 'emoji-vs-kaomoji-perbedaan-dan-cara-pakai',
    title: 'Emoji vs Kaomoji - Perbedaan & Cara Pakai',
    description:
      'Ulasan perbandingan antara emoji grafis gambar berwarna dan emotikon teks kaomoji klasik dalam komunikasi pesan singkat.',
    category: 'Emoji',
    author: 'Aesthetic Team',
    coverGradient: 'from-emerald-600 to-green-600',
  },
];
