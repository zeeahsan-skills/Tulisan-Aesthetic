'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Heart, ArrowUpRight, Copy, Wand2, Crown } from 'lucide-react';

interface PopularBerkilauStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularBerkilauStyles({ onCopy }: PopularBerkilauStylesProps) {
  const popularBerkilauCards = [
    {
      id: 'sparkle-sparkle',
      title: 'Sparkly Style (Glitter ✨)',
      icon: Sparkles,
      preview: '✨ Ahsan Tulisan ✨',
      desc: 'Simbol kilauan bintang emas di sisi kanan-kiri yang memberikan efek elegan dan glowing.',
      color: 'from-amber-400 to-yellow-600',
    },
    {
      id: 'star-sparkle',
      title: 'Star Text (Bintang Four Point ✧)',
      icon: Star,
      preview: '✧ ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ ✧',
      desc: 'Kombinasi Small Caps mini dengan hiasan bintang 4 sudut untuk tampilan perfil profesional.',
      color: 'from-pink-500 to-purple-600',
    },
    {
      id: 'cute-style',
      title: 'Cute Style (Hearts ♡ ✨)',
      icon: Heart,
      preview: '♡ ✨ Ahsan ✨ ♡',
      desc: 'Perpaduan bunga simbol cinta dan kilau bintang yang manis untuk bio Instagram & TikTok.',
      color: 'from-rose-500 to-pink-600',
    },
    {
      id: 'magic-style',
      title: 'Magic Style (Empat Sudut ✦)',
      icon: Wand2,
      preview: '✦ ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ ✦',
      desc: 'Bintang kristal magis empat sudut yang memancarkan aura fantasi dan magis.',
      color: 'from-purple-600 to-indigo-700',
    },
    {
      id: 'luxury-style',
      title: 'Luxury Style (Diamond ♦ ✧)',
      icon: Crown,
      preview: '♦ ✧ ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ ✧ ♦',
      desc: 'Dekorasi berlian mewah dan bintang bersinar yang sangat cocok untuk profil kerajaan & bisnis premium.',
      color: 'from-amber-500 to-rose-600',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-berkilau-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Sparkly Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Font Berkilau & Dekoratif Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih variasi kilatan bintang, berlian, dan hiasan aesthetic Unicode siap pakai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularBerkilauCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#hero"
                      className="p-2 rounded-xl text-slate-400 hover:text-amber-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {card.title}
                  </h3>

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-lg font-medium text-amber-600 dark:text-amber-300 break-all select-all">
                    {card.preview}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-amber-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Contoh Font Berkilau
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
