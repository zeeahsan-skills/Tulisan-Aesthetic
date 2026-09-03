'use client';

import React from 'react';
import Link from 'next/link';
import { Gamepad2, MessageSquare, ShieldAlert } from 'lucide-react';

export function GlitchPlatforms() {
  const gameLinks = [
    { name: 'Free Fire (FF)', url: '/free-fire' },
    { name: 'Mobile Legends (MLBB)', url: '/mobile-legends' },
    { name: 'PUBG Mobile', url: '/pubg-mobile' },
    { name: 'Roblox', url: '/roblox' },
    { name: 'Valorant', url: '/valorant' },
  ];

  return (
    <section id="font-glitch-untuk-game-dan-sosmed" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Gaming */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-purple-800/40 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-purple-500/20 text-pink-400">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-poppins">
                Font Glitch untuk Nickname Game
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Karakter Zalgo dan Glitch populer digunakan di clan tag Free Fire dan Nickname PUBG Mobile untuk memberikan aura misterius dan intimikasi.
            </p>

            <div className="mt-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Catatan Kompatibilitas:</strong> Kompatibilitas teks glitch bervariasi tergantung sistem filter nama game. Gunakan Zalgo Ringan untuk menghindari pemotongan karakter.
              </span>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
              {gameLinks.map((g) => (
                <Link
                  key={g.url}
                  href={g.url}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition"
                >
                  {g.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Card 2: Discord & Social Media */}
          <div className="bg-gradient-to-br from-indigo-950 to-purple-950 text-white rounded-3xl p-6 sm:p-8 border border-indigo-800/40 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-300">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-poppins">
                Font Glitch untuk Discord & Social Media
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Discord mendukung tampilan karakter Zalgo di username, server nickname, dan nama channel. Sangat pas untuk server bertema Gaming, Tech, atau Cyberpunk.
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              <Link href="/platform/discord" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                Discord Platform
              </Link>
              <Link href="/platform/tiktok" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                TikTok Bio
              </Link>
              <Link href="/platform/instagram" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                Instagram Bio
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
