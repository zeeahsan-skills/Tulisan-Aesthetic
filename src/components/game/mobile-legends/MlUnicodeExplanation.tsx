'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, Terminal } from 'lucide-react';

export const MlUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Bagaimana Karakter Unicode Bekerja di Mobile Legends?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis mengapa font estetik dan simbol khusus dapat tampil sempurna di Moonton game engine.
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
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-indigo-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Dukungan Standar Unicode Internasional
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Font aesthetic pada generator kami bukanlah berkas file .ttf/.otf terpisah, melainkan kumpulan titik kode (Code Points) dalam standar Unicode Universal (seperti Mathematical Script & Gothic Fraktur) yang didukung oleh sistem Android & iOS.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Kompatibilitas Rendah Crash
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Moonton menggunakan sistem render teks berbasis UTF-8 yang memproses ribuan karakter khusus tanpa memicu masalah teknis (banned atau crash) karena karakter tersebut merupakan standar pengkodean teks global resmi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-amber-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Dukungan Ornamen & Simbol Dekoratif
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Karakter dekoratif seperti kanji Jepang (乂, 帝), mahkota (👑), dan pembatas garis tidak memengaruhi sistem Matchmaking atau registrasi akun MLBB, sehingga akun Anda 100% aman digunakan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
