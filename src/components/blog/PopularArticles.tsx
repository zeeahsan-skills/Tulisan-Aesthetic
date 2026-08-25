'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BLOG_POSTS_DATA } from '@/lib/blog-posts';
import { TrendingUp, Clock, User, ArrowRight } from 'lucide-react';

export const PopularArticles: React.FC = () => {
  const popularPosts = BLOG_POSTS_DATA.filter((p) => p.isPopular);

  return (
    <section className="py-12 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            Trending & Popular Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all h-full"
              >
                {/* Cover Gradient Graphic Header */}
                <div className={`h-40 bg-gradient-to-r ${post.coverGradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {post.category}
                    </span>
                    <span className="text-[11px] font-semibold text-white/90 bg-black/30 backdrop-blur-md px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <div className="text-white text-xs font-semibold z-10 opacity-90 flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span> • <span>{post.publishDate}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-purple-300 transition-colors mb-2.5 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-6">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-purple-400 group-hover:text-purple-300 flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
