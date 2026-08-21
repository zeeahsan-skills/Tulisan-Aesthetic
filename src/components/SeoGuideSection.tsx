'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Copy,
  Check,
  Smartphone,
  Gamepad2,
  Share2,
  Layers,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  BookOpen,
  Zap,
  CheckCircle2,
  Info,
  ShieldAlert,
  FileText,
  Sliders,
} from 'lucide-react';

interface SeoGuideSectionProps {
  onCopy?: (text: string) => void;
}

export function SeoGuideSection({ onCopy }: SeoGuideSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    if (onCopy) {
      onCopy(`Teks "${text}" telah disalin!`);
    }
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Practical Indonesian Examples for Section 6
  const realisticExamples = [
    { label: 'Halo Dunia', normal: 'Halo Dunia', styles: [
      { name: 'Bold', result: '𝗛𝗮𝗹𝗼 𝗗𝘂𝗻𝗶𝗮', id: 'ex-halo-bold' },
      { name: 'Cursive', result: '𝐻𝒶𝓁𝑜 𝒟𝓊𝓃𝒾𝒶', id: 'ex-halo-cursive' },
      { name: 'Gothic', result: 'ℌ𝔞𝔩𝔬 𝔇𝔲𝔫𝔦𝔞', id: 'ex-halo-gothic' },
    ]},
    { label: 'Selamat Datang', normal: 'Selamat Datang', styles: [
      { name: 'Small Caps', result: 'ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ', id: 'ex-wel-sc' },
      { name: 'Bubble', result: 'Ⓢⓔⓛⓐⓜⓐⓣ Ⓓⓐⓣⓐⓝⓖ', id: 'ex-wel-bub' },
      { name: 'Monospace', result: '𝚂𝚎𝚕𝚊𝚖𝚊𝚝 𝙳𝚊𝚝𝚊𝚗𝚐', id: 'ex-wel-mono' },
    ]},
    { label: 'Tulisan Aesthetic', normal: 'Tulisan Aesthetic', styles: [
      { name: 'Superscript', result: 'ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ', id: 'ex-ta-super' },
      { name: 'Double-Struck', result: '𝕋𝕦𝕝𝕚𝕤𝕒𝕟 𝔸𝕖𝕤𝕥𝕙𝕖𝕥𝕚𝕔', id: 'ex-ta-double' },
      { name: 'Glitch', result: 'T̷u̷l̷i̷s̷a̷n̷ ̷A̷e̷s̷t̷h̷e̷t̷i̷c̷', id: 'ex-ta-glitch' },
    ]},
    { label: 'Nama Saya', normal: 'Nama Saya', styles: [
      { name: 'Script', result: '𝒩𝒶𝓂𝒶 𝒮𝒶𝓎𝒶', id: 'ex-ns-script' },
      { name: 'Square', result: '🄰🄼🄰 🅂🄰🅈🄰', id: 'ex-ns-sq' },
    ]},
    { label: 'Jangan Lupa Follow', normal: 'Jangan Lupa Follow', styles: [
      { name: 'Bold Italic', result: '𝙅𝙖𝙣𝙜𝙖𝙣 𝙇𝙪𝙥𝙖 𝙁𝙤𝙡𝙡𝙤𝙬', id: 'ex-jlf-bi' },
      { name: 'Cute Circles', result: 'Ⓙⓐⓝⓖⓐⓝ Ⓛⓤⓟⓐ Ⓕⓞⓛⓛⓞⓦ', id: 'ex-jlf-circ' },
    ]},
    { label: 'Game On', normal: 'Game On', styles: [
      { name: 'Gamer Decor', result: '꧁༺ 𝙂𝘼𝙈𝙀 𝙊𝙉 ༻꧂', id: 'ex-go-decor' },
      { name: 'Gothic', result: '𝔊𝔞𝔪𝔢 𝔒𝔫', id: 'ex-go-gothic' },
    ]},
    { label: 'Good Vibes', normal: 'Good Vibes', styles: [
      { name: 'Cursive', result: '𝒢ℴℴ𝒹 𝒱𝒾𝒷ℯ𝓈', id: 'ex-gv-cur' },
      { name: 'Small Caps', result: 'ɢᴏᴏᴅ ᴠɪʙᴇꜱ', id: 'ex-gv-sc' },
    ]},
    { label: 'Welcome', normal: 'Welcome', styles: [
      { name: 'Double-Struck', result: '𝕎𝕖𝕝𝕔𝕠𝕞𝕖', id: 'ex-wc-ds' },
      { name: 'Monospace', result: '𝚆𝚎𝚕𝚌𝚘𝚖𝚎', id: 'ex-wc-mono' },
    ]},
    { label: 'Terima Kasih', normal: 'Terima Kasih', styles: [
      { name: 'Bold Sans', result: '𝗧𝗲𝗿𝗶𝗺𝗮 𝗞𝗮𝘀𝗶𝗵', id: 'ex-tk-bold' },
      { name: 'Tiny Upper', result: 'ᵀᴱᴿᴵᴹᴬ ᴷᴬˢᴵᴴ', id: 'ex-tk-tiny' },
    ]},
    { label: 'Stay Positive', normal: 'Stay Positive', styles: [
      { name: 'Script', result: '𝒮𝓉𝒶𝓎 𝒫ℴ𝓈𝒾𝓉𝒾𝓋ℯ', id: 'ex-sp-script' },
      { name: 'Circled', result: 'Ⓢⓣⓐⓨ Ⓟⓞⓢⓘⓣⓘ⓯ⓔ', id: 'ex-sp-circ' },
    ]},
  ];

  // Detailed Font Categories Breakdown
  const fontCategoriesDetail = [
    { title: 'Tulisan Tebal (Bold)', tag: 'Tebal & Tegas', desc: 'Memberikan efek tebal sans-serif atau serif Unicode. Sangat cocok untuk judul bio, penekanan teks penting, dan nama akun.', sample: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻 𝗧𝗲𝗯𝗮𝗹', link: '/font/tebal' },
    { title: 'Tulisan Miring (Italic / Cursive)', tag: 'Anggun & Halus', desc: 'Huruf sambung bergaya kaligrafi tangan yang memberikan kesan feminin, estetik, dan elegan.', sample: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 ℳ𝒾𝓇𝒾𝓃ℊ', link: '/font/terhubung' },
    { title: 'Tulisan Gothic (Fraktur)', tag: 'Dark & Klasik', desc: 'Gaya huruf Abad Pertengahan bergaya gothic klasik. Sangat disukai gamer untuk nickname clan dan profil edgier.', sample: '𝔗𝔲𝔩𝔦𝔰𝔞𝔫 𝔊𝔬𝔱𝔥𝔦𝔠', link: '/font/gothic-fraktur' },
    { title: 'Monospace (Mesin Tik)', tag: 'Retro & Komputer', desc: 'Font dengan lebar karakter seragam bergaya mesin ketik klasik atau konsol koding.', sample: '𝚃𝚞𝚕𝚒𝚜𝚊𝚗 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎', link: '/font/garis' },
    { title: 'Double-Struck', tag: 'Simbol Matematika', desc: 'Gaya garis ganda (blackboard bold) yang unik dan sering dipakai untuk username profesional.', sample: '𝕋𝕦𝕝𝕚𝕤𝕒𝕟 𝔻𝕠𝕦𝕓𝕝𝕖', link: '/font/huruf-keren' },
    { title: 'Circled Text (Bubble)', tag: 'Cute & Unik', desc: 'Karakter alfabet dilingkari garis bundar. Cocok untuk highlight caption dan penanda nomor list.', sample: 'Ⓣⓤⓛⓘⓢⓐⓝ Ⓑⓤⓑⓑⓛⓔ', link: '/font/gelembung' },
    { title: 'Small Caps (Kapital Mini)', tag: 'Minimal & Rapi', desc: 'Format huruf kapital mini seragam yang menjadikan bio Instagram dan TikTok terlihat modern.', sample: 'ꜱᴍᴀʟʟ ᴄᴀᴘs ᴛᴇxᴛ', link: '/font/tiny' },
    { title: 'Superscript & Subscript', tag: 'Mini & Aesthetic', desc: 'Huruf kecil berukuran miring atas yang banyak viral di komentar TikTok dan deskripsi bio.', sample: 'ᵀᵁᴸᴵˢᴬᴺ ᴹᴵᴺᴵ', link: '/font/tiny' },
    { title: 'Decorative & Gamer', tag: 'Simbol & Ornamen', desc: 'Kombinasi otomatis dengan mahkota, sayap, dan bintang untuk nickname esports.', sample: '꧁༺ ᵀᵁᴸᴵˢᴬᴺ ༻꧂', link: '/font/nama-keren' },
  ];

  return (
    <section id="seo-guide" className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION 3 — SHORT INTRODUCTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400 inline-flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            Panduan & Informasi Lengkap
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins tracking-tight leading-tight">
            Panduan Tulisan Aesthetic & Generator Font Unicode
          </h2>
          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Tulisan Aesthetic adalah alat generator praktis yang membantu Anda membuat font estetik, huruf keren, dan simbol dekoratif secara gratis tanpa perlu mengunduh aplikasi tambahan. Cukup ketik teks pilihan Anda di generator, pilih gaya favorit, lalu salin dan tempel (copy paste) ke media sosial atau game pilihan Anda.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 4 — APA ITU TULISAN AESTHETIC? */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400 shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
              Apa Itu Tulisan Aesthetic?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="space-y-4">
              <p>
                <strong>Tulisan aesthetic</strong> (atau teks estetik) adalah teks yang dimodifikasi menggunakan karakter khusus dan simbol visual unik agar terlihat lebih gaya, kreatif, dan menonjol dibanding teks biasa.
              </p>
              <p>
                Banyak pengguna menggunakan tulisan aesthetic untuk mempercantik <em>bio Instagram</em>, deskripsi <em>TikTok</em>, status <em>WhatsApp</em>, pesan <em>Discord</em>, hingga <em>nickname game esports</em> seperti Free Fire, Mobile Legends, dan PUBG Mobile.
              </p>
            </div>
            <div className="space-y-4 bg-slate-50 dark:bg-slate-950 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              <h3 className="font-bold text-purple-600 dark:text-pink-400 text-sm uppercase tracking-wide flex items-center gap-2">
                <Info className="w-4 h-4" /> Fakta Penting Karakter Unicode:
              </h3>
              <p className="text-xs sm:text-sm">
                Berbeda dengan font komputasi standar (seperti Arial atau Times New Roman) yang dipasang di sistem operasi, tulisan aesthetic dihasilkan menggunakan kombinasi <strong>karakter Unicode resmi</strong>. Oleh karena itu, Anda bisa menyalin hasilnya secara langsung tanpa perlu memasang file font tambahan.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5 — CARA MEMBUAT TULISAN AESTHETIC */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
                Cara Membuat Tulisan Aesthetic (6 Langkah Mudah)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Panduan praktis menggunakan generator font tanpa install aplikasi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Masukkan Teks', desc: 'Ketik kata, nama, atau kalimat yang ingin diubah pada kolom input generator di atas.' },
              { step: '2', title: 'Lihat Hasil Instant', desc: 'Sistem Unicode engine kami langsung mengonversi teks ke 50+ gaya berbeda secara otomatis.' },
              { step: '3', title: 'Pilih Style Favorit', desc: 'Gunakan filter kategori (Bold, Gothic, Cute, Gaming) atau kolom pencarian untuk menemukan gaya yang pas.' },
              { step: '4', title: 'Klik Tombol Copy', desc: 'Tekan tombol "Salin Style" pada kartu teks yang Anda inginkan. Teks otomatis tersimpan di clipboard.' },
              { step: '5', title: 'Paste ke Platform', desc: 'Buka aplikasi Instagram, TikTok, WhatsApp, atau Game, lalu tempel (Paste) pada Bio atau Username.' },
              { step: '6', title: 'Opsi Alternatif', desc: 'Jika karakter tampak tidak kompatibel pada perangkat tertentu, coba pilih gaya Unicode yang lebih umum.' },
            ].map((item) => (
              <div key={item.step} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base font-poppins">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 6 — CONTOH TULISAN AESTHETIC */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
                Contoh Hasil Tulisan Aesthetic Realistis
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Berikut contoh teks umum bahasa Indonesia setelah dikonversi menggunakan berbagai style Unicode.
              </p>
            </div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 transition"
            >
              <Sparkles className="w-3.5 h-3.5" /> Ke Generator Top
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {realisticExamples.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                <span className="text-xs font-bold text-purple-600 dark:text-pink-400 uppercase tracking-wider block mb-2">
                  Teks Asli: "{item.normal}"
                </span>
                <div className="space-y-2">
                  {item.styles.map((st) => (
                    <div key={st.id} className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 font-mono text-sm">
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-pink-300">
                          {st.name}
                        </span>
                        <span className="text-slate-900 dark:text-white font-medium truncate">{st.result}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(st.result, st.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 dark:hover:text-pink-400 transition"
                        title="Salin gaya"
                      >
                        {copiedId === st.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 7 — POPULAR AESTHETIC FONT STYLES */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Kategori & Jenis Style Font Populer
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Pelajari karakteristik visual setiap kategori font agar Anda dapat memilih gaya yang paling sesuai dengan kebutuhan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fontCategoriesDetail.map((cat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-purple-600 dark:text-pink-400 uppercase tracking-wider">{cat.tag}</span>
                    <a href={cat.link} className="text-xs text-slate-400 hover:text-purple-600 dark:hover:text-pink-400 flex items-center gap-1">
                      <span>Detail</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">{cat.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 font-mono text-sm text-purple-700 dark:text-pink-300 truncate">
                  {cat.sample}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTIONS 8-11 — PLATFORM SPECIFIC GUIDES */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Penggunaan Tulisan Aesthetic di Berbagai Platform
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Setiap platform memiliki batasan karakter dan gaya penayangan tersendiri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Instagram */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">Tulisan untuk Instagram</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Instagram mendukung sebagian besar karakter Unicode pada <strong>Bio (150 karakter)</strong>, nama profil, caption postingan, dan judul Highlight story.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <div>• Rekomendasi: Style <em>Small Caps</em> atau <em>Cursive Clean</em></div>
                  <div>• Usahakan teks tetap mudah dibaca oleh pengunjung profil.</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a href="/platform/instagram" className="text-xs font-bold text-purple-600 dark:text-pink-400 hover:underline flex items-center gap-1">
                  <span>Lihat Panduan Instagram</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* TikTok */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 border border-slate-700">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">Tulisan untuk TikTok</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  TikTok sangat cocok dengan gaya teks unik pada <strong>Bio profil</strong>, nama tampilan (Display Name), komentar video, dan deskripsi konten.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <div>• Rekomendasi: Style <em>Bubble Text</em> & <em>Superscript Mini</em></div>
                  <div>• Meningkatkan daya tarik visual bio profil TikTok Anda.</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a href="/platform/tiktok" className="text-xs font-bold text-purple-600 dark:text-pink-400 hover:underline flex items-center gap-1">
                  <span>Lihat Panduan TikTok</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">Tulisan untuk WhatsApp</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Gunakan tulisan aesthetic untuk mempercantik <strong>Info WhatsApp</strong>, Status Teks harian, nama grup obrolan, dan penekanan pesan pribadi.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <div>• Rekomendasi: Style <em>Bold Sans</em> & <em>Monospace</em></div>
                  <div>• Terbaca dengan sangat stabil di WhatsApp Android & iOS.</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a href="/platform/whatsapp" className="text-xs font-bold text-purple-600 dark:text-pink-400 hover:underline flex items-center gap-1">
                  <span>Lihat Panduan WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTIONS 12-13 — USERNAME, BIO & GAMING NICKNAMES */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
              Tulisan Aesthetic untuk Bio, Username & Nickname Game
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Perhatikan perbedaan penggunaan tulisan estetik antara akun sosial media biasa dan game esports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 font-poppins">1. Username & Bio Media Sosial</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Untuk profil sosial media, keterbacaan adalah kunci utama. Jangan gunakan terlalu banyak simbol rumit agar teman atau pencari akun tetap dapat mencari nama Anda dengan mudah.
              </p>
              <div className="text-xs text-purple-600 dark:text-pink-400 font-semibold">
                Contoh Bio Bagus: ✨ 𝒮𝓉𝒶𝓎 𝒫ℴ𝓈𝒾𝓉𝒾𝓋ℯ ✨ | 📍 Jakarta
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 font-poppins">2. Nickname Gaming Esports</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Pada game seperti Free Fire, Mobile Legends, dan PUBG Mobile, pemain sering mengombinasikan font Gothic atau Bold dengan border mahkota ꧁༺ ༻꧂ agar terlihat seperti pro player.
              </p>
              <div className="text-xs text-purple-600 dark:text-pink-400 font-semibold">
                Contoh Nick Game: ꧁༺ 𝙆𝙄𝙉𝙂_𝙎𝙃𝘼𝘿𝙊𝙑 ༻꧂
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sub-Katalog Game:</span>
            <a href="/free-fire" className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-pink-400 text-xs font-semibold hover:bg-purple-500/20">Free Fire (FF)</a>
            <a href="/mobile-legends" className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-pink-400 text-xs font-semibold hover:bg-purple-500/20">Mobile Legends (MLBB)</a>
            <a href="/pubg-mobile" className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-pink-400 text-xs font-semibold hover:bg-purple-500/20">PUBG Mobile</a>
            <a href="/roblox" className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-pink-400 text-xs font-semibold hover:bg-purple-500/20">Roblox</a>
            <a href="/nama-game-keren" className="px-3 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-pink-400 text-xs font-semibold hover:bg-purple-500/20">Preset Game Lengkap</a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTIONS 14-15 — APA ITU UNICODE TEXT & FONT VS UNICODE */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-900/10 via-slate-900/5 to-pink-900/10 dark:from-purple-950/40 dark:to-slate-900/80 border border-purple-500/20 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
            Memahami Unicode Text & Perbedaannya dengan Font Biasa
          </h2>
          
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <div className="space-y-3">
              <h3 className="font-bold text-purple-600 dark:text-pink-400 text-lg font-poppins">Apa Itu Standar Unicode?</h3>
              <p>
                <strong>Unicode</strong> adalah standar industri teknologi internasional yang memberikan nomor unik (code point) untuk setiap karakter dalam semua bahasa dan sistem tulisan di seluruh dunia.
              </p>
              <p>
                Konsorsium Unicode menyediakan ribuan simbol matematika, alfabet khusus, dan tanda diakritik yang bentuk visualnya menyerupai variasi tulisan tebal, miring, atau bergaris.
              </p>
            </div>

            <div className="space-y-3 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-purple-500/20">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg font-poppins">Perbedaan Font vs Unicode Text</h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <strong className="text-purple-600 dark:text-pink-400">File Font (.TTF / .OTF):</strong> Mengubah tampilan visual rendering tulisan hanya di komputer tempat file font terpasang. Teks dasarnya tetap biasa.
                </li>
                <li>
                  <strong className="text-purple-600 dark:text-pink-400">Teks Unicode:</strong> Mengganti karakter huruf asli dengan karakter khusus Unicode yang memiliki tampilan estetik bawaan. Karena itu, hasilnya dapat disalin dan ditempel di mana saja.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTIONS 16-17 — CARA COPY PASTE & KOMPATIBILITAS DEVICE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Copy Paste Instructions */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-3">
              <Copy className="w-5 h-5 text-purple-600 dark:text-pink-400" />
              Cara Copy dan Paste
            </h2>
            <div className="mt-4 space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <div>
                <strong className="text-slate-900 dark:text-white block mb-1">Di Komputer / Desktop:</strong>
                <p>Klik tombol <em>Copy</em> pada kartu font, atau blok teks lalu tekan <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[11px]">Ctrl+C</kbd> (Windows) / <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[11px]">Cmd+C</kbd> (Mac). Tempel menggunakan <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-800 rounded font-mono text-[11px]">Ctrl+V</kbd>.</p>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white block mb-1">Di Smartphone (Android & iPhone):</strong>
                <p>Ketuk tombol <em>Copy</em> pada generator. Buka aplikasi tujuan (misal Instagram/WA), tahan jarimu di area teks, lalu pilih <em>Paste (Tempel)</em>.</p>
              </div>
            </div>
          </div>

          {/* Compatibility Matrix & Factors */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-pink-500" />
              Kompatibilitas Sistem & Perangkat
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Dukungan tulisan aesthetic tergantung pada sistem operasi (iOS, Android, Windows) dan versi font bawaan perangkat penerima.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Jika sebuah karakter tidak didukung oleh versi HP lama, tampilan akan muncul sebagai simbol kotak kosong (☒) atau tanda tanya.</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 18 — KENAPA TULISAN AESTHETIC TIDAK MUNCUL? (TROUBLESHOOTING) */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
                Kenapa Tulisan Aesthetic Tidak Muncul? (Solusi Troubleshooting)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Penyebab utama dan langkah penyelesaian masalah penayangan teks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <h3 className="font-bold text-rose-600 dark:text-rose-400 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Penyebab Karakter Hilang / Kotak:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li>• <strong>Sistem Operasi Lama:</strong> Perangkat Android versi di bawah 8.0 belum mendukung blok karakter Unicode 14/15 terbaru.</li>
                <li>• <strong>Restriksi Game:</strong> Beberapa game memblokir karakter Unicode tertentu untuk mencegah penyalahgunaan sistem username.</li>
                <li>• <strong>Batas Karakter:</strong> Memasukkan teks terlalu panjang yang melebihi batas kolom nama platform.</li>
              </ul>
            </div>

            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <h3 className="font-bold text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Solusi Praktis:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li>1. <strong>Coba Style Lain:</strong> Gunakan gaya <em>Bold Sans</em> atau <em>Small Caps</em> yang memiliki tingkat kompatibilitas 99%.</li>
                <li>2. <strong>Hapus Simbol Berlebih:</strong> Kurangi ornamen mahkota/sayap jika game menolak nama Anda.</li>
                <li>3. <strong>Perpendek Teks:</strong> Persingkat jumlah kata agar sesuai limit karakter bio/username.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTIONS 19-20 — CARA MEMILIH STYLE & PRACTICAL USE CASES */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400 shrink-0">
              <Sliders className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
              Panduan Memilih Style yang Tepat untuk Setiap Kebutuhan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs font-bold text-purple-600 dark:text-pink-400 uppercase tracking-wider block mb-1">Bio Instagram</span>
              <strong className="text-slate-900 dark:text-white text-sm block mb-1">Clean & Aesthetic</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400">Pilih Small Caps atau Cursive agar profil terlihat rapi dan elegan.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs font-bold text-purple-600 dark:text-pink-400 uppercase tracking-wider block mb-1">Bio TikTok</span>
              <strong className="text-slate-900 dark:text-white text-sm block mb-1">Eye-Catching & Bold</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400">Pilih Bubble Text atau Bold Sans agar menarik perhatian dengan cepat.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs font-bold text-purple-600 dark:text-pink-400 uppercase tracking-wider block mb-1">WhatsApp Info</span>
              <strong className="text-slate-900 dark:text-white text-sm block mb-1">Simpel & Mudah Dibaca</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400">Pilih Monospace atau Bold Serif untuk penekanan pesan yang jelas.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <span className="text-xs font-bold text-purple-600 dark:text-pink-400 uppercase tracking-wider block mb-1">Nick Game</span>
              <strong className="text-slate-900 dark:text-white text-sm block mb-1">Bold & Esports Decor</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400">Gunakan font Gothic/Bold dikombinasikan dengan simbol mahkota.</p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FINAL CALLOUT & CTA KE GENERATOR TOP */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins">
            Sudah Menemukan Style yang Cocok?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-purple-100">
            Masukkan teks Anda pada generator di bagian paling atas halaman untuk mencoba 50 variasi gaya font Unicode aesthetic secara instan dan 100% gratis.
          </p>
          <div className="mt-6">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-purple-700 font-extrabold text-base shadow-xl hover:bg-slate-100 transition hover:scale-105 active:scale-95"
            >
              <Zap className="w-5 h-5 text-pink-500" />
              <span>Ke Generator Teks Sekarang</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
