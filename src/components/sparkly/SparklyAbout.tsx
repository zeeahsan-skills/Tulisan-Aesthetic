'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Wand2, ShieldCheck } from 'lucide-react';

export function SparklyAbout() {
  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Apa Itu Sparkly Font?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Mengenal konsep tipografi berkilau, glitter stardust Unicode, dan keunggulan visual font aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-teal-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Efek Glitter & Stardust
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sparkly font memadukan karakter tipografi elegan (seperti cursive, small caps, dan bold) dengan ornamen kilau bintang Unicode (✧･ﾟ:*, ੈ✩‧₊˚, ⋆⁺₊⋆) untuk memberikan efek berkilauan yang memikat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-pink-400">
              <Wand2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Sentuhan Magis Coquette
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sangat digemari di Pinterest dan TikTok untuk tema coquette, fairy core, dan dreamcore dengan hiasan pita renda (୨୧), sayap malaikat (˚ʚ♡ɞ˚), dan bulan sabit malam (☾).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-amber-400">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Bukan File Font Biasa
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tidak memerlukan instalasi file font TTF/OTF. Generator ini menghasilkan teks Unicode UTF-8 murni yang dapat disalin dan ditempel di mana saja secara instan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Universal & Ringan
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tampil konsisten di smartphone Android, iPhone iOS, laptop Windows, dan macOS tanpa risiko font rusak atau teks tidak terbaca oleh pengikut Anda.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
