'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, ArrowUp } from 'lucide-react';

export function ValorantCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-rose-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="inline-flex p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 mb-6">
            <Crosshair className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-poppins">
            Dapatkan Riot ID Valorant Keren Sekarang!
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Buat nickname Valorant idamanmu dengan gaya clean ala Radiant pro player. Salin secara instan dan pasang di akun Riot Games kamu!
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold transition-all shadow-lg shadow-rose-600/25 hover:shadow-rose-600/40 hover:-translate-y-0.5"
          >
            <span>Kembali ke Generator Valorant</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
