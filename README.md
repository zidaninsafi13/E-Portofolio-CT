# E-Portfolio Computational Thinking

Website portofolio akademik Zidan Insafi untuk mendokumentasikan perjalanan belajar Computational Thinking dalam program PPG PJOK.

## Menjalankan project

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
```

## Struktur utama

- `src/pages/` — halaman Beranda, Topik, Infografis, Laporan Akhir, dan Refleksi.
- `src/components/` — komponen layout, kartu, navigasi, dan modal preview dokumen.
- `src/data/` — data profil, institusi, topik, refleksi, infografis, dan laporan akhir.
- `tugas/` — PDF lembar kerja, refleksi, laporan akhir, serta aset infografis yang ditampilkan website.
- `assets/` — foto profil, logo kampus, dan referensi visual landing page.
- `public/` — aset publik seperti logo institusi, gambar PPL, dan favicon.

Semua konten akademik diambil dari aset lokal pada folder `tugas/`; tidak ada API eksternal yang diperlukan.
