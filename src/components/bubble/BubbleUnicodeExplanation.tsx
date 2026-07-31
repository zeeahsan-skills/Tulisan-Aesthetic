'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Info, Cpu } from 'lucide-react';

export function BubbleUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Font Gelembung (Bubble) Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui teknologi standar di balik karakter teks lingkaran & gelembung.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: Enclosed Alphanumerics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400">
                <Circle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Karakter Enclosed Alphanumerics?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Huruf gelembung (Bubble Font) memanfaatkan blok standar internasional <strong>Enclosed Alphanumerics</strong> dalam standar Unicode (rentang U+2460 hingga U+24FF dan U+1F100 hingga U+1F1FF). Karakter ini membungkus setiap huruf latin biasa ke dalam lingkaran atau lingkaran tebal berwarna solid secara native.
            </p>
          </motion.div>

          {/* Card 2: Difference between Circled Outline vs Filled Circle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Perbedaan Bubble Outline (ⓐ) vs Dark Filled Circle (🅐)
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Terdapat dua variasi utama font gelembung yang populer:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Circled Outline (ⓐ, ⓑ, ⓒ)</strong>: Huruf berada di dalam lingkaran garis tipis dengan latar belakang bening. Ringan, rapi, dan memberikan kesan minimalis di Bio Instagram.
                </li>
                <li>
                  <strong>Dark Filled Circle (🅐, 🅑, 🅒)</strong>: Huruf putih di dalam lingkaran hitam pekat (negative circle). Menonjol secara kontras dan sangat cocok untuk judul pesan grup WhatsApp atau nickname game.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Compatibility */}
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
              Karena karakter gelembung sudah menjadi bagian resmi dari konsorsium Unicode global, Anda <strong>tidak perlu mengunduh keyboard atau font khusus</strong>. Teks yang disalin dari generator ini dapat terbaca sempurna di semua HP iOS (iPhone/iPad), Android, Mac, Windows PC, serta aplikasi populer seperti Instagram, TikTok, WhatsApp, Discord, dan Roblox.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
