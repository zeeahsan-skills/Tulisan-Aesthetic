'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Heart, Share2, Check } from 'lucide-react';
import { POPULAR_SYMBOLS_LIST } from '@/lib/symbols';

interface PopularSymbolsSectionProps {
  onCopy: (msg: string) => void;
}

export const PopularSymbolsSection: React.FC<PopularSymbolsSectionProps> = ({ onCopy }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('hub_fav_symbols');
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      // Ignore
    }
  }, []);

  const toggleFavorite = (symbol: string) => {
    let updated: string[];
    if (favorites.includes(symbol)) {
      updated = favorites.filter((s) => s !== symbol);
      onCopy('Dihapus dari Favorit');
    } else {
      updated = [...favorites, symbol];
      onCopy('Simbol ditambahkan ke Favorit ❤️');
    }
    setFavorites(updated);
    try {
      localStorage.setItem('hub_fav_symbols', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleCopy = (symbol: string) => {
    navigator.clipboard.writeText(symbol);
    setCopiedSymbol(symbol);
    onCopy(`Simbol ${symbol} berhasil disalin!`);
    setTimeout(() => setCopiedSymbol(null), 2000);
  };

  const handleShare = async (symbol: string, name: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Simbol Keren ${name}`,
          text: `Salin simbol ${symbol} (${name}) dari Tulisan Aesthetic: ${window.location.href}`,
          url: window.location.href,
        });
        onCopy('Berhasil dibagikan!');
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(symbol);
      onCopy(`Simbol ${symbol} disalin ke clipboard!`);
    }
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Popular Copyable Symbols
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            10 simbol Unicode paling sering disalin dan digunakan di sosial media & game. Ketuk tombol <strong className="text-purple-300">Copy</strong>, <strong className="text-pink-400">Favorite</strong>, atau <strong className="text-cyan-400">Share</strong> pada kartu simbol.
          </p>
        </div>

        {/* Popular Symbol Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {POPULAR_SYMBOLS_LIST.map((item, idx) => {
            const isFav = favorites.includes(item.symbol);
            const isCopied = copiedSymbol === item.symbol;

            return (
              <motion.div
                key={item.symbol}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-4 shadow-lg flex flex-col justify-between group transition-all"
              >
                {/* Symbol Header */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[11px] font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 truncate">
                    {item.category}
                  </span>
                  <button
                    onClick={() => toggleFavorite(item.symbol)}
                    className={`p-1 rounded-lg transition-colors ${
                      isFav
                        ? 'text-pink-500 bg-pink-500/10'
                        : 'text-slate-400 hover:text-pink-400'
                    }`}
                    title={isFav ? 'Hapus Favorit' : 'Simpan Favorit'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-pink-500' : ''}`} />
                  </button>
                </div>

                {/* Big Symbol Preview Display */}
                <div
                  onClick={() => handleCopy(item.symbol)}
                  className="my-3 py-4 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-center text-4xl sm:text-5xl cursor-pointer hover:bg-purple-950/40 hover:border-purple-500/40 transition-all select-all font-mono shadow-inner"
                  title="Klik untuk menyalin"
                >
                  {item.symbol}
                </div>

                {/* Name & Actions */}
                <div>
                  <div className="text-xs font-bold text-slate-200 text-center mb-2 truncate">
                    {item.name}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      onClick={() => handleShare(item.symbol, item.name)}
                      className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700/60"
                      title="Bagikan"
                    >
                      <Share2 className="w-3 h-3 text-cyan-400" />
                      <span>Share</span>
                    </button>

                    <button
                      onClick={() => handleCopy(item.symbol)}
                      className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg font-semibold transition-all ${
                        isCopied
                          ? 'bg-emerald-600 text-white'
                          : 'bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/20'
                      }`}
                    >
                      {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
