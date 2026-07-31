'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers } from 'lucide-react';

export const SymbolsUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Mengapa Simbol Unicode Dapat Digunakan di Mana Saja?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis standar Unicode internasional dan kompatibilitas lintas perangkat & aplikasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-purple-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Apa Itu Simbol Unicode?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unicode adalah standar industri pengkodean karakter global yang memberikan nomor unik untuk setiap simbol, emotikon, dan karakter khusus di seluruh bahasa dunia agar dikenali oleh semua sistem komputer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-pink-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Mengapa Bekerja di Semua Aplikasi?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Karena Android, iOS, Windows, dan web browser modern mendukung standar pengkodean UTF-8, simbol yang Anda salin bukan berupa berkas gambar, melainkan karakter teks murni yang sah dan ringan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-cyan-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Kompatibilitas Lintas Perangkat
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Simbol bintang, hati, mahkota, dan kaomoji dapat tampil secara konsisten saat dilihat di smartphone, laptop, maupun game (Free Fire, MLBB, PUBG, Roblox).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
