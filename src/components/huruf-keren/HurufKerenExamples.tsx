'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles, Flame, Star, Crown, Shield, Smile } from 'lucide-react';

interface HurufKerenExamplesProps {
  onCopy: (msg: string) => void;
}

export function HurufKerenExamples({ onCopy }: HurufKerenExamplesProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const examplesList = [
    {
      category: 'Small Caps (Kapital Mini)',
      icon: Star,
      styles: [
        { label: 'Small Caps Standard', text: 'ʜᴜʀᴜғ ᴋᴇʀᴇɴ ᴀᴇsᴛʜᴇᴛɪᴄ' },
        { label: 'Small Caps Wings', text: '꧁༺ ʜᴜʀᴜғ ᴋᴇʀᴇɴ ༻꧂' },
        { label: 'Small Caps Stars', text: '★彡 ʜᴜʀᴜғ ᴋᴇʀᴇɴ 彡★' },
      ],
    },
    {
      category: 'Tebal & Bold (Sans & Serif)',
      icon: Flame,
      styles: [
        { label: 'Bold Sans Modern', text: '𝗛𝘂𝗿𝘂𝗳 𝗞𝗲𝗿𝗲𝗻 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰' },
        { label: 'Bold Serif Klasik', text: '𝐇𝐮𝐫𝐮𝐟 𝐊𝐞𝐫𝐞𝐧 𝐀𝐞𝐬𝐭𝐡𝐞𝐭𝐢𝐜' },
        { label: 'Bold Italic Modern', text: '𝑯𝒖𝒓𝒖𝒇 𝑲𝒆𝒓𝒆𝒏 𝑨𝒆𝒔𝒕𝒉𝒆𝒕𝒊𝒄' },
      ],
    },
    {
      category: 'Script & Cursive (Tulisan Sambung)',
      icon: Sparkles,
      styles: [
        { label: 'Cursive Elegant', text: '𝐻𝓊𝓇𝓊𝒻 𝒦𝑒𝓇𝑒𝓃 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸' },
        { label: 'Bold Script', text: '𝓗𝓾𝓻𝓾𝓯 𝓚𝓮𝓻𝓮𝓷 𝓐𝓮𝓈𝓽𝓱𝓮𝓽𝓲𝓬' },
        { label: 'Script Heart Deco', text: '♡ 𝐻𝓊𝓇𝓊𝒻 𝒦𝑒𝓇𝑒𝓃 ♡' },
      ],
    },
    {
      category: 'Double Struck & Monospace',
      icon: Crown,
      styles: [
        { label: 'Double Struck / Blackboard', text: 'ℍ𝕦𝕣𝕦𝕗 𝕂𝕖𝕣𝕖𝕟 𝔸𝕖𝕤𝕥𝕙𝕖𝕥𝕚𝕔' },
        { label: 'Monospace Code', text: '𝙷𝚞𝚛𝚞𝚏 𝙺𝚎𝚛𝚎𝚗 𝙰𝚎𝚜𝚝𝚑𝚎𝚝𝚒𝚌' },
        { label: 'Vaporwave Fullwidth', text: 'Ｈｕｒｕｆ Ｋｅｒｅｎ' },
      ],
    },
    {
      category: 'Fraktur & Gothic (Blackletter)',
      icon: Shield,
      styles: [
        { label: 'Gothic Fraktur Bold', text: '𝕳𝖚𝖗𝖚𝖋 𝕶𝖊𝖗𝖊𝖓 𝕬𝖊𝖘𝖙𝖍𝖊𝖙𝖎𝖈' },
        { label: 'Fraktur Normal', text: '𝔉𝔲𝔯𝔲𝔣 𝔎𝔢𝔯𝔢𝔫 𝔄𝔢𝔰𝔱𝔥𝔢𝔱𝔦𝔠' },
        { label: 'Gothic Sword Tag', text: '⚔️ 𝕳𝖚𝖗𝖚𝖋 𝕶𝖊𝖗𝖊𝖓 ⚔️' },
      ],
    },
    {
      category: 'Circled, Square & Superscript',
      icon: Smile,
      styles: [
        { label: 'Bubble Outline', text: 'ⓗⓤⓡⓤⓕ ⓚⓔⓡⓔⓝ' },
        { label: 'Dark Square Box', text: '🅰🅷🆂🅰🅽' },
        { label: 'Superscript Mini', text: 'ᴴᵘʳᵘᶠ ᴷᵉʳᵉⁿ' },
      ],
    },
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    onCopy(`Teks "${text}" berhasil disalin!`);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contoh-huruf-keren" className="py-16 sm:py-24 bg-white dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
            Katalog Inspirasi
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Huruf Keren Siap Copy-Paste
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Pilih variasi gaya huruf keren terpopuler di bawah ini dan salin dengan satu kali klik.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examplesList.map((group, idx) => {
            const IconComp = group.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.styles.map((item, itemIdx) => {
                    const isCopied = copiedText === item.text;
                    return (
                      <div
                        key={itemIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700/60 hover:border-purple-500/50 transition-colors group"
                      >
                        <div className="overflow-hidden pr-2">
                          <p className="text-xs text-slate-400 dark:text-slate-400 mb-0.5">
                            {item.label}
                          </p>
                          <p className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                            {item.text}
                          </p>
                        </div>

                        <button
                          onClick={() => handleCopy(item.text)}
                          className={`p-2 rounded-lg font-medium text-xs flex items-center gap-1.5 shrink-0 transition-all ${
                            isCopied
                              ? 'bg-emerald-500 text-white'
                              : 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-pink-300 hover:bg-purple-600 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white'
                          }`}
                          title="Salin Teks"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Tersalin</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Salin</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
