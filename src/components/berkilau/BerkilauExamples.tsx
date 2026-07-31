'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { SPARKLY_FONT_STYLES } from '@/lib/unicode-engine';

interface BerkilauExamplesProps {
  onCopy: (msg: string) => void;
}

export function BerkilauExamples({ onCopy }: BerkilauExamplesProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const rawExamples = [
    { plain: 'Princess', styleId: 'sparkle-sparkle' },
    { plain: 'Queen', styleId: 'star-sparkle' },
    { plain: 'King', styleId: 'little-stars' },
    { plain: 'Cute', styleId: 'flower-blossom' },
    { plain: 'Luxury', styleId: 'four-star' },
    { plain: 'Magic', styleId: 'sparkle-wings' },
    { plain: 'Dream', styleId: 'sparkle-hearts' },
    { plain: 'Star', styleId: 'diamond-sparkle' },
    { plain: 'Galaxy', styleId: 'galaxy-stars' },
    { plain: 'Diamond', styleId: 'luxury-japanese' },
  ];

  const handleCopyExample = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    onCopy(`Contoh "${text}" berhasil disalin!`);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Presets & Examples
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Teks Berkilau Siap Pakai
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Klik tombol salin di bawah kata favorit Anda untuk langsung menggunakannya.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {rawExamples.map((ex, idx) => {
            const style = SPARKLY_FONT_STYLES.find((s) => s.id === ex.styleId) || SPARKLY_FONT_STYLES[0];
            const converted = style.transform(ex.plain);
            const isCopied = copiedIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-amber-500/50 shadow-md hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400 tracking-wider">
                    {ex.plain}
                  </span>
                  <p className="mt-2 text-lg font-mono font-medium text-slate-900 dark:text-white break-all select-all">
                    {converted}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleCopyExample(converted, idx)}
                    className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                      isCopied
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Tersalin!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Salin Teks
                      </>
                    )}
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
