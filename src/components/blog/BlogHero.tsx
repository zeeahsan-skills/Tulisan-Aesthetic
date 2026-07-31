'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search } from 'lucide-react';

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const BlogHero: React.FC<BlogHeroProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-950 text-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/15 to-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <BookOpen className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>Knowledge & Education Hub 2026</span>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-300 to-indigo-300">
            Tulisan Aesthetic Blog
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Learn everything about stylish fonts, Unicode, symbols, gaming names, and social media text.
        </motion.p>

        {/* Live Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto relative"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul artikel atau topik (contoh: bio instagram, free fire, whatsapp, kaomoji)..."
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
      </div>
    </section>
  );
};
