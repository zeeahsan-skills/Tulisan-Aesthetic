'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Hash, Sparkles, Heart, ArrowUpRight, Copy } from 'lucide-react';

interface PopularTinyStylesProps {
  onCopy: (msg: string) => void;
}

export function PopularTinyStyles({ onCopy }: PopularTinyStylesProps) {
  const popularTinyCards = [
    {
      id: 'superscript-raised',
      title: 'Superscript (Raised Text)',
      icon: Hash,
      preview: 'ᵃʰˢᵃⁿ ᵗᵘˡⁱˢᵃⁿ',
      desc: 'Huruf kecil terangkat di bagian atas baris. Sangat populer di TikTok, Bio Instagram, dan penulisan status.',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 'small-caps',
      title: 'Small Caps (Kapital Mini)',
      icon: Sparkles,
      preview: 'ᴀʜsᴀɴ ᴛᴜʟɪsᴀɴ',
      desc: 'Huruf kapital berukuran mini yang rapi, profesional, dan memberikan kesan aesthetic elegan pada nama profil.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'tiny-letters-sub',
      title: 'Subscript (Tiny Low)',
      icon: Hash,
      preview: 'ₐₕₛₐₙ ₜᵤₗᵢₛₐₙ',
      desc: 'Karakter huruf kecil di bagian bawah baris teks (subscript). Unik untuk penulisan formula atau gaya rahasia.',
      color: 'from-teal-400 to-emerald-600',
    },
    {
      id: 'raised-wings',
      title: 'Raised Tiny Wings',
      icon: Sparkles,
      preview: '꧁༺ ᵃʰˢᵃⁿ ༻꧂',
      desc: 'Kombinasi huruf superscript kecil dengan border sayap malaikat untuk nickname game aesthetic.',
      color: 'from-amber-400 to-orange-600',
    },
    {
      id: 'decorative-tiny-hearts',
      title: 'Decorative Tiny Hearts',
      icon: Heart,
      preview: '♡ ᵃʰˢᵃⁿ ♡',
      desc: 'Huruf kecil superscript dihiasi simbol hati manis di sisi kanan dan kiri.',
      color: 'from-fuchsia-500 to-purple-600',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-tiny-styles" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Tiny Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Gaya Font Kecil (Tiny Font) Populer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih ragam variasi huruf kecil, superscript, subscript, dan Small Caps Unicode siap pakai.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTinyCards.map((card, index) => {
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

                  <div className="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-lg font-medium text-purple-600 dark:text-purple-300 break-all select-all">
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
                    Salin Contoh Font Kecil
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
