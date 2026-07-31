'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, Sparkles } from 'lucide-react';

export const FlowerUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Memahami Simbol Bunga Unicode & Dekorasi Teks
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis tentang pengkodean simbol bunga Unicode vs emoji serta tips dekorasi teks estetik.
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
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-rose-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Simbol Bunga Unicode Teks
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simbol bunga Unicode (seperti ✿, ❀, ❁, ❂, ❃) adalah karakter teks vektor murni berstandar UTF-8 yang warnanya menyesuaikan gaya teks sekitarnya.
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
              Bedanya Simbol vs Emoji Bunga
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Emoji bunga (seperti 🌸, 🌹, 🌻) dirender sebagai gambar grafik berwarna fixed-size. Sedangkan simbol Unicode ✿/❀ dapat diubah ukuran warnanya via CSS atau editor teks.
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
              Seluruh 150+ simbol bunga di direktori ini dijamin tampil rapi dan konsisten di Android, iOS, Windows, macOS, serta aplikasi media sosial dan messenger.
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
              Tips Dekorasi Teks Estetik
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Gunakan simbol bunga sebagai pembuka/penutup judul (✿ NAMA ✿) atau gunakan pembatas garis (🌸 ─── 🌸) agar tulisan terasa seimbang & tidak berlebihan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
