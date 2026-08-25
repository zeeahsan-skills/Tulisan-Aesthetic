'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Copy,
  Check,
  Smartphone,
  Share2,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Zap,
  CheckCircle2,
  Info,
  ShieldAlert,
  Sliders,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface SeoGuideSectionProps {
  onCopy?: (text: string) => void;
}

export function SeoGuideSection({ onCopy }: SeoGuideSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

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

  // Practical Indonesian Examples for Section
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
    { label: 'Tulisan Keren', normal: 'Tulisan Keren', styles: [
      { name: 'Superscript', result: 'ᵀᵁᴸᴵˢᴬᴺ ᴷᴱᴿᴱᴺ', id: 'ex-ta-super' },
      { name: 'Double-Struck', result: '𝕋𝕦𝕝𝕚𝕤𝕒𝕟 𝕂𝕖𝕣𝕖𝕟', id: 'ex-ta-double' },
      { name: 'Glitch', result: 'T̷u̷l̷i̷s̷a̷n̷ ̷K̷e̷r̷e̷n̷', id: 'ex-ta-glitch' },
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
      { name: 'Gamer Decor', result: '꧁༺ 𝙴𝘼𝙈𝙀 𝙊𝙉 ༻꧂', id: 'ex-go-decor' },
      { name: 'Gothic', result: '𝔊𝔞𝔪𝔢 𝔒𝔫', id: 'ex-go-gothic' },
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
  ];

  return (
    <section id="seo-guide" className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Short Introduction */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400 inline-flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            Panduan & Informasi Generator
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins tracking-tight leading-tight">
            Panduan Teks Estetik & Generator Font Unicode
          </h2>
          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Alat generator praktis yang membantu Anda membuat gaya tulisan estetik, font unik, dan karakter keren secara gratis tanpa perlu mengunduh aplikasi tambahan. Ketik teks pilihan Anda di generator, pilih gaya favorit, lalu salin dan tempel (copy paste) ke media sosial atau game pilihan Anda.
          </p>
        </div>

        {/* Overview Box: Apa Itu & Cara Kerja Ringkas */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
                Cara Mengubah Tulisan Biasa Jadi Estetik (6 Langkah Mudah)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Panduan instan menggunakan generator font tanpa instal aplikasi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Masukkan Teks', desc: 'Ketik kata, nama, atau kalimat yang ingin diubah pada kolom input generator di atas.' },
              { step: '2', title: 'Hasil Otomatis', desc: 'Sistem Unicode engine kami langsung mengonversi teks ke 50+ gaya berbeda secara otomatis.' },
              { step: '3', title: 'Pilih Style Favorit', desc: 'Gunakan filter kategori (Bold, Gothic, Cute, Gaming) atau kolom pencarian untuk menemukan gaya yang pas.' },
              { step: '4', title: 'Klik Tombol Copy', desc: 'Tekan tombol "Salin Style" pada kartu teks yang Anda inginkan. Teks otomatis tersimpan di clipboard.' },
              { step: '5', title: 'Paste ke Platform', desc: 'Buka aplikasi Instagram, TikTok, WhatsApp, atau Game, lalu tempel (Paste) pada Bio atau Username.' },
              { step: '6', title: 'Perangkat Kompatibel', desc: 'Jika karakter tampak tidak kompatibel pada perangkat lama, pilih gaya Unicode yang lebih umum seperti Small Caps.' },
            ].map((item) => (
              <div key={item.step} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-xl bg-purple-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base font-poppins">{item.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collapsible Accordion Container for In-Depth Guides */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-poppins">
              Panduan Detail & Modul Pembahasan (Klik untuk Buka)
            </h3>
            <span className="text-xs font-semibold text-purple-600 dark:text-pink-400">
              {openAccordion ? '1 Modul Terbuka' : 'Semua Ringkas'}
            </span>
          </div>

          {/* Accordion Item 1: Contoh Hasil Tulisan */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-purple-900/30 overflow-hidden bg-white dark:bg-slate-900 shadow-md">
            <button
              onClick={() => toggleAccordion('examples')}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-pink-400 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-base sm:text-lg font-poppins">Contoh Hasil Tulisan Estetik Realistis</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openAccordion === 'examples' ? 'rotate-180 text-purple-600' : ''}`} />
            </button>
            <AnimatePresence>
              {openAccordion === 'examples' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-6 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Accordion Item 2: Kategori Style Font */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-purple-900/30 overflow-hidden bg-white dark:bg-slate-900 shadow-md">
            <button
              onClick={() => toggleAccordion('categories')}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-pink-400 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                  <Sliders className="w-5 h-5" />
                </div>
                <span className="text-base sm:text-lg font-poppins">Kategori & Jenis Style Font Populer</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openAccordion === 'categories' ? 'rotate-180 text-purple-600' : ''}`} />
            </button>
            <AnimatePresence>
              {openAccordion === 'categories' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-6 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {fontCategoriesDetail.map((cat, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-purple-600 dark:text-pink-400 uppercase tracking-wider">{cat.tag}</span>
                            <a href={cat.link} className="text-xs text-slate-400 hover:text-purple-600 flex items-center gap-1">
                              <span>Detail</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                          <h4 className="text-base font-bold text-slate-900 dark:text-white font-poppins">{cat.title}</h4>
                          <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{cat.desc}</p>
                        </div>
                        <div className="mt-3 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 font-mono text-xs text-purple-700 dark:text-pink-300 truncate">
                          {cat.sample}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Accordion Item 3: Panduan Platform */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-purple-900/30 overflow-hidden bg-white dark:bg-slate-900 shadow-md">
            <button
              onClick={() => toggleAccordion('platforms')}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-pink-400 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-base sm:text-lg font-poppins">Penggunaan Tulisan di Instagram, TikTok & WhatsApp</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openAccordion === 'platforms' ? 'rotate-180 text-purple-600' : ''}`} />
            </button>
            <AnimatePresence>
              {openAccordion === 'platforms' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-6 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-poppins">Instagram</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        Ideal untuk Bio (150 karakter), caption, dan nama profil. Disarankan menggunakan gaya <em>Small Caps</em> atau <em>Cursive</em> agar rapi.
                      </p>
                      <a href="/platform/instagram" className="text-xs font-bold text-purple-600 dark:text-pink-400 hover:underline">Lihat Panduan Instagram →</a>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-poppins">TikTok</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        Tampil beda di Bio profil dan deskripsi video. Gaya <em>Bubble Text</em> & <em>Superscript Mini</em> sangat diminati.
                      </p>
                      <a href="/platform/tiktok" className="text-xs font-bold text-purple-600 dark:text-pink-400 hover:underline">Lihat Panduan TikTok →</a>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-poppins">WhatsApp</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        Percantik Info profil, status teks, dan nama grup. Gunakan <em>Bold Sans</em> agar terbaca dengan sangat stabil di semua HP.
                      </p>
                      <a href="/platform/whatsapp" className="text-xs font-bold text-purple-600 dark:text-pink-400 hover:underline">Lihat Panduan WhatsApp →</a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Accordion Item 4: Troubleshooting & Karakter Hilang */}
          <div className="rounded-2xl border border-slate-200/80 dark:border-purple-900/30 overflow-hidden bg-white dark:bg-slate-900 shadow-md">
            <button
              onClick={() => toggleAccordion('troubleshooting')}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-pink-400 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="text-base sm:text-lg font-poppins">Kenapa Tulisan Tidak Muncul? (Solusi Troubleshooting)</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openAccordion === 'troubleshooting' ? 'rotate-180 text-purple-600' : ''}`} />
            </button>
            <AnimatePresence>
              {openAccordion === 'troubleshooting' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-6 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                      <h4 className="font-bold text-rose-600 dark:text-rose-400 text-xs uppercase tracking-wide mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> Penyebab Karakter Kotak (☒):
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        <li>• HP Android versi lama belum mendukung blok karakter Unicode terbaru.</li>
                        <li>• Beberapa game membatasi simbol tertentu pada sistem nickname.</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                      <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-xs uppercase tracking-wide mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" /> Solusi Praktis:
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                        <li>1. Gunakan gaya <em>Bold Sans</em> atau <em>Small Caps</em> (dukungan 99.9%).</li>
                        <li>2. Hapus ornamen simbol berlebih jika game menolak username Anda.</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Quick CTA to Top */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-center shadow-xl relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins">
            Sudah Siap Mengubah Tulisan Anda?
          </h3>
          <p className="mt-2 max-w-xl mx-auto text-sm sm:text-base text-purple-100">
            Ketik kata Anda pada generator di bagian paling atas halaman untuk mencoba 50+ gaya tulisan Unicode instan.
          </p>
          <div className="mt-4">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-purple-700 font-extrabold text-sm shadow-lg hover:bg-slate-100 transition"
            >
              <Zap className="w-4 h-4 text-pink-500" />
              <span>Ke Generator Sekarang</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
