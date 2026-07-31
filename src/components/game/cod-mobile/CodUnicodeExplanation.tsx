'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers } from 'lucide-react';

export const CodUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Mengapa Karakter Unicode Bekerja di COD Mobile?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis mengapa font aesthetic dan simbol militer dapat tampil sempurna di Activision CODM engine.
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
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-orange-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Dukungan Standar Unicode Internasional
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Font aesthetic pada generator kami menggunakan kode titik (Code Points) dalam standar Unicode Universal yang secara resmi didukung oleh sistem Android & iOS tanpa perlu mengubah sistem HP.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 inline-block mb-4 text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Simbol Militer & Dekoratif Aman
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Karakter dekoratif seperti tengkorak (💀), target (🎯), kanji Jepang (乂), dan kurung taktis diproses secara sah oleh engine UTF-8 CODM tanpa melanggar aturan ToS.
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
              Kompatibilitas Lintas Perangkat (Cross-Device)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Nickname yang dihasilkan akan langsung tampil konsisten dan tegas baik di layar smartphone Android, iPhone, iPad, maupun emulator resmi GameLoop.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
