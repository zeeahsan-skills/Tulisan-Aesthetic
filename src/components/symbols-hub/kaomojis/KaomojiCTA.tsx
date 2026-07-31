'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Smile, ArrowRight } from 'lucide-react';

export const KaomojiCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-teal-950/60 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-teal-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-slate-950/80 border border-teal-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md"
        >
          <div className="p-3.5 rounded-full bg-teal-500/10 border border-teal-500/30 inline-block mb-4 text-teal-400">
            <Smile className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Copy Kaomoji Instantly
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Salin 500+ emotikon teks Jepang Kaomoji (◕‿◕) dan jelajahi ribuan kategori simbol unik lainnya untuk bio & obrolan Anda.
          </p>

          <Link
            href="/simbol"
            className="inline-flex items-center gap-2 py-4 px-8 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-500 hover:from-teal-300 hover:to-cyan-400 text-slate-950 font-extrabold text-base shadow-xl shadow-teal-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>Browse Kaomoji</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
