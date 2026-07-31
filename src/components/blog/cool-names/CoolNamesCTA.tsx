'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export const CoolNamesCTA: React.FC = () => {
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
            Buat Nama Keren Anda Sekarang
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Hasilkan ratusan variasi nama keren aesthetic dengan kombinasi simbol mahkota, bintang, dan font Unicode 1-klik copy gratis.
          </p>

          <Link
            href="/font/nama-keren"
            className="inline-flex items-center gap-2 py-4 px-8 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-400 hover:to-pink-400 text-white font-extrabold text-base shadow-xl shadow-purple-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>Coba Generator Nama Keren</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
