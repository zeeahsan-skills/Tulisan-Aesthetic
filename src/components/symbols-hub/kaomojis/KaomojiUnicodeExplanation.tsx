'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Layers, Smile } from 'lucide-react';

export const KaomojiUnicodeExplanation: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Mengenal Seni Emotikon Kaomoji Jepang
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Penjelasan teknis seni emotikon teks Kaomoji, bedanya dari emoji biasa, dan kompatibilitas Unicode.
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
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Apa Itu Kaomoji?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Kaomoji (Kao = wajah, Moji = karakter) adalah gaya emotikon Jepang yang dibaca secara tegak tanpa miringkan kepala, dibuat dengan mengombinasikan karakter huruf, angka, dan aksen khusus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-cyan-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Beda Kaomoji vs Emoji
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Emoji adalah ikon gambar berwarna fixed-size (😀). Sedangkan Kaomoji disusun dari karakter teks murni sehingga bebas diubah warna font, ukuran, dan diselipkan di tengah kalimat.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-pink-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Standar Unicode Internasional
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Semua karakter pembentuk Kaomoji (seperti Katakana ﾂ, huruf Cyrillic, dan simbol matematika) didukung secara internasional dalam standar UTF-8.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-4 text-amber-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Dukungan Lintas Platform
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Kaomoji dapat dikirimkan dan dibaca secara sempurna melalui obrolan WhatsApp, bio Instagram, caption TikTok, Discord, Telegram, hingga nickname game online.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
