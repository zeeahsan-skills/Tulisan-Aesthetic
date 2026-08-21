'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, Flower2, SquareDashed, Smile, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SYMBOL_CATEGORIES } from '@/lib/symbols';
import { SymbolModal } from './SymbolModal';

interface SymbolsSectionProps {
  onCopy: (msg: string) => void;
}

export function SymbolsSection({ onCopy }: SymbolsSectionProps) {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star': return Star;
      case 'Heart': return Heart;
      case 'Flower2': return Flower2;
      case 'SquareDashed': return SquareDashed;
      case 'Smile': return Smile;
      case 'Sparkles': return Sparkles;
      default: return Sparkles;
    }
  };

  const handleCopySymbol = (sym: string) => {
    navigator.clipboard.writeText(sym);
    setCopiedItem(sym);
    onCopy(`Simbol "${sym}" disalin ke clipboard!`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="symbols" className="py-12 sm:py-16 bg-white dark:bg-slate-900 relative">
      
      <SymbolModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCopy={onCopy}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {t.symbols.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            {t.symbols.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.symbols.subtitle}
          </p>
        </div>

        {/* Category Preview Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYMBOL_CATEGORIES.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                          {cat.name}
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {cat.count} Simbol
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Symbols Quick Grid */}
                  <div className="mt-5 grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {cat.items.slice(0, 12).map((item, sIdx) => {
                      const isCopied = copiedItem === item;

                      return (
                        <button
                          key={sIdx}
                          onClick={() => handleCopySymbol(item)}
                          title={`Salin ${item}`}
                          className={`p-2.5 rounded-xl border text-center font-mono text-base font-bold transition flex items-center justify-center ${
                            isCopied
                              ? 'bg-emerald-500 text-white border-emerald-500'
                              : 'bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-purple-500 hover:text-purple-600 dark:hover:text-pink-400'
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-2.5 px-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 text-purple-600 dark:text-purple-300 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Buka Semua {cat.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Catalog Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-bold text-base shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-3"
          >
            <Sparkles className="w-5 h-5" />
            {t.symbols.viewAll}
          </button>
        </div>

      </div>
    </section>
  );
}
