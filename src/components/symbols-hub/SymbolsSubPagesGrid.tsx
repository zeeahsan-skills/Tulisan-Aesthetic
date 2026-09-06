'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Heart, Flower2, ArrowRight, Smile, Crown, Compass } from 'lucide-react';

export function SymbolsSubPagesGrid() {
  const symbolPages = [
    {
      title: 'Simbol Bintang (Star Symbols)',
      path: '/simbol/bintang',
      desc: 'Koleksi simbol bintang estetik ★, ✦, ✧, ✪, ✰ dan ornamen rasi bintang bercahaya.',
      icon: Star,
      color: 'from-amber-400 to-yellow-600',
      sample: '★ ✦ ✧ ✪ ✰ ✬ ✭ ✮',
      badge: 'Populer',
    },
    {
      title: 'Simbol Hati (Heart & Love)',
      path: '/simbol/hati',
      desc: 'Simbol cinta hati romantis ♡, ♥, ❥, ❣, ❦, dan variasi hati estetik untuk bio medsos.',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      sample: '♡ ♥ ❥ ❣ ❦ ❧ ღ ɞ',
      badge: 'Aesthetic',
    },
    {
      title: 'Simbol Bunga (Flower Symbols)',
      path: '/simbol/bunga',
      desc: 'Simbol flora bunga mekar ✿, ❀, ❁, ❃, ✾ untuk dekorasi bio Instagram dan postingan.',
      icon: Flower2,
      color: 'from-rose-400 to-pink-600',
      sample: '✿ ❀ ❁ ❃ ✾ ✽ ✼ 🌸',
      badge: 'Cute',
    },
    {
      title: 'Simbol Panah (Arrow Symbols)',
      path: '/simbol/panah',
      desc: 'Arah panah estetik ➜, ➤, ➔, ➸, 🏹 untuk navigasi caption, link bio, dan nickname game.',
      icon: ArrowRight,
      color: 'from-cyan-400 to-blue-600',
      sample: '➜ ➤ ➔ ➸ ➵ ➳ ➻ ➺',
      badge: 'Game & Bio',
    },
    {
      title: 'Simbol Emoji (Emoji Text & Emoticon)',
      path: '/simbol/emoji',
      desc: 'Katalog simbol emoji ekspresi wajah, gestur, dan ikon unik berbasis teks Unicode.',
      icon: Smile,
      color: 'from-emerald-400 to-teal-600',
      sample: '☻ ☺ ㋡ ッ ツ ヅ ʘ‿ʘ',
      badge: 'Ekspresif',
    },
    {
      title: 'Simbol Mahkota (Crown Royal)',
      path: '/simbol/mahkota',
      desc: 'Simbol mahkota raja & ratu 亗, 👑, ♛, ♕, ♚ untuk nickname pro player FF, ML & PUBG.',
      icon: Crown,
      color: 'from-amber-500 to-orange-600',
      sample: '亗 👑 ♛ ♕ ♚ ♔ 𓆩👑𓆪',
      badge: 'Esports',
    },
    {
      title: 'Simbol Kaomoji (Japanese Emoticons)',
      path: '/simbol/kaomoji',
      desc: 'Emotikon teks Jepang lucu (◕‿◕), (⁠✿⁠ ⁠♡⁠), ʕ•́ᴥ•̀ʔっ untuk bio Discord, TikTok & WA.',
      icon: Compass,
      color: 'from-purple-400 to-indigo-600',
      sample: '(◕‿◕) (⁠✿⁠ ⁠♡⁠) ʕ•́ᴥ•̀ʔっ',
      badge: 'Trending',
    },
  ];

  return (
    <section className="py-16 bg-slate-900/60 border-t border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold uppercase tracking-wider text-purple-400 inline-flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5" />
            Katalog Halaman Simbol Khusus
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-poppins">
            Direktori Halaman Simbol Spesifik
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Jelajahi halaman khusus untuk setiap kategori simbol terpopuler dengan koleksi terlengkap dan tombol salin 1-klik.
          </p>
        </div>

        {/* Grid of 7 Symbol Sub-Pages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {symbolPages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Link
                  href={item.path}
                  className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/5 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors font-poppins">
                      {item.title}
                    </h3>

                    {/* Preview Box */}
                    <div className="my-3 p-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm text-purple-300 text-center tracking-wider">
                      {item.sample}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-purple-400 group-hover:text-purple-300">
                    <span>Buka Koleksi Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
