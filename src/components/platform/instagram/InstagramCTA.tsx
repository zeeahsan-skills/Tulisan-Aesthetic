'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp } from 'lucide-react';

export function InstagramCTA() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/30 via-pink-500/30 to-rose-500/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-pink-300 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>100% Free & Unlimited</span>
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins leading-tight">
            Create Stylish{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Instagram Fonts Now
            </span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ubah profil Instagram Anda menjadi estetik, profesional, dan menarik dalam hitungan detik gratis tanpa aplikasi.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToTop}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white font-bold text-lg shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Generate Instagram Fonts</span>
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
