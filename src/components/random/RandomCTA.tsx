'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Dices, ArrowUp } from 'lucide-react';

export function RandomCTA() {
  const scrollToGenerator = () => {
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md mb-6">
            <Dices className="w-4 h-4 text-blue-400" />
            <span>Acak Teks Anda Sekarang</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins leading-tight">
            Eksplorasi Kombinasi Font Random Instan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Gunakan Font Random Generator gratis ini untuk menemukan kombinasi teks dan simbol terunik yang siap disalin ke Nickname Game, Bio IG, TikTok, dan WhatsApp.
          </p>

          <button
            onClick={scrollToGenerator}
            className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-extrabold text-base shadow-xl shadow-blue-500/20 transition-all inline-flex items-center gap-2"
          >
            <span>Kembali ke Generator</span>
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
