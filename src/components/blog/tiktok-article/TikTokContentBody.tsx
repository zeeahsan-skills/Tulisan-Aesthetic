'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, Info, AlertTriangle, Lightbulb, Sparkles, Video, CheckCircle2, Terminal, UserCheck, MessageSquare, Flame } from 'lucide-react';

interface TikTokContentBodyProps {
  onCopy: (msg: string) => void;
}

export const TikTokContentBody: React.FC<TikTokContentBodyProps> = ({ onCopy }) => {
  const [copiedFont, setCopiedFont] = useState<string | null>(null);

  const handleCopyFont = (fontText: string) => {
    navigator.clipboard.writeText(fontText);
    setCopiedFont(fontText);
    onCopy(`Teks "${fontText}" berhasil disalin!`);
    setTimeout(() => setCopiedFont(null), 1500);
  };

  return (
    <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">
      {/* Section 1: Apa itu Font TikTok? */}
      <section id="1-apa-itu-font-tiktok" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <Video className="w-6 h-6 text-cyan-400 shrink-0" />
          <span>1. Apa itu Font TikTok?</span>
        </h2>
        <p>
          <strong>Font TikTok</strong> merujuk pada teks dengan gaya visual unik, huruf berornamen, dan simbol estetis yang digunakan pada elemen profil TikTok — mulai dari <em>Nama Tampilan (Display Name)</em>, <em>Bio Profil</em>, <em>Caption Video</em>, <em>Teks Overlay Video</em>, hingga <em>Komentar</em>.
        </p>
        <p>
          Secara bawaan, aplikasi TikTok menggunakan font standar sistem seperti Roboto (Android) dan San Francisco (iOS). Namun dengan menggunakan generator gaya tulisan, Anda dapat mengubah huruf abjad biasa menjadi teks bergaya <strong>Small Caps (ᴀᴇsᴛʜᴇᴛɪᴄ)</strong>, <strong>Double Struck (𝕒𝕖𝕤𝕥𝕙𝕖𝕥𝕚𝕔)</strong>, <strong>Script Miring (𝓪𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬)</strong>, hingga <strong>Gothic Fraktur (𝔤𝔬𝔱𝔥𝔦𝔠)</strong> yang menonjol dan menarik perhatian penonton.
        </p>

        {/* Feature Visual Graphics / Responsive Image Card */}
        <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 text-pink-400" /> FYP Visual Enhancement
              </span>
              <h3 className="text-lg font-bold text-white">Profil Aesthetic Tingkatkan Impression</h3>
              <p className="text-xs text-slate-400 max-w-md">
                Profil TikTok dengan font unik 3x lebih cepat memikat pengikut baru saat mereka mengunjungi halaman profil Anda setelah melihat video viral.
              </p>
            </div>
            <div className="w-full sm:w-auto flex-shrink-0 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span>Default: Alex Creator</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-300 font-bold">
                <div className="w-2.5 h-2.5 rounded-full bg-pink-400" />
                <span>Aesthetic: ✦ ᴀʟᴇx ᴄʀᴇᴀᴛᴏʀ ✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Cara Kerja Unicode di TikTok */}
      <section id="2-cara-kerja-unicode-di-tiktok" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          2. Cara Kerja Unicode di TikTok
        </h2>
        <p>
          Mungkin Anda bertanya-tanya: <em>&quot;Bagaimana tulisan miring atau berlingkaran bisa ditempelkan ke TikTok tanpa mengunggah file font (.ttf atau .otf)?&quot;</em>
        </p>
        <p>
          Jawabannya terletak pada standar <strong>Unicode</strong>. Generator font TikTok tidak mengubah tipe file tulisan, melainkan melakukan <em>character mapping</em> (pemetaan karakter) dari huruf Latin biasa ke blok simbol khusus dalam standar Unicode internasional (seperti <em>Mathematical Alphanumeric Symbols</em>).
        </p>

        {/* Technical Callout Box */}
        <div className="my-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex gap-3 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-cyan-200 block mb-1">Standar Unicode Internasional:</strong>
            Karena TikTok mendukung konsorsium Unicode secara penuh, teks unik yang Anda salin langsung dapat dikenali secara langsung oleh server TikTok dan dirender rapi pada jutaan smartphone pengikut tanpa merusak aplikasi.
          </div>
        </div>

        {/* Code / Mapping Snippet Showcase */}
        <div className="my-6 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-cyan-400 font-mono mb-3">
            <span className="flex items-center gap-1.5 font-bold">
              <Terminal className="w-4 h-4" /> Contoh Pemetaan Karakter TikTok
            </span>
            <span>Unicode Live Stream</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Normal: <strong className="text-white font-sans">TikTok Vibe</strong></span>
              <span className="text-cyan-300 font-bold">ᴛɪᴋᴛᴏᴋ ᴠɪʙᴇ</span>
              <button
                onClick={() => handleCopyFont('ᴛɪᴋᴛᴏᴋ ᴠɪʙᴇ')}
                className="px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-[11px] flex items-center gap-1 transition-colors"
                aria-label="Copy Small Caps"
              >
                {copiedFont === 'ᴛɪᴋᴛᴏᴋ ᴠɪʙᴇ' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Normal: <strong className="text-white font-sans">TikTok Vibe</strong></span>
              <span className="text-pink-300 font-bold">𝕋𝕚𝕜𝕋𝕠𝕜 𝕍𝕚𝕓𝕖</span>
              <button
                onClick={() => handleCopyFont('𝕋𝕚𝕜𝕋𝕠𝕜 𝕍𝕚𝕓𝕖')}
                className="px-2.5 py-1 rounded bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 text-[11px] flex items-center gap-1 transition-colors"
                aria-label="Copy Double Struck"
              >
                {copiedFont === '𝕋𝕚𝕜𝕋𝕠𝕜 𝕍𝕚𝕓𝕖' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cara Membuat Font TikTok */}
      <section id="3-cara-membuat-font-tiktok" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          3. Cara Membuat Font TikTok
        </h2>
        <p>
          Membuat tulisan estetik untuk TikTok sangat sederhana dan dapat dilakukan dalam hitungan detik tanpa menginstal aplikasi tambahan:
        </p>

        <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4 pl-2">
          <li className="leading-relaxed">
            <strong className="text-cyan-300">Akses Generator Font:</strong> Buka halaman <Link href="/platform/tiktok" className="text-cyan-400 underline hover:text-cyan-300">Generator Font TikTok</Link> di browser smartphone Anda.
          </li>
          <li className="leading-relaxed">
            <strong className="text-cyan-300">Ketikkan Teks Anda:</strong> Masukkan nama, kalimat bio, atau caption video yang ingin Anda ubah pada kolom input utama.
          </li>
          <li className="leading-relaxed">
            <strong className="text-cyan-300">Pilih Gaya Aesthetic:</strong> Jelajahi puluhan variasi gaya font yang langsung dikonversi secara real-time.
          </li>
          <li className="leading-relaxed">
            <strong className="text-cyan-300">Salin (Copy) Teks:</strong> Klik tombol <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs">Copy</span> pada gaya font pilihan Anda.
          </li>
          <li className="leading-relaxed">
            <strong className="text-cyan-300">Tempel (Paste) di TikTok:</strong> Buka aplikasi TikTok &gt; masuk ke <em>Edit Profil</em> &gt; tempelkan teks pada kolom <strong>Nama</strong> atau <strong>Biodata</strong>, lalu simpan.
          </li>
        </ol>
      </section>

      {/* Section 4: Font Terbaik untuk Bio TikTok */}
      <section id="4-font-terbaik-untuk-bio-tiktok" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-pink-400" />
          <span>4. Font Terbaik untuk Bio TikTok</span>
        </h2>
        <p>
          Bio TikTok memiliki batas ruang yang singkat (maksimal 80 karakter). Oleh karena itu, memilih gaya font yang ringkas dan terbaca adalah kunci utama. Berikut rekomendasi gaya font bio TikTok terpopuler:
        </p>

        {/* Interactive Copyable Font Showcase */}
        <div className="my-6 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <h3 className="text-sm font-bold text-cyan-300 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Sampel Teks Bio TikTok Terpopuler (Salin 1-Klik)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {[
              { label: 'Small Caps Aesthetic', text: '✦ ᴄʀᴇᴀᴛɪᴠᴇ ᴄᴏɴᴛᴇɴᴛ ✦' },
              { label: 'Cursive Script Elegant', text: '✨ 𝓭𝓪𝓲𝓵𝔂.𝓿𝓵𝓸𝓰𝓼 ✨' },
              { label: 'Double Struck Clean', text: '⚡ 𝔻𝕒𝕚𝕝𝕪 𝔽𝕐ℙ ⚡' },
              { label: 'Circle Bubble Cute', text: '🌸 ⓐⓔⓢⓣⓗⓔⓣⓘⓒ 🌸' },
              { label: 'Bold Gothic Pro', text: '𝕲𝖆𝖒𝖎𝖓𝖌 & 𝕿𝖊𝖈𝖍' },
              { label: 'Subscript Minimalist', text: '<sub>cₒₙₜₑₙₜ cᵣₑₐₜₒᵣ</sub>' },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">{item.label}</span>
                  <span className="text-slate-200 font-bold">{item.text}</span>
                </div>
                <button
                  onClick={() => handleCopyFont(item.text)}
                  className="px-2.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-[11px] font-semibold flex items-center gap-1 shrink-0 transition-colors"
                  aria-label={`Copy ${item.label}`}
                >
                  {copiedFont === item.text ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Font untuk Username */}
      <section id="5-font-untuk-username" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-cyan-400" />
          <span>5. Font untuk Username</span>
        </h2>
        <p>
          Di TikTok, terdapat perbedaan antara <strong>Nama Tampilan (Display Name)</strong> dan <strong>ID Username (@username)</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>
            <strong>Nama Tampilan (Display Name):</strong> Dapat dihiasi secara bebas dengan font Unicode miring, bergaris, maupun simbol bintang.
          </li>
          <li>
            <strong>ID Username (@username):</strong> Digunakan untuk login dan tag akun. Disarankan tetap menggunakan karakter Latin standar agar mudah ditemukan orang lain saat diketik di kolom Search.
          </li>
        </ul>

        <div className="my-6 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex gap-3 text-xs sm:text-sm">
          <Lightbulb className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-purple-200 block mb-1">Strategi Branding Nama:</strong>
            Gunakan karakter Unicode estetis pada Nama Tampilan agar terlihat menonjol di ruang percakapan &amp; beranda, namun pertahankan ID @username sederhana agar mempermudah kolaborasi.
          </div>
        </div>
      </section>

      {/* Section 6: Font untuk Caption */}
      <section id="6-font-untuk-caption" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          6. Font untuk Caption
        </h2>
        <p>
          Caption TikTok memainkan peranan penting dalam menarik retensi penonton di 3 detik awal. Menggunakan font cetak tebal (Bold) atau Small Caps pada kata kunci pembuka (Hook Caption) membantu meningkatkan <strong>Watch Time</strong> dan <strong>Engagement Rate</strong>.
        </p>
        <p>
          Contoh penerapan hook caption aesthetic:
        </p>
        <div className="my-4 p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs space-y-2">
          <p className="text-slate-400">❌ Standard: Rahasia edit video cepat cuma 1 menit!</p>
          <p className="text-cyan-300 font-bold">✔️ Aesthetic: ⚡ ʀᴀʜᴀsɪᴀ ᴇᴅɪᴛ ᴠɪᴅᴇᴏ ᴄᴇᴘᴀᴛ | 1 Mᴇɴɪᴛ 🔥</p>
        </div>
      </section>

      {/* Section 7: Font untuk Komentar */}
      <section id="7-font-untuk-komentar" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-pink-400" />
          <span>7. Font untuk Komentar</span>
        </h2>
        <p>
          Kolom komentar TikTok yang ramai sering kali dipenuhi ribuan teks biasa. Dengan menyisipkan gaya tulisan berbingkai atau kombinasi Kaomoji lucu seperti <code>(◕‿◕✿)</code>, komentar Anda berpeluang besar berada di urutan atas (Top Comment) dan mendapatkan banyak <em>Likes</em> dari pengguna lain.
        </p>
      </section>

      {/* Section 8: Apakah Semua Font Didukung? */}
      <section id="8-apakah-semua-font-didukung" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          8. Apakah Semua Font Didukung?
        </h2>
        <p>
          Sebagian besar gaya font Unicode populer didukung oleh 99% smartphone iOS dan Android modern. Namun, beberapa karakter khusus dari rentang Unicode kuno atau sangat baru mungkin muncul sebagai simbol kotak kosong <code>□</code> (dikenal sebagai <em>Tofu character</em>) pada perangkat dengan OS lawas.
        </p>

        {/* Compatibility Matrix Table */}
        <div className="my-6 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-cyan-300">
                <th className="p-3">Gaya Font</th>
                <th className="p-3">Contoh Teks</th>
                <th className="p-3">Dukungan iOS &amp; Android</th>
                <th className="p-3">Status Keterbacaan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-3 font-semibold text-slate-200">Small Caps</td>
                <td className="p-3 font-mono text-cyan-300">ᴀᴇsᴛʜᴇᴛɪᴄ</td>
                <td className="p-3 text-emerald-400 font-semibold">100% Sangat Baik</td>
                <td className="p-3 text-emerald-400">Mudah Dibaca</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-200">Double Struck</td>
                <td className="p-3 font-mono text-cyan-300">𝕒𝕖𝕤𝕥ⓗ𝕖𝕥𝕚𝕔</td>
                <td className="p-3 text-emerald-400 font-semibold">99% Didukung</td>
                <td className="p-3 text-emerald-400">Tampak Modern</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-200">Circle Bubble</td>
                <td className="p-3 font-mono text-cyan-300">ⓐⓔⓢⓣⓗⓔⓣⓘⓒ</td>
                <td className="p-3 text-emerald-400 font-semibold">99% Didukung</td>
                <td className="p-3 text-emerald-400">Unik &amp; Cute</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-200">Gothic Fraktur</td>
                <td className="p-3 font-mono text-cyan-300">𝔤𝔬𝔱𝔥𝔦𝔠</td>
                <td className="p-3 text-amber-400 font-semibold">95% HP Modern</td>
                <td className="p-3 text-amber-300">Artistik / Klasik</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: Tips Memilih Font yang Mudah Dibaca */}
      <section id="9-tips-memilih-font-yang-mudah-dibaca" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          9. Tips Memilih Font yang Mudah Dibaca
        </h2>
        <p>
          Agar tampilan profil TikTok Anda tetap profesional dan memenuhi standar aksesibilitas (Accessibility AA), terapkan tips keterbacaan berikut:
        </p>

        <div className="my-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex gap-3 text-xs sm:text-sm">
          <Lightbulb className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-cyan-200 block mb-1">Panduan Keterbacaan Utama:</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-300 mt-1">
              <li>Gunakan font unik hanya pada kata kunci utama atau judul baris.</li>
              <li>Hindari menggabungkan 3+ jenis gaya font yang berbeda dalam 1 bio.</li>
              <li>Beri ruang spasi yang cukup antara simbol estetik dan teks utama.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 10: Kesalahan yang Harus Dihindari */}
      <section id="10-kesalahan-yang-harus-dihindari" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          10. Kesalahan yang Harus Dihindari
        </h2>
        <div className="my-6 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex gap-3 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-200 block mb-1">3 Hal Terlarang dalam Menggunakan Font TikTok:</strong>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 mt-2">
              <li>
                <strong>Mengubah seluruh Bio dengan font yang sangat tebal / rumit:</strong> Membingungkan pengunjung profil yang ingin membaca info penting.
              </li>
              <li>
                <strong>Melebihi batas 80 karakter bio:</strong> Teks Unicode dapat terpotong secara otomatis oleh TikTok.
              </li>
              <li>
                <strong>Menggunakan karakter bergaris coret di informasi kontak:</strong> Menyulitkan pengikut membaca alamat email atau link tautan bisnis.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ */}
      <section id="11-faq" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          11. FAQ (Pertanyaan Umum)
        </h2>
        <p>
          Temukan jawaban atas pertanyaan yang paling sering diajukan mengenai penggunaan font TikTok dan pemetaan Unicode pada bagian accordion di bawah ini.
        </p>
      </section>
    </article>
  );
};
