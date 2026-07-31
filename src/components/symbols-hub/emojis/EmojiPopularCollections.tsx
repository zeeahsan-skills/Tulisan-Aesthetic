'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EMOJI_COLLECTIONS_LIST } from '@/lib/emoji-symbols';
import { Sparkles, ArrowRight } from 'lucide-react';

interface EmojiPopularCollectionsProps {
  activeCollection: string | null;
  setActiveCollection: (colId: string | null) => void;
  onCopy: (msg: string) => void;
}

export const EmojiPopularCollections: React.FC<EmojiPopularCollectionsProps> = ({
  activeCollection,
  setActiveCollection,
  onCopy,
}) => {
  const handleCopySet = (name: string, items: string[]) => {
    const text = items.join(' ');
    navigator.clipboard.writeText(text);
    onCopy(`Set emoji ${name} berhasil disalin!`);
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Curated Collections</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Popular Emoji Collections
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            10 koleksi tema emoji terfavorit untuk mengekspresikan pesan, status media sosial, dan suasana hati.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {EMOJI_COLLECTIONS_LIST.map((col, idx) => {
            const isActive = activeCollection === col.id;

            return (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between group ${
                  isActive
                    ? 'bg-amber-950/60 border-amber-500/80 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-950/80 border-slate-800 hover:border-amber-500/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                      {col.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {col.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4 text-xl font-mono bg-slate-900 p-2 rounded-xl border border-slate-800">
                    {col.items.slice(0, 5).map((emoji, eIdx) => (
                      <span key={eIdx}>{emoji}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setActiveCollection(isActive ? null : col.id)}
                    className={`py-1.5 px-2 rounded-lg font-semibold border transition-all text-center ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 border-amber-400'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    {isActive ? 'Filtered' : 'Filter'}
                  </button>

                  <button
                    onClick={() => handleCopySet(col.name, col.items)}
                    className="py-1.5 px-2 rounded-lg font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all flex items-center justify-center gap-1"
                  >
                    <span>Salin Set</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
