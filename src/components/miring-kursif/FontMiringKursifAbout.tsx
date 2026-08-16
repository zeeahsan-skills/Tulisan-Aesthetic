'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Italic, CheckCircle2, Code2, Globe } from 'lucide-react';

export function FontMiringKursifAbout() {
  return (
    <section id="apa-itu-font-miring" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1 & 2: Apa Itu Font Miring & Font Kursif? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
              Konsep Dasar
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins leading-tight">
              Apa Itu Font Miring &amp; Font Kursif?
            </h2>
            
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>Font Miring (Italic Text)</strong> adalah gaya penulisan yang dimiringkan ke arah kanan dengan sudut tertentu. Dalam standar komputasi, font miring Unicode menggunakan karakter dari blok Mathematical Italic (seperti <em>𝐼𝑡𝑎𝑙𝑖𝑐</em> dan <em>𝘐𝘵𝑎𝘭𝘪𝘤</em>) untuk memberikan kesan tegas, elegan, dan resmi.
              </p>
              <p>
                <strong>Font Kursif (Cursive Script / Tulisan Sambung)</strong> merujuk pada gaya kaligrafi atau tulisan tangan di mana huruf-huruf tampak saling terhubung dengan lekukan halus (seperti <em>𝐻𝓊𝓇𝓊𝒻 𝒮𝒶𝓂𝒷𝓊𝓃ℊ</em>). Kursif memberikan nuansa pribadi, artistik, dan sangat estetik.
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {[
                'Memberikan kesan estetis, lembut, dan profesional di Bio media sosial.',
                'Dapat langsung disalin (copy) dan ditempel (paste) di Instagram, TikTok, WA, & Bio.',
                'Karakter Unicode permanen yang tidak hilang saat dikirim via chat.',
                '100% Gratis digunakan tanpa perlu menginstal font atau aplikasi.',
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-200 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3: Font Miring vs Font Kursif Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/40 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                <Italic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Perbandingan: Font Miring vs Font Kursif
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Perbedaan bentuk visual dan karakteristik utama
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-purple-600 dark:text-pink-400">Italic / Font Miring</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-semibold">𝐼𝑡𝑎𝑙𝑖𝑐 𝑆𝑒𝑟𝑖𝑓</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Kemiringan bersudut konsisten, mempertahankan bentuk huruf cetak standar. Cocok untuk istilah asing, kutipan, dan judul.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 border border-purple-500/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-purple-600 dark:text-pink-400">Cursive / Tulisan Sambung</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-semibold">𝐻𝓊𝓇𝓊𝒻 𝒮𝒶𝓂𝒷𝓊𝓃ℊ</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Lekukan kaligrafi menyerupai tulisan tangan mengalir. Sangat populer untuk Bio IG aesthetic, nama profil, dan ucapan manis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 11: Unicode Italic dan Script */}
        <div id="unicode-italic-dan-script" className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
              Pengetahuan Unicode
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Unicode Italic dan Script
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Bagaimana konsorsium Unicode mengodekan variasi miring dan tulisan tangan ke dalam standar dunia.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/30 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Mathematical Italic Range
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Karakter miring murni dipetakan dari rentang Unicode <code>U+1D434</code> hingga <code>U+1D467</code> (Mathematical Italic) serta <code>U+1D622</code> hingga <code>U+1D655</code> (Mathematical Sans-Serif Italic).
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Karena merupakan karakter Unicode mandiri, kemiringannya tidak akan berubah saat disalin ke dalam aplikasi polos yang tidak memiliki formatting richtext.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-purple-500/30 dark:border-purple-500/40 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-500">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  Mathematical Script Range
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Karakter kursif tulisan sambung berasal dari rentang Unicode <code>U+1D49C</code> hingga <code>U+1D4B5</code> (Mathematical Script) dan <code>U+1D4D0</code> hingga <code>U+1D4E9</code> (Mathematical Bold Script).
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Beberapa huruf script tertentu (seperti ℬ, ℰ, ℱ, ℋ, ℐ, ℒ, ℳ, ℛ, ℯ, ℊ, ℴ) berada pada blok Letterlike Symbols (U+2100) karena sejarah panjang penggunaannya dalam matematika.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
