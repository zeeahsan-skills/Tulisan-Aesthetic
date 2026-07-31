'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, Calculator } from 'lucide-react';

export const ArrowUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Memahami Simbol Panah Unicode & Navigasi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis tentang pengkodean simbol panah Unicode, panah matematika, vs emoji serta garansi kompatibilitas.
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
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-cyan-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Simbol Panah Unicode Teks
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simbol panah Unicode (seperti ➜, ➤, ➔, ➟) adalah karakter teks murni berbasis pengkodean UTF-8 yang warnanya menyesuaikan warna teks sekitarnya.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-teal-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Bedanya Simbol vs Emoji Panah
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Emoji panah (seperti ➡️, ⬆️, 🔄) dirender sebagai grafik berwarna fixed-size. Sedangkan simbol Unicode ➜/➤ dapat diubah warnanya via CSS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-blue-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Panah Navigasi & UI Design
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simbol panah navigasi (seperti 🠊, 🠈, 🠉, 🠋) sangat ideal dipakai sebagai indikator arah halaman web tanpa menambah beban ukuran berkas gambar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-indigo-400">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Panah Matematika & Logika
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simbol panah logika matematika (seperti →, ←, ↔, ⇒, ⇔) merupakan karakter standar dalam penulisan rumus ilmiah dan laporan teknis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
