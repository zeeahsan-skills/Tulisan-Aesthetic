'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// Clean SVG Social Icons
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.3 1.54-1.28 2.55.01.89.47 1.76 1.2 2.27.81.57 1.87.69 2.8.34 1.02-.37 1.74-1.32 1.83-2.41.04-2.82.01-5.64.02-8.46 0-1.48.01-2.96 0-4.44z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterXIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.127c-.598.348-1.22.648-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

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

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-pink-400 hover:bg-slate-800 transition"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-teal-400 hover:bg-slate-800 transition"
              >
                <TikTokIcon />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-red-400 hover:bg-slate-800 transition"
              >
                <YouTubeIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <TwitterXIcon />
              </a>
              <a
                href="#"
                aria-label="Discord"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 transition"
              >
                <DiscordIcon />
              </a>
            </div>
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
                <Link href="/#font-generator" className="hover:text-pink-400 transition">
                  {t.nav.fontStyles}
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
          <p>© 2026 Tulisan Aesthetic. {t.footer.rights}</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> untuk Creator & Gamer Indonesia
          </p>
        </div>

      </div>
    </footer>
  );
}
