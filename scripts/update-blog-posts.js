const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'blog-posts.ts');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  {
    old: "title: 'Font WhatsApp: Cara Membuat Tulisan Aesthetic untuk Nama, Bio & Status',",
    new: "title: 'Font WhatsApp Aesthetic - Teks Tebal & Miring',"
  },
  {
    old: "title: 'Font TikTok: Cara Membuat Tulisan Aesthetic untuk Profil & Caption',",
    new: "title: 'Font TikTok Aesthetic - Generator Tulisan FYP',"
  },
  {
    old: "description:\n      'Panduan lengkap membuat nama keren untuk Instagram, TikTok, WhatsApp, Discord, Free Fire, PUBG Mobile, Mobile Legends, Roblox, dan platform lainnya dengan font Unicode & simbol.',",
    new: "description:\n      'Cara membuat nama keren aesthetic untuk IG, TikTok, WA & game. Tips memilih font Unicode dan simbol yang cocok.',"
  },
  {
    old: "title: 'Panduan Rahasia Teks Tebal, Miring & Font Unik WhatsApp Tanpa Aplikasi',",
    new: "title: 'Rahasia Font Miring & Tebal WhatsApp Tanpa Aplikasi',"
  },
  {
    old: "title: 'Kumpulan 500+ Kaomoji Jepang Lucu & Ekspresif untuk Bio Social Media',",
    new: "title: 'Kumpulan Kaomoji Jepang Lucu Terpopuler',"
  },
  {
    old: "title: 'Cara Mengganti Display Name Roblox dengan Font Aesthetic & Simbol',",
    new: "title: 'Cara Ganti Display Name Roblox Font Keren',"
  },
  {
    old: "description:\n      'Penjelasan teknis standar Unicode, variasi huruf Mathematical Alphanumeric Symbols, dan alasan mengapa font aesthetic bukan font file biasa.',",
    new: "description:\n      'Panduan lengkap Unicode: cara kerja, sejarah, perbedaan dengan ASCII, dan mengapa dipakai untuk membuat tulisan aesthetic.',"
  },
  {
    old: "title: '50+ Rekomendasi Nama Squad Mobile Legends Aesthetic & Simbol Keren',",
    new: "title: 'Nama Squad ML Aesthetic - 50+ Rekomendasi Keren',"
  },
  {
    old: "title: 'Cara Membuat Tulisan Aesthetic di Caption TikTok Agar Masuk FYP',",
    new: "title: 'Tulisan Aesthetic untuk Caption TikTok FYP',"
  },
  {
    old: "title: 'Panduan Format Teks Discord: Bold, Italic, Codeblock & Font Unicode',",
    new: "title: 'Format Teks Discord - Bold, Italic & Unicode',"
  },
  {
    old: "title: 'Makna & Cara Pakai Simbol Bintang & Bunga Estetik untuk Bio Medsos',",
    new: "title: 'Simbol Bintang & Bunga untuk Bio Aesthetic',"
  },
  {
    old: "title: 'Ide Nama Clan PUBG Mobile Aesthetic Pakai Simbol Panah & Sayap',",
    new: "title: 'Nickname PUBG Mobile Aesthetic & Clan Keren',"
  },
  {
    old: "title: 'Perbedaan Emoji Berwarna vs Kaomoji Teks: Mana yang Lebih Cocok untuk Anda?',",
    new: "title: 'Emoji vs Kaomoji - Perbedaan & Cara Pakai',"
  }
];

// Normalize newlines in content for matching
content = content.replace(/\r\n/g, '\n');

for (const r of replacements) {
  const normalizedOld = r.old.replace(/\r\n/g, '\n');
  const normalizedNew = r.new.replace(/\r\n/g, '\n');
  if (!content.includes(normalizedOld)) {
    console.error('Target not found:', normalizedOld);
    process.exit(1);
  }
  content = content.replace(normalizedOld, normalizedNew);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated blog-posts.ts');
