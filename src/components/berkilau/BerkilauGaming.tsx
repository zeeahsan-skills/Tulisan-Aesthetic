'use client';

import React from 'react';
import Link from 'next/link';
import { Gamepad2, Info } from 'lucide-react';

export function BerkilauGaming() {
  const gameLinks = [
    { name: 'Free Fire (FF)', url: '/game/free-fire' },
    { name: 'Mobile Legends (MLBB)', url: '/game/mobile-legends' },
    { name: 'PUBG Mobile', url: '/game/pubg-mobile' },
    { name: 'Roblox', url: '/game/roblox' },
    { name: 'Valorant', url: '/game/valorant' },
  ];

  return (
    <section id="font-berkilau-untuk-nickname-game" className="py-16 sm:py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white rounded-3xl p-6 sm:p-10 border border-purple-800/40 shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3.5 rounded-2xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins">
                Font Berkilau untuk Nickname Game
              </h2>
              <p className="text-sm text-slate-300">
                Penggunaan ornamen bintang dan kilauan pada nama akun game online
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            Menambahkan simbol bintang ✧ atau kilauan ✨ pada nickname Free Fire, MLBB, atau PUBG Mobile memberi kesan mahal dan profesional. Namun, harap diperhatikan bahwa <strong>kompatibilitas simbol dan font bervariasi tergantung platform game, batasan bidang input, dan aturan penyaringan nama (name filtering rules)</strong> masing-masing pengembang game.
          </p>

          {/* Accuracy Notice Card */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-amber-200 text-xs sm:text-sm">
            <Info className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
            <div>
              <strong>Catatan Kompatibilitas Nickname Game:</strong> Sebagian game (seperti Roblox atau Valorant) membatasi karakter non-ASCII demi keamanan sistem chat. Sebaiknya uji coba nama berkilau pilihan Anda di menu pengubahan nickname sebelum mengonfirmasi item Change Name Card.
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-4">
              Panduan Nickname Berdasarkan Game:
            </p>
            <div className="flex flex-wrap gap-3">
              {gameLinks.map((game) => (
                <Link
                  key={game.url}
                  href={game.url}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs sm:text-sm font-semibold transition-all"
                >
                  {game.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
