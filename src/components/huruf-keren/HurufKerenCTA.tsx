'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';

export function HurufKerenCTA() {
  const scrollToGenerator = () => {
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>Siap Membuat Huruf Keren Anda?</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins leading-tight">
            Ubah Teks Anda Sekarang Juga
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Gunakan generator 50-style huruf keren secara gratis dan buat profil Instagram, WA, TikTok, serta game Anda tampil beda dan menarik.
          </p>

          <button
            onClick={scrollToGenerator}
            className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-base shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all inline-flex items-center gap-2"
          >
            <span>Kembali ke Generator</span>
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
