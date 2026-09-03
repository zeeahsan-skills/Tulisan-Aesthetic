export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  proTip?: string;
  commonMistakes?: string[];
}

export interface CopyablePreset {
  label: string;
  text: string;
  badge?: string;
}

export interface StepInstruction {
  step: number;
  title: string;
  instruction: string;
}

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface ArticleTable {
  headers: string[];
  rows: string[][];
}

export interface RichBlogArticleData {
  slug: string;
  directAnswer: string;
  introParagraphs: string[];
  table?: ArticleTable;
  sections: ArticleSection[];
  copyablePresets: CopyablePreset[];
  stepByStep: StepInstruction[];
  faqs: ArticleFaq[];
  recommendedTools: { label: string; href: string; desc: string }[];
}

export const RICH_BLOG_ARTICLES: Record<string, RichBlogArticleData> = {
  'rahasia-font-miring-tebal-whatsapp-tanpa-aplikasi': {
    slug: 'rahasia-font-miring-tebal-whatsapp-tanpa-aplikasi',
    directAnswer:
      'Untuk membuat teks tebal di WhatsApp, apit kata dengan tanda bintang (*teks*). Untuk teks miring gunakan garis bawah (_teks_). Teks tercoret menggunakan tilde (~teks~), dan font monospace menggunakan tiga backtick (```teks```). Jika Anda ingin font aesthetic seperti cursive atau bubble, gunakan generator Unicode online dan tempel langsung ke chat atau status WA.',
    introParagraphs: [
      'WhatsApp adalah aplikasi pesan instan paling dominan di Indonesia. Namun, sebagian besar pengguna hanya mengetahui cara mengetik pesan dengan font standar biasa. Padahal, WhatsApp menyediakan format teks bawaan (Markdown formatting) serta mendukung karakter Unicode matematis modern.',
      'Memahami cara memodifikasi font WhatsApp sangat berguna untuk memperjelas pesan penting, membuat judul chat di grup keluarga atau kantor, serta mempercantik bio profil dan status harian agar terlihat lebih profesional dan estetik.',
    ],
    table: {
      headers: ['Gaya Format', 'Sintaks WhatsApp', 'Contoh Masukan', 'Hasil Tampilan'],
      rows: [
        ['Teks Tebal (Bold)', '*kata*', '*Penting*', 'Penting (Bold)'],
        ['Teks Miring (Italic)', '_kata_', '_Catatan_', 'Catatan (Miring)'],
        ['Teks Tercoret (Strikethrough)', '~kata~', '~Diskon Selesai~', 'Diskon Selesai (Coret)'],
        ['Monospace (Mesin Tik)', '```kata```', '```KODE123```', 'KODE123 (Lebar Sama)'],
        ['Kombinasi Tebal & Miring', '*_kata_*', '*_Perhatian_*', 'Perhatian (Tebal Miring)'],
      ],
    },
    sections: [
      {
        heading: '1. Format Teks Bawaan WhatsApp Menggunakan Simbol',
        paragraphs: [
          'Fitur format bawaan WhatsApp bekerja di aplikasi Android, iOS (iPhone), WhatsApp Web, hingga aplikasi desktop. Karakter format harus menempel langsung pada huruf pertama dan terakhir tanpa spasi agar format aktif.',
          'Jika Anda menambahkan spasi seperti "* teks *", WhatsApp tidak akan mengonversi teks tersebut dan tanda bintang akan tetap terlihat sebagai teks biasa.',
        ],
        bullets: [
          'Tebal (Bold): Letakkan tanda bintang (*) di awal dan akhir teks.',
          'Miring (Italic): Letakkan tanda garis bawah (underscore _) di awal dan akhir teks.',
          'Tercoret (Strikethrough): Letakkan simbol tilde (~) di awal dan akhir kata.',
          'Monospace: Gunakan 3 tanda backtick (```) di awal dan akhir kalimat tanpa spasi.',
        ],
        proTip:
          'Anda bisa menggabungkan beberapa format sekaligus. Contohnya, tuliskan *_Pengumuman_* untuk menghasilkan teks yang sekaligus tebal dan miring.',
      },
      {
        heading: '2. Cara Menghasilkan Gaya Tulisan Aesthetic untuk Bio & Status WA',
        paragraphs: [
          'Sintaks bawaan seperti * dan _ hanya bekerja di dalam ruang obrolan (chat message). Sintaks ini tidak berfungsi di dalam Bio Nama Profil atau Status Cerita WhatsApp.',
          'Untuk nama profil dan status WA yang estetik, solusinya adalah memanfaatkan generator teks berbasis Unicode. Standar Unicode memetakan karakter huruf latin ke dalam blok karakter khusus (Mathematical Alphanumeric Symbols) yang didukung penuh oleh WhatsApp di Android maupun iOS.',
        ],
        commonMistakes: [
          'Menggunakan simbol bintang (*) di bio profil WhatsApp dengan harapan teks menjadi tebal.',
          'Mengunduh aplikasi pihak ketiga yang meminta izin akses keyboard berbahaya hanya untuk mengubah font.',
          'Memilih gaya font dengan karakter bertumpuk ekstrim (zalgo overload) yang membuat status WA terpotong di layar HP teman.',
        ],
      },
    ],
    copyablePresets: [
      { label: 'Bio WhatsApp Elegan', text: '𝒮𝓁𝑜𝓌 𝒹𝑜𝓌𝓃 & 𝒷𝓇ℯ𝒶𝓉𝒽ℯ 🌿', badge: 'Kursif' },
      { label: 'Status Singkat Aesthetic', text: '「 ✦ 𝒪𝒻𝒻𝓁𝒾𝓃ℯ 𝓂𝑜𝒹ℯ ✦ 」', badge: 'Estetik' },
      { label: 'Nama Kontak Rapi', text: '𝗧𝗲𝗸𝘀 𝗧𝗲𝗯𝗮𝗹 𝗕𝗼𝗹𝗱', badge: 'Bold Sans' },
      { label: 'Bio Minimalis Kalem', text: 'ᶜᵒᶠᶠᵉᵉ & ᵇᵒᵒᵏˢ ☕', badge: 'Tiny' },
    ],
    stepByStep: [
      { step: 1, title: 'Buka Generator Font', instruction: 'Buka direktori alat generator font di Tulisan Aesthetic.' },
      { step: 2, title: 'Ketik Teks Pilihan', instruction: 'Ketik kata atau bio yang ingin Anda ubah, lalu pilih style tebal, miring, atau gelembung.' },
      { step: 3, title: 'Salin Teks', instruction: 'Klik tombol Salin (Copy) pada teks hasil konversi.' },
      { step: 4, title: 'Tempel di WhatsApp', instruction: 'Buka WhatsApp > Pengaturan Profil > Edit Nama atau Info Akun > Tempelkan (Paste).' },
    ],
    faqs: [
      {
        q: 'Apakah teman chat saya bisa melihat tulisan unik ini tanpa menginstal aplikasi?',
        a: 'Ya! Karena teks menggunakan karakter standar Unicode resmi, seluruh pengguna smartphone Android, iPhone, dan PC dapat langsung melihat tampilan font unik tanpa perlu menginstal aplikasi tambahan apa pun.',
      },
      {
        q: 'Mengapa format tanda bintang (*) tidak bekerja di bio WhatsApp saya?',
        a: 'Fitur sintaks markdown bawaan WhatsApp (*, _, ~) hanya aktif di kolom chat. Untuk bio dan info profil, Anda wajib menggunakan karakter Unicode dari generator font.',
      },
      {
        q: 'Apakah akun WhatsApp saya aman jika menggunakan font ini?',
        a: '100% aman. Menggunakan teks Unicode tidak melanggar ketentuan layanan WhatsApp karena karakter tersebut merupakan karakter teks resmi internasional, bukan modifikasi aplikasi (WhatsApp MOD).',
      },
    ],
    recommendedTools: [
      { label: 'Font WhatsApp Generator', href: '/platform/whatsapp', desc: 'Generator khusus bio dan status WhatsApp' },
      { label: 'Font Tebal (Bold)', href: '/font/tebal', desc: 'Ubah teks biasa menjadi huruf tebal elegan' },
      { label: 'Font Miring Kursif', href: '/font/miring-kursif', desc: 'Tulisan sambung tangan latin aesthetic' },
    ],
  },

  'kumpulan-kaomoji-jepang-lucu-terpopuler': {
    slug: 'kumpulan-kaomoji-jepang-lucu-terpopuler',
    directAnswer:
      'Kaomoji (顔文字) adalah emotikon teks asal Jepang yang disusun menggunakan karakter tipografi dan simbol aksara (seperti Hiragana, Katakana, dan simbol matematika). Berbeda dengan emoji grafis kuning, kaomoji menampilkan emosi bernuansa halus seperti gembira (* ^ ω ^), malu (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄), atau berserah (╯°□°)╯ yang langsung bisa dicopy-paste ke bio TikTok, Twitter/X, dan Discord.',
    introParagraphs: [
      'Kaomoji berasal dari gabungan kata "Kao" (顔 - wajah) dan "Moji" (文字 - karakter tulisan). Budaya komunikasi online Jepang mempopulerkan ekspresi wajah ini sejak era 1980-an di forum internet bulletin board (BBS).',
      'Kelebihan utama kaomoji adalah ekspresinya yang jauh lebih kaya dan bervariasi dibanding emoji standar. Kaomoji tidak terikat pada desain grafis sistem operasi tertentu, sehingga ekspresinya tetap konsisten di iPhone, Android, dan PC.',
    ],
    sections: [
      {
        heading: 'Kategori Kaomoji Paling Digemari',
        paragraphs: [
          'Dalam komunitas kreator estetik, kaomoji sering diselipkan di akhir bio Instagram, keterangan profil TikTok, atau pesan selamat pagi di grup obrolan. Berikut kategori kaomoji yang paling banyak disukai:',
        ],
        bullets: [
          'Kaomoji Senang & Bahagia: Menampilkan mata melengkung dan tangan terangkat (≧◡≦) ♡',
          'Kaomoji Malu & Tsundere: Menggunakan garis miring penanda rona pipi (⁄ ⁄•⁄ω⁄•⁄ ⁄)',
          'Kaomoji Hewan (Kucing & Beruang): Menggunakan tanda telinga kurung ฅ^•ﻌ•^ฅ',
          'Kaomoji Melempar Meja & Frustrasi: Menunjukkan aksi dramatis melempar meja (╯°□°)╯︵ ┻━┻',
        ],
        proTip:
          'Di keyboard bawaan iPhone (iOS), Anda bisa mengaktifkan keyboard bahasa Jepang Kana untuk membuka pustaka ratusan kaomoji bawaan hanya dengan menekan tombol ^_^ di pojok bawah.',
      },
      {
        heading: 'Cara Menambahkan Kaomoji ke Bio Media Sosial Tanpa Berantakan',
        paragraphs: [
          'Beberapa karakter di dalam kaomoji menggunakan karakter lebar penuh (full-width) atau simbol aksara khusus. Agar tampilan bio tetap rapi, gunakan kaomoji dengan jumlah karakter pendek (5-12 karakter) jika bio Anda memiliki batas panjang teks yang ketat seperti Instagram (150 karakter).',
        ],
        commonMistakes: [
          'Memilih kaomoji yang terlalu panjang hingga memakan batas karakter bio media sosial.',
          'Menggabungkan terlalu banyak kaomoji dalam satu kalimat caption sehingga sulit dibaca oleh pengikut.',
        ],
      },
    ],
    copyablePresets: [
      { label: 'Gembira & Ceria', text: '(◕‿◕✿) ✨', badge: 'Happy' },
      { label: 'Malu & Manis', text: '(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)', badge: 'Shy' },
      { label: 'Kucing Imut', text: 'ฅ(≈>ܫ<≈)ฅ', badge: 'Cat' },
      { label: 'Tidur & Lelah', text: '(∪｡∪)｡｡zZZ', badge: 'Sleepy' },
      { label: 'Peluk Kasih', text: '(づ｡◕‿‿◕｡)づ', badge: 'Hug' },
      { label: 'Bintang Magis', text: 'ੈ✩‧₊˚ (˘ ³˘)♥', badge: 'Magic' },
    ],
    stepByStep: [
      { step: 1, title: 'Pilih Kaomoji', instruction: 'Pilih ekspresi wajah kaomoji yang sesuai dengan suasana hati Anda dari daftar di atas.' },
      { step: 2, title: 'Salin 1-Klik', instruction: 'Klik tombol salin di samping kotak teks kaomoji.' },
      { step: 3, title: 'Tempelkan', instruction: 'Buka profil TikTok, bio Instagram, atau chat WhatsApp dan tekan Tempel (Paste).' },
    ],
    faqs: [
      {
        q: 'Mengapa sebagian kaomoji terlihat memiliki karakter seperti huruf Jepang?',
        a: 'Karena kaomoji awalnya diciptakan oleh pengguna internet Jepang, banyak karakter mata dan mulut yang meminjam huruf Hiragana (seperti つ, へ, の) dan Katakana (seperti シ, ツ, ロ).',
      },
      {
        q: 'Apakah kaomoji aman digunakan di username game seperti Mobile Legends atau PUBG?',
        a: 'Sebagian besar karakter dasar kaomoji seperti tanda kurung dan tanda baca didukung. Namun, karakter aksara Jepang tertentu mungkin disensor tergantung aturan filter nama game masing-masing.',
      },
    ],
    recommendedTools: [
      { label: 'Katalog Simbol Kaomoji', href: '/simbol/kaomoji', desc: '500+ koleksi kaomoji terorganisir per emosi' },
      { label: 'Simbol Hati & Love', href: '/simbol/hati', desc: 'Ragam simbol hati aesthetic pelengkap kaomoji' },
      { label: 'Font Imut & Cute', href: '/font/sparkly', desc: 'Padukan kaomoji dengan font berkilau glitter' },
    ],
  },

  'cara-ganti-display-name-roblox-font-keren': {
    slug: 'cara-ganti-display-name-roblox-font-keren',
    directAnswer:
      'Untuk mengganti Display Name Roblox dengan font keren: Masuk ke Roblox > Buka Pengaturan Akun (Settings) > Klik ikon pensil di samping Display Name > Masukkan nama berfont aesthetic (maksimal 20 karakter) > Klik Simpan. Display Name gratis diubah sekali setiap 7 hari dan berbeda dari Username login Anda.',
    introParagraphs: [
      'Roblox memiliki sistem penamaan ganda: Username utama (yang digunakan untuk login dan unik untuk satu akun) serta Display Name (nama tampilan yang muncul di atas kepala avatar karakter Anda di dalam pengalaman game).',
      'Display Name Roblox mendukung karakter huruf Unicode tertentu dan simbol minimalis, memungkinkan Anda tampil beda dari pemain lain dengan nama avatar yang estetik dan keren tanpa harus membayar 1.000 Robux seperti saat mengganti username utama.',
    ],
    sections: [
      {
        heading: 'Aturan Resmi Penamaan Display Name Roblox',
        paragraphs: [
          'Sebelum membuat nama dengan generator teks, pastikan Anda memahami batasan sistem penamaan yang ditetapkan oleh Roblox Corporation:',
        ],
        bullets: [
          'Batas Karakter: Panjang Display Name berkisar antara 3 hingga 20 karakter.',
          'Cooldown 7 Hari: Anda hanya dapat mengganti Display Name 1 kali setiap 7 hari kalender.',
          'Dukungan Karakter: Karakter huruf latin Unicode (seperti Small Caps, Bold Sans, dan Circled Bubble) didukung dengan baik.',
          'Filter Sensor: Sistem otomatis Roblox akan memblokir nama yang mengandung kata-kata tidak pantas atau angka yang dicurigai sebagai nomor telepon/alamat.',
        ],
        proTip:
          'Gunakan gaya font "Small Caps" atau "Bold Sans". Kedua gaya karakter ini memiliki rasio kompatibilitas tertinggi di Roblox dan hampir tidak pernah terdeteksi sebagai karakter ilegal.',
      },
      {
        heading: 'Perbedaan Username vs Display Name di Roblox',
        paragraphs: [
          'Username adalah identitas akun permanen Anda yang diawali tanda @ (misalnya @PlayerOne). Mengubah username membutuhkan biaya 1.000 Robux.',
          'Sebaliknya, Display Name adalah nama yang dilihat teman Anda di scoreboard game, leaderboard, dan obrolan chat. Display Name 100% GRATIS untuk diubah kapan saja setelah masa tunggu 7 hari berakhir.',
        ],
        commonMistakes: [
          'Memasukkan font yang terlalu tebal dengan karakter bertumpuk yang memicu filter sensor Roblox menampilkan tagar (####).',
          'Mengira Display Name mengubah nama login akun Anda.',
        ],
      },
    ],
    copyablePresets: [
      { label: 'Roblox Imut Soft', text: 'ᴹᴵᴸᴷʸ ᶜᴸᴼᵁᴰ', badge: 'Small Caps' },
      { label: 'Roblox Pro Player', text: 'V E N O M // 07', badge: 'Spaced' },
      { label: 'Roblox Aesthetic Girl', text: '˚₊‧ ꒰ 𝒱𝒶𝓃𝒾𝓁𝓁𝒶 ꒱ ‧₊˚', badge: 'Cute' },
      { label: 'Roblox Dark Vibes', text: '𝕾𝖍𝖆𝖉𝖔𝖜 𝕶𝖎𝖓𝖌', badge: 'Gothic' },
    ],
    stepByStep: [
      { step: 1, title: 'Buka Roblox', instruction: 'Buka aplikasi Roblox di HP Anda atau kunjungi situs web roblox.com di browser PC.' },
      { step: 2, title: 'Buka Pengaturan Akun', instruction: 'Klik ikon roda gigi (Settings) di sudut kanan atas, lalu pilih "Account Info" (Info Akun).' },
      { step: 3, title: 'Edit Display Name', instruction: 'Cari baris "Display Name", lalu klik ikon pensil di sebelah kanan kolom nama.' },
      { step: 4, title: 'Tempel & Simpan', instruction: 'Hapus nama lama, tempelkan font aesthetic pilihan Anda dari generator, lalu klik "Save".' },
    ],
    faqs: [
      {
        q: 'Mengapa Display Name Roblox saya berubah menjadi tanda pagar (####)?',
        a: 'Jika nama berubah menjadi tagar, itu berarti sistem filter keamanan Roblox menganggap kombinasi kata atau simbol tersebut tidak pantas atau mirip dengan informasi pribadi. Coba ganti kata dasarnya atau gunakan simbol yang lebih sederhana.',
      },
      {
        q: 'Apakah teman masih bisa mencari saya menggunakan Username lama?',
        a: 'Bisa! Username permanen Anda (@nama_anda) tidak berubah, sehingga teman tetap bisa mencari profil Anda di kolom pencarian pemain menggunakan username asli.',
      },
    ],
    recommendedTools: [
      { label: 'Generator Nama Roblox', href: '/roblox', desc: 'Generator khusus nama & display name Roblox aesthetic' },
      { label: 'Font Huruf Keren', href: '/font/huruf-keren', desc: 'Pilihan small caps dan huruf estetik terbaik' },
      { label: 'Katalog Game Keren', href: '/game', desc: 'Pusat nama game esport dan sandbox terlengkap' },
    ],
  },

  'rekomen-squad-name-mobile-legends-aesthetic': {
    slug: 'rekomen-squad-name-mobile-legends-aesthetic',
    directAnswer:
      'Nama squad Mobile Legends yang bagus memadukan 3 elemen: Singkatan Tag Squad (maksimal 4 huruf kapital seperti [VNM] atau [EVO]), Nama Squad Utama yang berkesan kuat (6-16 karakter), dan simbol pelengkap seperti mahkota 亗 atau panah 彡. Pastikan nama squad tidak melebihi 16 karakter total dan mudah diucapkan saat shoutcaster turnamen memanggil nama tim Anda.',
    introParagraphs: [
      'Squad di Mobile Legends: Bang Bang (MLBB) adalah wadah resmi bagi 9 pemain untuk bertanding bersama, mengumpulkan poin aktivitas squad harian, dan berkompetisi di turnamen MCL mingguan.',
      'Identitas nama squad MLBB yang keren memberikan aura profesional dan meningkatkan rasa percaya diri anggota tim saat memasuki fase draft pick dan layar pemuatan pertandingan (loading screen).',
    ],
    sections: [
      {
        heading: 'Formula Membuat Nama Squad Esport MLBB yang Ikonik',
        paragraphs: [
          'Tim-tim esport tier 1 seperti ONIC, RRQ, dan EVOS menggunakan formula nama yang ringkas, kuat, dan memiliki filosofi mendalam. Anda dapat meniru strategi ini untuk squad Anda sendiri:',
        ],
        bullets: [
          'Pilih Bahasa Latin atau Mitologi: Kata-kata seperti "Invictus", "Valhalla", "Aether", dan "Chronos" memberikan kesan abadi dan tangguh.',
          'Gunakan Tag Singkatan 3-4 Huruf yang Menarik: Singkatan tag squad adalah elemen pertama yang dilihat lawan di leaderboard.',
          'Gunakan Huruf Bold Sans atau Serif Elegan: Teks tebal Unicode memastikan nama squad tetap terbaca jelas di resolusi layar smartphone kecil.',
        ],
        proTip:
          'Hindari menggunakan terlalu banyak simbol rumit di dalam nama squad. Di papan skor pasca pertandingan, simbol yang terlalu padat sering membuat nama terlihat bertumpuk dan tidak rapi.',
      },
      {
        heading: 'Daftar Ide Nama Squad MLBB Berdasarkan Tema',
        paragraphs: [
          'Berikut inspirasi kombinasi nama squad beserta saran tag singkatannya yang siap Anda gunakan bersama teman satu tongkrongan:',
        ],
        bullets: [
          'Tema Dark & Gothic: [NEX] N E X U S 亗, [DRK] Dark Valhalla, [ECL] Eclipse V',
          'Tema Clean & Cyber: [CYB] Cyber Nova, [SYN] Synergy One, [PRX] Paradox ID',
          'Tema Japanese Esport: [RON] Ronin Spirit 彡, [KAI] Kaizen Esports, [SHI] Shinjuku Boys',
        ],
        commonMistakes: [
          'Membuat nama squad lebih dari 16 karakter hingga ditolak oleh sistem MLBB.',
          'Menggunakan simbol yang tidak didukung font engine Unity MLBB sehingga memunculkan kotak kosong (tofu).',
        ],
      },
    ],
    copyablePresets: [
      { label: 'Esport Minimalis', text: '[ONX] O N I X // 01', badge: 'Clean' },
      { label: 'Gothic Pro Player', text: '亗 𝕯𝖆𝖗𝖐 𝕷𝖊𝖌𝖎𝖔𝖓 亗', badge: 'Gothic' },
      { label: 'Japanese Cyber', text: '『 𝓚𝓪𝓲𝔃𝓮𝓷 』彡', badge: 'Japanese' },
      { label: 'Squad Bold Clean', text: '𝗧𝗘𝗔𝗠 𝗩𝗔𝗟𝗜𝗔𝗡𝗧', badge: 'Bold' },
    ],
    stepByStep: [
      { step: 1, title: 'Kumpulkan 199 Diamond', instruction: 'Membuat squad di Mobile Legends membutuhkan biaya 199 Diamond atau squad certificate.' },
      { step: 2, title: 'Buka Menu Squad', instruction: 'Di lobi utama MLBB, klik tab Squad di sudut kanan bawah layar.' },
      { step: 3, title: 'Isi Nama & Singkatan', instruction: 'Masukkan nama squad lengkap (maks 16 karakter) dan tag singkatan squad (maks 4 karakter).' },
      { step: 4, title: 'Konfirmasi Pembuatan', instruction: 'Periksa kembali ejaan nama squad Anda, lalu klik tombol Konfirmasi.' },
    ],
    faqs: [
      {
        q: 'Berapa batas maksimal karakter untuk nama squad Mobile Legends?',
        a: 'Nama squad MLBB dibatasi maksimal 16 karakter, sedangkan singkatan tag squad dibatasi maksimal 4 karakter.',
      },
      {
        q: 'Apakah nama squad MLBB bisa diganti setelah dibuat?',
        a: 'Bisa, namun mengganti nama squad yang sudah ada membutuhkan Squad Name Change Card yang dibeli menggunakan Diamond di toko in-game.',
      },
    ],
    recommendedTools: [
      { label: 'Generator Nama Mobile Legends', href: '/mobile-legends', desc: 'Generator khusus nickname dan squad MLBB pro' },
      { label: 'Font Tebal (Bold)', href: '/font/tebal', desc: 'Font cetak tebal yang clean untuk nama tim' },
      { label: 'Simbol Mahkota & Sayap', href: '/simbol/mahkota', desc: 'Koleksi ornamen mahkota untuk tag esport' },
    ],
  },

  'tulisan-aesthetic-tiktok-caption-fyp': {
    slug: 'tulisan-aesthetic-tiktok-caption-fyp',
    directAnswer:
      'Untuk membuat caption TikTok aesthetic yang memikat algoritma FYP: Gunakan font tebal (Bold Sans) atau Cursive pada 3-5 kata pertama sebagai "visual hook", batasi total teks caption agar tidak terpotong sebelum tombol "lainnya", selipkan 1-2 emoji bernada selaras, dan sertakan 3-5 hashtag tertarget. Kombinasi ini meningkatkan watch time dan interaksi komentar.',
    introParagraphs: [
      'Di TikTok, pengguna memutuskan untuk menonton video atau melakukan scroll hanya dalam kurun waktu 1 hingga 2 detik pertama. Di sinilah peran caption estetik bekerja sebagai penarik perhatian visual (visual anchor).',
      'Format teks caption yang unik dan tertata rapi tidak hanya membuat video Anda tampak lebih bernilai produksi tinggi, tetapi juga mendorong pemirsa untuk berhenti sejenak membaca narasi, yang secara langsung meningkatkan sinyal durasi tonton (watch time) pada algoritma TikTok.',
    ],
    sections: [
      {
        heading: 'Strategi Penempatan Tipografi pada Caption TikTok',
        paragraphs: [
          'Layar antarmuka TikTok dipenuhi tombol interaksi (Like, Komentar, Bagikan, Musik) di sebelah kanan. Oleh karena itu, penulisan caption harus mengutamakan keterbacaan:',
        ],
        bullets: [
          'Hook di Baris Pertama: Tempatkan judul topik paling menarik di baris paling atas menggunakan font tebal (𝗕𝗼𝗹𝗱) atau tulisan sambung (𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒦𝓊𝓇𝓈𝒾𝒻).',
          'Spasi Baris yang Rapi: Jangan menumpuk teks menjadi satu paragraf padat. Berikan jeda satu baris antar poin.',
          'Kombinasi Simbol Minimalis: Gunakan simbol pembatas clean seperti bintang (✧) atau titik (•) dibanding emotikon grafis besar yang memakan ruang pandang.',
        ],
        proTip:
          'Perhatikan batas potong teks: Di sebagian besar layar ponsel, hanya 100 karakter pertama caption yang terlihat sebelum tombol "lainnya...". Pastikan pesan terpenting berada di 80 karakter awal.',
      },
      {
        heading: 'Contoh Struktur Caption TikTok Berdasarkan Niche',
        paragraphs: [
          'Berikut susunan format caption yang terbukti menghasilkan rasio interaksi tinggi di feed FYP kreator gaya hidup dan edukasi:',
        ],
        bullets: [
          'Vlog Harian / Aesthetic: ❝ 𝒶 𝓁𝒾𝓉𝓉𝓁ℯ 𝓅𝒾ℯ𝒸ℯ 𝑜𝒻 𝓉𝑜𝒹𝒶𝓎 ☕ ❞ // Rutinitas pagi yang tenang sebelum mulai kerja. #dailyvlog #aesthetic #morningroutine',
          'Rekomendasi Produk: 𝗧𝗢𝗣 𝟯 𝗦𝗸𝗶𝗻𝗰𝗮𝗿𝗲 𝗪𝗮𝗷𝗶𝗯 🌿 Simak review lengkapnya di video ini ya! #skincareroutine #fyp',
          'Quotes / Motivasi: 「 ✦ 𝒩𝑜𝓉 𝓉𝑜 𝓈𝒽𝒾𝓃ℯ, 𝒷𝓊𝓉 𝓉𝑜 𝒷ℯ 𝓇ℯ𝒶𝓁 ✦ 」 #selfreminder #motivasihidup',
        ],
        commonMistakes: [
          'Menggunakan font yang terlalu rumit sehingga tidak terbaca oleh pengguna dengan layar smartphone kecil.',
          'Menaruh 30 hashtag spam yang membuat caption terlihat kumuh dan diabaikan pemirsa.',
        ],
      },
    ],
    copyablePresets: [
      { label: 'Hook Daily Vlog', text: '❝ 𝒶 𝓁𝒾𝓉𝓉𝓁ℯ 𝓅𝒾ℯ𝒸ℯ 𝑜𝒻 𝓉𝑜𝒹𝒶𝓎 ☕ ❞', badge: 'Vlog' },
      { label: 'Hook Edukasi Tegas', text: '𝗧𝗜𝗣𝗦 𝗥𝗔𝗛𝗔𝗦𝗜𝗔 𝗬𝗔𝗡𝗚 𝗝𝗔𝗥𝗔𝗡𝗚 𝗗𝗜𝗕𝗔𝗛𝗔𝗦 ⚡', badge: 'Bold' },
      { label: 'Quote Estetik Kalem', text: '「 ✦ 𝒷𝓇ℯ𝒶𝓉𝒽ℯ & 𝓁ℯ𝓉 𝒾𝓉 𝒷ℯ ✦ 」', badge: 'Quote' },
      { label: 'Pemberitahuan Konten', text: '⚠️ 𝗝𝗔𝗡𝗚𝗔𝗡 𝗦𝗞𝗜𝗣 𝗩𝗜𝗗𝗘𝗢 𝗜𝗡𝗜', badge: 'Notice' },
    ],
    stepByStep: [
      { step: 1, title: 'Rancang Kalimat Hook', instruction: 'Pikirkan kalimat pembuka 3-5 kata yang membuat penonton penasaran.' },
      { step: 2, title: 'Ubah dengan Generator', instruction: 'Buka generator font TikTok di Tulisan Aesthetic, pilih gaya font tebal atau kursif.' },
      { step: 3, title: 'Tempel di Kolom Caption', instruction: 'Buka aplikasi TikTok, tempelkan font unik di baris pertama deskripsi postingan Anda.' },
      { step: 4, title: 'Lengkapi Hashtag', instruction: 'Tambahkan 3-5 tagar relevan dengan spasi yang rapi, lalu unggah video.' },
    ],
    faqs: [
      {
        q: 'Apakah teks font Unicode di caption TikTok bisa dicari di search bar TikTok?',
        a: 'Sistem pencarian TikTok memprioritaskan kata kunci teks biasa (standar alfabet ASCII). Oleh karena itu, gunakan font aesthetic hanya pada kalimat hook pembuka, dan sertakan kata kunci utama dalam font teks standar di baris berikutnya agar video tetap terindeks di mesin pencari TikTok SEO.',
      },
      {
        q: 'Apakah menggunakan font aesthetic bisa menyebabkan shadowban di TikTok?',
        a: 'Tidak. Karakter Unicode adalah karakter teks standar internasional. TikTok tidak memblokir atau membatasi distribusi video hanya karena penggunaan karakter Unicode yang sah.',
      },
    ],
    recommendedTools: [
      { label: 'Font TikTok Generator', href: '/platform/tiktok', desc: 'Generator khusus caption dan bio profil TikTok' },
      { label: 'Font Berkilau Bintang', href: '/font/berkilau', desc: 'Ornamen bintang stardust untuk caption estetik' },
      { label: 'Simbol Emoji & Kaomoji', href: '/simbol/kaomoji', desc: 'Koleksi kaomoji pelengkap video TikTok' },
    ],
  },

  'cara-format-teks-discord-markdown-font': {
    slug: 'cara-format-teks-discord-markdown-font',
    directAnswer:
      'Format teks Discord menggunakan sintaks Markdown: **teks** untuk tebal, *teks* untuk miring, __teks__ untuk garis bawah, ~~teks~~ untuk tercoret, ||teks|| untuk spoiler sensor, `teks` untuk kode inline, dan ```bahasa teks``` untuk blok kode berwarna. Untuk nama server, channel, dan nickname profil, gunakan generator font Unicode karena Markdown tidak aktif di kolom nama.',
    introParagraphs: [
      'Discord adalah aplikasi komunikasi favorit para gamer, developer, dan komunitas kreatif. Salah satu keunggulan terbesar Discord dibanding platform obrolan lain adalah dukungannya terhadap sintaks Markdown yang sangat lengkap.',
      'Dengan menguasai teknik pemformatan teks Discord, Anda dapat membuat pengumuman server (announcement) yang memukau, merapikan pesan aturan channel (rules), serta membuat spoiler tersembunyi yang interaktif.',
    ],
    table: {
      headers: ['Format Efek', 'Sintaks Discord Markdown', 'Keterangan Penggunaan'],
      rows: [
        ['Tebal (Bold)', '**kata**', 'Menonjolkan kata kunci utama'],
        ['Miring (Italic)', '*kata* atau _kata_', 'Catatan kaki atau suara batin'],
        ['Garis Bawah (Underline)', '__kata__', 'Memberi penekanan khusus'],
        ['Tercoret (Strikethrough)', '~~kata~~', 'Menandai tugas yang sudah selesai'],
        ['Spoiler Tersembunyi', '||kata||', 'Teks disensor hitam sampai diklik'],
        ['Kode Inline (Single Line)', '`kata`', 'Perintah bot atau shortcut keyboard'],
        ['Blok Kode (Multi-Line)', '```kata```', 'Menampilkan teks dalam kotak abu-abu'],
      ],
    },
    sections: [
      {
        heading: '1. Panduan Kode Blok Berwarna di Discord (Syntax Highlighting)',
        paragraphs: [
          'Banyak pengguna Discord tidak mengetahui bahwa Anda bisa memberi warna pada teks di dalam blok kode dengan memanfaatkan penanda bahasa pemrograman:',
        ],
        bullets: [
          'Teks Hijau: Awali blok dengan ```css dan awali baris dengan tanda titik atau kurung siku [teks].',
          'Teks Kuning / Oranye: Awali blok dengan ```fix atau ```apache.',
          'Teks Biru: Awali blok dengan ```ini dan apit kata dengan kurung siku [teks].',
          'Teks Merah: Awali blok dengan ```diff dan awali baris dengan tanda minus (- teks).',
        ],
        proTip:
          'Fitur spoiler ||teks|| juga bisa digunakan untuk menyembunyikan gambar atau tautan URL di obrolan chat Discord!',
      },
      {
        heading: '2. Cara Menghias Nama Channel & Nickname Server Discord',
        paragraphs: [
          'Sintaks Markdown seperti ** atau __ hanya bekerja di kolom pesan chat. Markdown tidak berfungsi pada Nama Server, Nama Kategori Channel, maupun Server Nickname anggota.',
          'Untuk membuat nama channel seperti ╔-「📢」-pengumuman atau nickname gothic seperti 𝕲𝖍𝖔𝖘𝖙, Anda wajib menggunakan generator teks Unicode.',
        ],
        commonMistakes: [
          'Mengetik **Nama Channel** saat membuat channel Discord dan tanda bintang tetap muncul sebagai huruf biasa.',
          'Menggunakan spasi kosong standar pada nama text-channel (Discord otomatis mengubah spasi menjadi tanda minus "-"). Gunakan simbol pemisah khusus seperti "・" atau "丨".',
        ],
      },
    ],
    copyablePresets: [
      { label: 'Template Channel Pengumuman', text: '╔-「📢」・𝒾𝓃𝒻𝑜-𝓈ℯ𝓇𝓋ℯ𝓇', badge: 'Channel' },
      { label: 'Template Channel Rules', text: '╠-「📜」・𝓇𝓊𝓁ℯ𝓈-𝓀𝑜𝓂𝓊𝓃𝒾𝓉𝒶𝓈', badge: 'Channel' },
      { label: 'Nickname Gothic Dark', text: '𝕲 𝖍 𝖔 𝖘 𝖙 // 𝕬 𝖉 𝖒 𝖎 𝖓', badge: 'Gothic' },
      { label: 'Pesan Spoiler Keren', text: '|| Rahasia besar jangan dibuka! ||', badge: 'Spoiler' },
    ],
    stepByStep: [
      { step: 1, title: 'Ketik Tanda Pembuka', instruction: 'Masukkan simbol sintaks Markdown (contoh: ketik dua tanda bintang ** di awal).' },
      { step: 2, title: 'Ketik Pesan Anda', instruction: 'Tulis pesan yang ingin Anda kirimkan.' },
      { step: 3, title: 'Tutup dengan Simbol yang Sama', instruction: 'Ketikkan kembali simbol penutup tanpa spasi (contoh: akhiri dengan **).' },
      { step: 4, title: 'Tekan Enter', instruction: 'Kirim pesan dan Discord secara otomatis akan merender gaya tulisan Anda.' },
    ],
    faqs: [
      {
        q: 'Apakah format teks Markdown Discord bisa digunakan di aplikasi mobile (Android/iOS)?',
        a: 'Ya, seluruh sintaks Markdown Discord didukung secara seragam di aplikasi Android, iOS, Windows, Mac, dan Web Browser.',
      },
      {
        q: 'Bagaimana cara membuat teks judul besar (Header) di Discord?',
        a: 'Discord mendukung sintaks header Markdown. Ketik # diikuti spasi untuk Header 1 besar, ## untuk Header 2 sedang, atau ### untuk Header 3 kecil di awal baris.',
      },
    ],
    recommendedTools: [
      { label: 'Discord Font Generator', href: '/platform/discord', desc: 'Generator khusus nickname dan channel Discord' },
      { label: 'Font Gothic & Fraktur', href: '/font/gothic-fraktur', desc: 'Gaya huruf blackletter medieval untuk server role' },
      { label: 'Simbol Panah & Border', href: '/simbol/panah', desc: 'Simbol pembatas estetik untuk nama channel' },
    ],
  },

  'simbol-bintang-dan-bunga-untuk-desain-bio': {
    slug: 'simbol-bintang-dan-bunga-untuk-desain-bio',
    directAnswer:
      'Simbol bintang (★, ✦, ✧, ✨, ⋆) melambangkan keanggunan, harapan, dan kilau magis, sedangkan simbol bunga (🌸, ✿, ❀, ✾, 𖤣) melambangkan kelembutan, keasrian, dan estetika soft. Menggabungkan kedua simbol ini sebagai pembatas teks pada bio Instagram dan status TikTok menciptakan tata letak profil yang anggun, terstruktur, dan sedap dipandang mata.',
    introParagraphs: [
      'Dalam desain antarmuka profil media sosial, ruang visual sangat terbatas. Di Instagram, Anda hanya memiliki 150 karakter untuk menjelaskan siapa Anda, apa yang Anda lakukan, dan kesan apa yang ingin Anda tinggalkan.',
      'Penggunaan simbol ornamen Unicode seperti bintang dan bunga berfungsi sebagai elemen tipografi penunjuk (bullet points) serta pembingkai nama yang memberikan identitas visual instan tanpa memakan banyak ruang karakter.',
    ],
    table: {
      headers: ['Karakter Simbol', 'Nama Karakter', 'Kode Unicode', 'Kesan / Makna Visual'],
      rows: [
        ['✧', 'White Four Pointed Star', 'U+2727', 'Minimalis, kilau lembut, dreamy'],
        ['✦', 'Black Four Pointed Star', 'U+2726', 'Tegas, modern, luxury'],
        ['⋆', 'Star Operator', 'U+22C6', 'Halus, stardust, fairycore'],
        ['✿', 'Black Florette Flower', 'U+273F', 'Manis, ceria, floral aesthetic'],
        ['❀', 'White Florette Flower', 'U+2740', 'Vintage, klasik, soft girl'],
        ['𖤣', 'Plant Seedling Branch', 'U+16923', 'Natural, botanical, earthy vibe'],
      ],
    },
    sections: [
      {
        heading: 'Cara Menyusun Tata Letak Bio Menggunakan Simbol Bintang & Bunga',
        paragraphs: [
          'Agar profil Anda tidak terlihat berantakan, terapkan prinsip keselarasan (visual hierarchy) dalam menata simbol:',
        ],
        bullets: [
          'Sebagai Pembingkai Nama (Header): Tempatkan sepasang simbol simetris di awal dan akhir nama. Contoh: ✧ Putri Amelia ✧ atau 𖤣 Larasati 𖤣',
          'Sebagai Poin Daftar (Bullet List): Ganti tanda hubung (-) biasa dengan simbol bunga untuk merinci hobi atau profesi Anda.',
          'Sebagai Pembatas Tautan (Call-to-Action): Letakkan simbol bintang panah di sebelah link web Anda untuk memandu mata pengunjung.',
        ],
        proTip:
          'Pilih satu tema utama: Jangan mencampurkan lebih dari 2 jenis simbol dalam satu bio. Jika Anda memilih tema bintang (✦ ✧), pertahankan tema tersebut di seluruh baris bio untuk menjaga estetika minimalis.',
      },
      {
        heading: 'Kompatibilitas Karakter di Android vs iPhone',
        paragraphs: [
          'Simbol tipografi monokrom (seperti ✦, ✧, ✿, ❀) ditampilkan secara identik di semua merek ponsel pintar karena karakter tersebut merupakan bagian dari standar Universal Font Engine.',
          'Sebaliknya, emoji bergambar warna (seperti 🌸 atau ✨) memiliki interpretasi grafis berbeda di Samsung, Xiaomi, dan Apple iOS. Untuk bio yang terlihat konsisten 100% di semua layar, simbol monokrom selalu lebih disarankan.',
        ],
        commonMistakes: [
          'Menumpuk 10 simbol sekaligus dalam satu baris hingga teks nama utama terdesak.',
          'Menggunakan simbol kuno yang belum didukung oleh sistem operasi Android versi lama.',
        ],
      },
    ],
    copyablePresets: [
      { label: 'Bio Bintang Minimalis', text: '✧･ﾟ: * [Nama Anda] * :･ﾟ✧\n✦ Coffee & Architecture\n✦ Based in Jakarta\n✧ www.linkanda.com', badge: 'Stars' },
      { label: 'Bio Bunga Soft Fairy', text: '❀ 𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜 𝓂𝓎 𝑔𝒶𝓇𝒹𝑒𝓃 ❀\n✿ Book lover & florist\n✿ Daily life diary\n❀ tap link below ↴', badge: 'Floral' },
      { label: 'Pembatas Garis Estetik', text: '─── ⋆⋅☆⋅⋆ ───', badge: 'Divider' },
      { label: 'Bingkai Simbol Anggun', text: 'ੈ✩‧₊˚ 𝒞𝓇ℯ𝒶𝓉𝒾𝓋ℯ 𝒮𝑜𝓊𝓁 ˚₊‧✩ੈ', badge: 'Frame' },
    ],
    stepByStep: [
      { step: 1, title: 'Pilih Simbol Favorit', instruction: 'Pilih simbol bintang atau bunga yang paling mencerminkan tema akun Anda.' },
      { step: 2, title: 'Salin Simbol', instruction: 'Klik tombol salin pada template bio di atas atau salin simbol individual.' },
      { step: 3, title: 'Edit Profil Instagram', instruction: 'Buka Instagram > Edit Profil > Tempelkan simbol di baris nama atau bio Anda.' },
      { step: 4, title: 'Simpan', instruction: 'Klik tanda centang centang biru untuk menyimpan bio baru Anda.' },
    ],
    faqs: [
      {
        q: 'Apakah simbol ini memakan lebih banyak kuota karakter di Instagram?',
        a: 'Sebagian besar simbol bintang (✦, ✧) hanya dihitung sebagai 1 karakter dalam batas 150 karakter bio Instagram. Ini jauh lebih hemat dibanding menulis kata-kata panjang.',
      },
      {
        q: 'Apakah simbol bintang dan bunga ini bisa digunakan untuk username game?',
        a: 'Ya! Game populer seperti Free Fire, PUBG Mobile, dan Mobile Legends mendukung sebagian besar simbol bintang dan bunga Unicode monokrom.',
      },
    ],
    recommendedTools: [
      { label: 'Katalog Simbol Bintang', href: '/simbol/bintang', desc: 'Ratusan variasi simbol bintang, sparkle, dan kilau' },
      { label: 'Katalog Simbol Bunga', href: '/simbol/bunga', desc: 'Koleksi ornamen bunga floral aesthetic' },
      { label: 'Font Berkilau Bintang', href: '/font/berkilau', desc: 'Generator font bertabur bintang otomatis' },
    ],
  },

  'pubg-mobile-nickname-clan-name-aesthetic': {
    slug: 'pubg-mobile-nickname-clan-name-aesthetic',
    directAnswer:
      'Nama klan dan nickname PUBG Mobile yang keren menggunakan maksimal 14 karakter, memadukan tanda kurung Jepang 『 』 atau simbol militer (×, ⚡, 彡), serta font bergaya Monospace atau Gothic tebal. Untuk mengubah nama, Anda memerlukan Rename Card yang bisa didapatkan dari misi progres atau dibeli seharga 180 UC di Shop game.',
    introParagraphs: [
      'PUBG Mobile adalah game battle royale taktis di mana reputasi klan dan identitas penembak jitu (sniper/rusher) terlihat pertama kali dari kartu nama pemain dan Kill Feed saat Anda melumpuhkan musuh.',
      'Memiliki nickname aesthetic dan nama klan yang terorganisir memberikan kesan bahwa skuad Anda adalah tim esports terkoordinasi yang tangguh dan disegani di arena pertempuran Erangel dan Sanhok.',
    ],
    sections: [
      {
        heading: 'Aturan Format Nama di PUBG Mobile',
        paragraphs: [
          'PUBG Mobile memiliki sistem filter nama yang ketat. Pastikan Anda memperhatikan poin-poin krusial berikut sebelum membeli Rename Card:',
        ],
        bullets: [
          'Batas Karakter: Panjang nama maksimal 14 karakter (termasuk simbol dan spasi).',
          'Dukungan Simbol: PUBG Mobile mendukung karakter khusus aksara Jepang (Katakana), simbol salib kecil, sayap (彡), dan tanda kurung bracket 『 』.',
          'Spasi Khusus: Spasi standar pada keyboard HP sering tidak terbaca di PUBG Mobile. Pemain biasanya menggunakan spasi transparan Unicode (U+3164) atau simbol pemisah seperti "・".',
          'Nama Unik: Dua akun tidak dapat memiliki nama yang 100% persis sama di server PUBG Mobile.',
        ],
        proTip:
          'Gunakan format keseragaman nama klan (Clan Tagging). Contohnya jika nama klan Anda "VALIANT", semua anggota memakai awalan 『VLT』 di depan nama: 『VLT』・Ghost, 『VLT』・Reaper, dan 『VLT』・Sniper.',
      },
      {
        heading: 'Daftar Preset Nama Klan & Nickname PUBG Keren',
        paragraphs: [
          'Berikut rekomendasi nama klan bertema militer, taktis, dan cyber aesthetic yang sudah disesuaikan dengan batas 14 karakter PUBG Mobile:',
        ],
        bullets: [
          'Tema Elite Squad: 『ALPHA』・Hunter, 『DELTA』・Ghost, 『BRAVO』・Zero',
          'Tema Cyber Punk: ⚡ＮＥＯＮ・ＫＩＬＬ⚡, ╳ ＥＸＥＣＵＴＥ ╳',
          'Tema Japanese Warrior: 彡ＲＯＮＩＮ彡, 『侍』・ＫＥＮＳＨＩ',
        ],
        commonMistakes: [
          'Membuat nama lebih dari 14 karakter sehingga terpotong atau Rename Card gagal digunakan.',
          'Menggunakan simbol terlalu rumit yang muncul sebagai tanda tanya (??) di Kill Feed layar pertandingan teman satu tim.',
        ],
      },
    ],
    copyablePresets: [
      { label: 'Clan Leader Style', text: '『ᏦᏞᎪN』・L E A D E R', badge: 'Clan' },
      { label: 'Tactical Rusher', text: '⚡ R E A P E R ⚡', badge: 'Military' },
      { label: 'Japanese Cyber', text: '彡ＫＥＮＺＯ彡', badge: 'Japanese' },
      { label: 'Clean Monospace', text: '𝚃 𝙰 𝙲 𝚃 𝙸 𝙲 𝙰 𝙻', badge: 'Monospace' },
    ],
    stepByStep: [
      { step: 1, title: 'Siapkan Rename Card', instruction: 'Pastikan Anda memiliki Rename Card (ID Card) di dalam tab Inventory tas Anda.' },
      { step: 2, title: 'Generate Nickname', instruction: 'Buka generator nama PUBG Mobile di Tulisan Aesthetic dan buat kombinasi nama impian Anda.' },
      { step: 3, title: 'Salin Teks', instruction: 'Salin nama yang panjangnya tidak melebihi 14 karakter.' },
      { step: 4, title: 'Gunakan Rename Card', instruction: 'Buka PUBG Mobile > Inventory > Ikon Kotak Harta > Klik Rename Card > Tempel nama baru > Tekan OK.' },
    ],
    faqs: [
      {
        q: 'Berapa batas karakter maksimal untuk nickname PUBG Mobile?',
        a: 'Batas maksimal karakter untuk nama akun dan nickname PUBG Mobile adalah 14 karakter.',
      },
      {
        q: 'Bagaimana cara mendapatkan Rename Card gratis di PUBG Mobile?',
        a: 'Rename Card gratis bisa diperoleh dengan menyelesaikan Misi Progres level 1-10, mengikuti event musiman tertentu, atau melalui misi "Returner" jika Anda login kembali setelah tidak aktif bermain selama beberapa minggu.',
      },
    ],
    recommendedTools: [
      { label: 'Generator Nama PUBG Mobile', href: '/pubg-mobile', desc: 'Generator khusus nickname dan clan tag PUBG Mobile' },
      { label: 'Font Monospace & Garis', href: '/font/garis', desc: 'Huruf mesin tik bergaya militer taktis' },
      { label: 'Simbol Panah & Senjata', href: '/simbol/panah', desc: 'Ornamen panah dan bracket pelengkap nickname' },
    ],
  },

  'emoji-vs-kaomoji-perbedaan-dan-cara-pakai': {
    slug: 'emoji-vs-kaomoji-perbedaan-dan-cara-pakai',
    directAnswer:
      'Perbedaan mendasar: Emoji adalah gambar piktogram grafis berwarna (seperti 😂 atau ❤️) yang distandarisasi oleh Konsorsium Unicode dan memiliki visual berbeda di setiap sistem operasi. Sedangkan Kaomoji adalah emotikon teks asal Jepang yang disusun dari karakter aksara dan simbol tipografi (seperti (* ^ ω ^) atau ¯\\_(ツ)_/¯) yang tampil seragam di semua layar perangkat tanpa terpengaruh desain visual vendor.',
    introParagraphs: [
      'Di era pesan instan dan media sosial modern, teks tanpa ekspresi visual sering terasa dingin atau mudah disalahartikan. Untuk menjembatani emosi manusia melalui layar kaca, kita mengenal dua bentuk ekspresi utama: Emoji dan Kaomoji.',
      'Meskipun keduanya memiliki tujuan yang serupa yaitu menyampaikan perasaan, struktur teknis, sejarah kemunculan, estetika visual, dan dampak aksesibilitas keduanya sangat bertolak belakang.',
    ],
    table: {
      headers: ['Aspek Perbandingan', 'Emoji Grafis Berwarna', 'Kaomoji Teks Jepang'],
      rows: [
        ['Bentuk Visual', 'Ikon grafis gambar berwarna penuh', 'Rangkaian karakter teks tipografi hitam-putih'],
        ['Format Teknis', 'Kode biner Unicode Emoji standar', 'Kombinasi simbol aksara, matematika, & teks'],
        ['Konsistensi Layar', 'Berbeda-beda (Apple, Google, Samsung)', '100% konsisten sama di semua perangkat'],
        ['Asal Usul', 'Jepang era 1999 (Shigetaka Kurita)', 'Jepang era 1986 (ASCII net bulletin boards)'],
        ['Aksesibilitas (Screen Reader)', 'Dibaca sebagai deskripsi ("Wajah tertawa")', 'Dibaca karakter per karakter ("Kurung buka, bintang...")'],
        ['Kesan Estetika', 'Ekspresif, santai, universal, kasual', 'Estetik, indie, unik, kawaii, bernuansa seni'],
      ],
    },
    sections: [
      {
        heading: 'Kapan Sebaiknya Menggunakan Emoji?',
        paragraphs: [
          'Emoji berwarna sangat ideal untuk percakapan cepat sehari-hari di mana kecepatan pemahaman adalah prioritas utama:',
        ],
        bullets: [
          'Pesan Chat Pribadi & Grup: Menunjukkan reaksi cepat (👍, ❤️, 😂) tanpa perlu mengetik kata-kata.',
          'Pemasaran Digital & Email Newsletter: Meningkatkan rasio klik (Click-Through Rate) karena warna cerahnya menarik perhatian mata.',
          'Komunikasi Antar Generasi: Emoji mudah dipahami oleh semua kalangan usia dari anak-anak hingga orang tua.',
        ],
        proTip:
          'Jangan gunakan terlalu banyak emoji berwarna berturut-turut di bio profil jika Anda ingin membangun citra merek yang elegan dan profesional.',
      },
      {
        heading: 'Kapan Kaomoji Jauh Lebih Unggul?',
        paragraphs: [
          'Kaomoji adalah pilihan utama di kalangan kreator aesthetic, komunitas gamer, dan pecinta budaya pop Jepang:',
        ],
        bullets: [
          'Profil Bio Media Sosial Estetik: Kaomoji tidak mencolok seperti emoji kuning besar, melainkan menyatu secara anggun dengan tipografi teks.',
          'Ekspresi Halus yang Tidak Dimiliki Emoji: Emoji tidak memiliki ekspresi sehalus rasa malu tsundere (⁄ ⁄•⁄ω⁄•⁄ ⁄) atau aksi dramatis melempar meja (╯°□°)╯︵ ┻━┻.',
          'Nama Karakter Game & Server Discord: Menjadi ornamen pemanis nickname yang elegan tanpa terkesan norak.',
        ],
        commonMistakes: [
          'Menggunakan kaomoji panjang pada dokumen resmi kantor atau pesan formal kepada atasan.',
          'Lupa bahwa pembaca layar (screen reader) tunanetra akan mengeja setiap tanda baca di dalam kaomoji.',
        ],
      },
    ],
    copyablePresets: [
      { label: 'Emoji Kasual Modern', text: '✨ Ngopi santai dulu yuk ☕🌿', badge: 'Emoji' },
      { label: 'Kaomoji Estetik Kalem', text: '𝓈𝓁𝑜𝓌 𝓂𝑜𝓇𝓃𝒾𝓃𝑔 ( ˘͈ ᵕ ˘͈ ) ☕', badge: 'Kaomoji' },
      { label: 'Kaomoji Emosi Lucu', text: '(ノ°Д°)ノ [ Kenapa ini?! ]', badge: 'Kaomoji' },
      { label: 'Kombinasi Harmonis', text: 'ੈ✩‧₊˚ (◕‿◕✿) Have a nice day! 🌸', badge: 'Hybrid' },
    ],
    stepByStep: [
      { step: 1, title: 'Tentukan Konteks Pesan', instruction: 'Apakah pesan Anda kasual cepat (gunakan emoji) atau estetik artistik (gunakan kaomoji)?' },
      { step: 2, title: 'Pilih Ekspresi yang Pas', instruction: 'Sesuaikan tingkat emosi agar tidak berlebihan.' },
      { step: 3, title: 'Salin & Tempel', instruction: 'Salin preset di atas dan tempelkan langsung ke bio atau percakapan Anda.' },
    ],
    faqs: [
      {
        q: 'Apakah kaomoji memakan lebih banyak batas karakter daripada emoji?',
        a: 'Ya. Satu emoji dihitung sebagai 1 atau 2 karakter Unicode. Sedangkan kaomoji yang terdiri dari beberapa tanda baca dan aksara Jepang bisa dihitung sebanyak 5 hingga 15 karakter.',
      },
      {
        q: 'Mengapa emoji terlihat berbeda di HP teman saya yang memakai iPhone?',
        a: 'Masing-masing perusahaan (Apple, Google, Samsung, Microsoft) memiliki tim ilustrator sendiri untuk mendesain gambar emoji. Sedangkan kaomoji berupa karakter teks biasa sehingga bentuknya tetap sama di semua perangkat.',
      },
    ],
    recommendedTools: [
      { label: 'Katalog Simbol Kaomoji', href: '/simbol/kaomoji', desc: 'Ratusan kaomoji Jepang lucu per kategori ekspresi' },
      { label: 'Katalog Simbol Emoji', href: '/simbol/emoji', desc: 'Daftar simbol teks emoji aesthetic' },
      { label: 'Direktori Font Generator', href: '/font', desc: 'Padukan emotikon dengan 18+ gaya font aesthetic' },
    ],
  },
};
