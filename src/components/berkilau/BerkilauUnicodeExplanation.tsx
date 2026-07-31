'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Info, Cpu } from 'lucide-react';

export function BerkilauUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Font Berkilau (Decorative Sparkle) Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui teknologi karakter hiasan Unicode (Miscellaneous Symbols & Dingbats) di balik efek glitter.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: Decorative Unicode Symbols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Simbol Dekoratif Unicode Berkilau
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Font Berkilau Unicode</strong> memanfaatkan simbol khusus dari blok <em>Miscellaneous Symbols and Arrows</em> dan <em>Dingbats</em> (<code className="font-mono bg-amber-500/10 px-2 py-0.5 rounded text-amber-600 dark:text-amber-400">U+2728</code> Sparkles, <code className="font-mono bg-amber-500/10 px-2 py-0.5 rounded text-amber-600 dark:text-amber-400">U+2727</code> White Four Pointed Star, <code className="font-mono bg-amber-500/10 px-2 py-0.5 rounded text-amber-600 dark:text-amber-400">U+22C6</code> Star Operator). Simbol ini menempel pada huruf untuk memberikan efek gemerlap alami.
            </p>
          </motion.div>

          {/* Card 2: Difference between Unicode Decoration vs Emojis */}
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
                Perbedaan Unicode Decorative Symbols vs Emoji Gambar
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Banyak pengguna mengira simbol bintang adalah emoji bergambar:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Emoji Gambar (Emoji Graphic)</strong>: Diproses sebagai ikon bergambar berwarna. Kadang tidak diizinkan oleh sistem game tertentu pada kolom nama profil.
                </li>
                <li>
                  <strong>Simbol Dekoratif Unicode (Generator Kami)</strong>: Dianggap sebagai karakter teks asli murni oleh konsorsium Unicode global. Diterima 100% di semua game online (Free Fire, Mobile Legends, Roblox) dan profil sosial media tanpa diblokir!
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
              Simbol dekoratif berkilau terintegrasi dalam semua font bawaan sistem operasi modern. Teks berkilau yang Anda buat dapat disalin dan terbaca sempurna di HP Android, iPhone (iOS), Windows, Mac, Instagram, TikTok, WhatsApp, Discord, dan Facebook.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
