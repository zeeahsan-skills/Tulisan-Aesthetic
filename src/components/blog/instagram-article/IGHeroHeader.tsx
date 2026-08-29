'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { INSTAGRAM_ARTICLE_META } from '@/lib/instagram-article';
import { Clock, User, Calendar, Share2, Sparkles, ChevronRight, Camera } from 'lucide-react';

interface IGHeroHeaderProps {
  onCopy: (msg: string) => void;
}

export const IGHeroHeader: React.FC<IGHeroHeaderProps> = ({ onCopy }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: INSTAGRAM_ARTICLE_META.title,
          text: INSTAGRAM_ARTICLE_META.subtitle,
          url: window.location.href,
        });
        onCopy('Berhasil membagikan tautan artikel!');
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      onCopy('Tautan artikel disalin ke clipboard!');
    }
  };

  return (
    <section className="pt-10 pb-12 bg-gradient-to-b from-slate-900 via-pink-950/30 to-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
          <Link href="/" className="hover:text-pink-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-pink-400 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-pink-300 font-semibold truncate max-w-[200px] sm:max-w-none">
            {INSTAGRAM_ARTICLE_META.title}
          </span>
        </nav>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold mb-4"
        >
          <Camera className="w-3.5 h-3.5 text-pink-400" />
          <span>{INSTAGRAM_ARTICLE_META.category}</span>
        </motion.div>

        {/* Article Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-100 via-purple-200 to-rose-200"
        >
          {INSTAGRAM_ARTICLE_META.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed"
        >
          {INSTAGRAM_ARTICLE_META.subtitle}
        </motion.p>

        {/* Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <User className="w-4 h-4 text-pink-400" />
              {INSTAGRAM_ARTICLE_META.author}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700/60 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-pink-400" />
            <span>Bagikan Artikel</span>
          </button>
        </div>
      </div>
    </section>
  );
};
