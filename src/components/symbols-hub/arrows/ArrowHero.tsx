'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, Copy, Check } from 'lucide-react';

interface ArrowHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onCopy: (msg: string) => void;
}

export const ArrowHero: React.FC<ArrowHeroProps> = ({
  searchQuery,
  setSearchQuery,
  onCopy,
}) => {
  const [copiedQuick, setCopiedQuick] = React.useState(false);

  const handleQuickCopy = () => {
    navigator.clipboard.writeText('➜ ➤ ➔ ➞ ↔️ ↩️');
    setCopiedQuick(true);
    onCopy('Kombinasi panah populer berhasil disalin!');
    setTimeout(() => setCopiedQuick(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-cyan-950/30 to-slate-950 text-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/15 to-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Unicode Arrow Symbols Collection 2026</span>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-teal-300 to-cyan-400">
            Arrow Symbols (Simbol Panah)
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Browse and copy stylish Unicode arrow symbols instantly for social media, gaming, presentations, websites, and creative text.
        </motion.p>

        {/* Live Search Box */}
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
              placeholder="Cari simbol panah (contoh: right, left, double, curved, bow, math)..."
              className="w-full bg-slate-900/90 border-2 border-cyan-500/40 focus:border-cyan-400 rounded-2xl pl-12 pr-10 py-4 text-base sm:text-lg text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 shadow-2xl backdrop-blur-md transition-all"
            />
            <Search className="w-6 h-6 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
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
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 hover:border-cyan-500/50 text-cyan-300 font-mono transition-all"
          >
            <span>➜ ➤ ➔ ➞ ↔️ ↩️</span>
            {copiedQuick ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
};
