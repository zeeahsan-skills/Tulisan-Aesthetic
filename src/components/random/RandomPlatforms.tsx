'use client';

import React from 'react';
import Link from 'next/link';
import { Gamepad2, Smartphone, Dices } from 'lucide-react';

export function RandomPlatforms() {
  return (
    <section id="font-random-untuk-game-dan-sosmed" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Gaming */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-800/40 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-poppins">
                Font Random untuk Nickname Game Unik
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Kombinasi font acak sangat ideal untuk Nickname Free Fire, Mobile Legends, dan PUBG Mobile agar nama akun Anda tampil eksklusif dan sulit ditiru lawan.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
              <Link href="/game/free-fire" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                Free Fire
              </Link>
              <Link href="/game/mobile-legends" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                Mobile Legends
              </Link>
              <Link href="/game/pubg-mobile" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                PUBG Mobile
              </Link>
            </div>
          </div>

          {/* Card 2: Bio IG, TikTok & WA */}
          <div className="bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 text-white rounded-3xl p-6 sm:p-8 border border-blue-700/40 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-300">
                <Smartphone className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-poppins">
                Font Random untuk Bio IG, TikTok & Status WA
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Memadukan Small Caps, Script, dan simbol aesthetic di Bio Instagram atau TikTok membantu menarik perhatian pengikut baru.
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              <Link href="/platform/instagram" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                Instagram Bio
              </Link>
              <Link href="/platform/tiktok" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                TikTok Username
              </Link>
              <Link href="/platform/whatsapp" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                WhatsApp Status
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
