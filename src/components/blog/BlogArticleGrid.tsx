'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS_DATA } from '@/lib/blog-posts';
import { Clock, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogArticleGridProps {
  searchQuery: string;
  activeCategory: string;
}

export const BlogArticleGrid: React.FC<BlogArticleGridProps> = ({
  searchQuery,
  activeCategory,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  // Filter posts
  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    if (activeCategory !== 'All Articles' && post.category !== activeCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.description.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q) ||
      post.author.toLowerCase().includes(q)
    );
  });

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage) || 1;
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-12 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-100">
            Latest Articles
          </h2>
          <div className="text-sm font-semibold text-slate-400">
            Menampilkan <span className="text-purple-400 font-bold">{filteredPosts.length}</span> Artikel
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">Tidak ada artikel yang cocok dengan kriteria pencarian Anda.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedPosts.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  className="bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between group transition-all"
                >
                  {/* Cover Graphic Header */}
                  <div className={`h-44 bg-gradient-to-r ${post.coverGradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {post.category}
                      </span>
                      <span className="text-[11px] font-semibold text-white/90 bg-black/30 backdrop-blur-md px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                    </div>

                    <div className="text-white text-xs font-semibold z-10 opacity-90 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span> • <span>{post.publishDate}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-purple-300 transition-colors mb-2 line-clamp-2 leading-snug">
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
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 transition-colors"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${
                      currentPage === page
                        ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-40 disabled:hover:text-slate-400 transition-colors"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
