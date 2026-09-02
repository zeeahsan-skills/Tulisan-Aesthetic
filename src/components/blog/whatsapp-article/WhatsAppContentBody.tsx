'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Copy, Check, Info, AlertTriangle, Lightbulb, Sparkles, MessageCircle, CheckCircle2, Terminal, UserCheck, Smartphone } from 'lucide-react';

interface WhatsAppContentBodyProps {
  onCopy: (msg: string) => void;
}

export const WhatsAppContentBody: React.FC<WhatsAppContentBodyProps> = ({ onCopy }) => {
  const [copiedFont, setCopiedFont] = useState<string | null>(null);

  const handleCopyFont = (fontText: string) => {
    navigator.clipboard.writeText(fontText);
    setCopiedFont(fontText);
    onCopy(`Teks "${fontText}" berhasil disalin!`);
    setTimeout(() => setCopiedFont(null), 1500);
  };

  return (
    <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">
      {/* Section 1: Apa itu Font WhatsApp? */}
      <section id="1-apa-itu-font-whatsapp" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-emerald-400 shrink-0" />
          <span>1. Apa itu Font WhatsApp?</span>
        </h2>
        <p>
          <strong>Font WhatsApp</strong> merujuk pada dua jenis pengubahan gaya teks di WhatsApp:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-300">
          <li>
            <strong>Format Bawaan WhatsApp (Native Formatting):</strong> Penggunaan simbol seperti tanda bintang (<code>*teks*</code>) untuk cetak tebal, garis bawah (<code>_teks_</code>) untuk cetak miring, atau gelombang (<code>~teks~</code>) untuk teks tercoret.
          </li>
          <li>
            <strong>Teks Aesthetic Unicode:</strong> Penggunaan gaya huruf unik buatan generator online seperti <strong>Small Caps (ᴀᴇsᴛʜᴇᴛɪᴄ)</strong>, <strong>Circle Bubble (ⓐⓔⓢⓣⓗⓔⓣⓘⓒ)</strong>, dan <strong>Script Miring (𝓪𝓮𝓼𝓽𝓱𝓮𝓽𝓲𝓬)</strong> yang bisa dipasang di Nama Profil, Bio (Info), Status, dan Pesan Chat.
          </li>
        </ol>

        {/* Feature Visual Card / Graphic Illustration */}
        <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-slate-800 shadow-xl overflow-hidden relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Aesthetic Profile
              </span>
              <h3 className="text-lg font-bold text-white">Ubah Nama &amp; Info WA Jadi Lebih Elegan</h3>
              <p className="text-xs text-slate-400 max-w-md">
                Tampil profesional di grup percakapan dan kontak teman dengan menyusun nama profil serta info status berhiaskan simbol Unicode cantik.
              </p>
            </div>
            <div className="w-full sm:w-auto flex-shrink-0 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <span>Biasa: Budi Store</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 font-bold">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>Aesthetic: ✦ ʙᴜᴅɪ sᴛᴏʀᴇ ✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bagaimana Unicode Bekerja? */}
      <section id="2-bagaimana-unicode-bekerja" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          2. Bagaimana Unicode Bekerja?
        </h2>
        <p>
          Banyak yang menduga bahwa menyalin tulisan estetis ke WhatsApp membutuhkan pemasangan file font khusus (.ttf). Namun kenyataannya, hal tersebut dilakukan melalui pengkodean <strong>Unicode</strong>.
        </p>
        <p>
          Konsorsium Unicode Internasional menetapkan <em>Code Point</em> (titik kode unik) untuk setiap simbol. Generator font memetakan huruf abjad Latin standar ke kumpulan huruf simbol matematika (<em>Mathematical Alphanumeric Symbols</em>).
        </p>

        {/* Technical Callout Box */}
        <div className="my-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex gap-3 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-200 block mb-1">Standar Universal Unicode:</strong>
            Karena Meta (WhatsApp) mengadopsi standar sistem Unicode secara penuh pada Android dan iOS, teks estetis yang Anda tempelkan langsung dapat dibaca oleh seluruh penerima pesan tanpa mengubah sistem HP mereka.
          </div>
        </div>

        {/* Code Snippet Demonstration */}
        <div className="my-6 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-mono mb-3">
            <span className="flex items-center gap-1.5 font-bold">
              <Terminal className="w-4 h-4" /> Contoh Pemetaan Karakter WhatsApp
            </span>
            <span>Unicode Mapping</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Normal: <strong className="text-white font-sans">WhatsApp Business</strong></span>
              <span className="text-emerald-300 font-bold">ᴡʜᴀᴛsᴀᴘᴘ ʙᴜsɪɴᴇss</span>
              <button
                onClick={() => handleCopyFont('ᴡʜᴀᴛsᴀᴘᴘ ʙᴜsɪɴᴇss')}
                className="px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-1 transition-colors"
                aria-label="Copy Small Caps"
              >
                {copiedFont === 'ᴡʜᴀᴛsᴀᴘᴘ ʙᴜsɪɴᴇss' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400">Normal: <strong className="text-white font-sans">WhatsApp Business</strong></span>
              <span className="text-cyan-300 font-bold">𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡 𝔹𝕦𝕤𝕚𝕟𝕖𝕤𝕤</span>
              <button
                onClick={() => handleCopyFont('𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡 𝔹𝕦𝕤𝕚𝕟𝕖𝕤𝕤')}
                className="px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-[11px] flex items-center gap-1 transition-colors"
                aria-label="Copy Double Struck"
              >
                {copiedFont === '𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡 𝔹𝕦𝕤𝕚𝕟𝕖𝕤𝕤' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>Copy</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Cara Membuat Font WhatsApp */}
      <section id="3-cara-membuat-font-whatsapp" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          3. Cara Membuat Font WhatsApp
        </h2>
        <p>
          Ada dua metode mudah untuk mengubah tampilan huruf di WhatsApp:
        </p>

        <h3 className="text-lg font-bold text-emerald-300 mt-4 mb-2">A. Menggunakan Generator Online (Tulisan Aesthetic)</h3>
        <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6 pl-2">
          <li>Buka generator <Link href="/platform/whatsapp" className="text-emerald-400 underline hover:text-emerald-300">Generator Font WhatsApp</Link> di browser Anda.</li>
          <li>Ketikkan nama profil, info bio, atau pesan chat pada kolom input.</li>
          <li>Pilih salah satu gaya tulisan estetik yang paling Anda sukai.</li>
          <li>Tekan tombol <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs">Copy</span> untuk menyalin teks.</li>
          <li>Buka WhatsApp &gt; Pengaturan &gt; Profil &gt; Tempelkan (Paste) teks pada Nama atau Info.</li>
        </ol>

        <h3 className="text-lg font-bold text-emerald-300 mt-4 mb-2">B. Kode Format Bawaan WhatsApp (Native Markdown)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs my-4">
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block mb-1">Kode: <code>*Teks Tebal*</code></span>
            <span className="text-white font-bold">Hasil: Teks Tebal (Bold)</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block mb-1">Kode: <code>_Teks Miring_</code></span>
            <span className="text-white italic">Hasil: Teks Miring (Italic)</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block mb-1">Kode: <code>~Teks Tercoret~</code></span>
            <span className="text-white line-through">Hasil: Teks Tercoret</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-slate-400 block mb-1">Kode: <code>```Monospace```</code></span>
            <span className="text-emerald-300 font-mono">Hasil: Monospace Font</span>
          </div>
        </div>
      </section>

      {/* Section 4: Font untuk Nama Profil */}
      <section id="4-font-untuk-nama-profil" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-emerald-400" />
          <span>4. Font untuk Nama Profil</span>
        </h2>
        <p>
          Nama profil WhatsApp Anda dapat diisi maksimal 25 karakter. Karena ruangnya sangat terbatas, pilihlah gaya font yang ringkas dan tetap mudah dikenali oleh anggota grup maupun kontak bisnis.
        </p>

        {/* Copyable Font Samples Grid */}
        <div className="my-6 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <h3 className="text-sm font-bold text-emerald-300 mb-3 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sampel Nama Profil WhatsApp Terpopuler (Salin 1-Klik)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {[
              { label: 'Small Caps Clean', text: '✦ ᴀʟᴇxᴀɴᴅᴇʀ ✦' },
              { label: 'Cursive Script Graceful', text: '✨ 𝓢𝓪𝓻𝓪𝓱.𝓐𝓻𝓽 ✨' },
              { label: 'Circle Bubble Cutie', text: '🌸 ⓐⓛⓘⓒⓔ 🌸' },
              { label: 'Double Struck Bold', text: '⚡ 𝔻𝕒𝕧𝕚𝕕 ⚡' },
              { label: 'Gothic Classic', text: '𝕲𝖆𝖇𝖗𝖎𝖊𝖑' },
              { label: 'Subscript Minimal', text: '<sub>mᵢcₕₐₑₗ</sub>' },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-slate-500 block mb-0.5">{item.label}</span>
                  <span className="text-slate-200 font-bold">{item.text}</span>
                </div>
                <button
                  onClick={() => handleCopyFont(item.text)}
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[11px] font-semibold flex items-center gap-1 shrink-0 transition-colors"
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

      {/* Section 5: Font untuk Bio */}
      <section id="5-font-untuk-bio" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          5. Font untuk Bio
        </h2>
        <p>
          Kolom <strong>Info (Bio) WhatsApp</strong> menampung hingga 139 karakter. Anda dapat menggunakannya untuk menuliskan kutipan favorit, jam operasional bisnis, atau status ketersediaan (misalnya <em>&quot;Available on Call&quot;</em>).
        </p>

        <div className="my-6 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex gap-3 text-xs sm:text-sm">
          <Lightbulb className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-purple-200 block mb-1">Tips Menata Bio WhatsApp:</strong>
            Gunakan font aesthetic pada kata pertama atau simbol pembatas (seperti ✦, •, |) agar info kontak Anda tampak tersusun rapi.
          </div>
        </div>
      </section>

      {/* Section 6: Font untuk Status */}
      <section id="6-font-untuk-status" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          6. Font untuk Status
        </h2>
        <p>
          Membuat pengumuman atau unggahan foto pada <strong>Status WhatsApp (Story)</strong> jadi lebih memikat perhatian kontak Anda jika dikombinasikan dengan teks bergaris tebal atau font miring murni.
        </p>
      </section>

      {/* Section 7: Font untuk Pesan */}
      <section id="7-font-untuk-pesan" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800">
          7. Font untuk Pesan
        </h2>
        <p>
          Dalam obrolan grup atau pesan pribadi, memberikan penekanan kata kunci penting menggunakan kombinasi <code>*bold*</code> dan font Unicode membuat isi pesan Anda lebih komunikatif dan cepat dipahami lawan bicara.
        </p>
      </section>

      {/* Section 8: Apakah Semua Perangkat Mendukung? */}
      <section id="8-apakah-semua-perangkat-mendukung" className="scroll-mt-28">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-emerald-400" />
          <span>8. Apakah Semua Perangkat Mendukung?</span>
        </h2>
        <p>
          Hampir 99% smartphone Android (Samsung, Xiaomi, Oppo, Vivo) dan Apple iOS (iPhone/iPad) mendukung seluruh karakter Unicode standar.
        </p>
        <p>
          Karakter kotak kosong <code>□</code> hanya muncul apabila HP penerima masih menggunakan versi Android 5.0 ke bawah atau belum diperbarui selama bertahun-tahun.
        </p>

        {/* Compatibility Matrix Table */}
        <div className="my-6 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-300">
                <th className="p-3">Gaya Font</th>
                <th className="p-3">Contoh Teks</th>
                <th className="p-3">Dukungan WhatsApp Android/iOS</th>
                <th className="p-3">Tingkat Keterbacaan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-3 font-semibold text-slate-200">Small Caps</td>
                <td className="p-3 font-mono text-emerald-300">ᴀᴇsᴛʜᴇᴛɪᴄ</td>
                <td className="p-3 text-emerald-400 font-semibold">100% Didukung</td>
                <td className="p-3 text-emerald-400">Sangat Jelas</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-200">Double Struck</td>
                <td className="p-3 font-mono text-emerald-300">𝕒𝕖𝕤𝕥ⓗ𝕖𝕥𝕚𝕔</td>
                <td className="p-3 text-emerald-400 font-semibold">99% Didukung</td>
                <td className="p-3 text-emerald-400">Modern &amp; Rapi</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-200">Monospace</td>
                <td className="p-3 font-mono text-emerald-300">𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎</td>
                <td className="p-3 text-emerald-400 font-semibold">100% Native WA</td>
                <td className="p-3 text-emerald-400">Sangat Baik</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-200">Gothic Fraktur</td>
                <td className="p-3 font-mono text-emerald-300">𝔤𝔬𝔱𝔥𝔦𝔠</td>
                <td className="p-3 text-amber-400 font-semibold">95% HP Modern</td>
                <td className="p-3 text-amber-300">Klasik / Dekoratif</td>
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
          Ikuti aturan dasar keterbacaan (Accessibility AA) berikut ketika menghias profil WhatsApp:
        </p>

        <div className="my-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex gap-3 text-xs sm:text-sm">
          <Lightbulb className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-200 block mb-1">Rekomendasi Utama:</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-300 mt-1">
              <li>Pilihlah Small Caps atau Double Struck untuk nama profil utama.</li>
              <li>Jangan menggunakan font gothic yang rumit untuk nomor rekening atau alamat bisnis.</li>
              <li>Sisipkan spasi setelah simbol bintang (✨) atau bunga (🌸).</li>
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
            <strong className="text-amber-200 block mb-1">3 Hal yang Harus Dihindari di Profil WhatsApp:</strong>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 mt-2">
              <li>
                <strong>Mengubah seluruh pesan obrolan panjang dengan font Unicode:</strong> Membuat penerima pesan cepat lelah saat membaca.
              </li>
              <li>
                <strong>Melebihi batas 25 karakter nama WA:</strong> Nama profil Anda akan terpotong di daftar kontak orang lain.
              </li>
              <li>
                <strong>Menggunakan karakter miring rumit pada tautan link URL:</strong> Membuat tautan tidak bisa diklik secara langsung.
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
          Berikut adalah ringkasan pertanyaan yang paling sering diajukan seputar penggunaan font WhatsApp dan kode format teks.
        </p>
      </section>
    </article>
  );
};
