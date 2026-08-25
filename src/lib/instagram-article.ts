export interface TOCItem {
  id: string;
  title: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const INSTAGRAM_ARTICLE_TOC: TOCItem[] = [
  { id: '1-apa-itu-font-instagram', title: '1. Apa Itu Font Instagram?' },
  { id: '2-bagaimana-font-instagram-bekerja', title: '2. Bagaimana Font Instagram Bekerja?' },
  { id: '3-mengapa-menggunakan-unicode', title: '3. Mengapa Menggunakan Unicode?' },
  { id: '4-cara-mengubah-tulisan-menjadi-font-instagram', title: '4. Cara Mengubah Tulisan Menjadi Font Instagram' },
  { id: '5-font-terbaik-untuk-bio', title: '5. Font Terbaik untuk Bio Instagram' },
  { id: '6-font-untuk-username', title: '6. Font untuk Username Tampilan' },
  { id: '7-font-untuk-caption', title: '7. Font untuk Caption Postingan' },
  { id: '8-font-untuk-story', title: '8. Font untuk Instagram Story' },
  { id: '9-font-untuk-komentar', title: '9. Font untuk Kolom Komentar' },
  { id: '10-tips-memilih-font-mudah-dibaca', title: '10. Tips Memilih Font yang Mudah Dibaca' },
  { id: '11-kesalahan-harus-dihindari', title: '11. Kesalahan yang Harus Dihindari' },
  { id: '12-faq-pertanyaan-umum', title: '12. Pertanyaan Umum (FAQ)' },
];

export const INSTAGRAM_ARTICLE_META = {
  title: 'Font Instagram: Panduan Lengkap Menggunakan Tulisan Aesthetic 2026',
  subtitle:
    'Pelajari cara membuat tulisan Instagram yang keren untuk bio, username, caption, komentar, dan Story menggunakan Unicode.',
  category: 'Instagram Guide',
  author: 'Tulisan Aesthetic Editorial Team',
  publishDate: '25 Agustus 2026',
  lastUpdated: '25 Agustus 2026',
  readingTime: '8 min read',
  coverGradient: 'from-pink-600 via-rose-600 to-purple-700',
  slug: 'font-instagram',
};

export const INSTAGRAM_ARTICLE_FAQS: FAQItem[] = [
  {
    q: 'Apakah bisa mengubah font bawaan Instagram tanpa aplikasi tambahan?',
    a: 'Bisa! Anda cukup menggunakan generator font Unicode online seperti Tulisan Aesthetic. Ketik teks Anda, salin hasilnya, lalu paste di bio, caption, atau komentar Instagram Anda.',
  },
  {
    q: 'Apakah font aesthetic aman digunakan di akun Instagram bisnis maupun pribadi?',
    a: 'Sangat aman! Karakter yang dihasilkan merupakan simbol standar Unicode internasional yang didukung resmi oleh Meta/Instagram.',
  },
  {
    q: 'Mengapa teks estetis di bio Instagram tidak bisa dicari di pencarian IG?',
    a: 'Karena algoritma pencarian Instagram mengindeks nama berdasarkan huruf latin biasa. Disarankan tetap mencantumkan kata kunci nama asli Anda pada Username utama.',
  },
  {
    q: 'Berapa batasan karakter untuk bio Instagram?',
    a: 'Batas maksimum bio Instagram adalah 150 karakter. Penggunaan karakter Unicode dihitung sama dengan karakter biasa.',
  },
  {
    q: 'Apakah font aesthetic bisa digunakan di Instagram Story?',
    a: 'Bisa! Anda dapat menyalin teks font Unicode ke stiker teks Instagram Story, atau menggunakan font bawaan stiker teks IG yang dikombinasikan dengan simbol Unicode.',
  },
  {
    q: 'Mengapa kadang font terlihat terpotong di HP teman?',
    a: 'Hal ini terjadi jika teman Anda menggunakan versi aplikasi Instagram yang sangat tua atau HP tanpa pembaruan font sistem Unicode terbaru.',
  },
  {
    q: 'Gaya font apa yang paling populer untuk Bio Instagram aesthetic?',
    a: 'Gaya font terfavorit adalah Small Caps (ᴀᴇsᴛʜᴇᴛɪᴄ), Gothic Fraktur (𝔤𝔬𝔱𝔥𝔦𝔠), Circle Bubble (ⓐⓔⓢⓣⓗⓔⓣⓘⓒ), dan Cursive Script (𝓪𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬).',
  },
  {
    q: 'Apakah generator font Instagram ini gratis?',
    a: 'Ya! Semua alat konversi font Instagram di Tulisan Aesthetic 100% gratis digunakan selamanya tanpa biaya.',
  },
  {
    q: 'Apakah saya bisa menambahkan simbol bintang dan bunga di Bio IG?',
    a: 'Bisa! Anda dapat mengombinasikan font aesthetic dengan simbol bintang (★, ✦, ✨) dan bunga (🌸, 🌹) untuk mempercantik bio.',
  },
  {
    q: 'Bagaimana cara menyalin font Instagram secara cepat?',
    a: 'Cukup ketuk tombol Copy pada kartu gaya font yang Anda inginkan, lalu tempelkan (paste) langsung di aplikasi Instagram Anda.',
  },
];
