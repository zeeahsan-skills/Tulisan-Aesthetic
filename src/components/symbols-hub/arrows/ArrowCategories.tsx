'use client';

import React from 'react';
import { ARROW_CATEGORIES_LIST } from '@/lib/arrow-symbols';

interface ArrowCategoriesProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export const ArrowCategories: React.FC<ArrowCategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8 px-4">
      {ARROW_CATEGORIES_LIST.map((cat) => {
        const isActive = activeCategory === cat;

        return (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isActive
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
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
