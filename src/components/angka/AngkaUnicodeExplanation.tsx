'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Binary, Info, Cpu } from 'lucide-react';

export function AngkaUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Pengetahuan Unicode
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Memahami Gaya Angka Unicode (Circled & Mathematical Digits)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ketahui teknologi pemetaan digit Unicode di balik angka lingkaran dan nomor tebal estetik.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          
          {/* Card 1: What are Unicode number styles? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Binary className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Apa Itu Gaya Angka Unicode?
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <strong>Gaya Angka Unicode</strong> adalah deretan simbol digit khusus dari blok <em>Enclosed Alphanumerics</em> (<code className="font-mono bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400">U+2460</code> hingga <code className="font-mono bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400">U+2469</code> untuk ①-⑨) dan <em>Mathematical Alphanumeric Symbols</em> (<code className="font-mono bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400">U+1D7CE</code> hingga <code className="font-mono bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400">U+1D7D7</code> untuk 𝟭-𝟵). Simbol digit ini dibingkai atau ditebalkan secara bawaan.
            </p>
          </motion.div>

          {/* Card 2: Difference between Unicode numbers vs regular digits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Perbedaan Unicode Numbers vs Digit Angka Biasa (0-9)
              </h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              <p>
                Banyak pengguna tidak menyadari perbedaan antara digit biasa dan angka Unicode:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Digit Biasa (0-9 ASCII)</strong>: Ditampilkan dengan bentuk standar tergantung font bawaan aplikasi. Jika disalin ke bio Instagram, bentuknya tidak berubah.
                </li>
                <li>
                  <strong>Unicode Digits (Generator Kami)</strong>: Memiliki kode karakter independen unik. Ketika disalin ke Game ID Free Fire, Discord, atau TikTok, bentuk lingkarannya (①) atau ketebalannya (𝟭) <strong>tetap bertahan 100%</strong>!
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
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                Kompatibilitas Lintas Perangkat
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Simbol digit Unicode didukung resmi oleh semua sistem operasi termasuk Android, iOS (iPhone/iPad), Windows, macOS, serta aplikasi sosial media dan game online terpopuler seperti Free Fire, Mobile Legends, Discord, TikTok, WhatsApp, dan Facebook.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
