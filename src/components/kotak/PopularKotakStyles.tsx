'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Square, ArrowUpRight, Copy, Crown, Sparkles, Box } from 'lucide-react';

interface PopularKotakStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularKotakStyles({ onCopy }: PopularKotakStylesProps) {
  const popularKotakCards = [
    {
      id: 'square-outline',
      title: 'Square Font (Persegi Transparan)',
      icon: Square,
      preview: '🄰🄷🅂🄰🄽 🅃🅄🄻🄸🅂🄰🄽',
      desc: 'Huruf yang dibingkai garis kotak persegi tipis (Enclosed Squared Latin Capital). Cocok untuk game nickname & Discord.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'dark-square',
      title: 'Boxed Letters (Kotak Hitam Solid)',
      icon: Box,
      preview: '🅰🅷🆂🅰🅽 🆄🅻🅰🅽',
      desc: 'Huruf berwarna putih di dalam latar belakang kotak hitam solid untuk tampilan mencolok dan tegas.',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'squared-small-caps',
      title: 'Squared Capitals (Kapital Mini)',
      icon: Square,
      preview: '🄰ʜsᴀɴ 🅃ᴜʟɪsᴀɴ',
      desc: 'Perpaduan bingkai kotak pada huruf pertama dan huruf kapital mini (Small Caps) di sisanya.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 'square-sparkles',
      title: 'Squared Symbols (Kotak Bintang)',
      icon: Sparkles,
      preview: '✧ 🄰🄷🅂🄰🄽 ✧',
      desc: 'Kombinasi teks kotak persegi dengan hiasan simbol bintang bersinar di sisi kanan dan kiri.',
      color: 'from-cyan-400 to-teal-600',
    },
    {
      id: 'square-royal',
      title: 'Decorative Box Font (Mahkota Emas)',
      icon: Crown,
      preview: '👑 🄰🄷🅂🄰🄽 👑',
      desc: 'Teks kotak persegi yang dihiasi simbol mahkota kerajaan untuk profil VIP & pemenang clan.',
      color: 'from-amber-500 to-rose-600',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-kotak-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Square Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Font Kotak & Boxed Letters Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih variasi kotak transparan, kotak hitam solid, bingkai simbol, dan dekorasi siap pakai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularKotakCards.map((card, index) => {
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
                      className="p-2 rounded-xl text-slate-400 hover:text-cyan-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
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
                    Salin Contoh Font Kotak
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
