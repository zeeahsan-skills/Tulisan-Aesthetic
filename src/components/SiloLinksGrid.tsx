'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link2, ArrowRight, Sparkles, Gamepad2, Share2, Compass } from 'lucide-react';

export function SiloLinksGrid() {
  const fontStyleLinks = [
    { title: 'Font Gelembung (Bubble)', href: '/font/gelembung', sample: 'Ⓣⓤⓛⓘⓢⓐⓝ' },
    { title: 'Font Tebal (Bold Sans/Serif)', href: '/font/tebal', sample: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻' },
    { title: 'Font Gothic & Fraktur', href: '/font/gothic-fraktur', sample: '𝕿𝖚𝖑𝖎𝖘𝖆𝖓' },
    { title: 'Font Tiny & Small Caps', href: '/font/tiny', sample: 'ᵀᵁᴸᴵˢᴬᴺ' },
    { title: 'Font Terhubung / Cursive', href: '/font/terhubung', sample: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃' },
    { title: 'Font Menakutkan (Glitch Zalgo)', href: '/font/menakutkan', sample: 'T̷u̷l̷i̷s̷a̷n̷' },
    { title: 'Font Garis (Typewriter)', href: '/font/garis', sample: '𝚃𝚞𝚕𝚒𝚜𝚊𝚗' },
    { title: 'Nama Keren & Decor Mix', href: '/font/nama-keren', sample: '꧁༺ ᵀᵁᴸᴵˢᴬᴺ ༻꧂' },
  ];

  const gamingLinks = [
    { title: 'Nickname Free Fire (FF)', href: '/free-fire', desc: 'Simbol mahkota, sayap & font tebal FF' },
    { title: 'Nickname Mobile Legends (MLBB)', href: '/mobile-legends', desc: 'Font aesthetic squad & pro player ML' },
    { title: 'Nickname PUBG Mobile', href: '/pubg-mobile', desc: 'Teks gothic & karakter Jepang PUBG' },
    { title: 'Nickname Call of Duty (COD)', href: '/cod-mobile', desc: 'Simbol senjata & font militer CODM' },
    { title: 'Nickname Roblox Aesthetic', href: '/roblox', desc: 'Font imut & simbol cute Roblox' },
    { title: 'Katalog Nama Game Keren', href: '/nama-game-keren', desc: 'Kumpulan 1000+ preset nama game' },
  ];

  const platformLinks = [
    { title: 'Font Media Sosial Hub', href: '/font-media-sosial', desc: 'Panduan format bio IG, WA & TikTok' },
    { title: 'Katalog Simbol & Kaomoji', href: '/simbol', desc: 'Kaomoji imut (⁠っ⁠.⁠❛⁠ ⁠.⁠❛⁠)⁠っ & simbol bintang' },
  ];

  return (
    <section id="silo-navigation" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400 inline-flex items-center gap-1.5">
            <Link2 className="w-3.5 h-3.5" />
            Kluster Navigasi Internal (Topic Silo)
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Jelajahi Generator & Sub-Katalog Terkait
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Pilih kategori gaya font, platform media sosial, atau game favorit Anda di bawah ini untuk mendapatkan rekomendasi preset khusus.
          </p>
        </div>

        {/* Silo Category 1: Font Styles */}
        <div className="mt-14">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600 dark:text-pink-400" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Katalog Gaya Font Specific
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {fontStyleLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="group p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-purple-900/30 hover:border-purple-500/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-purple-600 dark:text-pink-400 block mb-1">
                    {item.sample}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <div className="mt-3 flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-purple-600 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Silo Category 2: Gaming Hubs */}
        <div className="mt-14">
          <div className="flex items-center gap-2 mb-6">
            <Gamepad2 className="w-5 h-5 text-pink-500" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Katalog Nickname Game Esports
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gamingLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="group p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-purple-900/30 hover:border-pink-500/50 hover:shadow-md transition-all flex items-center justify-between gap-4"
              >
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-pink-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 shrink-0 group-hover:translate-x-1 group-hover:text-pink-500 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Silo Category 3: Platforms & Symbols */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {platformLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group p-6 rounded-3xl bg-gradient-to-r from-purple-900/10 to-pink-900/10 border border-purple-500/20 hover:border-purple-500/50 transition-all flex items-center justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {item.desc}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-purple-600 dark:text-pink-400 shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
