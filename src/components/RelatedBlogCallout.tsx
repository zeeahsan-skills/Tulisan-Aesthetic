'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';

export interface RelatedArticleItem {
  title: string;
  slug: string;
  desc: string;
  category?: string;
  badge?: string;
}

interface RelatedBlogCalloutProps {
  title?: string;
  subtitle?: string;
  articles: RelatedArticleItem[];
}

export function RelatedBlogCallout({
  title = 'Panduan & Tips Terkait',
  subtitle = 'Pelajari tutorial mendalam, trik optimasi, dan panduan praktis untuk memaksimalkan gaya tulisan Anda.',
  articles,
}: RelatedBlogCalloutProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-slate-900/50 border-t border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold uppercase tracking-wider text-purple-400 inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Edukasi & Tutorial
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white font-poppins">
            {title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Articles Grid */}
        <div
          className={`grid gap-6 ${
            articles.length === 1
              ? 'max-w-xl mx-auto grid-cols-1'
              : articles.length === 2
              ? 'max-w-4xl mx-auto grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {articles.map((art, idx) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="h-full"
            >
              <Link
                href={`/blog/${art.slug}`}
                className="group flex flex-col justify-between h-full p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/5 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {art.category || 'Artikel Panduan'}
                    </span>
                    {art.badge && (
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {art.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors font-poppins leading-snug">
                    {art.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {art.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-1">
                    Baca Panduan Lengkap
                  </span>
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Explore All Articles Hub Link */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Lihat Semua Artikel & Panduan di Blog Hub →</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
