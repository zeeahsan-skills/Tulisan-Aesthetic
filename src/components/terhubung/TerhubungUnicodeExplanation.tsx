'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Info, Cpu } from 'lucide-react';

export function TerhubungUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-bold uppercase tracking-wider text-fuchsia-600 dark:text-fuchsia-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Font Terhubung (Connected Script) Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui teknologi pemetaan karakter Mathematical Script di balik tulisan sambung estetik.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: What are connected Unicode fonts? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Font Terhubung (Connected Script) Unicode?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Font Terhubung Unicode</strong> adalah deretan karakter alfabet khusus dari blok <em>Mathematical Alphanumeric Symbols</em> (<code className="font-mono bg-fuchsia-500/10 px-2 py-0.5 rounded text-fuchsia-600 dark:text-fuchsia-400">U+1D49C</code> hingga <code className="font-mono bg-fuchsia-500/10 px-2 py-0.5 rounded text-fuchsia-600 dark:text-fuchsia-400">U+1D537</code>). Karakter ini dirancang secara khusus oleh Konsorsium Unicode untuk meniru tulisan tangan latin sambung, kaligrafi halus, dan tanda tangan pribadi secara alami.
            </p>
          </motion.div>

          {/* Card 2: Difference between Unicode Cursive vs Installed Font (.ttf/.otf) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Perbedaan Unicode Tulisan Sambung vs File Font Aplikasi (.TTF / .OTF)
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Banyak orang bingung antara font yang diinstal di aplikasi komputer dan karakter Unicode:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>File Font Aplikasi (.TTF / .OTF)</strong>: Hanya bekerja jika aplikasi penerima menginstal file font yang sama. Jika Anda menyalin teks bertipe TTF ke Bio Instagram, tulisan akan berubah kembali menjadi huruf standar.
                </li>
                <li>
                  <strong>Unicode Script (Generator Kami)</strong>: Setiap karakter sambung adalah simbol teks murni. Ketika disalin ke aplikasi mana pun (Instagram, TikTok, WhatsApp), tulisan <strong>tetap berbentuk sambung indah</strong> tanpa perlu instal font!
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Platform Compatibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Kompatibilitas Lintas Perangkat
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Karakter Mathematical Script didukung 100% oleh sistem operasi HP Android, iPhone (iOS), Windows, macOS, serta aplikasi sosial media populer seperti Instagram, TikTok, WhatsApp, Telegram, Discord, Facebook, dan Halaman Web.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
