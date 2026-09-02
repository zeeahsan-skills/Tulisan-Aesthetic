'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Type,
  PenTool,
  Hash,
  Smile,
  ArrowRight,
  Wand2,
  Compass,
} from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export function PopularTools() {
  const tools = [
    {
      title: 'Instagram Fonts',
      href: '/platform/instagram',
      sample: '𝓣𝓊𝓁𝒾𝓈𝒶𝓃 𝒜ℯ𝓈𝓉𝒽ℯ𝓉𝒾𝒸',
      desc: 'Generator font estetik khusus untuk Bio, Caption, dan Story Instagram.',
      icon: InstagramIcon,
      gradient: 'from-amber-500 via-pink-500 to-purple-600',
    },
    {
      title: 'Discord Font Generator',
      href: '/platform/discord',
      sample: '𝕯𝖎𝖘𝖈𝖔𝖗𝖉 𝕽𝖔𝖑𝖊 𝕱𝖔𝖓𝖙',
      desc: 'Ubah teks nama server, channel, role VIP, dan About Me di Discord.',
      icon: DiscordIcon,
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Cursive Text',
      href: '/font/miring-kursif',
      sample: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 ℳ𝒾𝓇𝒾𝓃ℊ 𝒦𝓊𝓇𝓈𝒾𝒻',
      desc: 'Font miring dan tulisan tangan halus bergaya elegan & berkelas.',
      icon: PenTool,
      gradient: 'from-fuchsia-500 to-pink-600',
    },
    {
      title: 'Bold Font',
      href: '/font/tebal',
      sample: '𝗧𝗲𝗸𝘀 𝗧𝗲𝗯𝗮𝗹 𝗕𝗼𝗹𝗱',
      desc: 'Teks tebal sans-serif & serif Unicode yang langsung mencuri perhatian.',
      icon: Type,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Fancy Text',
      href: '/font/huruf-keren',
      sample: 'ᵀᵁᴸᴵˢᴬᴺ ᴴᵁᴿᵁᶠ ᴷᴱᴿᴱᴺ',
      desc: 'Gaya huruf keren aesthetic & superscript terpopuler untuk media sosial.',
      icon: Sparkles,
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Aesthetic Fonts',
      href: '/font/berkilau',
      sample: '✧･ﾟTulisan Berkilau･ﾟ✧',
      desc: 'Koleksi font estetik dengan efek kilauan bintang & dekorasi unik.',
      icon: Wand2,
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Small Text',
      href: '/font/tiny',
      sample: 'ᵀᴵᴺʸ ˢᴹᴬᴸᴸ ᶜᴬᴾˢ',
      desc: 'Teks berukuran mini Small Caps yang rapi untuk bio & pesan singkat.',
      icon: Hash,
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Symbols',
      href: '/simbol',
      sample: '★ 👑 ♡ ✿ ⚡ ✦',
      desc: 'Katalog ribuan simbol Unicode, bintang, mahkota & kaomoji aesthetic.',
      icon: Smile,
      gradient: 'from-orange-500 to-amber-600',
    },
  ];

  return (
    <section id="popular-tools" className="py-12 sm:py-16 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 inline-flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            Navigasi Utama Generator
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Popular Font Tools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Akses cepat ke generator teks estetik, gaya font Unicode favorit, dan simbol khusus populer.
          </p>
        </div>

        {/* Tools Cards Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
              >
                <Link
                  href={tool.href}
                  className="group relative h-full rounded-3xl p-6 bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Sample */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${tool.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Icon />
                      </div>
                      <span className="text-xs font-mono text-purple-600 dark:text-pink-400 bg-purple-500/10 dark:bg-purple-500/20 px-2.5 py-1 rounded-lg border border-purple-500/20">
                        {tool.sample}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors">
                      {tool.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-pink-400 group-hover:translate-x-0.5 transition-transform">
                    <span>Buka Generator</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
