export interface NavItem {
  id: string;
  labelId: string;
  labelEn: string;
  href: string;
  badge?: string;
  descriptionId?: string;
  descriptionEn?: string;
  children?: NavItem[];
}

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'beranda',
    labelId: 'Beranda',
    labelEn: 'Home',
    href: '/',
  },
  {
    id: 'gaya-font',
    labelId: 'Gaya Font',
    labelEn: 'Font Styles',
    href: '/font',
    children: [
      { id: 'font-huruf-keren', labelId: 'Huruf Keren', labelEn: 'Aesthetic Font', href: '/font/huruf-keren', descriptionId: 'Huruf kecil superscript aesthetic' },
      { id: 'font-bold', labelId: 'Bold / Tebal', labelEn: 'Bold Sans', href: '/bold', descriptionId: 'Teks tebal sans-serif penjelas' },
      { id: 'font-bubble', labelId: 'Bubble Text', labelEn: 'Bubble Text', href: '/font/bubble', descriptionId: 'Huruf dilingkari lingkaran' },
      { id: 'font-cursive', labelId: 'Cursive / Script', labelEn: 'Cursive Script', href: '/font/cursive', descriptionId: 'Tulisan tangan halus dan anggun' },
      { id: 'font-gothic', labelId: 'Gothic / Fraktur', labelEn: 'Gothic Medieval', href: '/font/gothic', descriptionId: 'Kaligrafi abad pertengahan' },
      { id: 'font-tiny', labelId: 'Small Caps / Tiny', labelEn: 'Small Caps', href: '/font/tiny', descriptionId: 'Format huruf kapital mini' },
      { id: 'font-glitch', labelId: 'Glitch / Zalgo', labelEn: 'Glitch Cyber', href: '/font/glitch', descriptionId: 'Efek teks rusak cyberpunk' },
      { id: 'font-vintage', labelId: 'Vintage Monospace', labelEn: 'Typewriter', href: '/font/vintage', descriptionId: 'Model mesin ketik retro' },
      { id: 'font-sparkly', labelId: 'Sparkly Text', labelEn: 'Sparkly Text', href: '/font/sparkly', descriptionId: 'Efek teks berkilau bintang' },
      { id: 'font-random', labelId: 'Random Decor Mix', labelEn: 'Random Mix', href: '/font/random', descriptionId: 'Kombinasi mahkota & sayap' },
    ],
  },
  {
    id: 'platform',
    labelId: 'Platform',
    labelEn: 'Platforms',
    href: '/platform',
    children: [
      { id: 'platform-instagram', labelId: 'Instagram', labelEn: 'Instagram', href: '/platform/instagram', descriptionId: 'Bio IG, Story & Caption' },
      { id: 'platform-tiktok', labelId: 'TikTok', labelEn: 'TikTok', href: '/platform/tiktok', descriptionId: 'Bio & Komentar FYP' },
      { id: 'platform-whatsapp', labelId: 'WhatsApp', labelEn: 'WhatsApp', href: '/platform/whatsapp', descriptionId: 'Info Profil & Status' },
      { id: 'platform-facebook', labelId: 'Facebook', labelEn: 'Facebook', href: '/platform/facebook', descriptionId: 'Postingan & Profile' },
      { id: 'platform-discord', labelId: 'Discord', labelEn: 'Discord', href: '/platform/discord', descriptionId: 'Server Role & Name' },
    ],
  },
  {
    id: 'game-nickname',
    labelId: 'Game Nickname',
    labelEn: 'Game Nickname',
    href: '/game',
    children: [
      { id: 'game-free-fire', labelId: 'Free Fire', labelEn: 'Free Fire', href: '/game/free-fire', badge: 'Popular', descriptionId: 'Nick FF Simbol Payung & Mahkota' },
      { id: 'game-pubg', labelId: 'PUBG Mobile', labelEn: 'PUBG Mobile', href: '/game/pubg-mobile', descriptionId: 'Nick Clan & Pro Player PUBG' },
      { id: 'game-mlbb', labelId: 'Mobile Legends', labelEn: 'Mobile Legends', href: '/game/mobile-legends', descriptionId: 'Nickname Esports MLBB' },
      { id: 'game-roblox', labelId: 'Roblox', labelEn: 'Roblox', href: '/game/roblox', descriptionId: 'Username Aesthetic Roblox' },
      { id: 'game-codm', labelId: 'COD Mobile', labelEn: 'COD Mobile', href: '/game/cod-mobile', descriptionId: 'Name Clan CODM' },
    ],
  },
  {
    id: 'simbol-kaomoji',
    labelId: 'Simbol & Kaomoji',
    labelEn: 'Symbols & Kaomoji',
    href: '/simbol',
    children: [
      { id: 'simbol-all', labelId: 'Katalog Simbol Lengkap', labelEn: 'Complete Catalog', href: '/simbol', descriptionId: 'Ribuan Simbol Unicode 1-Klik' },
      { id: 'simbol-hati', labelId: 'Simbol Hati (Heart)', labelEn: 'Heart Symbols', href: '/simbol/hati', descriptionId: 'Emoticon Hati ♡ ♥ ❣' },
      { id: 'simbol-bintang', labelId: 'Simbol Bintang (Star)', labelEn: 'Star Symbols', href: '/simbol/bintang', descriptionId: 'Simbol Bintang ★ ✦ ✨' },
      { id: 'simbol-mahkota', labelId: 'Simbol Mahkota (Crown)', labelEn: 'Crown Symbols', href: '/simbol/mahkota', descriptionId: 'Simbol Mahkota 👑 ♚ ♕' },
      { id: 'simbol-bunga', labelId: 'Simbol Bunga (Flower)', labelEn: 'Flower Symbols', href: '/simbol/bunga', descriptionId: 'Simbol Bunga ✿ 🌸 🪷' },
      { id: 'simbol-panah', labelId: 'Simbol Panah (Arrow)', labelEn: 'Arrow Symbols', href: '/simbol/panah', descriptionId: 'Simbol Panah ➔ ➼ ➾' },
      { id: 'simbol-emoji', labelId: 'Text Emoji', labelEn: 'Text Emoji', href: '/simbol/emoji', descriptionId: 'Emoji Teks Klasik' },
      { id: 'simbol-kaomoji', labelId: 'Kaomoji Aesthetic', labelEn: 'Kaomoji', href: '/simbol/kaomoji', descriptionId: 'Emoticon Jepang (⁠◡⁠ ⁠ω⁠ ⁠◡⁠)' },
    ],
  },
  {
    id: 'artikel-blog',
    labelId: 'Artikel / Blog',
    labelEn: 'Blog & Articles',
    href: '/blog',
    children: [
      { id: 'blog-all', labelId: 'Semua Artikel Blog', labelEn: 'Latest Articles', href: '/blog', descriptionId: 'Kumpulan artikel & edukasi terbaru' },
      { id: 'blog-nama-keren', labelId: 'Panduan Nama Game Keren', labelEn: 'Popular Guides', href: '/blog/cara-membuat-nama-keren', descriptionId: 'Trik buat nickname ala pro player' },
      { id: 'blog-unicode', labelId: 'Panduan Rahasia Unicode', labelEn: 'Unicode Guide', href: '/blog/apa-itu-unicode', descriptionId: 'Cara kerja font Unicode di media sosial' },
      { id: 'blog-ig', labelId: 'Tips Bio Font Instagram', labelEn: 'Instagram Fonts', href: '/blog/font-instagram', descriptionId: 'Bikin bio IG aesthetic dan unik' },
      { id: 'blog-tiktok', labelId: 'Tips Caption TikTok', labelEn: 'TikTok Fonts', href: '/blog/font-tiktok', descriptionId: 'Bikin deskripsi video FYP' },
      { id: 'blog-wa', labelId: 'Tips Format Teks WhatsApp', labelEn: 'WhatsApp Fonts', href: '/blog/font-whatsapp', descriptionId: 'Trik pesan tebal, miring & bercoret' },
    ],
  },
];
