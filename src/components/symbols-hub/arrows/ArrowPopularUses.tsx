'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  MessageSquare,
  Sparkles,
  Layout,
  Presentation,
  FileText,
  MousePointer,
} from 'lucide-react';

export const ArrowPopularUses: React.FC = () => {
  const uses = [
    {
      title: 'Instagram Bio',
      desc: 'Penegas link bio Instagram (seperti 👇 atau 🠋) untuk mengarahkan pengikut menuju toko online atau portofolio Anda.',
      icon: <Camera className="w-5 h-5 text-pink-400" />,
      example: '👇 Cek Website Resmi Kami:',
    },
    {
      title: 'TikTok Captions',
      desc: 'Penunjuk kata kunci utama pada deskripsi VT agar penonton langsung fokus pada informasi penting.',
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      example: '➜ Tonton Sampai Habis! 💥',
    },
    {
      title: 'WhatsApp Status & Group',
      desc: 'Simbol panah pembatas poin (➜, ➤) agar pesan pengumuman grup WA terlihat rapi dan profesional.',
      icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
      example: '➤ Poin 1: Jadwal Rapat 🗓️',
    },
    {
      title: 'Facebook Posts',
      desc: 'Penegas penawaran promosi & link jualan di grup Fanspage Facebook.',
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
      example: '▶ Beli Sekarang Di Sini! 🛒',
    },
    {
      title: 'Discord Messages & Rules',
      desc: 'Gunakan simbol panah ganda & petunjuk arah (↔️, ⇇, ⇉) untuk menyusun aturan server & role.',
      icon: <MessageSquare className="w-5 h-5 text-indigo-400" />,
      example: '➤ ║ Peraturan Server #1',
    },
    {
      title: 'Website UI Design',
      desc: 'Elemen icon panah ringan tanpa gambar untuk tombol "Next", "Back", "Read More", dan Dropdown.',
      icon: <Layout className="w-5 h-5 text-amber-400" />,
      example: '<button> Read More ➜ </button>',
    },
    {
      title: 'Presentations (PowerPoint/Canva)',
      desc: 'Penunjuk langkah-langkah diagram, alur kerja (workflow), dan bullet point slide presentasi.',
      icon: <Presentation className="w-5 h-5 text-rose-400" />,
      example: 'Langkah 1 ➔ Langkah 2 ➔ Selesai',
    },
    {
      title: 'Documents & Spreadsheets',
      desc: 'Simbol panah matematika (→, ↔, ⇒) untuk laporan Word, Excel, dan Google Docs.',
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      example: 'Formula A ⇒ Hasil Akhir B',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Penggunaan Populer Simbol Panah
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Inspirasi penggunaan simbol panah Unicode untuk sosial media, antarmuka UI website, slide presentasi, dan dokumen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {uses.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-cyan-500/40 transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60">
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Contoh:</span>
                <div className="text-xs font-mono text-cyan-300 mt-1 truncate bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  {item.example}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
