'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Search, Copy, Check } from 'lucide-react';

interface SymbolsHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onCopy: (msg: string) => void;
}

export const SymbolsHero: React.FC<SymbolsHeroProps> = ({
  searchQuery,
  setSearchQuery,
  onCopy,
}) => {
  const [copiedQuick, setCopiedQuick] = React.useState(false);

  const handleQuickCopy = () => {
    navigator.clipboard.writeText('★ ꧁༺Simbol Keren༻꧂ ♡');
    setCopiedQuick(true);
    onCopy('Kombinasi simbol sampel berhasil disalin!');
    setTimeout(() => setCopiedQuick(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-950 text-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-pink-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/15 to-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Unicode Symbols Hub 2026 Directory</span>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
            Simbol Keren
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Browse thousands of Unicode symbols for Instagram, TikTok, WhatsApp, Discord, Facebook, gaming names, and creative text.
        </motion.p>

        {/* Large Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto relative mb-6"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari simbol (contoh: star, heart, crown, flower, kaomoji)..."
              className="w-full bg-slate-900/90 border-2 border-purple-500/40 focus:border-purple-400 rounded-2xl pl-12 pr-10 py-4 text-base sm:text-lg text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-purple-500/20 shadow-2xl backdrop-blur-md transition-all"
            />
            <Search className="w-6 h-6 text-purple-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs bg-slate-800 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* Quick Copy Demo Pill */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
          <span>Sampel Populer:</span>
          <button
            onClick={handleQuickCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 hover:border-purple-500/50 text-purple-300 font-mono transition-all"
          >
            <span>★ ꧁༺Simbol Keren༻꧂ ♡</span>
            {copiedQuick ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
};
