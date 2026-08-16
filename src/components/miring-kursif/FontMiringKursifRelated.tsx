'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bold, Sparkles, Type, Shield, Square, User, ArrowRight, Wand2 } from 'lucide-react';

export function FontMiringKursifRelated() {
  const fontPages = [
    {
      title: 'Huruf Keren',
      url: '/font/huruf-keren',
      desc: 'Generator tulisan aesthetic & font keren stylish 50 gaya.',
      icon: Wand2,
      preview: 'ʜᴜʀᴜғ ᴋᴇʀᴇɴ',
    },
    {
      title: 'Font Tebal / Bold',
      url: '/font/tebal',
      desc: 'Converter tulisan tebal hitam Unicode Sans & Serif.',
      icon: Bold,
      preview: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻 𝗧𝗲𝗯𝗮𝗹',
    },
    {
      title: 'Font Tiny / Kecil',
      url: '/font/tiny',
      desc: 'Huruf kecil mini di atas (superscript) dan di bawah.',
      icon: Type,
      preview: 'ᵀᵘˡⁱˢᵃⁿ ᴷᵉᶜⁱˡ',
    },
    {
      title: 'Font Berkilau',
      url: '/font/berkilau',
      desc: 'Variasi teks berkilau bintang dan dekoratif sparkly.',
      icon: Sparkles,
      preview: '✨ 𝐹𝑜𝓃𝓉 𝐵𝑒𝓇𝓀𝒾𝓁𝒶𝓊 ✨',
    },
    {
      title: 'Font Gothic & Fraktur',
      url: '/font/gothic-fraktur',
      desc: 'Gaya tulisan Old English dan Blackletter abad pertengahan.',
      icon: Shield,
      preview: '𝕲𝖔𝖙𝖍𝖎𝖈 𝕱𝖗𝖆𝖐𝖙𝖚𝖗',
    },
    {
      title: 'Font Kotak (Square Box)',
      url: '/font/kotak',
      desc: 'Teks dalam bingkai kotak outline & solid.',
      icon: Square,
      preview: '🄰🄷🅂🄰🄽 🄺🄾🅃🄰🄺',
    },
    {
      title: 'Generator Nama Keren',
      url: '/font/nama-keren',
      desc: 'Kumpulan gaya nama stylish untuk game & sosial media.',
      icon: User,
      preview: '꧁༺ 𝒫𝓇𝑜 𝒢𝒶𝓂𝑒𝓇 ༻꧂',
    },
  ];

  return (
    <section id="kategori-font-terkait" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
            Jelajahi Generator Lainnya
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Kategori Font Aesthetic Terkait
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Temukan spesialisasi generator font Unicode lainnya yang siap mempercantik tampilan teks Anda.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fontPages.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.url}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={item.url}
                  className="block h-full bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-purple-900/30 shadow-sm hover:shadow-md hover:border-purple-500/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-xs font-semibold text-purple-700 dark:text-pink-300 font-mono">
                      {item.preview}
                    </span>
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
