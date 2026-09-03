'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Crosshair, Sparkles } from 'lucide-react';

export function ValorantUnicodeExplanation() {
  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mb-4">
            Kompatibilitas Karakter & Simbol Valorant
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Memahami bagaimana sistem in-game Valorant menampilkan karakter Unicode, font estetis, dan simbol gaming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-rose-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Sistem Riot ID UTF-8
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Valorant menggunakan standar penamaan akun Riot ID global yang mendukung karakter alfabet internasional, katakana, nomor subscript, dan spasi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-amber-400">
              <Crosshair className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Tampil Jelas di Scoreboard
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Font bergaya Small Caps, double space, dan simbol taktis (//, ╳) dirender secara sempurna di papan skor Tab dan killfeed pertandingan tanpa tanda tanya.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              100% Aman dari Vanguard
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Mengubah nama via Riot ID resmi sepenuhnya mematuhi ToS Riot Games. Tidak ada modifikasi software atau file game, sehingga akun Anda tetap aman.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Estetika Pro Player VCT
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Pemain pro sering menggunakan variasi nama minimalis dengan pemisah unit agen untuk membedakan diri di turnamen dan streaming.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
