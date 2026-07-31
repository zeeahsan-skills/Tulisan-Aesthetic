'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Info, Cpu } from 'lucide-react';

export function MemutarUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Font Memutar (Upside Down) Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui teknologi pemetaan karakter fonetik IPA di balik huruf terbalik.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: What is Upside Down Unicode text? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Teks Memutar (Upside Down) Unicode?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Teks Memutar Unicode</strong> memanfaatkan karakter khusus dari blok alfabet International Phonetics Association (IPA Extension) dan karakter matematik Unicode terbalik. Setiap huruf latin dipetakan ke pasangannya yang berbentuk terbalik 180° (seperti huruf <code className="font-mono bg-cyan-500/10 px-2 py-0.5 rounded text-cyan-600 dark:text-pink-400">a ➔ ɐ</code>, <code className="font-mono bg-cyan-500/10 px-2 py-0.5 rounded text-cyan-600 dark:text-pink-400">e ➔ ǝ</code>, <code className="font-mono bg-cyan-500/10 px-2 py-0.5 rounded text-cyan-600 dark:text-pink-400">h ➔ ɥ</code>).
            </p>
          </motion.div>

          {/* Card 2: Difference between Reversed Text vs Upside Down Text */}
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
                Perbedaan Reversed Text (Urutan Cermin) vs Upside Down (Terbalik 180°)
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Terdapat dua metode pemutaran teks yang sering digunakan secara bersamaan:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Reversed Text (Cermin Urutan)</strong>: Membalik urutan huruf dari huruf terakhir ke huruf pertama (contoh: <code className="font-mono bg-purple-500/10 px-2 py-0.5 rounded text-purple-600 dark:text-pink-400">Ahsan ➔ nashA</code>). Bentuk fisik huruf tidak berubah.
                </li>
                <li>
                  <strong>Upside Down (Terbalik 180°)</strong>: Membalik bentuk fisik huruf 180 derajat sekaligus membalik urutan string (contoh: <code className="font-mono bg-purple-500/10 px-2 py-0.5 rounded text-purple-600 dark:text-pink-400">Ahsan ➔ ɐɥsɐu</code>). Hasilnya teks terlihat benar-benar diputar balik ketika dibaca!
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Compatibility Notes */}
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
                Kompatibilitas Lintas Platform
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Karakter terbalik IPA telah terintegrasi dalam standar konsorsium Unicode global. Teks memutar yang Anda buat di situs ini dapat disalin dan langsung terbaca di semua perangkat iPhone (iOS), Android, Windows, Mac, serta aplikasi Instagram, TikTok, WhatsApp, Discord, Facebook, dan nickname game Free Fire & Roblox.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
