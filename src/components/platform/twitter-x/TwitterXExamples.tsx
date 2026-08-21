'use client';

import React from 'react';
import { Copy, Check } from 'lucide-react';

interface TwitterXExamplesProps {
  onCopy: (msg: string) => void;
}

export function TwitterXExamples({ onCopy }: TwitterXExamplesProps) {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const presets = [
    { label: 'Bio Minimalis X', text: '✨ 𝒮𝓉𝒶𝓎 𝒫ℴ𝓈𝒾𝓉𝒾𝓋ℯ ✨ | 📍 Jakarta | 🎨 Digital Creator', id: 'tx-ex-1' },
    { label: 'Display Name Keren', text: '𝗧𝘄𝗶𝘁𝘁𝗲𝗿_𝗫_𝗣𝗿𝗼', id: 'tx-ex-2' },
    { label: 'Tagline Quote Tweet', text: '『 𝓓𝓻𝓮𝒶 dream big & work hard 』', id: 'tx-ex-3' },
    { label: 'Thread Title Accent', text: '🧵 [ 𝚃𝙷𝚁𝙴𝙰𝙳 ] 𝟻 𝚃𝚒𝚙𝚜 𝙼𝚎𝚍𝚒𝚊 𝚂𝚘𝚜𝚒𝚊𝚕', id: 'tx-ex-4' },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onCopy(`Teks "${text}" berhasil disalin!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-poppins">
            Preset Bio & Display Name Twitter / X Siap Pakai
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Klik tombol copy di samping preset untuk menyalin langsung ke akun Twitter / X Anda.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {presets.map((item) => (
            <div key={item.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between gap-4 font-mono text-sm">
              <div className="truncate">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-pink-300 block mb-1">
                  {item.label}
                </span>
                <span className="text-slate-900 dark:text-white font-medium truncate block">{item.text}</span>
              </div>
              <button
                onClick={() => handleCopy(item.text, item.id)}
                className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 hover:bg-purple-600 hover:text-white transition shrink-0"
              >
                {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
