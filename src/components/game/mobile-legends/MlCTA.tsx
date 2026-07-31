'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';

export const MlCTA: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-indigo-950/60 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-slate-950/80 border border-indigo-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md"
        >
          <div className="p-3.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 inline-block mb-4 text-indigo-400">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Create Your Mobile Legends Name Now
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Buat nickname Mobile Legends estetik pilihan Anda sekarang juga. 100% Gratis, kompatibel Moonton, dan instan!
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 py-4 px-8 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Generate ML Name</span>
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
