'use client';

import React from 'react';
import { BLOG_CATEGORIES_LIST } from '@/lib/blog-posts';

interface BlogCategoriesProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export const BlogCategories: React.FC<BlogCategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10 px-4">
      {BLOG_CATEGORIES_LIST.map((cat) => {
        const isActive = activeCategory === cat;

        return (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isActive
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20 font-bold'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
