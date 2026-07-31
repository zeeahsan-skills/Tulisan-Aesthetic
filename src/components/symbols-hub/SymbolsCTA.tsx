'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';

export const SymbolsCTA: React.FC = () => {
  const scrollToSearch = () => {
    const el = document.getElementById('search-symbols-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-purple-950/60 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-slate-950/80 border border-purple-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md"
        >
          <div className="p-3.5 rounded-full bg-purple-500/10 border border-purple-500/30 inline-block mb-4 text-purple-400">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Find Your Favorite Symbols
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Temukan dan salin ribuan simbol Unicode, kaomoji, dan ornamen estetik sekarang juga. 100% Gratis, kompatibel universal, dan instan!
          </p>

          <button
            onClick={scrollToSearch}
            className="inline-flex items-center gap-2 py-4 px-8 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Browse Symbols</span>
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
