'use client';

import React, { useState } from 'react';
import { Copy, Check, Info, AlertTriangle, Lightbulb, Sparkles, Gamepad2 } from 'lucide-react';

interface CoolNamesContentBodyProps {
  onCopy: (msg: string) => void;
}

export const CoolNamesContentBody: React.FC<CoolNamesContentBodyProps> = ({ onCopy }) => {
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const handleCopyName = (nameText: string) => {
    navigator.clipboard.writeText(nameText);
    setCopiedName(nameText);
    onCopy(`Nama "${nameText}" berhasil disalin!`);
    setTimeout(() => setCopiedName(null), 1500);
  };

  return (
    <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">
      {/* 1. Apa itu nama keren? */}
      <section id="1-apa-itu-nama-keren" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          1. Apa Itu Nama Keren?
        </h2>
        <p>
          <strong>Nama Keren (Stylish Username / Gaming Nickname)</strong> adalah identitas digital unik yang menggabungkan pemilihan kata kreatif, gaya font Unicode (seperti Gothic, Small Caps, atau Circle Bubble), serta hiasan simbol estetik (seperti ★, 👑, 🌸, ➜).
        </p>
        <p>
          Nama keren berfungsi sebagai identitas personal diri Anda saat berinteraksi di ruang publik digital, seperti bio profil Instagram, TikTok, server Discord, hingga akun game online (Free Fire, Mobile Legends, PUBG Mobile, Roblox).
        </p>
      </section>

      {/* 2. Mengapa nama yang unik penting? */}
      <section id="2-mengapa-nama-unik-penting" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          2. Mengapa Nama Unik Sangat Penting?
        </h2>
        <p>
          Di tengah jutaan pengguna media sosial dan gamer aktif di Indonesia, nama yang unik memberikan beberapa keuntungan besar:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-purple-300 mb-1">Membangun Personal Brand</h4>
            <p className="text-xs text-slate-400">Nama unik mudah diingat oleh penonton streaming, pengikut sosmed, dan teman tim squad.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-pink-300 mb-1">Tampak Lebih Pro & Estetik</h4>
            <p className="text-xs text-slate-400">Sentuhan gaya font Unicode menunjukkan perhatian Anda terhadap detail estetika visual.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-cyan-300 mb-1">Tingkat Keunikan Tinggi</h4>
            <p className="text-xs text-slate-400">Mencegah bentrok nama pengguna (Username taken) tanpa perlu menambahkan angka acak panjang.</p>
          </div>
        </div>
      </section>

      {/* 3. Tips memilih nama yang mudah diingat */}
      <section id="3-tips-memilih-nama-mudah-diingat" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          3. Tips Memilih Nama yang Mudah Diingat
        </h2>
        <p>
          Nama keren yang hebat adalah nama yang seimbang antara keunikan dan keterbacaan. Berikut adalah 4 tips utamanya:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li><strong>Gunakan 1-3 Suku Kata:</strong> Nama pendek (seperti <em>Kaiser</em>, <em>Valkyrie</em>, atau <em>Zephyr</em>) jauh lebih mudah dipanggil saat komunikasi voice chat game.</li>
          <li><strong>Gabungkan Dua Kata Kontras:</strong> Contoh kombinasi unik: <em>Frostfire</em>, <em>ShadowRose</em>, atau <em>SilentViper</em>.</li>
          <li><strong>Sesuaikan Persona:</strong> Pilih gaya manis (cute/uwu) untuk konten kasual, atau gaya intimidatif (gothic/fraktur) untuk turnamen game competitive.</li>
        </ul>
      </section>

      {/* 4. Menggunakan Unicode untuk membuat nama aesthetic */}
      <section id="4-menggunakan-unicode-aesthetic" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          4. Menggunakan Unicode untuk Membuat Nama Aesthetic
        </h2>
        <p>
          Standar pengodean Unicode menyediakan ribuan karakter alternatif bergaya huruf kuno, abjad melingkar, dan huruf kecil subscript/superscript.
        </p>

        {/* Sample Copy Box */}
        <div className="my-6 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <h4 className="text-sm font-bold text-purple-300 mb-3 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Contoh Variasi Font Unicode Keren (Salin 1-Klik)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            {[
              { label: 'Gothic Fraktur', name: '𝔎𝔞𝔦𝔰𝔢𝔯' },
              { label: 'Circle Bubble', name: 'Ⓚⓐⓘⓢⓔⓡ' },
              { label: 'Small Caps', name: 'ⲔⲀⲒⲤⲈⲢ' },
              { label: 'Double Struck', name: '𝕂𝕒𝕚𝕤𝕖𝕣' },
            ].map((item) => (
              <div key={item.label} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block">{item.label}</span>
                  <span className="text-slate-200 font-bold">{item.name}</span>
                </div>
                <button
                  onClick={() => handleCopyName(item.name)}
                  className="px-2.5 py-1 rounded bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-[11px] flex items-center gap-1 transition-colors"
                >
                  {copiedName === item.name ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>Copy</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Menambahkan simbol tanpa mengurangi keterbacaan */}
      <section id="5-menambahkan-simbol-keterbacaan" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          5. Menambahkan Simbol Tanpa Mengurangi Keterbacaan
        </h2>
        <p>
          Simbol dekoratif bekerja paling baik sebagai bingkai pembuka dan penutup nama (seperti <code>★Nama★</code> atau <code>꧁Nama꧂</code>).
        </p>

        <div className="my-6 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex gap-3 text-xs sm:text-sm">
          <Lightbulb className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-purple-200 block mb-1">Tips Bingkai Simbol Simetris:</strong>
            Letakkan simbol yang identik di sisi kiri dan kanan nama agar tampilan visualnya seimbang dan enak dipandang di papan skor.
          </div>
        </div>
      </section>

      {/* 6. Ide nama untuk Instagram */}
      <section id="6-ide-nama-instagram" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          6. Ide Nama untuk Instagram
        </h2>
        <p>Gunakan nama estetik berkesan lembut untuk bio dan display name profil Instagram:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4 font-mono text-xs">
          {['✦ ᴀᴇsᴛʜᴇᴛɪᴄ ᴠɪʙᴇs ✦', '🌸 𝓬𝓱𝓮𝓻𝓻𝔂.𝓫𝓵𝓸𝓼𝓼𝓸𝓶 🌸', '✨ 𝓼𝓽𝔞𝔯𝔯𝓎.𝔫𝔦𝔤𝔥𝔱 ✨'].map((name) => (
            <div key={name} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-200 truncate pr-2">{name}</span>
              <button onClick={() => handleCopyName(name)} className="text-purple-400 hover:text-purple-300">
                {copiedName === name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Ide nama untuk TikTok */}
      <section id="7-ide-nama-tiktok" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          7. Ide Nama untuk TikTok
        </h2>
        <p>Gunakan nama trendy dan mudah diingat oleh penonton FYP TikTok:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4 font-mono text-xs">
          {['🔥 ᴛʀᴇɴᴅʏ.ᴄʀᴇᴀᴛᴏʀ 🔥', '💫 𝓿𝓲𝓻𝓪𝓵.𝓬𝓸𝓷𝓽𝓮𝓷𝓽 💫', '💖 𝓬𝓾𝓽𝓮.𝓰𝓲𝔯𝓵.𝓿𝓲𝓫𝓮𝓼 💖'].map((name) => (
            <div key={name} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-200 truncate pr-2">{name}</span>
              <button onClick={() => handleCopyName(name)} className="text-purple-400 hover:text-purple-300">
                {copiedName === name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Ide nama untuk Discord */}
      <section id="8-ide-nama-discord" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          8. Ide Nama untuk Discord
        </h2>
        <p>Gunakan nama misterius atau gaya gothic untuk server Discord:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4 font-mono text-xs">
          {['⚔️ 𝔖𝔥𝔞𝔡𝔬𝔮𝔎𝔉𝔦𝔤𝔥𝔱𝔢𝔯 ⚔️', '🔮 𝕸𝖞𝖘𝖙𝖎𝖈.𝕸𝖆𝖌𝖊 🔮', '👑 𝓚𝓲𝓷𝓰𝓞𝓯𝓓𝓲𝓼𝓬𝓸𝓻𝓭 👑'].map((name) => (
            <div key={name} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-200 truncate pr-2">{name}</span>
              <button onClick={() => handleCopyName(name)} className="text-purple-400 hover:text-purple-300">
                {copiedName === name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Ide nama untuk Free Fire */}
      <section id="9-ide-nama-free-fire" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-amber-400" />
          <span>9. Ide Nama untuk Free Fire (FF)</span>
        </h2>
        <p>Nickname pro player Free Fire lengkap dengan simbol mahkota dan bintang:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4 font-mono text-xs">
          {['꧁ ঔşş►FF-PRO◄şş  ꧂', '👑 𝔉𝔉-𝔎ℑ𝔄𝔊 👑', '★ 𝓕F_𝓢𝓝𝓘𝓟𝓔𝓡 ★'].map((name) => (
            <div key={name} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-200 truncate pr-2">{name}</span>
              <button onClick={() => handleCopyName(name)} className="text-amber-400 hover:text-amber-300">
                {copiedName === name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Ide nama untuk PUBG Mobile */}
      <section id="10-ide-nama-pubg-mobile" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          10. Ide Nama untuk PUBG Mobile (PUBGM)
        </h2>
        <p>Nickname PUBG Mobile taktis dengan simbol panah dan petir:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4 font-mono text-xs">
          {['➜ 𝑷𝑼𝑩𝑮_𝑲𝑰𝑳𝑳𝑬𝑹 ➜', '⚡ 𝖄𝖀𝖄𝕵𝕬_𝕻𝖀𝕭𝕲 ⚡', '🏹 𝓞𝓷𝓮𝓢𝓱𝓸𝓽_𝓚𝓲𝓵𝓵 🏹'].map((name) => (
            <div key={name} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-200 truncate pr-2">{name}</span>
              <button onClick={() => handleCopyName(name)} className="text-amber-400 hover:text-amber-300">
                {copiedName === name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Ide nama untuk Mobile Legends */}
      <section id="11-ide-nama-mobile-legends" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          11. Ide Nama untuk Mobile Legends (MLBB)
        </h2>
        <p>Nickname MLBB squad pro player berpangkat Mythical Glory:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4 font-mono text-xs">
          {['🏆 𝕸𝕷_𝕸𝖞𝖙𝖍𝖎𝖈 🏆', '⚔️ 𝓜𝓛_𝓗𝓮𝓻𝓸 ⚔️', '✦ ᴍʟ_ꜱᴀᴠᴀɢᴇ ✦'].map((name) => (
            <div key={name} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-200 truncate pr-2">{name}</span>
              <button onClick={() => handleCopyName(name)} className="text-cyan-400 hover:text-cyan-300">
                {copiedName === name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Kesalahan yang harus dihindari */}
      <section id="12-kesalahan-harus-dihindari" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          12. Kesalahan yang Harus Dihindari
        </h2>
        <div className="my-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex gap-3 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-200 block mb-1">3 Hal Terlarang Saat Membuat Nickname:</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>Penggunaan Simbol Berlebihan:</strong> Menumpuk terlalu banyak simbol membuat nama tidak bisa dibaca dan mengganggu tampilan skor.</li>
              <li><strong>Huruf Terlalu Rumit:</strong> Hindari mencampur lebih dari 3 gaya font dalam 1 kata.</li>
              <li><strong>Unsur SARA/Kasar:</strong> Hindari menggunakan kata-kata terlarang yang melanggar ketentuan standar komunitas game.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section id="13-faq-pertanyaan-umum" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          13. Pertanyaan Umum (FAQ)
        </h2>
        <p>
          Berikut adalah ringkasan pertanyaan terbanyak seputar pembuatan nama keren dan generator font aesthetic.
        </p>
      </section>
    </article>
  );
};
