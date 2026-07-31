'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, Eye } from 'lucide-react';

export const EmojiUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Memahami Pengkodean Emoji Unicode
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis perbedaan emoji vs simbol Unicode teks, render visual antar platform, dan aksesibilitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-amber-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Emoji vs Simbol Teks
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Emoji (seperti 😀, ❤️, 🔥) adalah karakter grafik berwarna yang ilustrasinya dirender oleh font emoji sistem operasi. Sedangkan simbol teks (seperti ★, ♡) mengikuti warna teks biasa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-pink-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Kompatibilitas Platform
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Semua emoji disetujui oleh Unicode Consortium dan didukung secara universal oleh Android, iOS, Windows, macOS, Instagram, TikTok, WA, dan Discord.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-cyan-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Perbedaan Render Visual
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Setiap vendor HP (Apple, Google, Samsung, Microsoft) memiliki artwork ilustrasi emoji bawaan masing-masing, namun makna dasarnya tetap 100% konsisten.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-emerald-400">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Aksesibilitas (AA)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Karakter emoji Unicode dilengkapi standar nama deskripsi (Alt Label) sehingga ramah pembaca layar bagi penyandang disabilitas penglihatan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
