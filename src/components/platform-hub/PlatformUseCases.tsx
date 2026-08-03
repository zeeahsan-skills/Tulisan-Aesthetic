'use client';

import React from 'react';
import { Sparkles, Heart, Zap, MessageSquare, Shield } from 'lucide-react';

export function PlatformUseCases() {
  const useCases = [
    {
      icon: Heart,
      title: 'Instagram Bio Makeover',
      before: 'Suka fotografi & travel. Contact for business',
      after: 'ᵀᵁᴸᴵˢᴬᴺ • 𝒫𝒽ℴ𝓉ℴℊ𝓇𝒶𝓅𝒽𝓎 & 𝒯𝓇𝒶𝓋ℯ𝓁 ✈︎ ✉︎ 𝙗𝙪𝙨𝙞𝙣𝙚𝙨𝙨@𝙢𝙖𝙞𝙡.𝙘𝙤𝙢',
      tag: 'Instagram Bio',
      color: 'border-pink-500/30 text-pink-600 dark:text-pink-400',
    },
    {
      icon: Zap,
      title: 'TikTok FYP Caption Hook',
      before: 'Resep boba tea homemade enak dan gampang',
      after: '𝗧𝗜𝗞𝗧𝗢𝗞 𝗙𝗬𝗣 ⚡ 𝚁𝚎𝚜𝚎𝚙 𝙱𝚘𝚋𝚊 𝚃𝚎𝚊 𝙷𝚘𝚖𝚎𝚖𝚊𝚍𝚎 (⁠✿⁠ ⁠♡⁠)',
      tag: 'TikTok Video',
      color: 'border-cyan-500/30 text-cyan-600 dark:text-cyan-400',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Status Aesthetic',
      before: 'Semoga harimu menyenangkan dan damai',
      after: '✧･ﾟ: * 𝒮ℯ𝓂ℴℊ𝒶 𝐻𝒶𝓇𝒾𝓂𝓊 ℳℯ𝓃𝓎ℯ𝓃𝒶𝓃ℊ𝓀𝒶𝓃 *:･ﾟ✧',
      tag: 'WA Status',
      color: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: Shield,
      title: 'Discord Server Role Styling',
      before: 'Admin Server Esports Indonesia',
      after: '⚔️ ᴀᴅᴍɪɴ ᴇsᴘᴏʀᴛs ⚔️ • 👑 𝕬𝖉𝖒𝖎𝖓 𝕾𝖊𝖗𝖛𝖊𝖗',
      tag: 'Discord Role',
      color: 'border-indigo-500/30 text-indigo-600 dark:text-indigo-400',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Inspirasi Penggunaan Real-Time
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Transformasi Teks Media Sosial
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Lihat bagaimana teks biasa diubah menjadi tampilan visual yang memikat mata audience di berbagai platform media sosial.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="rounded-3xl p-7 bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-purple-600/10 text-purple-600 dark:text-purple-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                        {item.title}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${item.color}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Before Box */}
                  <div className="mt-4 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                    <span className="font-bold text-rose-500 uppercase block mb-0.5">Teks Biasa (Sebelum):</span>
                    {item.before}
                  </div>

                  {/* After Box */}
                  <div className="mt-3 p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 font-mono text-sm font-semibold text-purple-900 dark:text-purple-200">
                    <span className="font-bold text-emerald-500 uppercase block mb-0.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Hasil Transformasi (Sesudah):
                    </span>
                    {item.after}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
