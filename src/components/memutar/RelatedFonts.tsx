'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Circle, Strikethrough, Type, PenTool, Hash, ArrowUpRight } from 'lucide-react';

export function RelatedFonts() {
  const relatedList = [
    {
      title: 'Font Garis (Strikethrough)',
      href: '/font/garis',
      preview: 'A̶h̶s̶a̶n̶ ̶T̶u̶l̶i̶s̶a̶n̶',
      desc: 'Huruf garis coret lurus, miring, dan ganda estetik.',
      icon: Strikethrough,
      color: 'from-indigo-600 to-purple-700',
    },
    {
      title: 'Font Kecil (Tiny Font)',
      href: '/font/kecil',
      preview: 'ᵃʰˢᵃⁿ ᵗᵘˡⁱˢᵃⁿ',
      desc: 'Huruf kecil terangkat superscript & Small Caps mini.',
      icon: Hash,
      color: 'from-purple-600 to-indigo-700',
    },
    {
      title: 'Bubble Font (Gelembung)',
      href: '/font/gelembung',
      preview: 'Ⓣⓤⓛⓘⓢⓐⓝ Ⓐⓔⓢⓣⓗⓔⓣⓘⓒ',
      desc: 'Huruf lingkaran bulat imut dan unik untuk sosial media.',
      icon: Circle,
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Huruf Keren (Small Caps)',
      href: '/#popular-fonts',
      preview: 'ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ',
      desc: 'Huruf kapital mini superscript yang rapi dan profesional.',
      icon: Sparkles,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Font Tebal (Bold Sans)',
      href: '/#popular-fonts',
      preview: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰',
      desc: 'Teks tebal sans-serif untuk penekanan caption & judul.',
      icon: Type,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Font Kursif (Cursive)',
      href: '/#popular-fonts',
      preview: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸',
      desc: 'Tulisan tangan halus yang feminin dan anggun.',
      icon: PenTool,
      color: 'from-fuchsia-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            Kategori Terkait
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Eksplorasi Generator Font Lainnya
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Coba koleksi generator teks aesthetic Unicode pilihan di bawah ini.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedList.map((rf, idx) => {
            const Icon = rf.icon;

            return (
              <motion.div
                key={rf.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${rf.color} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <a
                      href={rf.href}
                      className="p-2 rounded-xl text-slate-400 hover:text-cyan-600 dark:hover:text-pink-400 hover:bg-white dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {rf.title}
                  </h3>

                  <div className="mt-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 font-mono text-base font-medium text-cyan-600 dark:text-cyan-300">
                    {rf.preview}
                  </div>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                    {rf.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                  <a
                    href={rf.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>Buka Generator Ini</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
