'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Crosshair } from 'lucide-react';
import { VALORANT_EXAMPLES } from '@/lib/valorant-presets';

interface ValorantExamplesProps {
  onCopy: (msg: string) => void;
}

export function ValorantExamples({ onCopy }: ValorantExamplesProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    onCopy(`Nickname "${text}" disalin ke clipboard!`);
    setTimeout(() => setCopiedText(null), 1500);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-4">
            <Crosshair className="w-4 h-4" />
            <span>Preset Siap Pakai</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mb-4">
            20+ Inspirasi Nickname Valorant Keren
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Klik tombol salin pada nickname pilihan Anda untuk langsung menggunakannya di akun Riot Games Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VALORANT_EXAMPLES.map((item, idx) => {
            const isCopied = copiedText === item.styledName;

            return (
              <motion.div
                key={`${item.styledName}-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: (idx % 8) * 0.03 }}
                className="bg-slate-950/80 border border-slate-800 hover:border-rose-500/50 rounded-2xl p-4 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-slate-500">Dasar: {item.baseName}</span>
                  </div>

                  <div
                    onClick={() => handleCopy(item.styledName)}
                    className="my-3 py-3 px-2 bg-slate-900 rounded-xl border border-slate-800/80 text-center text-base sm:text-lg font-mono text-rose-200 cursor-pointer hover:bg-rose-950/40 hover:border-rose-500/40 transition-all select-all shadow-inner truncate"
                    title="Klik untuk menyalin"
                  >
                    {item.styledName}
                  </div>

                  <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(item.styledName)}
                  className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                    isCopied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20'
                  }`}
                >
                  {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isCopied ? 'Tersalin' : 'Salin Nickname'}</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
