'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Type, Circle, Shield, Skull, PenTool, Hash, Zap, Compass, ArrowUpRight, Copy } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface PopularFontsProps {
  onCopy: (msg: string) => void;
}

export function PopularFonts({ onCopy }: PopularFontsProps) {
  const { t } = useLanguage();

  const popularCards = [
    {
      id: 'huruf-keren',
      title: 'Huruf Keren',
      icon: Sparkles,
      preview: 'ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ',
      desc: 'Style font aesthetic paling populer di TikTok & IG. Mengubah huruf menjadi huruf kecil superscript bergaya minimalis.',
      color: 'from-purple-500 to-indigo-600',
      href: '/font/huruf-keren',
    },
    {
      id: 'bubble',
      title: 'Bubble Text',
      icon: Circle,
      preview: 'Ⓣⓤⓛⓘⓢⓐⓝ Ⓐⓢⓣⓗⓔⓣⓘⓒ',
      desc: 'Setiap huruf dilingkari dengan batas bulat (circled). Cocok untuk highlight caption dan nama grup chat.',
      color: 'from-pink-500 to-rose-600',
      href: '/font/gelembung',
    },
    {
      id: 'bold',
      title: 'Bold / Tebal',
      icon: Type,
      preview: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰',
      desc: 'Teks tebal sans-serif Unicode yang menonjol. Sangat cocok untuk judul postingan atau penekanan pesan.',
      color: 'from-blue-500 to-cyan-600',
      href: '/font/tebal',
    },
    {
      id: 'gothic',
      title: 'Gothic / Fraktur',
      icon: Skull,
      preview: '𝕿𝖚𝖑𝖎𝖘𝖆𝖓 𝕬𝖊𝖘𝖙𝖍𝖊𝖙𝖎𝖈',
      desc: 'Gaya kaligrafi abad pertengahan yang misterius & elegan. Sering dipakai gamer FF & PUBG.',
      color: 'from-amber-500 to-red-600',
      href: '/font/gothic-fraktur',
    },
    {
      id: 'cursive',
      title: 'Cursive / Script',
      icon: PenTool,
      preview: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸',
      desc: 'Font tulisan tangan halus dan anggun. Memberikan kesan feminin, estetik, dan berkelas.',
      color: 'from-fuchsia-500 to-purple-600',
      href: '/font/miring-kursif',
    },
    {
      id: 'small-caps',
      title: 'Small Caps',
      icon: Hash,
      preview: 'ᴛᴜʟɪsᴀɴ ᴀᴇsᴛʜᴇᴛɪᴄ',
      desc: 'Format huruf kapital mini berukuran seragam. Menjadikan bio Instagram terlihat rapi & profesional.',
      color: 'from-emerald-500 to-teal-600',
      href: '/font/tiny',
    },
    {
      id: 'glitch',
      title: 'Glitch / Zalgo',
      icon: Zap,
      preview: 'T̷u̷l̷i̷s̷a̷n̷ ̷A̷e̷s̷t̷h̷e̷t̷i̷c̷',
      desc: 'Efek teks rusak cyber (cyberpunk glitch). Favorit pro player esports & komunitas gaming.',
      color: 'from-violet-600 to-pink-600',
      href: '/font/menakutkan',
    },
    {
      id: 'vintage',
      title: 'Vintage / Typewriter',
      icon: Compass,
      preview: '𝚃𝚞𝚕𝚒𝚜𝚊𝚗 𝙰𝚎𝚜𝚝𝚑𝚎𝚝𝚒𝚌',
      desc: 'Gaya huruf mesin ketik klasik bermodel monospace. Cocok untuk kutipan puisi atau bio retro.',
      color: 'from-orange-500 to-amber-700',
      href: '/font/garis',
    },
    {
      id: 'random',
      title: 'Random Mix Decor',
      icon: Shield,
      preview: '꧁༺ ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ ༻꧂',
      desc: 'Kombinasi otomatis simbol mahkota, sayap, dan bintang dengan font aesthetic pilihan.',
      color: 'from-pink-500 to-purple-600',
      href: '/font/nama-keren',
    },
  ];

  const handleCopySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    onCopy(`Contoh "${text}" berhasil disalin!`);
  };

  return (
    <section id="popular-fonts" className="py-12 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {t.popular.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            {t.popular.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.popular.subtitle}
          </p>
        </div>

        {/* Popular Cards Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCards.map((card, index) => {
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
                  {/* Top Row */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Link
                      href={card.href}
                      className="p-2 rounded-xl text-slate-400 hover:text-purple-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                      title={`Buka Halaman ${card.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Title & Preview */}
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

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopySnippet(card.preview)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-purple-600 group-hover:text-white"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Salin Style</span>
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
