'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, Sparkles } from 'lucide-react';

export const HeartUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Panduan Teknis Simbol Hati & Unicode
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Pelajari perbedaan teknis antara karakter teks hati Unicode, emoji hati grafis, dan tips dekorasi teks.
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
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-pink-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Karakter Teks Unicode UTF-8
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simbol hati seperti ♡ (U+2661) dan ♥ (U+2665) adalah karakter tipografi murni standar Unicode. Karakter ini menyesuaikan warna dan ukuran font di editor Anda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-rose-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Simbol Hati vs Emoji Hati
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Emoji hati (❤️, 💙, 🤍) ditampilkan sebagai gambar warna-warni oleh sistem OS perangkat. Sedangkan simbol teks ♡/♥ menyatu sempurna dengan gaya teks aesthetic.
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
              Dukungan Semua Perangkat
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Semua simbol hati di halaman ini kompatibel di Android, iPhone, Windows, macOS, serta aplikasi media sosial (Instagram, TikTok, WhatsApp, Discord, X).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Estetika Simetris & Border
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Untuk estetika terbaik, gunakan simbol hati secara simetris sebagai pembuka & penutup teks (contoh: ♡ NAMA ♡) atau kombinasikan dengan simbol pita (౨ৎ).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
