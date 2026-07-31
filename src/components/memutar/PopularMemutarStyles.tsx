'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Sparkles, Heart, ArrowUpRight, Copy, RotateCcw } from 'lucide-react';

interface PopularMemutarStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularMemutarStyles({ onCopy }: PopularMemutarStylesProps) {
  const popularMemutarCards = [
    {
      id: 'upside-down',
      title: 'Upside Down (Terbalik & Reversed)',
      icon: RefreshCw,
      preview: 'ɐɥsɐu ʇnlısɐu',
      desc: 'Huruf terbalik 180 derajat sekaligus diputar urutannya. Tampilan terbalik klasik paling populer.',
      color: 'from-cyan-600 to-blue-700',
    },
    {
      id: 'flipped-text',
      title: 'Flipped Text (Terbalik Saja)',
      icon: RotateCcw,
      preview: '∀ɥsɐu ┴nlısɐu',
      desc: 'Setiap huruf dibalik atas-bawah tanpa mengubah urutan kata awal hingga akhir.',
      color: 'from-blue-600 to-purple-700',
    },
    {
      id: 'reverse-flip',
      title: 'Reverse Mirror (Cermin Urutan)',
      icon: Sparkles,
      preview: 'nusalihsA nashA',
      desc: 'Membalikkan urutan huruf dari belakang ke depan seperti cermin tanpa mengubah bentuk huruf.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 'decorative-flip-wings',
      title: 'Decorative Flipped Wings',
      icon: Sparkles,
      preview: '꧁༺ ɐɥsɐu ༻꧂',
      desc: 'Teks terbalik 180 derajat dipadu dengan hiasan sayap malaikat untuk nickname game.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'decorative-flip-hearts',
      title: 'Decorative Flipped Hearts',
      icon: Heart,
      preview: '♡ ɐɥsɐu ♡',
      desc: 'Gaya huruf terbalik dengan hiasan simbol hati manis di kedua sisi.',
      color: 'from-rose-500 to-pink-600',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-memutar-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Flipped Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Font Memutar & Terbalik Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih ragam variasi huruf terbalik 180°, cermin, dan dekorasi Unicode siap pakai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularMemutarCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#hero"
                      className="p-2 rounded-xl text-slate-400 hover:text-cyan-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {card.title}
                  </h3>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-lg font-medium text-cyan-600 dark:text-cyan-300 break-all select-all">
                    {card.preview}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-cyan-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Contoh Font Memutar
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
