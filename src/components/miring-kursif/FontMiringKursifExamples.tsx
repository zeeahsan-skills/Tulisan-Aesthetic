'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Italic, Sparkles, Heart } from 'lucide-react';

interface FontMiringKursifExamplesProps {
  onCopy: (msg: string) => void;
}

export function FontMiringKursifExamples({ onCopy }: FontMiringKursifExamplesProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const examplesList = [
    {
      category: 'Tulisan Sambung & Cursive',
      icon: Sparkles,
      styles: [
        { label: 'Cursive Script Elegant', text: '𝐻𝓊𝓇𝓊𝒻 𝒦𝓊𝓇𝓈𝒾𝒻 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸' },
        { label: 'Bold Script Sambung', text: '𝓗𝓾𝓻𝓾𝓯 𝓚𝓾𝓻𝓼𝓲𝓯 𝓐𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬' },
        { label: 'Handwriting Script', text: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒮𝒶𝓂𝒷𝓊𝓃ℊ' },
      ],
    },
    {
      category: 'Font Miring (Italic Typography)',
      icon: Italic,
      styles: [
        { label: 'Italic Serif Klasik', text: '𝐼𝑡𝑎𝑙𝑖𝑐 𝑆𝑒𝑟𝑖𝑓 𝐴𝑒𝑠𝑡ℎ𝑒𝑡𝑖𝑐' },
        { label: 'Sans Italic Modern', text: '𝘐𝘵𝑎𝘭𝘪𝘤 𝘚𝑎𝘯𝘴 𝘈𝘦𝘴𝘵𝒽𝘦𝘵𝘪𝘤' },
        { label: 'Bold Sans Italic', text: '𝑯𝒖𝒓𝒖𝒇 𝑴𝒊𝒓𝒊𝒏𝒈 𝑻𝒆𝒃𝒂𝒍' },
      ],
    },
    {
      category: 'Cursive Border & Ornamen',
      icon: Heart,
      styles: [
        { label: 'Script Heart Deco', text: '♡ 𝐻𝓊𝓇𝓊𝒻 𝒦𝓊𝓇𝓈𝒾𝒻 ♡' },
        { label: 'Signature Royal Crown', text: '👑 𝓗𝓾𝓻𝓾𝓯 𝓢𝒶𝓂𝒷𝓊𝓃ℊ 👑' },
        { label: 'Cursive Japanese Brackets', text: '『 𝐻𝓊𝓇𝓊𝒻 𝒦𝓊𝓇𝓈𝒾𝒻 』' },
      ],
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    onCopy(`Teks "${text}" berhasil disalin!`);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contoh-tulisan-kursif" className="py-16 sm:py-24 bg-white dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
            Inspirasi Cursive & Italic
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Tulisan Kursif & Font Miring
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Pilih variasi gaya tulisan sambung dan font miring terbaik di bawah ini dan salin dengan satu kali klik.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {examplesList.map((group, idx) => {
            const IconComp = group.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.styles.map((item, itemIdx) => {
                    const isCopied = copiedText === item.text;
                    return (
                      <div
                        key={itemIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700/60 hover:border-purple-500/50 transition-colors group"
                      >
                        <div className="overflow-hidden pr-2">
                          <p className="text-xs text-slate-400 dark:text-slate-400 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                            {item.text}
                          </p>
                        </div>

                        <button
                          onClick={() => handleCopy(item.text)}
                          className={`p-2 rounded-lg font-medium text-xs flex items-center gap-1.5 shrink-0 transition-all ${
                            isCopied
                              ? 'bg-emerald-500 text-white'
                              : 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-pink-300 hover:bg-purple-600 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white'
                          }`}
                          title="Salin Teks"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Tersalin</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Salin</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
