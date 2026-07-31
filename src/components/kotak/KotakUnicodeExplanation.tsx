'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Square, Info, Cpu } from 'lucide-react';

export function KotakUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Font Kotak (Enclosed Squared) Unicode
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui teknologi pemetaan karakter Enclosed Alphanumeric Supplement di balik bingkai kotak persegi.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: What are Square Unicode characters? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Square className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Karakter Font Kotak (Enclosed Squared) Unicode?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Font Kotak Unicode</strong> adalah kumpulan karakter dari blok <em>Enclosed Alphanumeric Supplement</em> (<code className="font-mono bg-cyan-500/10 px-2 py-0.5 rounded text-cyan-600 dark:text-cyan-400">U+1F130</code> hingga <code className="font-mono bg-cyan-500/10 px-2 py-0.5 rounded text-cyan-600 dark:text-cyan-400">U+1F149</code> untuk 🄐-🅩 dan <code className="font-mono bg-cyan-500/10 px-2 py-0.5 rounded text-cyan-600 dark:text-cyan-400">U+1F170</code> hingga <code className="font-mono bg-cyan-500/10 px-2 py-0.5 rounded text-cyan-600 dark:text-cyan-400">U+1F189</code> untuk 🅰-🆉). Karakter ini membingkai setiap huruf latin di dalam sebuah persegi transparan atau kotak hitam solid.
            </p>
          </motion.div>

          {/* Card 2: Difference between Unicode Enclosed Characters vs Normal Fonts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Perbedaan Unicode Karakter Kotak vs Font Biasa
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Banyak pengguna mengira huruf kotak dihasilkan oleh desain font khusus yang dipasang di aplikasi:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Font Biasa (Standard Typography)</strong>: Memerlukan file font khusus (.ttf). Saat Anda mengopi teks biasa ke dalam game, game akan menampilkannya dengan font bawaan game tersebut.
                </li>
                <li>
                  <strong>Karakter Enclosed Unicode (Generator Kami)</strong>: Setiap huruf kotak merupakan <em>simbol teks tersendiri</em> yang tersimpan di konsorsium Unicode. Ketika disalin ke game Free Fire, Discord, atau TikTok, bingkai kotaknya <strong>tetap bertahan 100%</strong>!
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
              Karakter Enclosed Squared Unicode didukung resmi oleh semua perangkat modern termasuk Android, iPhone (iOS), Windows, macOS, serta platform media sosial & game seperti Free Fire, Mobile Legends, Discord, TikTok, WhatsApp, dan Facebook.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
