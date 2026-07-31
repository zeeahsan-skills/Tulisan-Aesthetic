'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Hash, Binary, ArrowUpRight, Copy, Code } from 'lucide-react';

interface PopularAngkaStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularAngkaStyles({ onCopy }: PopularAngkaStylesProps) {
  const popularAngkaCards = [
    {
      id: 'circled-numbers',
      title: 'Circled Numbers (Angka Lingkaran ①)',
      icon: Circle,
      preview: '①②③④⑤',
      desc: 'Angka yang dibingkai lingkaran bulat outline transparan. Sangat rapi untuk penomoran daftar & bio.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'double-circled-numbers',
      title: 'Double Circled Numbers (Garis Ganda ⓵)',
      icon: Circle,
      preview: '⓵⓶⓷⓸⓹',
      desc: 'Angka dalam lingkaran bergaris ganda yang tampak unik dan eksklusif.',
      color: 'from-teal-500 to-blue-600',
    },
    {
      id: 'parenthesized-numbers',
      title: 'Parenthesized Numbers (Dalam Kurung ⑴)',
      icon: Hash,
      preview: '⑴⑵⑶⑷⑸',
      desc: 'Nomor di dalam tanda kurung bawaan Unicode untuk penomoran poin-poin penting.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'math-bold-numbers',
      title: 'Mathematical Bold Numbers (Tebal 𝟭)',
      icon: Binary,
      preview: '𝟭𝟮𝟯𝟰𝟱',
      desc: 'Digit angka tebal sans-serif untuk memberi penekanan harga, tanggal, atau nomor ID game.',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      id: 'monospace-numbers',
      title: 'Monospace Numbers (Kode Komputer 𝟷)',
      icon: Code,
      preview: '𝟷𝟸𝟹𝟺𝟻',
      desc: 'Gaya angka bertipe monospace seperti tampilan layar terminal dan koding.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 'dark-circled-numbers',
      title: 'Decorative Dark Circled (Lingkaran Hitam ❶)',
      icon: Circle,
      preview: '❶❷❸❹❺',
      desc: 'Angka putih dalam lingkaran hitam solid untuk tampilan mencolok di profil.',
      color: 'from-amber-500 to-rose-600',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-angka-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Number Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Angka Keren Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih variasi angka lingkaran, angka tebal, monospace, dan hiasan kurung siap pakai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularAngkaCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#hero"
                      className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {card.title}
                  </h3>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-2xl font-medium text-emerald-600 dark:text-emerald-300 break-all select-all">
                    {card.preview}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-emerald-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Contoh Angka Keren
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
