'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { transformText } from '@/lib/unicode-engine';

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

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.127 4.12 4.17-1.093z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.127c-.598.348-1.22.648-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

interface PlatformPillarHeroProps {
  onCopy: (msg: string) => void;
}

export function PlatformPillarHero({ onCopy }: PlatformPillarHeroProps) {
  const [inputText, setInputText] = useState('Social Media Aesthetic');
  const [activePlatform, setActivePlatform] = useState<'instagram' | 'tiktok' | 'whatsapp' | 'facebook' | 'discord'>('instagram');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const platformPresets = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: InstagramIcon,
      gradient: 'from-pink-500 via-rose-500 to-purple-600',
      badge: 'Bio & Story',
      styles: [
        { id: 'huruf-keren', label: 'Small Caps Bio', styleId: 'huruf-keren' },
        { id: 'cursive-script', label: 'Aesthetic Script', styleId: 'cursive-script' },
        { id: 'bubble-light', label: 'Circled Highlights', styleId: 'bubble-light' },
        { id: 'bold-sans', label: 'Clean Bold', styleId: 'bold-sans' },
      ],
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: TikTokIcon,
      gradient: 'from-cyan-500 via-teal-500 to-slate-900',
      badge: 'FYP Caption',
      styles: [
        { id: 'bold-sans', label: 'Bold Title Hook', styleId: 'bold-sans' },
        { id: 'glitch-zalgo', label: 'Cyber Glitch', styleId: 'glitch-zalgo' },
        { id: 'sparkle-deco', label: 'Sparkle Title', styleId: 'sparkle-deco' },
        { id: 'border-wings', label: 'Wings Decor', styleId: 'border-wings' },
      ],
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      gradient: 'from-emerald-500 to-green-600',
      badge: 'Info & Status',
      styles: [
        { id: 'bold-sans', label: 'Format Tebal', styleId: 'bold-sans' },
        { id: 'cursive-script', label: 'Status Cantik', styleId: 'cursive-script' },
        { id: 'dark-bubble', label: 'Lingkaran Hitam', styleId: 'dark-bubble' },
        { id: 'square-box', label: 'Abjad Kotak', styleId: 'square-box' },
      ],
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: FacebookIcon,
      gradient: 'from-blue-600 to-indigo-700',
      badge: 'Post & Bio',
      styles: [
        { id: 'double-struck', label: 'Double Struck', styleId: 'double-struck' },
        { id: 'fraktur-regular', label: 'Blackletter', styleId: 'fraktur-regular' },
        { id: 'vaporwave', label: 'Fullwidth Retro', styleId: 'vaporwave' },
        { id: 'bold-sans', label: 'Header Post', styleId: 'bold-sans' },
      ],
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: DiscordIcon,
      gradient: 'from-indigo-500 to-purple-600',
      badge: 'Server Role',
      styles: [
        { id: 'gothic-bold', label: 'Gothic Role Name', styleId: 'gothic-bold' },
        { id: 'huruf-keren', label: 'Small Caps Channel', styleId: 'huruf-keren' },
        { id: 'bracket-style', label: 'Cross Swords Tag', styleId: 'bracket-style' },
        { id: 'star-borders', label: 'Stars Deco', styleId: 'star-borders' },
      ],
    },
  ];

  const currentPlatformObj = platformPresets.find((p) => p.id === activePlatform) || platformPresets[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onCopy('Font platform berhasil disalin!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
          <a href="/" className="hover:text-purple-400 transition">Home</a>
          <span>/</span>
          <span className="text-purple-300">Platform Fonts</span>
        </nav>

        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold uppercase tracking-wider text-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Central Hub Font Media Sosial
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight font-poppins leading-tight">
            Font Generator <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Platform Media Sosial</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pusat alat generator huruf aesthetic untuk bio Instagram, caption TikTok, status WhatsApp, postingan Facebook, hingga nama role Discord 100% gratis tanpa aplikasi.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-purple-900/40 shadow-2xl shadow-purple-500/10 backdrop-blur-xl">
          
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-slate-800">
            {platformPresets.map((p) => {
              const Icon = p.icon;
              const isActive = activePlatform === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePlatform(p.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-r ${p.gradient} text-white shadow-lg shadow-purple-500/20`
                      : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon />
                  {p.name}
                  <span className="text-[10px] opacity-80 font-normal">({p.badge})</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Ketik Teks Profil / Caption Anda:
            </label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ketik kata untuk bio atau status..."
              className="w-full px-5 py-4 text-lg sm:text-xl font-medium rounded-2xl bg-slate-950 border border-purple-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentPlatformObj.styles.map((item) => {
              const transformed = transformText(inputText || 'Social Media', item.styleId);
              const isCopied = copiedId === item.id;

              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-purple-500/50 transition flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                      {item.label}
                    </span>
                    <p className="text-lg font-mono text-white break-all select-all py-1">
                      {transformed}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(transformed, item.id)}
                    className={`mt-3 w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                      isCopied
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-800 hover:bg-purple-600 text-slate-200 hover:text-white border border-slate-700'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {isCopied ? 'Tersalin!' : 'Salin Teks'}
                  </button>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
