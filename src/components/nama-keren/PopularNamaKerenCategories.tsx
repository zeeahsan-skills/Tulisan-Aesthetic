'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Camera, Video, MessageSquare, Crown, Heart, Skull, Sparkles, ArrowUpRight, Copy } from 'lucide-react';

interface PopularNamaKerenCategoriesProps {
  onCopy: (msg: string) => void;
}

export function PopularNamaKerenCategories({ onCopy }: PopularNamaKerenCategoriesProps) {
  const categories = [
    {
      title: 'Gaming Names (FF & MLBB)',
      icon: Gamepad2,
      preview: '꧁༺ 𝕲𝖆𝖒𝖊𝖗 𝕶𝖎𝖓𝖌 ༻꧂',
      desc: 'Style Gothic, Fraktur, dan hiasan sayap malaikat yang sangat populer di kalangan gamer Free Fire & Mobile Legends.',
      color: 'from-purple-600 to-indigo-700',
    },
    {
      title: 'Instagram Names & Bio',
      icon: Camera,
      preview: 'ᵀᵁᴸᴵˢᴬᴺ ᴬᴱᵀᴴᴱᵀᴵᶜ',
      desc: 'Huruf kapital mini Small Caps yang memberikan kesan rapi, profesional, dan estetik untuk profil IG.',
      color: 'from-amber-500 via-rose-500 to-purple-600',
    },
    {
      title: 'TikTok Usernames',
      icon: Video,
      preview: '✨ 𝒯𝓊𝓁𝒾𝓈𝒶𝓃 ✨',
      desc: 'Kombinasi tulisan sambung halus dengan kilauan bintang untuk username TikTok pilihan.',
      color: 'from-teal-400 via-pink-500 to-purple-600',
    },
    {
      title: 'Discord Nicknames',
      icon: MessageSquare,
      preview: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸',
      desc: 'Teks tulisan tangan signature yang membedakan tampilan profil dan role server komunitas Discord Anda.',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'VIP Names & Squad',
      icon: Crown,
      preview: '👑 𝖁𝕴𝕻 𝕷𝖊𝖌𝖊𝖓𝖉 👑',
      desc: 'Mahkota emas dan huruf tebal abad pertengahan untuk ketua guild game dan keanggotaan VIP.',
      color: 'from-amber-500 to-rose-600',
    },
    {
      title: 'Cute Names & Aesthetic',
      icon: Heart,
      preview: '♡ ✨ 𝒫𝓇𝒾𝓃𝒸ℯ𝓈𝓈 ✨ ♡',
      desc: 'Gaya imut bertema hati dan bunga yang sangat diminati oleh konten kreator perempuan.',
      color: 'from-rose-500 to-pink-600',
    },
    {
      title: 'Dark Names & Horror',
      icon: Skull,
      preview: 'H̴̐͝e̸̽̽l̶̈́̽l̴̛̚o̸̎̍',
      desc: 'Efek Zalgo distorted dan glitch seram untuk gaya akun game malam hari.',
      color: 'from-rose-600 to-red-700',
    },
    {
      title: 'Anime Names & RPG',
      icon: Sparkles,
      preview: '『 𝒜𝒽𝓈𝒶𝓃 』',
      desc: 'Tanda kurung Jepang klasik bertema anime dan karakter cerita fantasi RPG.',
      color: 'from-fuchsia-600 to-purple-700',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-nama-categories" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
            Popular Categories
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Kategori Nama Keren Pilihan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Jelajahi gaya nama terbaik untuk game online, sosial media, dan profil pribadi Anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-violet-500/50 dark:hover:border-violet-500/50 shadow-lg hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <a
                      href="#hero"
                      className="p-2 rounded-xl text-slate-400 hover:text-violet-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {card.title}
                  </h3>

                  <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 font-mono text-base font-medium text-violet-600 dark:text-violet-300 break-all select-all">
                    {card.preview}
                  </div>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-violet-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    Salin Contoh Nama
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
