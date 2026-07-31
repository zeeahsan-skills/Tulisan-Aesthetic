'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface FacebookExamplesProps {
  onCopy: (msg: string) => void;
}

export function FacebookExamples({ onCopy }: FacebookExamplesProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const presets = [
    {
      category: 'Business',
      title: 'Halaman Bisnis & Toko Online',
      preview: '💼 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗦𝘁𝗼𝗿𝗲 | 𝒬𝓊𝒶𝓁𝒾𝓉𝓎 𝒫𝓇ℴ𝒹𝓊𝒸𝓉𝓈 ✨ | 💬 Fast Response Order',
    },
    {
      category: 'Family',
      title: 'Profil Keluarga & Kehangatan',
      preview: '👨‍👩‍👧‍👦 𝐹𝒶𝓂𝒾𝓁𝓎 𝐹𝒾𝓇𝓈𝓉 ❤️ | 🌸 Creating Lifetime Memories Together',
    },
    {
      category: 'Friends',
      title: 'Keluarga & Sahabat Terbaik',
      preview: '✨ 𝔹𝕖𝕤𝕥 𝔽𝕣𝕚𝕖𝕟𝕕𝕤 𝔽𝕠𝕣𝕖𝕧𝕖𝕣 🤝 | 🌿 Good Times & Laughs Daily',
    },
    {
      category: 'Gaming',
      title: 'Pro Player & Gaming Community',
      preview: '🎮 𝕲𝖆𝖒𝖎𝖓𝖌 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 ⚔️ | 🏆 Streamer & Esports Enthusiast',
    },
    {
      category: 'Travel',
      title: 'Petualang & Wisata World',
      preview: '✈️ 𝒯𝓇𝒶𝓋ℯ𝓁 𝒯𝒽ℯ 𝒲ℴ𝓇𝓁𝒹 🌍 | 📸 Exploring Beautiful Places',
    },
    {
      category: 'Photography',
      title: 'Fotografi & Seni Visual',
      preview: '📸 𝑷𝒉𝒐𝒕𝒐𝒈𝒓𝒂𝒑𝒉𝒚 & 𝑨𝒓𝒕 🎨 | 🔍 Capturing Life Moments',
    },
    {
      category: 'Motivation',
      title: 'Inspirasi & Kata Motivasi',
      preview: '🚀 𝕎𝕠𝕣𝕜 ℍ𝕒𝕣𝕕 𝕊𝕥𝕒𝕪 ℍ𝕦𝕞𝕓𝕝𝕖 🔥 | ✨ Keep Moving Forward',
    },
    {
      category: 'Lifestyle',
      title: 'Gaya Hidup & Aesthetic Vibe',
      preview: '🌿 𝒮𝒾𝓂𝓅𝓁ℯ ℒ𝒾𝒻ℯ𝓈𝓉𝓎𝓁ℯ 🌸 | ✨ Positive Energy Only',
    },
    {
      category: 'VIP',
      title: 'Profil VIP & Eksklusif',
      preview: '👑 𝐕𝐈𝐏 𝐌𝐞𝐦𝐛𝐞𝐫 👑 | 💎 Exclusive Content & Personal Blog',
    },
    {
      category: 'Creator',
      title: 'Content Creator & Influencer',
      preview: '🎥 𝒞ℴ𝓃𝓉ℯ𝓃𝓉 𝒞𝓇ℯ𝒶𝓉ℴ𝓇 ✨ | ✉️ Inquiries: dm@facebook.com',
    },
  ];

  const handleCopyPreset = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    onCopy('Template Facebook berhasil disalin!');
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Contoh & Preset Populer
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Template Bio & Status Facebook Siap Pakai
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Klik tombol salin di bawah untuk langsung menggunakan kombinasi teks font estetik dan simbol keren di akun Facebook Anda.
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
                className="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-blue-900/20 hover:border-blue-500/50 shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                      {preset.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Ready Copy</span>
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
                        : 'bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/20'
                    }`}
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{isCopied ? 'Tersalin ke Clipboard!' : 'Salin Template'}</span>
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
