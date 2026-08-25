export interface TOCItem {
  id: string;
  title: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const WHATSAPP_ARTICLE_TOC: TOCItem[] = [
  { id: '1-apa-itu-font-whatsapp', title: '1. Apa itu Font WhatsApp?' },
  { id: '2-bagaimana-unicode-bekerja', title: '2. Bagaimana Unicode Bekerja?' },
  { id: '3-cara-membuat-font-whatsapp', title: '3. Cara Membuat Font WhatsApp' },
  { id: '4-font-untuk-nama-profil', title: '4. Font untuk Nama Profil' },
  { id: '5-font-untuk-bio', title: '5. Font untuk Bio' },
  { id: '6-font-untuk-status', title: '6. Font untuk Status' },
  { id: '7-font-untuk-pesan', title: '7. Font untuk Pesan' },
  { id: '8-apakah-semua-perangkat-mendukung', title: '8. Apakah Semua Perangkat Mendukung?' },
  { id: '9-tips-memilih-font-yang-mudah-dibaca', title: '9. Tips Memilih Font yang Mudah Dibaca' },
  { id: '10-kesalahan-yang-harus-dihindari', title: '10. Kesalahan yang Harus Dihindari' },
  { id: '11-faq', title: '11. FAQ' },
];

export const WHATSAPP_ARTICLE_META = {
  title: 'Font WhatsApp: Cara Membuat Tulisan Aesthetic untuk Nama, Bio & Status',
  subtitle:
    'Pelajari cara menggunakan Unicode untuk membuat tulisan keren di WhatsApp, mulai dari nama profil, bio, status, hingga pesan.',
  category: 'WhatsApp Guide',
  author: 'Tulisan Aesthetic Editorial Team',
  publishDate: '25 Agustus 2026',
  lastUpdated: '25 Agustus 2026',
  readingTime: '8 min read',
  coverGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
  slug: 'font-whatsapp',
};

export const WHATSAPP_ARTICLE_FAQS: FAQItem[] = [
  {
    q: 'Bagaimana cara membuat tulisan miring dan tebal bawaan di WhatsApp?',
    a: 'Untuk format bawaan WhatsApp: gunakan bintang (*teks*) untuk tebal (bold), garis bawah (_teks_) untuk miring (italic), gelombang (~teks~) untuk tercoret (strikethrough), dan tiga backtick (```teks```) untuk monospace.',
  },
  {
    q: 'Apakah saya bisa menggunakan font aesthetic Unicode di nama dan bio WhatsApp?',
    a: 'Bisa! Anda cukup mengetikkan teks di generator Tulisan Aesthetic, menyalin hasilnya, lalu menempelkannya (paste) di kolom Nama Profil atau Info (Bio) WhatsApp.',
  },
  {
    q: 'Apakah penggunaan generator font WhatsApp ini aman dan tidak dibanned?',
    a: 'Sangat aman 100%! Karakter yang dihasilkan adalah standar Unicode internasional resmi yang didukung secara default oleh aplikasi WhatsApp (Meta) pada Android dan iOS.',
  },
  {
    q: 'Berapa batas karakter untuk Nama dan Info (Bio) WhatsApp?',
    a: 'Nama WhatsApp memuat maksimal 25 karakter, sedangkan Info (Bio) WhatsApp memuat hingga 139 karakter. Penggunaan huruf Unicode dihitung sama dengan karakter biasa.',
  },
  {
    q: 'Mengapa font aesthetic kadang terlihat kotak-kotak (□) pada HP penerima pesan?',
    a: 'Simbol kotak (Tofu) terjadi jika HP penerima menggunakan versi sistem operasi Android/iOS yang sangat tua sehingga belum mendukung pembaruan Unicode terbaru.',
  },
  {
    q: 'Bisakah menyalin font aesthetic ke Status Story WhatsApp?',
    a: 'Bisa! Teks font Unicode dapat ditempelkan secara langsung pada Status Teks maupun caption foto/video Status WhatsApp Anda.',
  },
  {
    q: 'Gaya font WhatsApp apa yang paling populer saat ini?',
    a: 'Gaya font favorit meliputi Small Caps (ᴀᴇsᴛʜᴇᴛɪᴄ), Circle Bubble (ⓐⓔⓢⓣⓗⓔⓣⓘⓒ), Monospace Modern (𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎), dan Script Miring (𝓪𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬).',
  },
  {
    q: 'Apakah alat pembuat font WhatsApp di Tulisan Aesthetic ini gratis?',
    a: 'Ya, generator font WhatsApp di Tulisan Aesthetic 100% gratis digunakan selamanya tanpa batas dan tanpa perlu mendaftar.',
  },
  {
    q: 'Bagaimana cara menambahkan simbol bintang dan bunga di nama WA?',
    a: 'Ketikkan nama Anda di kolom generator, lalu sisipkan simbol bintang (✨, ★) atau bunga (🌸) yang tersedia di tab simbol sebelum menyalin ke WhatsApp.',
  },
  {
    q: 'Apakah penerima pesan WA perlu mengunduh aplikasi tambahan untuk membaca font saya?',
    a: 'Tidak perlu! Penerima pesan langsung dapat membaca tulisan unik Anda secara otomatis di aplikasi WhatsApp standar mereka.',
  },
];
