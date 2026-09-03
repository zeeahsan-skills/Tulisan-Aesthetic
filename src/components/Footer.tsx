'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';



export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-poppins">
                Tulisan <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Aesthetic</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.about}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-poppins">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-pink-400 transition">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/font" className="hover:text-pink-400 transition">
                  Direktori Font
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-pink-400 transition">
                  {t.nav.platforms}
                </Link>
              </li>
              <li>
                <Link href="/game" className="hover:text-pink-400 transition">
                  {t.nav.games}
                </Link>
              </li>
              <li>
                <Link href="/simbol" className="hover:text-pink-400 transition">
                  {t.nav.symbols}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-pink-400 transition">
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-poppins">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-pink-400 transition">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-pink-400 transition">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-pink-400 transition">
                  {t.footer.disclaimer}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-400 transition">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="hover:text-pink-400 transition">
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <Link
              href="/contact"
              className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-xl"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-poppins group-hover:text-purple-400 transition">
                {t.footer.contact}
              </h4>
              <p className="text-sm leading-relaxed mt-2 text-slate-400 group-hover:text-slate-300 transition">
                Punya pertanyaan atau saran fitur baru? Hubungi tim pengembang kami.
              </p>
            </Link>
            <div className="pt-1">
              <a
                href="mailto:infoahsan665@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-pink-400 transition-colors underline decoration-purple-400/30 hover:decoration-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
              >
                infoahsan665@gmail.com
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-block text-xs font-bold text-slate-300 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded"
            >
              Halaman Kontak →
            </Link>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© Tulisan Aesthetic. {t.footer.rights}</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> untuk Creator & Gamer Indonesia
          </p>
        </div>

      </div>
    </footer>
  );
}
