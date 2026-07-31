'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Skull, Shield, Crown, Swords, Sparkles, Copy, ArrowUpRight } from 'lucide-react';

interface PopularGothicStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularGothicStyles({ onCopy }: PopularGothicStylesProps) {
  const popularGothicCards = [
    {
      id: 'old-english',
      title: 'Old English Font',
      icon: Crown,
      preview: '𝕺𝖑𝖉 𝕰𝖓𝖌𝖑𝖎𝖘𝖍 𝕿𝖊𝖝𝖙',
      desc: 'Style gaya kaligrafi monarki Inggris klasik abad pertengahan. Sering digunakan untuk judul heraldik & logo clan.',
      color: 'from-amber-500 to-yellow-700',
    },
    {
      id: 'fraktur-blackletter',
      title: 'Fraktur Normal',
      icon: Shield,
      preview: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯 𝔅𝔩𝔞𝔠𝔨𝔩𝔢𝔱𝔱𝔢𝔯',
      desc: 'Gaya cetak Jerman abad ke-16 yang tajam dan otentik. Memberikan nuansa historis & gothic yang elegan.',
      color: 'from-purple-600 to-indigo-700',
    },
    {
      id: 'blackletter-medieval',
      title: 'Blackletter Medieval',
      icon: Swords,
      preview: '⚔️ 𝕸𝖊𝖉𝖎𝖊𝖛𝖆𝖑 𝕶𝖓𝖎𝖌𝖍𝖙 ⚔️',
      desc: 'Variasi tulisan gothic yang dilengkapi dengan simbol pedang dan perisai ksatria abad pertengahan.',
      color: 'from-rose-500 to-red-700',
    },
    {
      id: 'medieval-royal',
      title: 'Medieval Royal',
      icon: Crown,
      preview: '♛ 𝕽𝖔𝖞𝖆𝖑 𝕰𝖒𝖕𝖎𝖗𝖊 ♛',
      desc: 'Kombinasi huruf Fraktur tebal dengan mahkota kerajaan untuk nickname gaming & profil esports teratas.',
      color: 'from-amber-400 to-orange-600',
    },
    {
      id: 'dark-gothic',
      title: 'Dark Gothic',
      icon: Skull,
      preview: '💀 𝕯𝖆𝖗𝖐 𝕾𝖍𝖆𝖉𝖔𝖜 💀',
      desc: 'Gaya huruf misterius dengan nuansa gothic gelap dan karakter tengkorak favorit gamer Free Fire & PUBG.',
      color: 'from-violet-600 to-pink-600',
    },
    {
      id: 'decorative-gothic',
      title: 'Decorative Gothic',
      icon: Sparkles,
      preview: '꧁༺ 𝕲𝖔𝖙𝖍𝖎𝖈 𝕶𝖎𝖓𝖌 ༻꧂',
      desc: 'Preset gothic lengkap dengan border sayap malaikat (Wings) dan hiasan ornamen estetik siap pakai.',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-gothic-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Gothic Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Font Gothic & Fraktur Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih ragam variasi huruf Gothic, Old English, dan Fraktur yang 100% kompatibel di media sosial dan game.
          </p>
        </div>

        {/* Popular Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularGothicCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#hero"
                      className="p-2 rounded-xl text-slate-400 hover:text-purple-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {card.title}
                  </h3>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-lg font-medium text-purple-700 dark:text-purple-300 break-all select-all">
                    {card.preview}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-purple-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Contoh Font
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
