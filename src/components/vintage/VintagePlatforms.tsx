'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, Sparkles, Feather } from 'lucide-react';

export function VintagePlatforms() {
  return (
    <section id="font-vintage-untuk-sosmed-dan-desain" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Social Media & Bio IG */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-amber-800/40 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400">
                <Camera className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-poppins">
                Font Vintage untuk Bio Instagram & Branding
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Font Blackletter Fraktur dan Serif Klasik memberikan estetika editorial yang elegan untuk nama profil Instagram, deskripsi toko online, serta kutipan inspiratif.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap gap-2">
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

          {/* Card 2: Undangan & Design */}
          <div className="bg-gradient-to-br from-amber-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-8 border border-amber-700/40 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-300">
                <Feather className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-poppins">
                Font Vintage untuk Undangan & Gaming
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dapat dipakai untuk mempercantik judul undangan nikah digital, heading blog retro, dan nama clan game bertema kerajaan (Kingdom/Royal).
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
              <Link href="/game/free-fire" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                Free Fire Clan
              </Link>
              <Link href="/game/mobile-legends" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 transition">
                Mobile Legends
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
