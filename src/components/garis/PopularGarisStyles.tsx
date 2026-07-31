'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Strikethrough, Sparkles, Heart, ArrowUpRight, Copy, Slash } from 'lucide-react';

interface PopularGarisStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularGarisStyles({ onCopy }: PopularGarisStylesProps) {
  const popularGarisCards = [
    {
      id: 'single-strikethrough',
      title: 'Single Strikethrough (Garis Coret)',
      icon: Strikethrough,
      preview: 'A̶h̶s̶a̶n̶ ̶T̶u̶l̶i̶s̶a̶n̶',
      desc: 'Efek garis mendatar yang melintasi tengah teks. Gaya paling standar dan universal untuk WhatsApp & caption.',
      color: 'from-indigo-600 to-purple-700',
    },
    {
      id: 'double-strikethrough',
      title: 'Double Strikethrough (Garis Ganda)',
      icon: Strikethrough,
      preview: 'A̶̶h̶̶s̶̶a̶̶n̶̶ ̶̶T̶̶u̶̶l̶̶i̶̶s̶̶a̶̶n̶̶',
      desc: 'Dua garis horizontal sejajar memotong karakter teks. Memberikan penekanan pembatalan yang sangat jelas.',
      color: 'from-purple-600 to-rose-600',
    },
    {
      id: 'slash-style',
      title: 'Slash Style (Coret Miring /)',
      icon: Slash,
      preview: 'A̷h̷s̷a̷n̷ ̷T̷u̷l̷i̷s̷a̷n̷',
      desc: 'Garis miring diagonal yang memotong setiap huruf secara individual. Unik dan memberikan kesan cyber modern.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'decorative-strike',
      title: 'Decorative Strike Hearts',
      icon: Heart,
      preview: '♡ A̶h̶s̶a̶n̶ ♡',
      desc: 'Kombinasi teks coret horizontal dengan hiasan simbol hati manis di sisi kanan dan kiri.',
      color: 'from-rose-500 to-pink-600',
    },
    {
      id: 'crossed-text-tilde',
      title: 'Crossed Text (Tilde ~)',
      icon: Sparkles,
      preview: 'A̴h̴s̴a̴n̴ ̴T̴u̴l̴i̴s̴a̴n̴',
      desc: 'Garis bergelombang (tilde) yang melewati bagian tengah teks. Cocok untuk teks humor dan caption pesan tersembunyi.',
      color: 'from-amber-400 to-orange-600',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-garis-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Strikethrough Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Font Garis Coret Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih variasi garis coret lurus, miring, ganda, dan hiasan Unicode siap pakai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularGarisCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#hero"
                      className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {card.title}
                  </h3>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-lg font-medium text-indigo-600 dark:text-indigo-300 break-all select-all">
                    {card.preview}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Contoh Font Garis
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
