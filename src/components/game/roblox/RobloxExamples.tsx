'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { ROBLOX_POPULAR_EXAMPLES } from '@/lib/roblox-presets';

interface RobloxExamplesProps {
  onCopy: (msg: string) => void;
}

export const RobloxExamples: React.FC<RobloxExamplesProps> = ({ onCopy }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (styledName: string, idx: number) => {
    navigator.clipboard.writeText(styledName);
    setCopiedIndex(idx);
    onCopy(`Name "${styledName}" berhasil disalin!`);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Popular Roblox Username & Display Name Examples
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Kumpulan preset nama Roblox terpopuler. Ketuk tombol <strong className="text-emerald-400">Copy</strong> di sebelah kanan untuk langsung menyalin.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {ROBLOX_POPULAR_EXAMPLES.map((item, idx) => {
            const isCopied = copiedIndex === idx;

            return (
              <motion.div
                key={item.baseName}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-slate-900/90 border border-slate-800/90 hover:border-emerald-500/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {item.baseName}
                    </span>
                    <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="my-3 p-3.5 bg-slate-950 rounded-xl border border-slate-800/90 flex items-center justify-between gap-3">
                    <span className="text-lg sm:text-xl font-bold font-mono text-emerald-200 truncate select-all">
                      {item.styledName}
                    </span>

                    <button
                      onClick={() => handleCopy(item.styledName, idx)}
                      className={`flex items-center gap-1.5 py-2 px-3.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                        isCopied
                          ? 'bg-teal-600 text-white shadow-teal-600/30'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
                      }`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
