'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { NAVIGATION_ITEMS } from '@/lib/navigation';
import { NavDropdown } from '@/components/navigation/NavDropdown';
import { MobileNavAccordion } from '@/components/navigation/MobileNavAccordion';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/70 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-purple-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-300 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-poppins flex items-center gap-1.5">
                Tulisan <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">Aesthetic</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-purple-600 dark:text-purple-400">
                AI Unicode Generator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Dropdowns */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAVIGATION_ITEMS.map((item) => (
              <NavDropdown
                key={item.id}
                item={item}
                pathname={pathname}
                lang={lang}
              />
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  lang === 'id'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                🇮🇩 ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                  lang === 'en'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-pink-400 transition-all duration-200"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <Link
              href="/"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {t.nav.generateBtn}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-200 dark:border-purple-900/30 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <MobileNavAccordion
                  key={item.id}
                  item={item}
                  pathname={pathname}
                  lang={lang}
                  onCloseMobileMenu={() => setMobileMenuOpen(false)}
                />
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Bahasa:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLang('id')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    lang === 'id' ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  🇮🇩 ID
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                    lang === 'en' ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
