'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers } from 'lucide-react';

export const CrownUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Memahami Simbol Mahkota & Kekaisaran Unicode
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis tentang pengkodean simbol mahkota Unicode vs emoji serta garansi kompatibilitas perangkat.
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
              Simbol Mahkota Unicode Teks
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simbol mahkota catur (seperti ♛, ♔, ♚, ♕) adalah titik kode (Code Points) dalam standar Unicode Universal yang diperlakukan sebagai karakter teks murni sehingga warnanya secara otomatis mengikuti gaya teks Anda.
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
              Emoji Mahkota vs Simbol Teks
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Emoji mahkota (seperti 👑, 👸, 🤴) dirender sebagai icon berwarna berukuran tetap. Sedangkan simbol mahkota catur (♛, ♔) merupakan karakter vektor ringan yang sangat fleksibel untuk disusun dengan nama.
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
              Seluruh 150+ simbol mahkota dan kekaisaran di halaman ini dapat dirender dengan sempurna di Android, iOS, Windows, macOS, serta aplikasi media sosial dan game (FF, MLBB, PUBG, Roblox).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
