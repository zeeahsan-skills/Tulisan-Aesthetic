'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Sparkles, ArrowUpRight, Copy, Crown, Feather } from 'lucide-react';

interface PopularTerhubungStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularTerhubungStyles({ onCopy }: PopularTerhubungStylesProps) {
  const popularTerhubungCards = [
    {
      id: 'script-regular',
      title: 'Script Regular (Tulisan Sambung)',
      icon: PenTool,
      preview: '𝒜𝒽𝓈𝒶𝓃 𝒯𝓊𝓁𝒾𝓈𝒶𝓃',
      desc: 'Style tulisan tangan latin klasik mengalir halus. Cocok untuk bio Instagram dan undangan digital.',
      color: 'from-fuchsia-600 to-purple-700',
    },
    {
      id: 'connected-bold-script',
      title: 'Connected Bold Script (Sambung Tebal)',
      icon: Feather,
      preview: '𝓐𝒽𝓈𝒶𝓃 𝒯𝓊𝓁𝒾𝓈𝒶𝓃',
      desc: 'Tulisan sambung dengan bobot tebal yang lebih tegas dan memberikan karakter kepribadian kuat.',
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 'elegant-handwriting',
      title: 'Elegant Handwriting (Kaligrafi Halus)',
      icon: Sparkles,
      preview: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸',
      desc: 'Gaya kaligrafi pena bulu yang anggun dan feminin untuk quotes estetik dan kartu ucapan.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'signature-style',
      title: 'Signature Style (Tanda Tangan)',
      icon: PenTool,
      preview: '𝓐𝒽𝓈𝒶𝓃 𝒮𝓉𝓎𝓁𝒾𝓈𝒽',
      desc: 'Menyerupai tanda tangan pribadi profesional yang mewah dan eksklusif.',
      color: 'from-indigo-600 to-purple-700',
    },
    {
      id: 'connected-royal',
      title: 'Fancy Connected Royal Crown',
      icon: Crown,
      preview: '👑 𝓐𝒽𝓈𝒶𝓃 👑',
      desc: 'Teks tulisan sambung indah yang dibingkai mahkota kerajaan emas untuk nama profil istimewa.',
      color: 'from-amber-500 to-rose-600',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-terhubung-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-bold uppercase tracking-wider text-fuchsia-600 dark:text-fuchsia-400">
            Connected Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Font Terhubung & Tulisan Sambung Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih variasi Script Cursive, Kaligrafi Halus, Tanda Tangan, dan hiasan Unicode siap pakai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTerhubungCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-fuchsia-500/50 dark:hover:border-fuchsia-500/50 shadow-lg hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#hero"
                      className="p-2 rounded-xl text-slate-400 hover:text-fuchsia-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {card.title}
                  </h3>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-lg font-medium text-fuchsia-600 dark:text-fuchsia-300 break-all select-all">
                    {card.preview}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-fuchsia-600 hover:text-white dark:hover:bg-fuchsia-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-fuchsia-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Contoh Font Terhubung
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
