'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Type, Circle, PenTool, Hash, ArrowUpRight } from 'lucide-react';

export function RelatedFonts() {
  const relatedList = [
    {
      title: 'Huruf Keren (Small Caps)',
      href: '/#popular-fonts',
      preview: 'ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ',
      desc: 'Huruf kapital mini superscript yang rapi dan elegan.',
      icon: Sparkles,
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Font Tebal (Bold Sans)',
      href: '/#popular-fonts',
      preview: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰',
      desc: 'Teks tebal sans-serif untuk judul & highlight pesan.',
      icon: Type,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Font Kursif (Cursive)',
      href: '/#popular-fonts',
      preview: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸',
      desc: 'Gaya tulisan tangan feminin dan berkelas.',
      icon: PenTool,
      color: 'from-fuchsia-500 to-purple-600',
    },
    {
      title: 'Bubble Font (Melingkar)',
      href: '/#popular-fonts',
      preview: 'Ⓣⓤⓛⓘⓢⓐⓝ Ⓐⓔⓢⓣⓗⓔⓣⓘⓒ',
      desc: 'Teks dalam lingkaran bulat imut dan menarik.',
      icon: Circle,
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Tiny Font (Superscript)',
      href: '/#popular-fonts',
      preview: 'ᵗᵘˡⁱˢᵃⁿ ᵃᵉˢᵗʰᵉᵗⁱᶜ',
      desc: 'Huruf berukuran mini untuk bio & komentar TikTok.',
      icon: Hash,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Sparkly Font & Decor',
      href: '/#symbols',
      preview: '✧･ﾟ: * 𝕿𝖚𝖑𝖎𝖘𝖆𝖓 * :･ﾟ✧',
      desc: 'Kombinasi simbol bintang, kilau, dan border cantik.',
      icon: Sparkles,
      color: 'from-amber-400 to-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Kategori Terkait
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Eksplorasi Gaya Font Lainnya
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan koleksi font aesthetic Unicode lainnya untuk melengkapi gaya profil Anda.
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
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${rf.color} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <a
                      href={rf.href}
                      className="p-2 rounded-xl text-slate-400 hover:text-purple-600 dark:hover:text-pink-400 hover:bg-white dark:hover:bg-slate-800 transition"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {rf.title}
                  </h3>

                  <div className="mt-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 font-mono text-base font-medium text-purple-700 dark:text-purple-300">
                    {rf.preview}
                  </div>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                    {rf.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                  <a
                    href={rf.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-pink-400 hover:underline"
                  >
                    <span>Coba Generator Ini</span>
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
