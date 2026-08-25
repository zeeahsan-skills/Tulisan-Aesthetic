export interface TOCItem {
  id: string;
  title: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const TIKTOK_ARTICLE_TOC: TOCItem[] = [
  { id: '1-apa-itu-font-tiktok', title: '1. Apa itu Font TikTok?' },
  { id: '2-cara-kerja-unicode-di-tiktok', title: '2. Cara Kerja Unicode di TikTok' },
  { id: '3-cara-membuat-font-tiktok', title: '3. Cara Membuat Font TikTok' },
  { id: '4-font-terbaik-untuk-bio-tiktok', title: '4. Font Terbaik untuk Bio TikTok' },
  { id: '5-font-untuk-username', title: '5. Font untuk Username' },
  { id: '6-font-untuk-caption', title: '6. Font untuk Caption' },
  { id: '7-font-untuk-komentar', title: '7. Font untuk Komentar' },
  { id: '8-apakah-semua-font-didukung', title: '8. Apakah Semua Font Didukung?' },
  { id: '9-tips-memilih-font-yang-mudah-dibaca', title: '9. Tips Memilih Font yang Mudah Dibaca' },
  { id: '10-kesalahan-yang-harus-dihindari', title: '10. Kesalahan yang Harus Dihindari' },
  { id: '11-faq', title: '11. FAQ' },
];

export const TIKTOK_ARTICLE_META = {
  title: 'Font TikTok: Cara Membuat Tulisan Aesthetic untuk Profil & Caption',
  subtitle:
    'Pelajari cara menggunakan font TikTok dengan Unicode untuk membuat profil, username, bio, caption, dan komentar menjadi lebih menarik.',
  category: 'TikTok Guide',
  author: 'Tulisan Aesthetic Editorial Team',
  publishDate: '25 Agustus 2026',
  lastUpdated: '25 Agustus 2026',
  readingTime: '8 min read',
  coverGradient: 'from-cyan-500 via-pink-500 to-purple-600',
  slug: 'font-tiktok',
};

export const TIKTOK_ARTICLE_FAQS: FAQItem[] = [
  {
    q: 'Apakah bisa merubah font nama dan bio TikTok tanpa aplikasi tambahan?',
    a: 'Bisa! Anda cukup menggunakan generator font Unicode gratis seperti Tulisan Aesthetic. Cukup ketik teks Anda, salin hasilnya, lalu tempelkan (paste) langsung ke profil TikTok Anda.',
  },
  {
    q: 'Apakah aman menggunakan font aesthetic di akun TikTok bisnis atau personal?',
    a: 'Sangat aman! Teks yang dihasilkan adalah standar Unicode internasional resmi yang didukung penuh oleh platform TikTok pada Android dan iOS.',
  },
  {
    q: 'Apakah font TikTok membantu video masuk FYP (For You Page)?',
    a: 'Font aesthetic membuat visual caption dan hook di 3 detik pertama video Anda lebih menarik perhatian audience. Hal ini meningkatkan Watch Time dan CTR yang berkontribusi positif pada algoritma FYP TikTok.',
  },
  {
    q: 'Mengapa teks Unicode nama TikTok saya tidak bisa dicari di kolom pencarian?',
    a: 'Algoritma pencarian TikTok (TikTok Search) bekerja lebih optimal mengindeks huruf Latin standar. Untuk username pencarian utama (ID @username), disarankan menggunakan huruf biasa agar mudah ditemukan.',
  },
  {
    q: 'Berapa batas karakter untuk Bio TikTok?',
    a: 'TikTok membatasi Bio profil maksimal 80 karakter. Penggunaan huruf Unicode dihitung sama dengan karakter biasa.',
  },
  {
    q: 'Bisakah menyalin font miring atau gothic ke dalam teks editing video TikTok?',
    a: 'Bisa! Anda dapat menempelkan teks font Unicode ke dalam stiker teks bawaan editor video TikTok, CapCut, atau aplikasi editing video lainnya.',
  },
  {
    q: 'Mengapa font TikTok kadang terlihat kotak kosong (□) di HP lama?',
    a: 'Karakter kotak (Tofu) muncul jika HP penerima menggunakan versi OS yang belum memperbarui font sistem Unicode terbaru. Lebih dari 98% perangkat modern tidak mengalami hal ini.',
  },
  {
    q: 'Gaya font TikTok apa yang paling populer saat ini?',
    a: 'Gaya terpopuler adalah Small Caps (ᴀᴇsᴛʜᴇᴛɪᴄ), Double Struck (𝕒𝕖𝕤𝕥𝕙𝕖𝕥𝕚𝕔), Cursive Script (𝓪𝓮𝕤𝓽𝓱𝓮𝕥𝓲𝓬), dan Gothic Bold (𝕲𝖔𝖙𝖍𝖎𝖈).',
  },
  {
    q: 'Apakah generator font TikTok di Tulisan Aesthetic ini gratis?',
    a: 'Ya, generator font TikTok di Tulisan Aesthetic 100% gratis digunakan sepuasnya tanpa pendaftaran maupun unduh aplikasi.',
  },
  {
    q: 'Bagaimana cara menambahkan simbol aesthetic seperti bintang dan panah di bio TikTok?',
    a: 'Anda bisa menggabungkan hasil font aesthetic dengan simbol bintang (✨, ★), panah (➜, ➸), atau kaomoji lucu langsung di kolom input generator sebelum disalin.',
  },
];
