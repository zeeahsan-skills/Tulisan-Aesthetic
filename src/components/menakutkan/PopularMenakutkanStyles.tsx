'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skull, Sparkles, Flame, ArrowUpRight, Copy, Ghost, Zap } from 'lucide-react';

interface PopularMenakutkanStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularMenakutkanStyles({ onCopy }: PopularMenakutkanStylesProps) {
  const popularMenakutkanCards = [
    {
      id: 'glitch-text',
      title: 'Glitch Text (Cyber Distortion)',
      icon: Zap,
      preview: 'H̴̐͝e̸̽̽l̶̈́̽l̴̛̚o̸̎̍',
      desc: 'Efek teks rusak digital bertema cyber glitch dengan penumpukan karakter Unicode di atas huruf.',
      color: 'from-rose-600 to-red-700',
    },
    {
      id: 'zalgo-text',
      title: 'Zalgo Text (Chaos Stack)',
      icon: Skull,
      preview: 'A̷̅̅h̴̾̈́s̷͂̓a̶̾̔ǹ̸̄',
      desc: 'Teks berantakan seram dengan diacritical marks acak di bagian atas, tengah, dan bawah baris.',
      color: 'from-purple-600 to-indigo-800',
    },
    {
      id: 'horror-font',
      title: 'Horror Font (Gothic Bold)',
      icon: Ghost,
      preview: '𝕲𝖍𝖔𝖘𝖙 𝕳𝖔𝖗𝖗𝖔𝖗',
      desc: 'Karakter kaligrafi gothic tebal abad pertengahan yang misterius dan terkesan mistis.',
      color: 'from-slate-900 to-purple-900',
    },
    {
      id: 'creepy-font',
      title: 'Creepy Blackletter',
      icon: Sparkles,
      preview: '𝔇𝔢𝔪𝔬𝔫 𝔖𝔥𝔞𝔡𝔬𝔴',
      desc: 'Gaya huruf kuno eropa klasik yang tajam dan seram untuk tema horor dan cerita fantasi.',
      color: 'from-red-600 to-rose-700',
    },
    {
      id: 'distorted-text',
      title: 'Distorted Demon Brackets',
      icon: Flame,
      preview: '⦇ A̷̅̅h̴̾̈́s̷͂̓a̶̾̔ǹ̸̄ ⦈',
      desc: 'Kombinasi efek Zalgo berat yang dibingkai kurung iblis khusus untuk role Discord & clan gaming.',
      color: 'from-rose-600 to-purple-600',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-menakutkan-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Scary Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Font Menakutkan & Glitch Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih variasi Zalgo, Glitch, Gothic Horror, dan Creepy Blackletter Unicode siap pakai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularMenakutkanCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-rose-500/50 dark:hover:border-rose-500/50 shadow-lg hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#hero"
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {card.title}
                  </h3>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-lg font-medium text-rose-600 dark:text-rose-300 break-all select-all">
                    {card.preview}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-rose-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Contoh Font Menakutkan
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
