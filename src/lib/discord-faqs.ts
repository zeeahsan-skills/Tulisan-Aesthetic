export interface FAQItem {
  q: string;
  a: string;
}

export const DISCORD_FAQS: FAQItem[] = [
  {
    q: 'Apa itu Discord Font Generator?',
    a: 'Discord Font Generator adalah generator teks gratis berbasis Unicode yang mengonversi teks biasa menjadi puluhan variasi font estetik (seperti Gothic, Small Caps, Glitch/Zalgo, Tebal, dan Cursive) yang 100% kompatibel di Discord untuk nama akun, nickname server, nama role, channel, serta pesan obrolan.',
  },
  {
    q: 'Apakah font estetik ini dapat digunakan untuk Discord Username & Display Name?',
    a: 'Ya! Teks Unicode dapat dipakai untuk Display Name (nama tampilan), Nickname server, dan About Me profil Discord. Untuk Username utama (@username), Discord mengizinkan karakter alphanumeric khusus dan garis bawah.',
  },
  {
    q: 'Bagaimana cara mengubah nama channel Discord agar aesthetic?',
    a: 'Salin teks berformat Unicode (seperti Small Caps atau Font Bulat) dari generator kami, buka Discord, edit nama channel (Channel Settings), lalu tempelkan (paste) teks ke kolom Channel Name.',
  },
  {
    q: 'Mengapa font Unicode bisa dibaca di Discord tanpa perlu bot?',
    a: 'Platform Discord dirancang mendukung penuh standar karakter Unicode internasional di desktop, web, dan aplikasi mobile iOS/Android. Oleh karena itu, karakter unik ini langsung dikenali oleh sistem Discord tanpa perlu berkas instalasi tambahan.',
  },
  {
    q: 'Apakah font ini aman dan tidak melanggar aturan Discord (ToS)?',
    a: 'Sangat aman. Penggunaan karakter Unicode publik adalah fitur bawaan standar jaringan yang diperbolehkan di profil pribadi, server, role name, dan pesan chat.',
  },
  {
    q: 'Apakah penggunaan generator font Discord ini 100% gratis?',
    a: 'Ya, generator font Discord ini 100% gratis selamanya tanpa perlu pendaftaran akun, tanpa perlu mengklaim bot, dan tanpa batasan salin.',
  },
  {
    q: 'Dapatkah saya menggunakan font ini untuk Role Name Discord?',
    a: 'Sangat bisa! Pemilik atau admin server sering memanfaatkan gaya font Gothic, Bold, dan Small Caps untuk memberikan kesan eksklusif pada nama role VIP, Moderator, Administrator, dan Bot.',
  },
  {
    q: 'Apakah teks estetik ini dapat digunakan di pesan obrolan Discord?',
    a: 'Bisa. Anda bisa menyalin teks font estetik untuk diposting langsung di kolom chat teks, pesan pribadi (DM), maupun pengumuman server.',
  },
  {
    q: 'Apakah gaya Zalgo Glitch aman dipakai di Discord?',
    a: 'Gaya Zalgo Glitch bisa digunakan di Discord. Namun untuk nama channel dan role server, disarankan menggunakan kadar Zalgo sedang agar tata letak daftar member tetap rapi.',
  },
  {
    q: 'Mengapa kadang timbul karakter kotak (tofu) di beberapa perangkat?',
    a: 'Karakter kotak hanya muncul jika perangkat pengguna menggunakan sistem operasi jadul yang belum memperbarui pustaka Unicode bawaan. Pada semua versi aplikasi Discord modern di HP dan PC, font tampil sempurna.',
  },
];
