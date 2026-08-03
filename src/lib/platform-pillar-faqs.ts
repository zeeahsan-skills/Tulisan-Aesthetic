export interface FAQItem {
  question: string;
  answer: string;
}

export const PLATFORM_PILLAR_FAQS: FAQItem[] = [
  {
    question: 'Apa itu Font Generator Platform Media Sosial?',
    answer:
      'Font Generator Platform Media Sosial adalah alat konversi teks online yang mengubah huruf biasa menjadi simbol Unicode aesthetic. Hasilnya dapat langsung disalin dan ditempel di bio Instagram, caption TikTok, status WhatsApp, postingan Facebook, hingga nama role Discord tanpa memerlukan instalasi aplikasi tambahan.',
  },
  {
    question: 'Mengapa font bawaan Instagram, TikTok, dan WhatsApp bisa diubah dengan Unicode?',
    answer:
      'Aplikasi media sosial tidak mengizinkan pengubahan file font (.ttf/.otf), tetapi mereka mendukung standar internasional Unicode. Converter kami mengubah teks Anda menjadi karakter khusus Unicode (seperti Small Caps, Circled, Script, dan Gothic) yang secara bawaan sudah dikenali oleh sistem operasi Android, iOS, Windows, dan macOS.',
  },
  {
    question: 'Apakah penggunaan font aesthetic di bio Instagram aman dan tidak melanggar aturan?',
    answer:
      'Sangat aman. Menggunakan karakter Unicode di bio atau nama profil Instagram 100% legal dan tidak akan menyebabkan pembatasan akun (shadowban) karena karakter yang dihasilkan merupakan simbol standar resmi internet.',
  },
  {
    question: 'Mengapa sebagian font aesthetic terlihat sebagai kotak kosong atau tanda tanya (□)?',
    answer:
      'Fenomena ini dinamakan "Tofu Effect". Hal ini terjadi ketika perangkat seluler versi lama (misalnya Android versi lama) belum memperbarui perpustakaan font Unicode mereka. Namun, lebih dari 98% smartphone modern saat ini sudah dapat menampilkan semua gaya font dengan sempurna.',
  },
  {
    question: 'Apa perbedaan antara format markdown WhatsApp (*Tebal* / _Miring_) dengan Font Generator?',
    answer:
      'Format bawaan WhatsApp menggunakan tanda bintang (*) atau garis bawah (_) untuk cetak tebal dan miring standar. Sementara Font Generator kami menghasilkan gaya tulisan unik (seperti huruf melingkar, tulisan tangan sambung, huruf besar mini, atau efek kilau) yang bisa ditampilkan di status, nama profil, maupun obrolan obrolan.',
  },
  {
    question: 'Bagaimana cara mengganti font di bio Instagram secara instan?',
    answer:
      'Ketik teks yang Anda inginkan di kotak konverter kami, pilih gaya font yang menarik, klik tombol "Salin Teks", kemudian buka aplikasi Instagram > Edit Profil > Tempel (Paste) teks tersebut di kolom Bio atau Nama, lalu simpan perubahan.',
  },
  {
    question: 'Apakah penggunaan font unik di caption TikTok dapat mempengaruhi jangkauan FYP?',
    answer:
      'Secara teknis, algoritma pencarian (SEO TikTok) membaca kata kunci dari teks standar. Untuk hasil maksimal, gunakan font aesthetic pada judul pembuka atau highlight caption, dan kombinasikan dengan teks biasa untuk kata kunci utama agar konten Anda tetap terindeks dengan baik di FYP.',
  },
  {
    question: 'Bagaimana cara membuat nama role & channel Discord yang rapi dan keren?',
    answer:
      'Discord mendukung simbol Unicode secara luas pada nama Server, Channel, dan Role. Gunakan font Small Caps atau Vintage Monospace dari generator kami untuk memberikan tampilan profesional, terorganisir, dan estetis pada server Discord Anda.',
  },
  {
    question: 'Apakah font unik di postingan Facebook dapat dibaca oleh screen reader (pembaca layar)?',
    answer:
      'Beberapa perangkat pembaca layar untuk penyandang disabilitas mungkin membaca simbol Unicode sebagai deskripsi simbol grafis. Oleh karena itu, disarankan menggunakan font unik untuk highlight kata kunci atau judul, tanpa mengubah keseluruhan paragraf berita.',
  },
  {
    question: 'Berapa batas karakter bio di Instagram, TikTok, dan WhatsApp?',
    answer:
      'Batas karakter bio Instagram adalah 150 karakter, TikTok 80 karakter, dan WhatsApp Info Profil 139 karakter. Setiap karakter Unicode yang dihasilkan alat kami dihitung sebagai 1 karakter standar.',
  },
  {
    question: 'Apakah semua font generator di platform ini 100% gratis digunakan?',
    answer:
      'Ya, seluruh alat konversi font untuk Instagram, TikTok, WhatsApp, Facebook, dan Discord di Tulisan Aesthetic dapat digunakan gratis sepuasnya tanpa pendaftaran atau biaya berlangganan.',
  },
];
