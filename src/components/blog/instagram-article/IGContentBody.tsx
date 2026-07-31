'use client';

import React, { useState } from 'react';
import { Copy, Check, Info, AlertTriangle, Lightbulb, Sparkles, Camera, Heart } from 'lucide-react';

interface IGContentBodyProps {
  onCopy: (msg: string) => void;
}

export const IGContentBody: React.FC<IGContentBodyProps> = ({ onCopy }) => {
  const [copiedFont, setCopiedFont] = useState<string | null>(null);

  const handleCopyFont = (fontText: string) => {
    navigator.clipboard.writeText(fontText);
    setCopiedFont(fontText);
    onCopy(`Teks "${fontText}" berhasil disalin!`);
    setTimeout(() => setCopiedFont(null), 1500);
  };

  return (
    <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">
      {/* 1. Apa itu Font Instagram? */}
      <section id="1-apa-itu-font-instagram" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <Camera className="w-6 h-6 text-pink-400" />
          <span>1. Apa Itu Font Instagram?</span>
        </h2>
        <p>
          <strong>Font Instagram (Instagram Fonts)</strong> merujuk pada penggunaan gaya tulisan unik, simbol estetik, dan karakter khusus bergaya visual alternatif yang ditempelkan pada profil bio, nama tampilan, caption postingan, komentar, dan stiker Instagram Story.
        </p>
        <p>
          Secara default, Instagram hanya menyediakan satu font standar untuk profil. Namun dengan memanfaatkan generator tulisan aesthetic, Anda dapat mempercantik tampilan profil agar terlihat menarik, profesional, dan aesthetic.
        </p>
      </section>

      {/* 2. Bagaimana Font Instagram Bekerja? */}
      <section id="2-bagaimana-font-instagram-bekerja" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          2. Bagaimana Font Instagram Bekerja?
        </h2>
        <p>
          Saat Anda mengutip tulisan cetak miring atau gelembung ke bio Instagram, Anda tidak sedang mengunggah file font baru (.ttf).
        </p>
        <p>
          Aplikasi Instagram membaca karakter tersebut sebagai <strong>simbol Unicode internasional</strong> yang sudah ada di dalam sistem operasi smartphone. Karena itu, tulisan langsung tampil rapi tanpa memerlukan instalasi aplikasi tambahan.
        </p>
      </section>

      {/* 3. Mengapa Menggunakan Unicode? */}
      <section id="3-mengapa-menggunakan-unicode" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          3. Mengapa Menggunakan Unicode?
        </h2>
        <p>
          Unicode adalah standar universal yang didukung secara resmi oleh Meta (Instagram, WhatsApp, Facebook), Apple (iOS), Google (Android), dan Microsoft.
        </p>
        <div className="my-6 p-4 rounded-2xl bg-pink-950/40 border border-pink-500/30 flex gap-3 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-pink-200 block mb-1">Keunggulan Standar Unicode:</strong>
            100% aman untuk akun Instagram Anda, tidak memicu pembatasan algoritma, dan dapat dibaca di jutaan HP pengikut tanpa rusak.
          </div>
        </div>
      </section>

      {/* 4. Cara Mengubah Tulisan Menjadi Font Instagram */}
      <section id="4-cara-mengubah-tulisan-menjadi-font-instagram" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          4. Cara Mengubah Tulisan Menjadi Font Instagram
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-slate-300">
          <li>Buka generator <strong className="text-pink-300">Tulisan Aesthetic Instagram</strong> di browser Anda.</li>
          <li>Ketikkan kata atau kalimat bio yang ingin Anda ubah di kolom input.</li>
          <li>Pilih gaya font aesthetic favorit Anda dari hasil konversi otomatis.</li>
          <li>Ketuk tombol <strong className="text-emerald-400">Copy</strong> untuk menyalin teks ke clipboard HP.</li>
          <li>Buka aplikasi Instagram &gt; Edit Profil &gt; Tempelkan (Paste) di kolom Bio.</li>
        </ol>
      </section>

      {/* 5. Font Terbaik untuk Bio */}
      <section id="5-font-terbaik-untuk-bio" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          5. Font Terbaik untuk Bio Instagram
        </h2>
        <p>Gaya font paling populer dan estetik untuk mempercantik Bio Instagram:</p>

        {/* Copyable Font Sample Grid */}
        <div className="my-6 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <h4 className="text-sm font-bold text-pink-300 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Sampel Font Bio IG Terfavorit (Salin 1-Klik)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            {[
              { label: 'Small Caps', text: '✦ ᴀᴇsᴛʜᴇᴛɪᴄ ᴠɪʙᴇs ✦' },
              { label: 'Cursive Script', text: '✨ 𝓼𝓽𝔞𝔯𝔯𝓎.𝔫𝔦𝔤𝔥𝔱 ✨' },
              { label: 'Circle Bubble', text: '🌸 ⓐⓔⓢⓣⓗⓔⓣⓘⓒ 🌸' },
              { label: 'Gothic Fraktur', text: '𝔊𝔬𝔱𝔥𝔦𝔠 𝔅𝔦𝔬 𝔖𝔱𝔶𝔩𝔢' },
            ].map((item) => (
              <div key={item.label} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block">{item.label}</span>
                  <span className="text-slate-200 font-bold">{item.text}</span>
                </div>
                <button
                  onClick={() => handleCopyFont(item.text)}
                  className="px-2.5 py-1 rounded bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 text-[11px] flex items-center gap-1 transition-colors"
                >
                  {copiedFont === item.text ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>Copy</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Font untuk Username */}
      <section id="6-font-untuk-username" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          6. Font untuk Username Tampilan
        </h2>
        <p>
          Anda dapat menyalin font aesthetic ke kolom <strong>Nama Tampilan (Display Name)</strong> profil Instagram agar nama profil Anda tampil estetik di bagian atas feed.
        </p>
      </section>

      {/* 7. Font untuk Caption */}
      <section id="7-font-untuk-caption" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          7. Font untuk Caption Postingan
        </h2>
        <p>
          Gunakan font aesthetic pada kalimat pembuka caption foto/Reels untuk menarik perhatian pembaca dalam 3 detik pertama saat mereka melakukan scrolling feed.
        </p>
      </section>

      {/* 8. Font untuk Story */}
      <section id="8-font-untuk-story" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          8. Font untuk Instagram Story
        </h2>
        <p>
          Salin teks font Unicode ke stiker teks Story Instagram Anda untuk menciptakan kutipan harian (Daily Quote) atau pengumuman visual yang estetik.
        </p>
      </section>

      {/* 9. Font untuk Komentar */}
      <section id="9-font-untuk-komentar" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          9. Font untuk Kolom Komentar
        </h2>
        <p>
          Tinggalkan komentar yang unik dan menonjol di unggahan kreator favorit Anda dengan menyelipkan kaomoji dan gaya huruf berbingkai.
        </p>
      </section>

      {/* 10. Tips Memilih Font yang Mudah Dibaca */}
      <section id="10-tips-memilih-font-mudah-dibaca" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          10. Tips Memilih Font yang Mudah Dibaca
        </h2>
        <div className="my-6 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex gap-3 text-xs sm:text-sm">
          <Lightbulb className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-purple-200 block mb-1">Tips Keterbacaan Utama:</strong>
            Gunakan font aesthetic untuk kata kunci penting saja. Kombinasikan dengan baris teks biasa agar pengunjung profil dapat membaca informasi kontak atau bisnis Anda secara jelas.
          </div>
        </div>
      </section>

      {/* 11. Kesalahan yang Harus Dihindari */}
      <section id="11-kesalahan-harus-dihindari" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          11. Kesalahan yang Harus Dihindari
        </h2>
        <div className="my-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex gap-3 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-200 block mb-1">3 Kesalahan Umum di Bio IG:</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Mengubah seluruh teks bio dengan font gothic yang sangat rumit.</li>
              <li>Menggunakan font Unicode pada ID Username utama (membuat akun tidak bisa di-tag).</li>
              <li>Menumpuk terlalu banyak simbol bintang dan emoji tanpa spasi yang rapi.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section id="12-faq-pertanyaan-umum" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          12. Pertanyaan Umum (FAQ)
        </h2>
        <p>
          Berikut adalah ringkasan pertanyaan terbanyak seputar penggunaan font aesthetic di Instagram.
        </p>
      </section>
    </article>
  );
};
