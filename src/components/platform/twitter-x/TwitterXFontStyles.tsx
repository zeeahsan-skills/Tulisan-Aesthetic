'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Copy } from 'lucide-react';

interface TwitterXFontStylesProps {
  onCopy: (msg: string) => void;
}

export function TwitterXFontStyles({ onCopy }: TwitterXFontStylesProps) {
  const styles = [
    { title: 'Bold Sans (Tebal Modern)', preview: '𝗧𝘄𝗶𝘁𝘁𝗲𝗿 𝗫 𝗕𝗶𝗼', desc: 'Cocok untuk Display Name Twitter / X agar nama profil menonjol di timeline follower.' },
    { title: 'Small Caps (Kapital Mini)', preview: 'ᵀᵂᴵᵀᵀᴱᴿ ˣ ᴮᴵᴼ', desc: 'Format huruf kapital mini seragam untuk bio X yang rapi dan tampak profesional.' },
    { title: 'Monospace (Typewriter)', preview: '𝚃𝚠𝚒𝚝𝚝𝚎𝚛 𝚇 𝙱𝚒𝚘', desc: 'Gaya huruf mesin ketik klasik yang memberikan kesan retro dan unik pada postingan Tweet.' },
    { title: 'Cursive / Script', preview: '𝒯𝓌𝒾𝓉𝓉ℯ𝓇 𝒳 ℬ𝒾ℴ', desc: 'Gaya tulisan tangan halus untuk estetika profil Twitter feminin dan kreatif.' },
    { title: 'Gothic Fraktur', preview: '𝔗𝔴𝔦𝔱𝔱𝔢𝔯 𝔛 𝔅𝔦𝔬', desc: 'Gaya huruf Abad Pertengahan klasik yang populer di kalangan komunitas kreator & gaming.' },
    { title: 'Bubble Circled', preview: 'Ⓣⓦⓘⓣⓣⓔⓡ Ⓧ Ⓑⓘⓞ', desc: 'Teks dilingkari bundar untuk memberikan sorotan khusus pada kata kunci di Tweet.' },
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
            Rekomendasi Gaya Twitter / X
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Variasi Style Font Terbaik untuk Twitter (X)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Pilih gaya Unicode yang paling pas untuk Display Name, Bio (160 Karakter), atau postingan Tweet.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {styles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-purple-900/30 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base font-poppins">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                <div className="mt-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 font-mono text-sm text-purple-600 dark:text-pink-400 truncate">
                  {item.preview}
                </div>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(item.preview);
                  onCopy(`Gaya "${item.title}" disalin!`);
                }}
                className="mt-4 w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Sample</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
