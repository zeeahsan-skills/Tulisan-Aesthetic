'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Info, AlertTriangle, Lightbulb, Terminal } from 'lucide-react';

interface ArticleContentBodyProps {
  onCopy: (msg: string) => void;
}

export const ArticleContentBody: React.FC<ArticleContentBodyProps> = ({ onCopy }) => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  const handleCopySnippet = (code: string, label: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(code);
    onCopy(`Disalin: "${label}"!`);
    setTimeout(() => setCopiedSnippet(null), 1500);
  };

  return (
    <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">
      {/* 1. What is Unicode? */}
      <section id="1-what-is-unicode" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <span>1. Apa Itu Unicode?</span>
        </h2>
        <p>
          <strong>Unicode</strong> adalah standar internasional universal untuk pengodean, representasi, dan penanganan teks yang digunakan oleh hampir seluruh sistem komputer dan perangkat digital di dunia saat ini.
        </p>
        <p>
          Secara sederhana, Unicode memberi setiap karakter — baik itu huruf abjad Latin (A, B, C), angka (1, 2, 3), aksara daerah (Jawa, Sunda, Kanji), simbol matematika, hingga emoji berwarna (😀, ❤️, 🔥) — sebuah <strong>titik kode unik (Code Point)</strong> bernomor standar yang dapat dipahami secara persis sama oleh semua merek HP dan sistem operasi.
        </p>

        {/* Callout Box Note */}
        <div className="my-6 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex gap-3 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-purple-200 block mb-1">Catatan Penting:</strong>
            Sebelum adanya Unicode, setiap produsen sistem komputer menggunakan skema pengodean terpisah. Akibatnya, dokumen teks yang dibuat di satu komputer sering kali mengalami kerusakan karakter (bacaan aneh/garbled text) ketika dibuka di komputer lain.
          </div>
        </div>
      </section>

      {/* 2. History of Unicode */}
      <section id="2-history-of-unicode" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          2. Sejarah Singkat Unicode
        </h2>
        <p>
          Proyek Unicode dimulai pada akhir tahun 1987 oleh para insinyur dari perusahaan teknologi ternama seperti Xerox dan Apple (termasuk Joe Becker, Lee Collins, dan Mark Davis). Mereka menyadari masalah besar dalam pertukaran data multibahasa secara global.
        </p>
        <p>
          Pada tahun 1991, dibentuklah konsorsium nirlaba bernama <strong>Unicode Consortium</strong>. Versi pertama standar Unicode (Unicode 1.0.0) dirilis pada Oktober 1991 dengan menampung 7.161 karakter. Saat ini, versi terbaru Unicode telah mencakup lebih dari <strong>149.000 karakter</strong> dari ratusan aksara di dunia.
        </p>
      </section>

      {/* 3. Why Unicode was created */}
      <section id="3-why-unicode-was-created" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          3. Mengapa Unicode Diciptakan?
        </h2>
        <p>
          Sebelum Unicode, dunia komputer sangat terfragmentasi. Ada ratusan skema enkoding lokal seperti ISO-8859-1 untuk Eropa Barat, Shift-JIS untuk Jepang, dan GB2312 untuk Cina.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-slate-200 mb-1">Masalah Tanpa Unicode</h4>
            <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
              <li>Teks rusak ketika dikirim antar negara</li>
              <li>Satu dokumen tidak bisa menggabungkan banyak bahasa</li>
              <li>Aplikasi global harus membuat font terpisah</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-purple-300 mb-1">Solusi Dengan Unicode</h4>
            <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
              <li>Satu standar penomoran untuk seluruh dunia</li>
              <li>Dukungan penuh untuk obrolan pesan antar OS</li>
              <li>Memungkinkan hadirnya Emoji & Generator Font</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Unicode vs ASCII */}
      <section id="4-unicode-vs-ascii" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          4. Perbedaan Unicode vs ASCII
        </h2>
        <p>
          <strong>ASCII</strong> (American Standard Code for Information Interchange) adalah standar pengodean teks lama berbasis 7-bit yang hanya mampu menampung 128 karakter (huruf abjad Inggris A-Z, angka 0-9, dan simbol dasar keyboard).
        </p>
        <p>
          Unicode dirancang untuk memperluas ASCII. Pada kenyataannya, 128 karakter pertama dalam sistem Unicode sengaja dibuat identik dengan ASCII untuk menjaga kompatibilitas mundur.
        </p>

        {/* Comparison Table */}
        <div className="my-6 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-purple-300">
                <th className="p-3">Fitur</th>
                <th className="p-3">ASCII</th>
                <th className="p-3">Unicode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-3 font-semibold text-slate-200">Jumlah Karakter</td>
                <td className="p-3 text-slate-400">128 Karakter</td>
                <td className="p-3 text-purple-300 font-bold">149.000+ Karakter</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-200">Ukuran Bit</td>
                <td className="p-3 text-slate-400">7-bit / 8-bit</td>
                <td className="p-3 text-slate-400">8-bit, 16-bit, atau 32-bit (UTF-8, UTF-16)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-200">Dukungan Bahasa</td>
                <td className="p-3 text-slate-400">Hanya Bahasa Inggris</td>
                <td className="p-3 text-emerald-400 font-semibold">Semua Bahasa & Aksara Dunia</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-200">Emoji & Simbol</td>
                <td className="p-3 text-slate-400">Tidak ada</td>
                <td className="p-3 text-emerald-400 font-semibold">Ya (Emoji, Kaomoji, Math Symbols)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. How stylish fonts work */}
      <section id="5-how-stylish-fonts-work" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          5. Cara Kerja Font Aesthetic Unicode
        </h2>
        <p>
          Banyak orang mengira bahwa saat menggunakan generator tulisan aesthetic, aplikasi mengunggah file font baru ke Instagram atau WhatsApp. <strong>Hal ini keliru!</strong>
        </p>
        <p>
          Sebenarnya, yang dilakukan generator adalah memetakan (mapping) setiap huruf alfabet biasa ke blok karakter simbol matematika khusus bernama <em>Mathematical Alphanumeric Symbols</em> di konsorsium Unicode.
        </p>

        {/* Code / Interactive Demo Box */}
        <div className="my-6 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-purple-400 font-mono mb-3">
            <span className="flex items-center gap-1.5 font-bold">
              <Terminal className="w-4 h-4" /> Contoh Pemetaan Karakter Unicode
            </span>
            <span>Live Mapping</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Normal Text: <strong className="text-white font-sans">Aesthetic</strong></span>
              <span className="text-purple-300">𝔄𝔢𝔰𝔱𝔥𝔢𝔱𝔦𝔠 (Gothic)</span>
              <button
                onClick={() => handleCopySnippet('𝔄𝔢𝔰𝔱𝔥𝔢𝔱𝔦𝔠', 'Gothic')}
                className="px-2.5 py-1 rounded bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-[11px] flex items-center gap-1 transition-colors"
              >
                {copiedSnippet === '𝔄𝔢𝔰𝔱𝔥𝔢𝔱𝔦𝔠' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Normal Text: <strong className="text-white font-sans">Aesthetic</strong></span>
              <span className="text-purple-300">ⓐⓔⓢⓣⓗⓔⓣⓘⓒ (Bubble)</span>
              <button
                onClick={() => handleCopySnippet('ⓐⓔⓢⓣⓗⓔⓣⓘⓒ', 'Bubble')}
                className="px-2.5 py-1 rounded bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-[11px] flex items-center gap-1 transition-colors"
              >
                {copiedSnippet === 'ⓐⓔⓢⓣⓗⓔⓣⓘⓒ' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Unicode on Instagram */}
      <section id="6-unicode-on-instagram" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          6. Unicode di Instagram (Bio & Caption)
        </h2>
        <p>
          Instagram secara penuh mendukung karakter Unicode di kolom <strong>Nama</strong>, <strong>Bio Profile</strong>, <strong>Caption Postingan</strong>, hingga <strong>Komentar</strong>.
        </p>
        <p>
          Menggunakan font aesthetic di bio Instagram membantu profil Anda terlihat menonjol dan profesional. Namun, pastikan teks nama utama tetap mudah dibaca agar pengguna lain bisa mencari akun Anda di fitur pencarian Search IG.
        </p>
      </section>

      {/* 7. Unicode on TikTok */}
      <section id="7-unicode-on-tiktok" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          7. Unicode di TikTok
        </h2>
        <p>
          Di TikTok, karakter Unicode sering dipakai untuk mempercantik nama panggilan (Nickname), bio profil singkat, dan teks judul video agar masuk ke beranda <strong>FYP (For You Page)</strong>.
        </p>
      </section>

      {/* 8. Unicode on WhatsApp */}
      <section id="8-unicode-on-whatsapp" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          8. Unicode di WhatsApp
        </h2>
        <p>
          WhatsApp memiliki dukungan penuh untuk karakter Unicode di pesan obrolan, deskripsi grup, dan kolom <strong>Info Profile</strong>.
        </p>
      </section>

      {/* 9. Unicode on Discord */}
      <section id="9-unicode-on-discord" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          9. Unicode di Discord
        </h2>
        <p>
          Di Discord, karakter Unicode sangat populer untuk menghias <strong>Nama Channel Server</strong>, <strong>Server Nickname</strong>, dan pesan pengumuman pengelola server.
        </p>
      </section>

      {/* 10. Unicode on Facebook */}
      <section id="10-unicode-on-facebook" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          10. Unicode di Facebook
        </h2>
        <p>
          Facebook mendukung berbagai karakter tulisan aesthetic di postingan status, halaman Fanspage, dan komentar grup.
        </p>
      </section>

      {/* 11. Unicode compatibility */}
      <section id="11-unicode-compatibility" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          11. Kompatibilitas Perangkat & Masalah Kotak (□)
        </h2>
        <p>
          Mengapa terkadang beberapa karakter muncul sebagai kotak kosong <code>□</code> (dikenal sebagai <em>Tofu Character</em>)?
        </p>
        <p>
          Hal ini terjadi jika HP pembaca mengoperasikan versi Android/iOS yang sangat tua sehingga file font bawaan sistemnya belum diperbarui untuk menyertakan simbol Unicode tersebut. Lebih dari 98% HP modern tidak akan mengalami kendala ini.
        </p>

        <div className="my-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex gap-3 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-200 block mb-1">Tips Kompatibilitas:</strong>
            Pilihlah gaya font populer seperti Bold Gothic, Small Caps, atau Circle Bubble yang didukung oleh 99% seluruh HP dan sistem operasi.
          </div>
        </div>
      </section>

      {/* 12. Frequently asked questions */}
      <section id="12-frequently-asked-questions" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          12. Pertanyaan Umum (FAQ)
        </h2>
        <p>
          Berikut adalah ringkasan pertanyaan terbanyak seputar penggunaan Unicode dan generator font tulisan aesthetic.
        </p>
      </section>
    </article>
  );
};
