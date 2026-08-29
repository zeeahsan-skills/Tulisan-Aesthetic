export interface TOCItem {
  id: string;
  title: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const UNICODE_ARTICLE_TOC: TOCItem[] = [
  { id: '1-what-is-unicode', title: '1. Apa Itu Unicode?' },
  { id: '2-history-of-unicode', title: '2. Sejarah Singkat Unicode' },
  { id: '3-why-unicode-was-created', title: '3. Mengapa Unicode Diciptakan?' },
  { id: '4-unicode-vs-ascii', title: '4. Perbedaan Unicode vs ASCII' },
  { id: '5-how-stylish-fonts-work', title: '5. Cara Kerja Font Aesthetic Unicode' },
  { id: '6-unicode-on-instagram', title: '6. Unicode di Instagram (Bio & Caption)' },
  { id: '7-unicode-on-tiktok', title: '7. Unicode di TikTok' },
  { id: '8-unicode-on-whatsapp', title: '8. Unicode di WhatsApp' },
  { id: '9-unicode-on-discord', title: '9. Unicode di Discord' },
  { id: '10-unicode-on-facebook', title: '10. Unicode di Facebook' },
  { id: '11-unicode-compatibility', title: '11. Kompatibilitas Perangkat & Masalah Kotak (□)' },
  { id: '12-frequently-asked-questions', title: '12. Pertanyaan Umum (FAQ)' },
];

export const UNICODE_ARTICLE_META = {
  title: 'Apa Itu Unicode? Panduan Lengkap Cara Kerja & Font Aesthetic',
  subtitle:
    'Panduan lengkap mengenai Unicode, cara kerjanya, manfaatnya, dan mengapa Unicode digunakan untuk membuat tulisan aesthetic di Instagram, TikTok, WhatsApp, dan Game.',
  category: 'Unicode Guide',
  author: 'Tulisan Aesthetic Editorial Team',
  publishDate: '25 Agustus',
  lastUpdated: '25 Agustus',
  readingTime: '8 min read',
  coverGradient: 'from-purple-600 via-pink-600 to-indigo-700',
  slug: 'apa-itu-unicode',
};

export const UNICODE_ARTICLE_FAQS: FAQItem[] = [
  {
    q: 'Apa perbedaan utama antara Unicode dan Font biasa (seperti Arial)?',
    a: 'Font biasa (seperti Arial atau Helvetica) adalah file font (.ttf/.otf) yang mengubah bentuk visual huruf lokal di komputer Anda. Sedangkan Unicode adalah standar internasional yang memberi nomor unik (Code Point) pada setiap karakter, sehingga tulisan dapat terbaca di semua HP dan aplikasi tanpa instalasi font.',
  },
  {
    q: 'Mengapa tulisan aesthetic Unicode tidak bisa diubah ukurannya seperti teks biasa?',
    a: 'Karena gaya tulisan aesthetic (seperti 𝔤𝔬𝔱𝔥𝔦𝔠 atau ⓑⓤⓑⓑⓛⓔ) sebenarnya adalah karakter alfabet khusus yang berada pada blok simbol matematika Unicode, bukan teks biasa yang diberi gaya CSS.',
  },
  {
    q: 'Mengapa kadang-kadang karakter Unicode muncul sebagai kotak kosong (□) atau tanda tanya (?)?',
    a: 'Hal ini terjadi ketika sistem operasi HP/komputer pengguna versi lama belum memiliki file font sistem bawaan yang menyertakan bentuk visual (glyph) untuk titik kode Unicode modern tersebut.',
  },
  {
    q: 'Apakah aman menggunakan font Unicode di bio Instagram dan akun TikTok?',
    a: 'Sangat aman! Media sosial utama seperti Instagram, TikTok, WhatsApp, dan Facebook mendukung standar Unicode secara penuh sehingga akun Anda tidak akan terkena sanksi atau banned.',
  },
  {
    q: 'Bagaimana cara konversi teks biasa menjadi karakter Unicode aesthetic?',
    a: 'Anda cukup mengetikkan kata atau kalimat di generator Tulisan Aesthetic. Sistem kami akan secara otomatis memetakan (mapping) setiap huruf alfabet standar (A-Z) ke karakter matematika Unicode yang sesuai.',
  },
  {
    q: 'Berapa banyak karakter yang ditampung oleh standar Unicode saat ini?',
    a: 'Standar Unicode versi terbaru mampu menampung lebih dari 149.000 karakter yang mencakup abjad modern, naskah kuno, simbol matematika, aksara daerah, hingga ribuan emoji berwarna.',
  },
  {
    q: 'Apakah Unicode mendukung bahasa dan aksara tradisional Indonesia?',
    a: 'Ya! Unicode sudah mendukung berbagai aksara Nusantara seperti Aksara Jawa, Aksara Bali, Aksara Sunda, Aksara Batak, dan Aksara Bugis (Lontara).',
  },
  {
    q: 'Apakah penggunaan tulisan aesthetic berpengaruh pada pembaca layar (Screen Reader)?',
    a: 'Teks yang menggunakan simbol matematika Unicode kompleks mungkin dibaca sebagai nama simbol matematika oleh pembaca layar. Oleh karena itu, disarankan menggunakannya secara bijak untuk kata kunci utama.',
  },
  {
    q: 'Mengapa emoji dan kaomoji termasuk dalam standar Unicode?',
    a: 'Karena emoji dan simbol kaomoji memerlukan titik kode standar agar pesan emosi yang dikirim dari satu HP (seperti iPhone) dapat dirender dengan makna yang sama di HP lain (seperti Android).',
  },
  {
    q: 'Apakah generator Tulisan Aesthetic ini gratis untuk semua jenis font Unicode?',
    a: 'Ya! Seluruh layanan konversi teks Unicode dan generator tulisan aesthetic di website kami 100% gratis digunakan selamanya.',
  },
];
