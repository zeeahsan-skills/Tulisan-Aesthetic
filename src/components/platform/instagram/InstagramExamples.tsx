'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Camera } from 'lucide-react';

interface InstagramExamplesProps {
  onCopy: (msg: string) => void;
}

export function InstagramExamples({ onCopy }: InstagramExamplesProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const presets = [
    {
      id: 'travel-blogger',
      category: 'Travel Blogger',
      bio: '✈️ ᴛʀᴀᴠᴇʟ & ᴀᴅᴠᴇɴᴛᴜʀᴇ\n🌍 ᴇxᴘʟᴏʀɪɴɢ ᴛʜᴇ ᴡᴏʀʟᴅ ᴏɴᴇ ᴄɪᴛʏ ᴀᴛ ᴀ ᴛɪᴍᴇ\n📸 ᴄᴀᴘᴛᴜʀɪɴɢ ᴍᴏᴍᴇɴᴛs ✨',
    },
    {
      id: 'food-lover',
      category: 'Food Lover',
      bio: '☕ ᴄᴏғғᴇᴇ & ᴄᴜʟɪɴᴀʀʏ ʟᴏᴠᴇʀ\n🍰 ᴛᴀsᴛɪɴɢ ᴛʜᴇ ʙᴇsᴛ ғᴏᴏᴅ ɪɴ ᴛᴏᴡɴ\n📍 ᴊᴀᴋᴀʀᴛᴀ, ɪɴᴅᴏɴᴇsɪᴀ 🇮🇩',
    },
    {
      id: 'fitness-coach',
      category: 'Fitness Coach',
      bio: '🏋️‍♂️ ғɪᴛɴᴇss & ᴍɪɴᴅsᴇᴛ ᴄᴏᴀᴄʜ\n💪 ʜᴇʟᴘɪɴɢ ʏᴏᴜ ʙᴜɪʟᴅ ᴀ sᴛʀᴏɴɢ ʙᴏᴅʏ\n📩 ᴅᴍ ғᴏʀ ᴘᴇʀsᴏɴᴀʟ ᴛʀᴀɪɴɪɴɢ',
    },
    {
      id: 'digital-creator',
      category: 'Digital Creator',
      bio: '🚀 ᴅɪɢɪᴛᴀʟ ᴄʀᴇᴀᴛᴏʀ & ᴅᴇsɪɢɴᴇʀ\n✨ ᴛᴜʀɴɪɴɢ ɪᴅᴇᴀs ɪɴᴛᴏ ʀᴇᴀʟɪᴛʏ\n🔗 ᴄʜᴇᴄᴋ ᴍʏ ʟᴀᴛᴇsᴛ ᴘʀᴏᴊᴇᴄᴛ ʙᴇʟᴏᴡ 👇',
    },
    {
      id: 'photographer',
      category: 'Photographer',
      bio: '📸 ᴠɪsᴜᴀʟ sᴛᴏʀʏᴛᴇʟʟᴇʀ\n🎨 ᴘᴏʀᴛʀᴀɪᴛ & sᴛʀᴇᴇᴛ ᴘʜᴏᴛᴏɢʀᴀᴘʜʏ\n✉️ ɪɴǫᴜɪʀɪᴇs: ʜᴇʟʟᴏ@ᴅᴏᴍᴀɪɴ.ᴄᴏᴍ',
    },
    {
      id: 'fashion',
      category: 'Fashion',
      bio: '👗 ғᴀsʜɪᴏɴ & sᴛʏʟᴇ ɪɴsᴘɪʀᴀᴛɪᴏɴ\n✨ ᴅᴀɪʟʏ ᴏᴜᴛғɪᴛ ɪᴅᴇᴀs (ᴏᴏᴛᴅ)\n🛍️ sʜᴏᴘ ᴍʏ ʟᴏᴏᴋ ᴠɪᴀ ʟɪɴᴋ ʙᴇʟᴏᴡ',
    },
    {
      id: 'vip',
      category: 'VIP Profile',
      bio: '👑 𝒱𝐼𝒫 𝒫𝓇𝑜𝒻𝒾𝓁𝑒 • 𝒪𝒻𝒻𝒾𝒸𝒾𝒶𝓁 𝒜𝒸𝒸𝑜𝓊𝓃𝓉\n✦ 𝐿𝒾𝓋𝒾𝓃𝑔 𝐿𝒾𝒻𝑒 𝒲𝒾𝓉𝒽 𝒫𝒶𝓈𝓈𝒾𝑜𝓃 & 𝒢𝓇𝒶𝒸𝑒 ✦\n✨ 𝒫𝓇𝒾𝓋𝒶𝓉𝑒 𝒞𝓁𝓊𝒷 𝑀𝑒𝓂𝒷𝑒𝓇 ✨',
    },
    {
      id: 'queen',
      category: 'Queen Vibe',
      bio: '👸 𝒬𝓊𝑒𝑒𝓃 𝒪𝒻 𝑀𝓎 𝒪𝓌𝓃 𝒲𝑜𝓇𝓁𝒹\n💖 𝒮𝓂𝒾𝓁𝑒, 𝒮𝓅𝒶𝓇𝓀𝓁𝑒, 𝒮𝒽𝒾𝓃𝑒 𝐸𝓋𝑒𝓇𝓎𝒹𝒶𝓎\n🌸 𝒮𝑜𝒻𝓉 𝒢𝒾𝓇𝓁 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸 🌸',
    },
    {
      id: 'king',
      category: 'King Vibe',
      bio: '𝕶𝖎𝖓𝖌 𝕺𝖋 𝕿𝖍𝖊 𝕲𝖆𝖒𝖊 👑\n⚔️ 𝕭𝖚𝖎𝖑𝖉𝖎𝖓𝖌 𝕸𝖞 𝕺𝖜𝖓 𝕰𝖒𝖕𝖎𝖗𝖊 𝕾𝖎𝖑𝖊𝖓𝖙𝖑𝖞\n🔥 𝕹𝖔 𝕽𝖊𝖌𝖗𝖊𝖙𝖘, 𝕵𝖚𝖘 primitive 𝕲𝖗𝖎𝖓𝖉',
    },
    {
      id: 'anime',
      category: 'Anime & Gaming',
      bio: '⛩️ アニメ • 𝒪𝓉𝒶𝓀𝓊 𝒱𝒾𝒷𝑒𝓈\n🎮 𝒫𝓇𝑜 𝒢𝒶𝓂𝑒𝓇 • 𝐹𝐹 & 𝑀𝐿𝐵𝐵\n꧁༺ 𝒮𝒽𝒶𝒹𝑜𝓌 𝒩𝒾𝓃𝒿𝒶 ༻꧂',
    },
  ];

  const handleCopyPreset = (bioText: string, id: string, category: string) => {
    navigator.clipboard.writeText(bioText);
    setCopiedId(id);
    onCopy(`Bio "${category}" berhasil disalin!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Bio Instagram{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Aesthetic Siap Pakai
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Salin contoh template bio Instagram populer sesuai persona akun Anda dengan sekali klik.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {presets.map((item, idx) => {
            const isCopied = copiedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5" />
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-mono text-sm whitespace-pre-line border border-slate-100 dark:border-slate-800 leading-relaxed">
                    {item.bio}
                  </div>
                </div>

                <button
                  onClick={() => handleCopyPreset(item.bio, item.id, item.category)}
                  className={`mt-4 w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all ${
                    isCopied
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white hover:opacity-95 shadow-md'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Bio Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin Bio Instagram
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
