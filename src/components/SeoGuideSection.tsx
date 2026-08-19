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

  const sampleStyles = [
    { label: 'Normal', text: 'Tulisan Aesthetic', id: 'sample-normal' },
    { label: 'Bold', text: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰', id: 'sample-bold' },
    { label: 'Cursive', text: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸', id: 'sample-cursive' },
    { label: 'Gothic', text: '𝔗𝔲𝔩𝔦𝔰𝔞𝔫 𝔄𝔢𝔰𝔱𝔥𝔢𝔱𝔦𝔠', id: 'sample-gothic' },
    { label: 'Monospace', text: '𝚃𝚞𝚕𝚒𝔰𝚊𝚗 𝙰𝚎𝚜𝚝𝚑𝚎𝚝𝚒𝚌', id: 'sample-mono' },
  ];

  const igExamples = [
    { text: '✨ 𝓓𝓻𝓮𝒶𝓂 𝓑𝓲𝓰 ✨', id: 'ig-1' },
    { text: '♡ 𝑀𝒶𝓀𝑒 𝒾𝓉 𝒽𝒶𝓅𝓅𝑒𝓃 ♡', id: 'ig-2' },
  ];

  const gameExamples = [
    { text: '『𝙎𝙝𝙖𝙙𝙤𝙬』', id: 'game-1' },
    { text: '꧁༺𝑲𝒊𝒏𝒈༻꧂', id: 'game-2' },
    { text: '★彡[𝙋𝙡𝙖𝙮𝙚𝙧]彡★', id: 'game-3' },
  ];

  const styleCategories = [
    {
      title: '𝗕𝗼𝗹𝗱',
      tag: 'Tebal & Tegas',
      desc: 'Cocok untuk nama, judul pendek, bio, dan teks yang ingin terlihat lebih tegas.',
      preview: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: '𝒞𝓊𝓇𝓈𝒾𝓋𝑒',
      tag: 'Lembut & Elegan',
      desc: 'Gaya cursive memberikan tampilan yang lebih lembut dan elegan.',
      preview: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸',
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: '𝔊𝔬𝔱𝔥𝔦𝔠',
      tag: 'Dark & Klasik',
      desc: 'Cocok untuk nickname, profil, desain bertema dark, dan teks dekoratif.',
      preview: '𝔗𝔲𝔩𝔦𝔰𝔞𝔫 𝔄𝔢𝔰𝔱𝔥𝔢𝔱𝔦𝔠',
      color: 'from-purple-600 to-indigo-700',
    },
    {
      title: '𝚃𝚎𝚔𝚜 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎',
      tag: 'Mesin Tik & Kode',
      desc: 'Gaya monospace memberikan tampilan seperti teks mesin atau kode.',
      preview: '𝚃𝚞𝚕𝚒𝔰𝚊𝚗 𝙰𝚎𝚜𝚝𝚑𝚎𝚝𝚒𝚌',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'ⓑⓤⓑⓑⓛⓔ',
      tag: 'Cute & Unik',
      desc: 'Gaya bubble cocok untuk nama, bio, dan teks pendek yang ingin terlihat berbeda.',
      preview: 'Ⓣⓤⓛⓘⓢⓐⓝ Ⓐⓔⓢⓣⓗⓔⓣⓘⓒ',
      color: 'from-teal-400 to-emerald-600',
    },
    {
      title: 'ˢᵐᵃˡˡ ᶜᵃᵖˢ',
      tag: 'Minimal & Modern',
      desc: 'Small caps dapat memberikan tampilan yang lebih minimal dan modern.',
      preview: 'ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ',
      color: 'from-violet-500 to-purple-600',
    },
  ];

  const exploreLinks = [
    {
      title: 'Font & Tulisan',
      desc: 'Temukan berbagai font aesthetic, huruf keren, tulisan unik, dan gaya Unicode untuk digunakan dalam berbagai situasi.',
      href: '/font/huruf-keren',
      icon: Sparkles,
    },
    {
      title: 'Platform',
      desc: 'Cari gaya tulisan yang cocok untuk Instagram, TikTok, WhatsApp, Facebook, Discord, dan platform lainnya.',
      href: '/platform/instagram',
      icon: Share2,
    },
    {
      title: 'Game',
      desc: 'Buat nickname dan username yang lebih menarik untuk berbagai game.',
      href: '/game/free-fire',
      icon: Gamepad2,
    },
    {
      title: 'Simbol',
      desc: 'Tambahkan simbol, tanda dekoratif, emoji-style text, dan karakter khusus ke tulisanmu.',
      href: '/simbol',
      icon: Layers,
    },
  ];

  return (
    <section id="seo-guide" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Article Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400 inline-flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            Panduan & Informasi Lengkap
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins tracking-tight leading-tight">
            Tulisan Aesthetic — Generator Tulisan Keren & Font Aesthetic
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Buat tulisan aesthetic, font keren, dan teks unik secara gratis tanpa perlu mengunduh atau memasang aplikasi. Ketik teks yang kamu inginkan, pilih gaya yang paling cocok, lalu langsung copy paste ke Instagram, TikTok, WhatsApp, game, bio, username, caption, atau platform lainnya.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Dengan <strong className="text-purple-600 dark:text-pink-400 font-semibold">Tulisan Aesthetic</strong>, kamu bisa mengubah teks biasa menjadi berbagai gaya menggunakan karakter Unicode. Coba berbagai model tulisan seperti bold, italic, cursive, gothic, bubble, small caps, dan banyak gaya lainnya.
          </p>
        </div>

        {/* Section: Pilih Gaya Tulisan Favoritmu & Live Copy Showcase */}
        <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
                Pilih Gaya Tulisan Favoritmu
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Setelah memasukkan teks, kamu akan melihat berbagai variasi tulisan yang bisa langsung digunakan. Tidak perlu download font atau menginstal aplikasi.
              </p>
            </div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-md transition-transform active:scale-95 shrink-0 self-start md:self-auto"
            >
              <Zap className="w-4 h-4" />
              Ke Generator Teks
            </a>
          </div>

          {/* Table of Examples */}
          <div className="mt-8 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Contoh Hasil Konversi Instan:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {sampleStyles.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-3 group hover:border-purple-500/40 transition-colors"
                >
                  <div>
                    <span className="text-xs font-semibold text-purple-600 dark:text-pink-400 block mb-1">
                      {item.label}
                    </span>
                    <span className="text-base font-medium text-slate-900 dark:text-white font-mono break-all">
                      {item.text}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(item.text, item.id)}
                    className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 hover:bg-purple-600 hover:text-white dark:hover:bg-pink-600 dark:hover:text-white transition-all shrink-0"
                    title="Salin gaya"
                  >
                    {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
              Tinggal pilih gaya yang kamu suka dan tekan Copy.
            </p>
          </div>
        </div>

        {/* 2-Column Section: Apa Itu & Cara Buat Tanpa Download */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Apa Itu Tulisan Aesthetic? */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400 flex items-center justify-center mb-6">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Tulisan Aesthetic?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Tulisan aesthetic adalah teks yang dibuat dengan karakter dan gaya visual yang berbeda dari tulisan biasa. Gaya ini sering digunakan untuk membuat nama, bio, caption, username, nickname game, dan profil terlihat lebih menarik.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Tulisan aesthetic yang dibuat di generator biasanya menggunakan karakter Unicode, bukan file font yang harus diinstal di perangkat.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-purple-700 dark:text-pink-300">
                Karena itu, hasilnya bisa langsung disalin dan ditempel ke berbagai aplikasi atau website yang mendukung karakter tersebut.
              </p>
            </div>
          </div>

          {/* Card 2: Buat Tulisan Keren Tanpa Download */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Buat Tulisan Keren Tanpa Download
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Tidak perlu mencari dan menginstal font satu per satu. Dengan generator Tulisan Aesthetic, prosesnya cukup sederhana:
              </p>
              <ol className="mt-4 space-y-3">
                {[
                  'Ketik teks yang ingin kamu ubah.',
                  'Pilih gaya tulisan yang kamu suka.',
                  'Copy hasilnya.',
                  'Paste ke platform pilihanmu.',
                ].map((step, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium">
                    <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
                Kamu bisa mencoba beberapa gaya sebelum menentukan tulisan yang paling cocok.
              </p>
            </div>
          </div>

        </div>

        {/* Section: Platform Specific Guides (Instagram, TikTok/WA, Gaming) */}
        <div className="mt-14 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Penggunaan Tulisan Aesthetic di Media Sosial & Game
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Sesuaikan gaya teks unik untuk setiap platform favoritmu secara mudah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Instagram */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:border-pink-500/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    Instagram
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ingin membuat bio Instagram terlihat lebih menarik? Gunakan font dan simbol yang sesuai dengan gaya profilmu.
                </p>
                <div className="mt-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Kamu bisa membuat:</span>
                  <ul className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                    <li>Nama Instagram & Bio</li>
                    <li>Caption & Highlight</li>
                    <li>Deskripsi profil & Teks dekoratif</li>
                  </ul>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400 block font-sans">Contoh:</span>
                  {igExamples.map((ex) => (
                    <div key={ex.id} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 font-mono text-sm font-medium text-pink-600 dark:text-pink-400">
                      <span>{ex.text}</span>
                      <button
                        onClick={() => handleCopy(ex.text, ex.id)}
                        className="text-slate-400 hover:text-purple-600 dark:hover:text-pink-400 p-1"
                      >
                        {copiedId === ex.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TikTok, WA, Social Media */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:border-emerald-500/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    TikTok & WhatsApp
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Tulisan unik juga bisa digunakan untuk berbagai platform lain. Kamu dapat membuat teks untuk TikTok, WhatsApp, Facebook, Discord, dan media sosial lainnya.
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Gunakan gaya yang sederhana untuk teks yang mudah dibaca atau pilih gaya dekoratif untuk nama dan profil.
                </p>
                <div className="mt-5 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Namun, tidak semua karakter Unicode didukung dengan cara yang sama oleh setiap platform. Jika sebuah karakter muncul sebagai kotak, coba gunakan gaya tulisan lainnya.
                  </span>
                </div>
              </div>
            </div>

            {/* Nickname & Game */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:border-purple-500/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    Nickname Game
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Banyak pemain menggunakan tulisan unik untuk membuat nickname mereka lebih mudah dikenali.
                </p>
                <div className="mt-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Dapat digunakan untuk:</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Nickname game, Username, Clan name, Profile name, Bio pemain, Status.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400 block font-sans">Contoh Nickname:</span>
                  {gameExamples.map((ex) => (
                    <div key={ex.id} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-950 font-mono text-xs font-medium text-purple-600 dark:text-pink-400">
                      <span>{ex.text}</span>
                      <button
                        onClick={() => handleCopy(ex.text, ex.id)}
                        className="text-slate-400 hover:text-purple-600 dark:hover:text-pink-400 p-1"
                      >
                        {copiedId === ex.id ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section: Pilihan Gaya Tulisan yang Bisa Kamu Coba */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Pilihan Gaya Tulisan yang Bisa Kamu Coba
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Tidak semua orang membutuhkan gaya yang sama. Karena itu, Tulisan Aesthetic menyediakan berbagai kategori untuk kebutuhan berbeda.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {styleCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:shadow-xl hover:border-purple-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-extrabold text-slate-900 dark:text-white font-mono">
                      {cat.title}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-pink-400 border border-purple-500/20">
                      {cat.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between font-mono text-sm">
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{cat.preview}</span>
                  <button
                    onClick={() => handleCopy(cat.preview, `cat-${idx}`)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 dark:hover:text-pink-400"
                    title="Copy sample"
                  >
                    {copiedId === `cat-${idx}` ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2-Column Technical Comparison: Tulisan Aesthetic vs Font Biasa & Compatibility */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 via-slate-900/5 to-pink-900/10 dark:from-purple-950/40 dark:to-slate-900/80 border border-purple-500/20 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
              Tulisan Aesthetic vs Font Biasa
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Ada perbedaan penting antara Unicode text dan font yang sebenarnya.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Font biasa adalah jenis tampilan huruf yang digunakan oleh perangkat atau aplikasi untuk merender karakter. Jika kamu mengubah font di aplikasi desain, bentuk visualnya berubah, tetapi teks dasarnya tetap sama.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Generator tulisan aesthetic bekerja dengan karakter Unicode tertentu. Karena karakter tersebut merupakan bagian dari teks, hasilnya dapat dicopy dan paste ke tempat lain tanpa harus menginstal file font.
            </p>
            <p className="mt-4 text-xs sm:text-sm text-purple-700 dark:text-pink-300 font-semibold italic">
              Itulah sebabnya generator seperti ini cocok untuk bio, username, nickname, caption, dan profil.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Kenapa Tulisan Tidak Selalu Terlihat Sama?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Karakter Unicode tidak selalu didukung dengan tampilan yang sama di setiap perangkat dan aplikasi.
            </p>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-4 mb-2">Beberapa kemungkinan yang bisa terjadi:</span>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Karakter tidak didukung oleh versi OS lama.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Tulisan terlihat sedikit berbeda di Android vs iOS.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Sebagian karakter berubah menjadi kotak [?].</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Platform membatasi simbol atau karakter khusus tertentu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Game atau aplikasi memiliki batasan panjang username.</span>
              </li>
            </ul>
            <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
              Jika hasilnya tidak tampil dengan benar, pilih gaya lain yang menggunakan karakter yang lebih umum.
            </p>
          </div>

        </div>

        {/* Section: Jelajahi Tulisan dan Font Aesthetic */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Jelajahi Tulisan dan Font Aesthetic
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Selain generator utama, kamu juga bisa menjelajahi berbagai kategori tulisan sesuai kebutuhan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-pink-400 group-hover:translate-x-1 transition-transform">
                    <span>Jelajahi Kategori</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Section: Cara Memilih Tulisan Aesthetic yang Bagus */}
        <div className="mt-16 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
              Cara Memilih Tulisan Aesthetic yang Bagus
            </h2>
          </div>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Tulisan yang paling keren belum tentu menjadi pilihan terbaik. Untuk nama atau bio, pilih gaya yang tetap mudah dibaca.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <strong className="text-purple-600 dark:text-pink-400 font-semibold block mb-1">Untuk Bio:</strong>
              <span className="text-sm text-slate-600 dark:text-slate-300">Gunakan gaya sederhana dan jangan terlalu banyak simbol.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <strong className="text-purple-600 dark:text-pink-400 font-semibold block mb-1">Untuk Username:</strong>
              <span className="text-sm text-slate-600 dark:text-slate-300">Pilih karakter yang mudah dikenali dan tidak terlalu rumit.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <strong className="text-purple-600 dark:text-pink-400 font-semibold block mb-1">Untuk Nickname Game:</strong>
              <span className="text-sm text-slate-600 dark:text-slate-300">Periksa apakah game menerima karakter yang digunakan.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <strong className="text-purple-600 dark:text-pink-400 font-semibold block mb-1">Untuk Caption:</strong>
              <span className="text-sm text-slate-600 dark:text-slate-300">Gunakan dekorasi secukupnya agar isi caption tetap mudah dibaca.</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 italic text-center">
            Tujuan utama tulisan aesthetic adalah membuat teks terlihat berbeda tanpa menghilangkan fungsinya sebagai teks.
          </p>
        </div>

        {/* Final Callout Banner: Mulai Buat Tulisan Aesthetic */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins">
            Mulai Buat Tulisan Aesthetic
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-purple-100">
            Tidak perlu bingung mencari font satu per satu. Ketik teksmu di generator Tulisan Aesthetic, pilih gaya favorit, lalu copy hasilnya.
          </p>
          <p className="mt-2 text-sm text-purple-200">
            Coba beberapa gaya sampai menemukan tulisan yang paling sesuai dengan profil, username, bio, caption, atau nickname kamu.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#hero"
              className="px-8 py-4 rounded-2xl bg-white text-purple-700 font-bold text-base shadow-xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95"
            >
              Mulai Konversi Teks Gratis
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 text-xs sm:text-sm font-medium tracking-wide text-purple-100">
            Tulisan Aesthetic — buat teks biasa jadi lebih menarik.
          </div>
        </div>

      </div>
    </section>
  );
}
