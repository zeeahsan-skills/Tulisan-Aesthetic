'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SYMBOL_CATEGORIES } from '@/lib/symbols';
import { Search, Copy, Check, Trash2, Filter } from 'lucide-react';

interface SymbolsSearchSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (catId: string) => void;
  onCopy: (msg: string) => void;
}

export const SymbolsSearchSection: React.FC<SymbolsSearchSectionProps> = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  onCopy,
}) => {
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);
  const [collectedSymbols, setCollectedSymbols] = useState<string>('');

  // Filter logic
  const filteredCategories = SYMBOL_CATEGORIES.filter((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchCat = cat.name.toLowerCase().includes(q) || cat.id.toLowerCase().includes(q);
    const matchItem = cat.items.some((item) => item.toLowerCase().includes(q));
    return matchCat || matchItem;
  });

  const handleCopySingle = (symbol: string) => {
    navigator.clipboard.writeText(symbol);
    setCopiedSymbol(symbol);
    onCopy(`Simbol ${symbol} berhasil disalin!`);
    setTimeout(() => setCopiedSymbol(null), 1500);
  };

  const handleAddSymbol = (symbol: string) => {
    setCollectedSymbols((prev) => prev + symbol);
    onCopy(`Simbol ${symbol} ditambahkan ke baris!`);
  };

  const handleCopyCollected = () => {
    if (!collectedSymbols) return;
    navigator.clipboard.writeText(collectedSymbols);
    onCopy('Kombinasi simbol berhasil disalin ke clipboard!');
  };

  return (
    <section id="search-symbols-section" className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Search & Filter Symbols Library
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Cari simbol spesifik atau buat kombinasi simbol khusus di baris penyalinan di bawah ini.
          </p>
        </div>

        {/* Multi-Symbol Builder & Search Header */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 mb-8 shadow-xl max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama simbol, kaomoji, atau kategori..."
              className="w-full bg-slate-950 border border-slate-700 focus:border-purple-500 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            <button
              onClick={() => setActiveCategory('all')}
              className={`py-1 px-3 rounded-full text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
              }`}
            >
              Semua Kategori
            </button>
            {SYMBOL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-1 px-3 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Multi-Symbol Copy Bar */}
          <div className="bg-slate-950 p-3 rounded-xl border border-purple-500/30 flex items-center justify-between gap-3">
            <div className="flex-1 overflow-x-auto text-base sm:text-lg font-mono text-purple-200 min-h-[32px] flex items-center px-2 select-all">
              {collectedSymbols || <span className="text-xs text-slate-600 font-sans">Ketuk simbol di bawah untuk menggabungkan di sini...</span>}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setCollectedSymbols('')}
                disabled={!collectedSymbols}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-red-400 disabled:opacity-40 transition-colors"
                title="Hapus kombinasi"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyCollected}
                disabled={!collectedSymbols}
                className="flex items-center gap-1.5 py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-600/20 disabled:opacity-40 transition-all"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Kombinasi</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filtered Symbol Grids per Category */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm">Tidak ada simbol yang cocok dengan kata kunci pencarian Anda.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-xs font-semibold text-purple-400 hover:underline"
              >
                Reset Filter Pencarian
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.id} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
                  <h3 className="text-lg font-bold text-purple-300">{cat.name}</h3>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
                    {cat.items.length} Simbol
                  </span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2.5">
                  {cat.items.map((symbol, idx) => {
                    const isCopied = copiedSymbol === symbol;

                    return (
                      <motion.button
                        key={`${symbol}-${idx}`}
                        onClick={() => handleCopySingle(symbol)}
                        onContextMenu={(e) => {
                          e.preventDefault();
                          handleAddSymbol(symbol);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-xl border text-xl sm:text-2xl font-mono flex items-center justify-center transition-all select-all ${
                          isCopied
                            ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                            : 'bg-slate-950/80 border-slate-800/90 text-slate-100 hover:border-purple-500/60 hover:bg-purple-950/40'
                        }`}
                        title={`Klik untuk salin "${symbol}" (Klik kanan untuk tambah ke baris)`}
                      >
                        {isCopied ? <Check className="w-5 h-5 text-white" /> : symbol}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
