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

interface HurufKerenArticleSectionProps {
  onCopy?: (text: string) => void;
}

export function HurufKerenArticleSection({ onCopy }: HurufKerenArticleSectionProps) {
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
    { label: 'Normal', text: 'Huruf Keren', id: 'hk-normal' },
    { label: 'Bold', text: '𝗛𝘂𝗿𝘂𝗳 𝗞𝗲𝗿𝗲𝗻', id: 'hk-bold' },
    { label: 'Italic', text: '𝘏𝘶𝘳𝘶𝘧 𝘒𝘦𝘳𝘦𝘯', id: 'hk-italic' },
    { label: 'Cursive', text: '𝓗𝓾𝓻𝓾𝓯 𝓚𝓮𝓻𝓮𝓷', id: 'hk-cursive' },
    { label: 'Gothic', text: '𝔲𝔯𝔲𝔣 𝔎𝔢𝔯𝔢𝔫', id: 'hk-gothic' },
    { label: 'Monospace', text: '𝙷𝚞𝚛𝚞𝚏 𝙺𝚎𝚛𝚎𝚗', id: 'hk-mono' },
    { label: 'Bubble', text: 'Ⓗⓤⓡⓤⓕ Ⓚⓔⓡⓔⓝ', id: 'hk-bubble' },
    { label: 'Small Caps', text: 'ʜᴜʀᴜꜰ ᴋᴇʀᴇɴ', id: 'hk-smallcaps' },
  ];

  const igExamples = [
    { text: '✨ 𝓓𝓇𝑒𝒶𝓂 𝓑𝒾𝑔 ✨', id: 'hk-ig-1' },
    { text: '♡ 𝗟𝗶𝘃𝗲 𝗬𝗼𝘂𝗿 𝗟𝗶𝗳𝗲 ♡', id: 'hk-ig-2' },
  ];

  const gameExamples = [
    { text: '『𝙎𝙝𝙖𝙙𝙤𝙬』', id: 'hk-game-1' },
    { text: '꧁༺𝑲𝒊𝒏𝒈༻꧂', id: 'hk-game-2' },
    { text: '★彡[𝙋𝙡𝙖𝙮𝙚锐]彡★', id: 'hk-game-3' },
  ];

  const copyPasteExamples = [
    { label: 'Teks Biasa', text: 'Nama Saya', result: 'Nama Saya', id: 'cp-1' },
    { label: 'Hasil Cursive', text: 'Nama Saya', result: '𝓝𝓪𝓶𝓪 𝓢𝓪𝔂𝓪', id: 'cp-2' },
    { label: 'Hasil Bold', text: 'Nama Saya', result: '𝗡𝗮𝗺𝗮 𝗦𝗮𝘆𝗮', id: 'cp-3' },
    { label: 'Hasil Gothic', text: 'Nama Saya', result: '𝔑𝔞𝔪𝔞 𝔖𝔞𝔶𝔞', id: 'cp-4' },
  ];

  const styleCategories = [
    {
      title: '𝗕𝗼𝗹𝗱',
      tag: 'Tebal & Menonjol',
      desc: 'Gaya bold terlihat tegas dan cocok untuk nama, judul pendek, bio, atau teks yang ingin lebih menonjol.',
      preview: '𝗛𝘂𝗿𝘂𝗳 𝗞𝗲𝗿𝗲𝗻',
    },
    {
      title: '𝒞𝓊𝓇𝓈𝒾𝓋𝑒',
      tag: 'Lembut & Elegan',
      desc: 'Cursive memberikan tampilan yang lebih lembut dan elegan. Gaya ini cocok untuk nama, bio, dan teks pendek.',
      preview: '𝓗𝓾𝓻𝓾𝓯 𝓚𝓮𝓻𝓮𝓷',
    },
    {
      title: '𝔊𝔬𝔱𝔥𝔦𝔠',
      tag: 'Kuat & Klasik',
      desc: 'Gothic memiliki tampilan yang kuat dan klasik. Gaya ini sering cocok untuk nickname, username, dan profil dengan tema tertentu.',
      preview: '𝔲𝔯𝔲𝔣 𝔎𝔢𝔯𝔢𝔫',
    },
    {
      title: '𝚃𝚎𝚔𝚜 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎',
      tag: 'Mesin Tik & Kode',
      desc: 'Monospace memiliki tampilan seperti teks mesin atau kode dan memberikan kesan yang lebih sederhana.',
      preview: '𝙷𝚞𝚛𝚞𝚏 𝙺𝚎𝚛𝚎𝚗',
    },
    {
      title: 'ⓑⓤⓑⓑⓛⓔ',
      tag: 'Lingkaran & Cute',
      desc: 'Bubble menggunakan karakter berbentuk lingkaran sehingga cocok untuk nama, bio, dan teks pendek.',
      preview: 'Ⓗⓤⓡⓤⓕ Ⓚⓔⓡⓔⓝ',
    },
    {
      title: 'ˢᵐᵃˡˡ ᶜᵃᵖˢ',
      tag: 'Kecil & Minimalis',
      desc: 'Small caps memberikan tampilan yang lebih kecil dan minimalis.',
      preview: 'ʜᴜʀᴜꜰ ᴋᴇʀᴇɴ',
    },
  ];

  const faqItems = [
    {
      q: 'Apa itu huruf keren?',
      a: 'Huruf keren adalah teks yang menggunakan karakter atau gaya visual berbeda dari tulisan standar sehingga terlihat lebih unik dan menarik.',
    },
    {
      q: 'Apakah huruf keren bisa dicopy?',
      a: 'Ya. Hasil yang menggunakan karakter Unicode dapat dicopy dan paste ke platform yang mendukung karakter tersebut.',
    },
    {
      q: 'Apakah harus download font untuk membuat huruf keren?',
      a: 'Tidak. Generator Unicode dapat membuat teks bergaya tanpa mengharuskan kamu menginstal file font.',
    },
    {
      q: 'Apakah huruf keren bisa digunakan untuk Instagram?',
      a: 'Bisa untuk berbagai bagian yang mendukung karakter Unicode. Namun, dukungan karakter dapat berbeda tergantung pada fitur dan platform.',
    },
    {
      q: 'Apakah huruf keren bisa digunakan untuk game?',
      a: 'Bisa jika game tersebut menerima karakter yang digunakan. Setiap game dapat memiliki aturan username yang berbeda.',
    },
    {
      q: 'Mengapa hasil huruf keren menjadi kotak?',
      a: 'Biasanya karena perangkat atau aplikasi tidak mendukung karakter Unicode tertentu. Coba gunakan gaya lain yang lebih umum.',
    },
  ];

  const exploreLinks = [
    {
      title: 'Font & Tulisan',
      desc: 'Temukan berbagai gaya font aesthetic, tulisan unik, huruf keren, dan teks Unicode.',
      href: '/font/huruf-keren',
      icon: Sparkles,
    },
    {
      title: 'Platform',
      desc: 'Cari tulisan yang cocok untuk Instagram, TikTok, WhatsApp, Facebook, Discord, dan platform lainnya.',
      href: '/platform/instagram',
      icon: Share2,
    },
    {
      title: 'Game',
      desc: 'Buat nickname dan username yang lebih menarik untuk berbagai kebutuhan game.',
      href: '/free-fire',
      icon: Gamepad2,
    },
    {
      title: 'Simbol',
      desc: 'Tambahkan simbol, karakter khusus, dan dekorasi untuk melengkapi tulisanmu.',
      href: '/simbol',
      icon: Layers,
    },
  ];

  return (
    <section id="huruf-keren-guide" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Ambient Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Article Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400 inline-flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5" />
            Panduan Huruf Keren Online
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins tracking-tight leading-tight">
            Huruf Keren — Generator Huruf Keren Online
          </h1>
          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Buat huruf keren secara gratis dan langsung copy paste ke Instagram, TikTok, WhatsApp, Facebook, game, username, bio, atau caption. Cukup ketik teks yang kamu inginkan, pilih gaya yang paling cocok, lalu salin hasilnya.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Tidak perlu download font atau memasang aplikasi. Generator Huruf Keren menggunakan karakter Unicode untuk membuat berbagai tampilan teks yang unik dan menarik.
          </p>
        </div>

        {/* Section: Examples Showcase */}
        <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
                Contoh Huruf Keren
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Berikut beberapa contoh gaya yang bisa kamu coba secara instan:
              </p>
            </div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-md transition-transform active:scale-95 shrink-0 self-start md:self-auto"
            >
              <Zap className="w-4 h-4" />
              Ke Generator Huruf
            </a>
          </div>

          {/* Table of Examples */}
          <div className="mt-8 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
              Tinggal pilih gaya yang kamu suka dan tekan <strong>Copy</strong> untuk menyalinnya.
            </p>
          </div>
        </div>

        {/* 2-Column: Apa Itu & Cara Membuat */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Apa Itu Huruf Keren? */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400 flex items-center justify-center mb-6">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Huruf Keren?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Huruf keren adalah teks dengan tampilan yang berbeda dari tulisan biasa. Gaya ini dapat digunakan untuk membuat nama, username, bio, caption, nickname game, dan profil terlihat lebih unik.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Generator huruf keren biasanya menggunakan karakter Unicode untuk menghasilkan berbagai gaya teks. Jadi, hasilnya bukan gambar dan tidak membutuhkan file font untuk digunakan.
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-purple-700 dark:text-pink-300">
                Karena berbentuk karakter teks, hasilnya dapat langsung disalin dan ditempel pada platform yang mendukung karakter tersebut.
              </p>
            </div>
          </div>

          {/* Card 2: Cara Membuat Huruf Keren */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Cara Membuat Huruf Keren
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Membuat huruf keren tidak membutuhkan aplikasi tambahan. Kamu hanya perlu mengikuti beberapa langkah sederhana:
              </p>
              <ol className="mt-4 space-y-3">
                {[
                  'Ketik teks yang ingin kamu ubah.',
                  'Lihat berbagai gaya yang tersedia.',
                  'Pilih huruf yang paling kamu sukai.',
                  'Tekan Copy.',
                  'Paste hasilnya ke platform pilihanmu.',
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
                Kamu bisa mencoba beberapa gaya sebelum menentukan hasil akhir.
              </p>
            </div>
          </div>

        </div>

        {/* Section: Platform Guides (Instagram, TikTok/WA, Gaming) */}
        <div className="mt-14 space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Penggunaan Huruf Keren per Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Instagram */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md flex flex-col justify-between">
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
                  Huruf keren sering digunakan untuk membuat profil Instagram terlihat lebih menarik. Kamu dapat menggunakannya pada nama, bio, caption, dan teks pendek lainnya.
                </p>
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
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic">
                  Untuk bio Instagram, sebaiknya pilih gaya yang tetap mudah dibaca. Terlalu banyak karakter dekoratif dapat membuat informasi penting sulit dipahami.
                </p>
              </div>
            </div>

            {/* TikTok & WA */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md flex flex-col justify-between">
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
                  Selain Instagram, kamu juga bisa mencoba huruf keren untuk TikTok, WhatsApp, Facebook, Discord, dan platform lainnya.
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Gunakan gaya sederhana untuk nama atau teks yang perlu mudah dibaca. Untuk teks dekoratif, pilih gaya yang lebih unik.
                </p>
                <div className="mt-5 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Perlu diingat bahwa tidak semua karakter Unicode didukung dengan cara yang sama oleh setiap aplikasi. Jika hasilnya terlihat seperti kotak, coba gaya lainnya.
                  </span>
                </div>
              </div>
            </div>

            {/* Nickname Game */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md flex flex-col justify-between">
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
                  Huruf keren juga dapat digunakan untuk membuat username dan nickname game terlihat berbeda.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400 block font-sans">Contoh:</span>
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
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 italic">
                  Sebelum menggunakan nickname, pastikan karakter yang kamu pilih diterima oleh game tersebut.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Section: Jenis Huruf Keren */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Jenis Huruf Keren yang Bisa Kamu Coba
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Ada banyak gaya yang dapat digunakan untuk kebutuhan berbeda.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {styleCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
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
                    onClick={() => handleCopy(cat.preview, `cat-hk-${idx}`)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 dark:hover:text-pink-400"
                  >
                    {copiedId === `cat-hk-${idx}` ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Copy Paste Showcase */}
        <div className="mt-16 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
            Huruf Keren Bisa Di-Copy Paste
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Salah satu kelebihan generator huruf keren adalah hasilnya dapat disalin sebagai teks. Kamu tidak perlu screenshot atau menyimpan gambar. Setelah menemukan gaya yang cocok, tekan <strong>Copy</strong>, kemudian paste ke tempat yang kamu inginkan.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {copyPasteExamples.map((cp) => (
              <div key={cp.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block mb-1 font-sans">{cp.label}:</span>
                  <span className="text-base font-semibold font-mono text-slate-900 dark:text-white">{cp.result}</span>
                </div>
                <button
                  onClick={() => handleCopy(cp.result, cp.id)}
                  className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 hover:bg-purple-600 hover:text-white transition-all shrink-0"
                >
                  {copiedId === cp.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: Huruf Keren vs Font Biasa & Technical Notes */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 via-slate-900/5 to-pink-900/10 dark:from-purple-950/40 dark:to-slate-900/80 border border-purple-500/20 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
              Huruf Keren vs Font Biasa
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Huruf keren berbasis Unicode tidak sama dengan font biasa.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Font menentukan bagaimana karakter ditampilkan pada perangkat atau aplikasi. Jika kamu mengganti font dalam aplikasi desain, teks dasarnya tetap menggunakan karakter yang sama.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Pada generator Unicode, karakter teks dapat diganti dengan karakter Unicode lain yang memiliki tampilan berbeda. Karena itu, hasil generator dapat disalin dan ditempel sebagai teks tanpa perlu menginstal file font.
            </p>
            <p className="mt-4 text-xs sm:text-sm text-purple-700 dark:text-pink-300 font-semibold italic">
              Meski sering disebut “font keren”, hasil seperti ini lebih tepat dipahami sebagai teks bergaya menggunakan karakter Unicode.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Mengapa Huruf Keren Tidak Selalu Terlihat Sama?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Karakter Unicode tidak selalu didukung dengan cara yang sama di setiap perangkat, browser, dan aplikasi.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Karakter berubah menjadi kotak [?].</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Sebagian huruf tidak berubah.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Tampilan berbeda di perangkat lain.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Username ditolak oleh game.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>Platform tidak mendukung karakter tertentu.</span>
              </li>
            </ul>
            <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
              Jika hal tersebut terjadi, gunakan gaya huruf yang lebih sederhana.
            </p>
          </div>

        </div>

        {/* Section: Cara Memilih Huruf Keren yang Bagus */}
        <div className="mt-16 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
              Cara Memilih Huruf Keren yang Bagus
            </h2>
          </div>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Huruf yang paling dekoratif belum tentu menjadi pilihan terbaik. Pilih gaya berdasarkan tempat kamu akan menggunakannya.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <strong className="text-purple-600 dark:text-pink-400 font-semibold block mb-1">Untuk Bio:</strong>
              <span className="text-sm text-slate-600 dark:text-slate-300">Gunakan gaya yang sederhana dan mudah dibaca.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <strong className="text-purple-600 dark:text-pink-400 font-semibold block mb-1">Untuk Username:</strong>
              <span className="text-sm text-slate-600 dark:text-slate-300">Pilih karakter yang mudah dikenali.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <strong className="text-purple-600 dark:text-pink-400 font-semibold block mb-1">Untuk Nickname Game:</strong>
              <span className="text-sm text-slate-600 dark:text-slate-300">Pastikan game menerima karakter tersebut.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
              <strong className="text-purple-600 dark:text-pink-400 font-semibold block mb-1">Untuk Caption:</strong>
              <span className="text-sm text-slate-600 dark:text-slate-300">Gunakan dekorasi secukupnya agar isi caption tetap nyaman dibaca.</span>
            </div>
          </div>
        </div>

        {/* Section: Jelajahi Lebih Banyak Tulisan Keren */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Jelajahi Lebih Banyak Tulisan Keren
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
              Selain huruf keren, kamu juga bisa menemukan berbagai kategori tulisan di Tulisan Aesthetic.
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

        {/* Section: FAQ Huruf Keren */}
        <div className="mt-16 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
              FAQ Huruf Keren
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Pertanyaan yang sering diajukan seputar penggunaan generator huruf keren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Callout Banner: Mulai Buat Huruf Keren */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins">
            Mulai Buat Huruf Keren
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-purple-100">
            Sudah siap membuat tulisan yang berbeda? Ketik teksmu di Generator Huruf Keren, pilih gaya favorit, lalu copy hasilnya.
          </p>
          <p className="mt-2 text-sm text-purple-200">
            Gunakan hasilnya untuk nama, username, bio, caption, media sosial, atau nickname game.
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
            Buat teks biasa menjadi lebih menarik dengan Huruf Keren dari Tulisan Aesthetic.
          </div>
        </div>

      </div>
    </section>
  );
}
