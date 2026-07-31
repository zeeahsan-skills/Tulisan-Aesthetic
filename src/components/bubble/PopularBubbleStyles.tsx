'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Heart, Sparkles, Square, ArrowUpRight, Copy } from 'lucide-react';

interface PopularBubbleStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularBubbleStyles({ onCopy }: PopularBubbleStylesProps) {
  const popularBubbleCards = [
    {
      id: 'circle-font',
      title: 'Circle Font (Outline)',
      icon: Circle,
      preview: 'Ⓐⓗⓢⓐⓝ Ⓣⓤⓛⓘⓢⓐⓝ',
      desc: 'Style huruf dalam lingkaran garis tipis. Sangat ramah dibaca dan paling populer untuk caption IG.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'filled-circle',
      title: 'Filled Circle (Solid)',
      icon: Circle,
      preview: '🅐🅑🅒 🅢🅣🅨🅛🅘🅢Handling',
      desc: 'Huruf lingkaran hitam tebal menonjol (solid). Cocok untuk penekanan teks penting di pesan WA.',
      color: 'from-purple-600 to-indigo-700',
    },
    {
      id: 'bubble-outline',
      title: 'Bubble Outline',
      icon: Sparkles,
      preview: 'Ⓢⓣⓨⓛⓘⓢⓗ Ⓑⓤⓑⓑⓛⓔ',
      desc: 'Variasi gelembung klasik berbintik halus untuk bio media sosial yang unik.',
      color: 'from-amber-400 to-orange-600',
    },
    {
      id: 'decorative-bubble',
      title: 'Decorative Bubble',
      icon: Heart,
      preview: '♡ ⓐⓑⓒ ⓢⓣⓨⓛⓔ ♡',
      desc: 'Gaya gelembung dengan hiasan hati di kedua sisi. Favorit creator wanita dan gamer aesthetic.',
      color: 'from-rose-400 to-pink-600',
    },
    {
      id: 'rounded-style',
      title: 'Rounded Sparkle Bubble',
      icon: Sparkles,
      preview: '✧･ﾟ: * ⓐⓑⓒ * :･ﾟ✧',
      desc: 'Bentuk gelembung bulat berpadu dengan efek bintang berkilau (sparkles) untuk profil yang memikat.',
      color: 'from-fuchsia-500 to-purple-600',
    },
    {
      id: 'square-bubble',
      title: 'Square Bubble (Kotak)',
      icon: Square,
      preview: '🄰🄱🄲 🄱🄾🅇',
      desc: 'Varian gelembung bersudut melengkung bentuk kotak. Unik untuk tag role Discord & clan gaming.',
      color: 'from-emerald-500 to-teal-700',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-bubble-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            Bubble Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Font Gelembung (Bubble) Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih ragam variasi huruf lingkaran dan gelembung Unicode yang imut dan 100% terbaca.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularBubbleCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-pink-500/50 dark:hover:border-pink-500/50 shadow-lg hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#hero"
                      className="p-2 rounded-xl text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {card.title}
                  </h3>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-lg font-medium text-pink-600 dark:text-pink-300 break-all select-all">
                    {card.preview}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-pink-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Contoh Bubble
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
