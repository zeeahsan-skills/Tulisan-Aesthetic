'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface DiscordExamplesProps {
  onCopy: (msg: string) => void;
}

export function DiscordExamples({ onCopy }: DiscordExamplesProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const presets = [
    {
      category: 'Shadow',
      title: 'Shadow Assassin & Dark Clan',
      preview: '꧁⚔️ 𝕊𝕙𝕒𝕕𝕠𝕨 𝔸𝕤𝕤𝕒𝕤𝕤𝕚𝕟 ⚔️꧂ | 🩸 Dark Realm Leader',
    },
    {
      category: 'Elite Gamer',
      title: 'Pro Player & Esports Role',
      preview: '🎮 𝕰𝖑𝖎𝖙𝖊 𝕲𝖆𝖒𝖊𝖗 🏆 | ⚡ Immortal Rank Player',
    },
    {
      category: 'Moderator',
      title: 'Server Admin & Staff Role',
      preview: '🛡️ 𝕊𝕖𝕣𝕧𝕖𝕣 𝕄𝕠𝕕𝕖𝕣𝕒𝕥𝕠𝕣 | 💬 Keeping Community Safe',
    },
    {
      category: 'Developer',
      title: 'Bot Creator & Code Specialist',
      preview: '💻 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝙱𝚘𝚝 🚀 | ⚡ Full Stack & Discord API',
    },
    {
      category: 'Music Bot',
      title: 'Music Radio & Audio Channel',
      preview: '🎧 ℳ𝓊𝓈𝒾𝒸 ℬℴ𝓉 𝟤𝟦/𝟩 🎶 | ✨ High Quality 320kbps Audio',
    },
    {
      category: 'Anime Fan',
      title: 'Wibu & Otaku Community',
      preview: '🌸 𝓐𝓃𝒾𝓂ℯ 𝒪𝓉𝒶𝓀𝓊 𝒞𝓁𝓊𝒷 ✨ | ⛩️ Daily Episode Stream',
    },
    {
      category: 'Night Owl',
      title: 'Obrolan Malam & Chill Lounge',
      preview: '🦉 ℕ𝕚𝕘𝕙𝕥 𝕆𝕨𝕝𝕤 ℂ𝕝𝕦𝕓 🌙 | ☕ Late Night Chats 02:00',
    },
    {
      category: 'VIP',
      title: 'Sultan & Member Premium',
      preview: '👑 𝐕𝐈𝐏 𝐒𝐞𝐫𝐯𝐞𝐫 𝐎𝐰𝐧𝐞𝐫 💎 | ✨ Exclusive Server Benefits',
    },
    {
      category: 'Legend',
      title: 'Veteran & Founder Role',
      preview: '𝕷𝖊𝖌𝖊𝖓𝖉𝖆𝖗𝖞 𝕱𝖔𝖚𝖓𝖉𝖊𝖗 👑 | 🏆 Hall of Fame Member',
    },
    {
      category: 'Cyber',
      title: 'Cyberpunk & Hacker Vibe',
      preview: '⚡ C̷y̷b̷e̷r̷ ̷H̷a̷c̷k̷e̷r̷ 👾 | 💻 System Breach Access',
    },
  ];

  const handleCopyPreset = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    onCopy('Template Discord berhasil disalin!');
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Preset & Contoh Populer
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Template Nama Role & Nickname Discord
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Klik salin pada preset di bawah ini untuk langsung mempercantik nama server, role VIP, channel, atau nickname akun Discord Anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {presets.map((preset, idx) => {
            const isCopied = copiedText === preset.preview;

            return (
              <motion.div
                key={preset.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-indigo-900/20 hover:border-indigo-500/50 shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                      {preset.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Copy Ready</span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {preset.title}
                  </h3>

                  <div className="mt-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 font-mono text-base text-slate-800 dark:text-slate-200 break-all select-all">
                    {preset.preview}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => handleCopyPreset(preset.preview)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                      isCopied
                        ? 'bg-emerald-500 text-white'
                        : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-500/20'
                    }`}
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{isCopied ? 'Tersalin!' : 'Salin Template'}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
