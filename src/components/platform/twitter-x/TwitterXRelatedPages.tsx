'use client';

import React from 'react';
import { ArrowRight, Sparkles, Share2, Gamepad2, Layers } from 'lucide-react';

export function TwitterXRelatedPages() {
  const links = [
    { title: 'Font Instagram', desc: 'Generator font aesthetic khusus Bio & Caption Instagram.', href: '/platform/instagram', icon: Share2 },
    { title: 'Font TikTok', desc: 'Gaya tulisan unik untuk Bio & Komentar video TikTok.', href: '/platform/tiktok', icon: Share2 },
    { title: 'Font WhatsApp', desc: 'Percantik Info profil & Status teks WhatsApp harian.', href: '/platform/whatsapp', icon: Share2 },
    { title: 'Font Tebal (Bold)', desc: 'Kumpulan gaya font tebal Unicode Sans & Serif.', href: '/font/tebal', icon: Sparkles },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
            Jelajahi Generator Platform Terkait
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Temukan generator spesifik untuk platform sosial media dan gaya font pilihan lainnya.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className="group p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-purple-900/30 hover:border-purple-500/50 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-pink-400 group-hover:translate-x-1 transition-transform">
                  <span>Buka Alat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
