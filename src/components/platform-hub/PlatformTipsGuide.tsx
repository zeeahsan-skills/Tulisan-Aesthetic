'use client';

import React from 'react';
import { AlertCircle, Check, HelpCircle, Lightbulb } from 'lucide-react';

export function PlatformTipsGuide() {
  const tips = [
    {
      title: 'Pilih Gaya Font yang Mudah Dibaca',
      desc: 'Penggunaan font seperti Small Caps dan Clean Bold sangat disukai karena mudah dibaca di layar HP resolusi tinggi maupun rendah.',
      status: 'Do',
    },
    {
      title: 'Hindari Karakter Zalgo Berlebihan di Bio',
      desc: 'Efek Glitch Zalgo yang terlalu ekstrem dapat terpotong oleh sistem antarmuka Instagram atau TikTok.',
      status: 'Don\'t',
    },
    {
      title: 'Kombinasikan Teks Biasa untuk SEO TikTok',
      desc: 'Gunakan font aesthetic pada judul hook 3 detik pertama caption, lalu sertakan kata kunci biasa agar algoritma pencarian TikTok tetap mengindeks postingan Anda.',
      status: 'Do',
    },
    {
      title: 'Manfaatkan Markdown bawaan WhatsApp',
      desc: 'Gabungkan font Unicode kami dengan tanda *Tebal* atau _Miring_ dari WhatsApp untuk membuat hierarki pesan yang sangat jelas.',
      status: 'Do',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Panduan & Best Practices
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Tips Optimalisasi Font Media Sosial
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Panduan praktis agar tampilan tulisan unik Anda tetap estetis, tidak terpotong, dan optimal secara estetika maupun SEO platform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-start gap-4"
            >
              <div
                className={`p-3 rounded-2xl flex-shrink-0 ${
                  tip.status === 'Do'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                }`}
              >
                {tip.status === 'Do' ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
