'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.3 1.54-1.28 2.55.01.89.47 1.76 1.2 2.27.81.57 1.87.69 2.8.34 1.02-.37 1.74-1.32 1.83-2.41.04-2.82.01-5.64.02-8.46 0-1.48.01-2.96 0-4.44z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.127 4.12 4.17-1.093z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.127c-.598.348-1.22.648-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const TwitterXIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export function PlatformComparisonGrid() {
  const platformCards = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: InstagramIcon,
      gradient: 'from-pink-500 via-rose-500 to-purple-600',
      href: '/platform/instagram',
      limit: '150 Karakter Bio',
      formatting: 'Unicode, Small Caps, Script',
      bestUses: ['Bio Profil Aesthetic', 'Highlight Story Cover', 'Caption Postingan IG'],
      recommendedFont: 'ᵀᵁᴸᴵˢᴬᴺ ᴬᴱˢᵀᴴᴱᵀᴵᶜ / 𝒯𝓊𝓁ⓘ𝓈𝒶𝓃',
      ctaText: 'Generator Font Instagram',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: TikTokIcon,
      gradient: 'from-cyan-500 via-teal-500 to-slate-900',
      href: '/platform/tiktok',
      limit: '80 Karakter Bio',
      formatting: 'Bold Titles, Glitch, Sparkle',
      bestUses: ['FYP Video Caption Hook', 'Bio Profil Singkat', 'Komentar Video Viral'],
      recommendedFont: '𝗧𝘂𝗹𝗶𝘀𝗮𝗻 𝗕𝗼𝗹𝗱 / T̷u̷l̷i̷s̷a̷n̷',
      ctaText: 'Generator Font TikTok',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      gradient: 'from-emerald-500 to-green-600',
      href: '/platform/whatsapp',
      limit: '139 Karakter Info',
      formatting: 'Markdown & Unicode Fonts',
      bestUses: ['Info Profil WA', 'Status Teks Aesthetic', 'Pesan Obrolan Highlight'],
      recommendedFont: 'Ⓣⓤⓛⓘ𝓈ⓐⓝ / 🅣🅤🅟🅘🅢🅐🅝',
      ctaText: 'Generator Font WhatsApp',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: FacebookIcon,
      gradient: 'from-blue-600 to-indigo-700',
      href: '/platform/facebook',
      limit: '101 Karakter Bio',
      formatting: 'Blackletter, Fullwidth, Bold',
      bestUses: ['Judul Postingan Fanpage', 'Bio Profil Facebook', 'Deskripsi Album Foto'],
      recommendedFont: '𝕿𝖚𝖑𝖎𝖘𝖆𝖓 / 𝚃𝚞𝚕𝚒𝚜𝚊𝚗',
      ctaText: 'Generator Font Facebook',
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: DiscordIcon,
      gradient: 'from-indigo-500 to-purple-600',
      href: '/platform/discord',
      limit: '32 Karakter Nickname',
      formatting: 'Gothic, Small Caps, Crosshair Tags',
      bestUses: ['Nama Role Server', 'Channel Category Text', 'Nickname Profil Member'],
      recommendedFont: '⚔️ ᴛᴜʟɪsᴀɴ ⚔️ / 𝕿𝖚𝖑𝖎𝖘𝖆𝖓',
      ctaText: 'Generator Font Discord',
    },
    {
      id: 'twitter-x',
      name: 'Twitter / X',
      icon: TwitterXIcon,
      gradient: 'from-slate-700 via-slate-800 to-black',
      href: '/platform/twitter-x',
      limit: '160 Karakter Bio',
      formatting: 'Monospace, Cursive, Small Caps',
      bestUses: ['Bio Akun Twitter / X', 'Tweet / Thread Hook', 'Display Name Estetik'],
      recommendedFont: 'ᴛᴡɪᴛᴛᴇʀ ˣ / 𝒯𝓌𝒾𝓉𝓉ℯ𝓇',
      ctaText: 'Generator Font Twitter / X',
    },
  ];

  return (
    <section id="featured-platforms" className="py-20 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
            Katalog Platform Terarah
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pilih Platform Media Sosial Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Setiap platform memiliki batas karakter dan aturan tipografi unik. Klik platform pilihan Anda untuk mengakses alat generator terdedikasi.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformCards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="group rounded-3xl p-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${card.gradient} text-white shadow-md`}>
                      <Icon />
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {card.limit}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white font-poppins">
                    {card.name}
                  </h3>

                  <div className="mt-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-sm font-semibold text-purple-600 dark:text-purple-300 truncate">
                    {card.recommendedFont}
                  </div>

                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-1">
                      Penggunaan Terbaik:
                    </span>
                    {card.bestUses.map((use, uIdx) => (
                      <div key={uIdx} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span>{use}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={card.href}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-500/20 flex items-center justify-center gap-2 group-hover:translate-x-0.5"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
