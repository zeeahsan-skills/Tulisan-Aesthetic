'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Copy,
  Check,
  Star,
  Share2,
  Shuffle,
  Trash2,
  Search,
  Wand2,
  Layers,
} from 'lucide-react';
import { FIFTY_FONT_STYLES, FontStyle } from '@/lib/unicode-engine';
import { getFontPageConfig } from '@/lib/font-page-configs';
import { useZoom } from '@/hooks/useZoom';
import { ZoomSlider } from '@/components/ZoomSlider';

interface FontGeneratorProps {
  title?: string;
  subtitle?: string;
  defaultText?: string;
  onCopy?: (msg: string) => void;
  presetCategory?: string;
  isH1?: boolean;
  pageSlug?: string;
  customStyles?: FontStyle[];
}

export function FontGenerator({
  title,
  subtitle,
  defaultText,
  onCopy,
  presetCategory = 'All',
  isH1 = false,
  pageSlug,
  customStyles,
}: FontGeneratorProps) {
  // Load configuration if pageSlug is provided
  const config = pageSlug ? getFontPageConfig(pageSlug) : undefined;

  const displayTitle = title || config?.title || 'Generator 50 Font Unicode Aesthetic';
  const displaySubtitle = subtitle || config?.subtitle || 'Ketik teks Anda di bawah ini dan dapatkan 50 variasi gaya font Unicode unik, aesthetic, dan siap salin.';
  const initialText = defaultText || config?.defaultText || 'Tulisan Aesthetic';

  const [inputText, setInputText] = useState(initialText);
  const [activeCategory, setActiveCategory] = useState<string>(presetCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const { zoom, setZoom, resetZoom } = useZoom();

  // Determine base 50 styles to use
  const targetStyles = useMemo(() => {
    if (customStyles && customStyles.length > 0) return customStyles;
    if (config) return config.getStyles();
    return FIFTY_FONT_STYLES;
  }, [customStyles, config]);

  // Load favorites from localStorage on mount (hydration safe)
  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem('tulisan_fav_fonts');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Save favorites to localStorage
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('tulisan_fav_fonts', JSON.stringify(updated));
      } catch {
        // Ignore localStorage errors
      }
      return updated;
    });
  };

  const categories = ['All', 'Popular', 'Gaming', 'Cute', 'Gothic', 'Fancy', 'Simple', 'Favorites'];

  // Calculate transformed 50 styles efficiently
  const fontCards = useMemo(() => {
    const rawText = inputText || 'Tulisan Aesthetic';
    return targetStyles.map((style) => ({
      ...style,
      result: style.transform(rawText),
    }));
  }, [inputText, targetStyles]);

  // Filter styles based on category, search query & favorites with automated output deduplication
  const filteredStyles = useMemo(() => {
    const seenResults = new Set<string>();

    return fontCards.filter((style) => {
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = style.name.toLowerCase().includes(query);
        const matchesCategory = style.category.toLowerCase().includes(query);
        const matchesResult = style.result.toLowerCase().includes(query);
        if (!matchesName && !matchesCategory && !matchesResult) return false;
      }

      // Category filter
      if (activeCategory === 'Favorites') {
        if (!favorites.includes(style.id)) return false;
      } else if (activeCategory !== 'All') {
        if (style.category !== activeCategory) return false;
      }

      // Deduplication: prevent duplicate output cards for identical transformed strings
      if (style.result && seenResults.has(style.result)) {
        return false;
      }
      if (style.result) {
        seenResults.add(style.result);
      }

      return true;
    });
  }, [fontCards, activeCategory, searchQuery, favorites]);

  const handleCopySingle = (text: string, styleId: string, styleName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(styleId);
    if (onCopy) {
      onCopy(`Gaya "${styleName}" berhasil disalin!`);
    }
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const allFormatted = filteredStyles
      .map((s) => `${s.name}:\n${s.result}`)
      .join('\n\n');
    navigator.clipboard.writeText(allFormatted);
    if (onCopy) {
      onCopy(`Berhasil menyalin ${filteredStyles.length} gaya font!`);
    }
  };

  const handleShare = async (text: string, styleName: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Tulisan Aesthetic - ${styleName}`,
          text: text,
          url: typeof window !== 'undefined' ? window.location.href : '',
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    navigator.clipboard.writeText(text);
    if (onCopy) {
      onCopy(`Teks "${text}" disalin untuk dibagikan!`);
    }
  };

  const handleRandomize = () => {
    const phrases = [
      'Aesthetic Vibes',
      'Pro Gamer FF',
      'Soft Girl Aesthetic',
      'Cyberpunk',
      'Ninja Assassin',
      'Sweet Angel ♡',
      'King Slayer ⚔️',
      'Star Girl ✨',
    ];
    const next = phrases[Math.floor(Math.random() * phrases.length)];
    setInputText(next);
  };

  return (
    <section id="font-generator" className="relative pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-600/15 via-pink-500/15 to-indigo-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs sm:text-sm font-bold text-purple-700 dark:text-pink-300"
          >
            <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />
            <span>EXACTLY 50 UNIQUE STYLES</span>
          </motion.div>

          {isH1 ? (
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-poppins leading-tight"
            >
              {displayTitle}
            </motion.h1>
          ) : (
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-poppins leading-tight"
            >
              {displayTitle}
            </motion.h2>
          )}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            {displaySubtitle}
          </motion.p>
        </div>

        {/* Input Box Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-4xl mx-auto bg-white/90 dark:bg-slate-900/90 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-purple-900/40 shadow-2xl shadow-purple-500/10 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-700 dark:text-pink-300 flex items-center gap-2">
              <Wand2 className="w-4 h-4 text-purple-600 dark:text-pink-400" />
              Input Teks Anda:
            </label>
            {inputText && (
              <button
                onClick={() => setInputText('')}
                className="text-xs font-semibold text-rose-500 hover:text-rose-600 dark:text-rose-400 flex items-center gap-1 hover:underline transition"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Hapus Teks
              </button>
            )}
          </div>

          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ketik kata atau kalimat di sini..."
            rows={2}
            className="w-full px-4 py-3 sm:py-4 text-lg sm:text-2xl font-medium rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-purple-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none shadow-inner"
          />

          {/* Action Row */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleCopySingle(inputText, 'main', 'Input Teks')}
              className="flex-1 min-w-[140px] px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-bold text-sm shadow-lg shadow-purple-500/25 transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <Sparkles className="w-4 h-4" />
              Salin Teks Utama
            </button>

            <button
              onClick={handleCopyAll}
              className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition flex items-center gap-2 border border-slate-200/60 dark:border-slate-700"
            >
              <Copy className="w-4 h-4 text-purple-600 dark:text-pink-400" />
              Salin Semua ({filteredStyles.length})
            </button>

            <button
              onClick={handleRandomize}
              className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition flex items-center gap-2 border border-slate-200/60 dark:border-slate-700"
            >
              <Shuffle className="w-4 h-4 text-purple-600 dark:text-pink-400" />
              Acak Teks
            </button>
          </div>
        </motion.div>

        {/* Filter Controls & Search */}
        <div className="mt-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isFavTab = cat === 'Favorites';
              const count =
                cat === 'All'
                  ? 50
                  : cat === 'Favorites'
                  ? favorites.length
                  : fontCards.filter((s) => s.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-800'
                  }`}
                >
                  {isFavTab && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                  <span>{cat}</span>
                  <span className="opacity-70 text-[10px] px-1.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari gaya font..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>
        </div>

        {/* Zoom Slider Control */}
        <div className="mt-5 max-w-5xl mx-auto">
          <ZoomSlider zoom={zoom} onChange={setZoom} onReset={resetZoom} />
        </div>

        {/* 50 Font Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence>
            {filteredStyles.map((style, index) => {
              const isCopied = copiedId === style.id;
              const isFav = isMounted && favorites.includes(style.id);

              return (
                <motion.div
                  key={style.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.3) }}
                  className="group relative rounded-2xl p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 dark:hover:border-pink-500/50 shadow-md hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Category Badge & Actions */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-pink-300 border border-purple-500/20">
                          {style.category}
                        </span>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate max-w-[130px]">
                          {style.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(style.id)}
                          title="Simpan Favorit"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                        >
                          <Star
                            className={`w-4 h-4 ${
                              isFav ? 'text-amber-400 fill-amber-400' : ''
                            }`}
                          />
                        </button>

                        {/* Share Button */}
                        <button
                          onClick={() => handleShare(style.result, style.name)}
                          title="Bagikan Teks"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 dark:hover:text-pink-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Transformed Result Box */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 font-mono text-base sm:text-lg text-purple-700 dark:text-pink-300 break-all select-all leading-normal min-h-[56px] flex items-center overflow-x-auto">
                      <span style={{ fontSize: `${zoom}%` }} className="transition-[font-size] duration-75 ease-out">
                        {style.result || 'Teks Kosong'}
                      </span>
                    </div>
                  </div>

                  {/* Copy Button Footer */}
                  <div className="mt-4">
                    <button
                      onClick={() => handleCopySingle(style.result, style.id, style.name)}
                      className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 ${
                        isCopied
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Salin Style #{index + 1}</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty state if search/fav returns nothing */}
        {filteredStyles.length === 0 && (
          <div className="mt-12 text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-xl mx-auto">
            <Layers className="w-12 h-12 text-purple-400 mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tidak Ada Font Ditemukan</h3>
            <p className="text-sm text-slate-500 mt-1">
              {activeCategory === 'Favorites'
                ? 'Anda belum menambahkan font favorit. Klik bintang di kartu font untuk menyimpan!'
                : 'Coba ubah kata kunci pencarian Anda.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
