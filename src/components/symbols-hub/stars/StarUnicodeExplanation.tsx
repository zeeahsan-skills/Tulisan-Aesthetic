'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers } from 'lucide-react';

export const StarUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Memahami Simbol Bintang Unicode
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis perbedaan simbol teks Unicode vs emoji bintang serta garansi kompatibilitas perangkat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              Apa Itu Simbol Bintang Unicode?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simbol bintang Unicode (seperti ★, ☆, ✦, ✧) adalah karakter teks murni berbasis pengkodean titik standar internasional yang diperlakukan seperti huruf abjad biasa oleh komputer dan smartphone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-yellow-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Beda Emoji Bintang vs Simbol Unicode
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Emoji bintang (seperti ⭐, 🌟) adalah grafik berwarna yang gambarnya dipengaruhi oleh font bawaan vendor (Apple/Google). Sedangkan simbol Unicode (★, ☆) selalu mengikuti warna teks utama dan tidak akan pecah.
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
              Kompatibilitas Lintas Perangkat
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Seluruh 150+ simbol bintang di direktori ini aman digunakan di Android, iOS, Windows, macOS, Linux, serta seluruh platform game & sosial media tanpa risiko kotak kosong (?).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
