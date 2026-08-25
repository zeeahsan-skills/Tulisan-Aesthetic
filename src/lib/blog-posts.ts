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
  readingTime: string;
  author: string;
  publishDate: string;
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
    title: 'Font WhatsApp: Cara Membuat Tulisan Aesthetic untuk Nama, Bio & Status',
    description:
      'Pelajari cara menggunakan Unicode untuk membuat tulisan keren di WhatsApp, mulai dari nama profil, bio, status, hingga pesan.',
    category: 'WhatsApp',
    readingTime: '8 min read',
    author: 'Tulisan Aesthetic Editorial Team',
    publishDate: '31 Jul 2025',
    coverGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    isPopular: true,
  },
  {
    slug: 'font-tiktok',
    title: 'Font TikTok: Cara Membuat Tulisan Aesthetic untuk Profil & Caption',
    description:
      'Pelajari cara menggunakan font TikTok dengan Unicode untuk membuat profil, username, bio, caption, dan komentar menjadi lebih menarik.',
    category: 'TikTok',
    readingTime: '8 min read',
    author: 'Tulisan Aesthetic Editorial Team',
    publishDate: '31 Jul 2025',
    coverGradient: 'from-cyan-500 via-pink-500 to-purple-600',
    isPopular: true,
  },
  {
    slug: 'font-instagram',
    title: 'Cara Membuat Font Aesthetic Bio Instagram yang Menarik & Viral',
    description:
      'Panduan lengkap mengubah teks bio Instagram dengan font aesthetic Unicode, simbol bintang, dan kaomoji unik agar profil terlihat aesthetic.',
    category: 'Instagram',
    readingTime: '5 min read',
    author: 'Aesthetic Team',
    publishDate: '28 Jul 2025',
    coverGradient: 'from-pink-600 to-purple-600',
    isPopular: true,
  },
  {
    slug: 'cara-membuat-nama-keren',
    title: '100+ Nickname Free Fire Keren Pakai Simbol Bintang & Mahkota',
    description:
      'Kumpulan rekomendasi nickname FF keren pro player dengan hiasan simbol bintang, mahkota, dan huruf gothic yang langsung bisa dicopy.',
    category: 'Free Fire',
    readingTime: '4 min read',
    author: 'Gaming Strategist',
    publishDate: '25 Jul 2025',
    coverGradient: 'from-orange-600 to-amber-600',
    isPopular: true,
  },
  {
    slug: 'rahasia-font-miring-tebal-whatsapp-tanpa-aplikasi',
    title: 'Panduan Rahasia Teks Tebal, Miring & Font Unik WhatsApp Tanpa Aplikasi',
    description:
      'Trik mudah memformat tulisan WhatsApp menjadi cetak tebal, miring, tercoret, dan font gelembung lingkaran hanya menggunakan generator online.',
    category: 'WhatsApp',
    readingTime: '6 min read',
    author: 'Tech Writer',
    publishDate: '22 Jul 2025',
    coverGradient: 'from-emerald-600 to-teal-600',
    isPopular: true,
  },
  {
    slug: 'kumpulan-kaomoji-jepang-lucu-terpopuler',
    title: 'Kumpulan 500+ Kaomoji Jepang Lucu & Ekspresif untuk Bio Social Media',
    description:
      'Mengenal emotikon teks Jepang (Kaomoji) (◕‿◕) dan cara menggunakannya di postingan TikTok, pesan WhatsApp, dan bio Discord.',
    category: 'Kaomoji',
    readingTime: '5 min read',
    author: 'Aesthetic Team',
    publishDate: '20 Jul 2025',
    coverGradient: 'from-teal-600 to-cyan-600',
    isPopular: true,
  },
  {
    slug: 'cara-ganti-display-name-roblox-font-keren',
    title: 'Cara Mengganti Display Name Roblox dengan Font Aesthetic & Simbol',
    description:
      'Tutorial step-by-step mengubah nama tampilan di Roblox agar keren dan beda dari pemain lain menggunakan Unicode generator.',
    category: 'Roblox',
    readingTime: '4 min read',
    author: 'Gaming Strategist',
    publishDate: '18 Jul 2025',
    coverGradient: 'from-cyan-600 to-blue-600',
    isPopular: true,
  },
  {
    slug: 'apa-itu-unicode',
    title: 'Apa itu Unicode Font? Mengapa Teks Aesthetic Bisa Terbaca di Semua Perangkat?',
    description:
      'Penjelasan teknis standar Unicode, variasi huruf Mathematical Alphanumeric Symbols, dan alasan mengapa font aesthetic bukan font file biasa.',
    category: 'Unicode',
    readingTime: '7 min read',
    author: 'SEO Architect',
    publishDate: '15 Jul 2025',
    coverGradient: 'from-purple-600 to-indigo-600',
    isPopular: true,
  },
  {
    slug: 'rekomen-squad-name-mobile-legends-aesthetic',
    title: '50+ Rekomendasi Nama Squad Mobile Legends Aesthetic & Simbol Keren',
    description:
      'Ide nama squad MLBB bahasa Inggris & Latin dengan lambang panah, mahkota, dan huruf gothic fraktur untuk turnamen esport.',
    category: 'Mobile Legends',
    readingTime: '5 min read',
    author: 'Gaming Strategist',
    publishDate: '12 Jul 2025',
    coverGradient: 'from-blue-600 to-sky-600',
  },
  {
    slug: 'tulisan-aesthetic-tiktok-caption-fyp',
    title: 'Cara Membuat Tulisan Aesthetic di Caption TikTok Agar Masuk FYP',
    description:
      'Tips mengoptimalkan teks caption TikTok dengan kombinasi font miring, emoji berwarna, dan hashtag estetik untuk menaikkan engagement.',
    category: 'TikTok',
    readingTime: '4 min read',
    author: 'Content Marketer',
    publishDate: '10 Jul 2025',
    coverGradient: 'from-pink-600 to-rose-600',
  },
  {
    slug: 'cara-format-teks-discord-markdown-font',
    title: 'Panduan Format Teks Discord: Bold, Italic, Codeblock & Font Unicode',
    description:
      'Trik mempercantik tampilan chat server Discord dan deskripsi profil menggunakan sintaks Markdown serta karakter generator font.',
    category: 'Discord',
    readingTime: '5 min read',
    author: 'Tech Writer',
    publishDate: '08 Jul 2025',
    coverGradient: 'from-indigo-600 to-violet-600',
  },
  {
    slug: 'simbol-bintang-dan-bunga-untuk-desain-bio',
    title: 'Makna & Cara Pakai Simbol Bintang & Bunga Estetik untuk Bio Medsos',
    description:
      'Jelajahi variasi simbol Unicode bintang (★, ✦, ✨) dan bunga (🌸, 🌹, 🌺) untuk dekorasi bio Instagram dan postingan blog.',
    category: 'Symbols',
    readingTime: '4 min read',
    author: 'Aesthetic Team',
    publishDate: '05 Jul 2025',
    coverGradient: 'from-amber-600 to-yellow-600',
  },
  {
    slug: 'pubg-mobile-nickname-clan-name-aesthetic',
    title: 'Ide Nama Clan PUBG Mobile Aesthetic Pakai Simbol Panah & Sayap',
    description:
      'Daftar nama klan PUBGM elegan dengan ornamen panah ➜, petir ⚡, dan huruf kecil subscript superscript yang siap digunakan.',
    category: 'PUBG',
    readingTime: '5 min read',
    author: 'Gaming Strategist',
    publishDate: '02 Jul 2025',
    coverGradient: 'from-orange-600 to-yellow-600',
  },
  {
    slug: 'emoji-vs-kaomoji-perbedaan-dan-cara-pakai',
    title: 'Perbedaan Emoji Berwarna vs Kaomoji Teks: Mana yang Lebih Cocok untuk Anda?',
    description:
      'Ulasan perbandingan antara emoji grafis gambar berwarna dan emotikon teks kaomoji klasik dalam komunikasi pesan singkat.',
    category: 'Emoji',
    readingTime: '4 min read',
    author: 'Aesthetic Team',
    publishDate: '30 Jun 2025',
    coverGradient: 'from-emerald-600 to-green-600',
  },
];
