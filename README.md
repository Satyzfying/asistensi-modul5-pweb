# Asistensi Modul 5 — Pemrograman Web

Repositori tugas asistensi Modul 5 mata kuliah Pemrograman Web. Aplikasi ini dibuat menggunakan React, Vite, dan TypeScript, mencakup implementasi state management lokal dan integrasi REST API.

## Anggota Kelompok
- [Nama Anggota 1] - [NRP]
- [Nama Anggota 2] - [NRP]
- [Nama Anggota 3] - [NRP]

## Fitur Aplikasi

### Tahap 1: Papan Catatan Lokal
- Manajemen state dan komponen menggunakan React + TypeScript.
- Input catatan baru dengan *controlled form* dan validasi sederhana.
- Tampilan daftar catatan dengan pemisahan komponen kartu dan opsi hapus.
- Fitur pencarian/filter catatan berdasarkan judul secara *real-time*.
- Penyimpanan data lokal persisten menggunakan `localStorage`.

### Tahap 2: Integrasi REST API Posts
- Menampilkan data post dari backend REST API dengan indikator *loading* dan penanganan *error*.
- Form pengiriman post baru (POST) dan penghapusan post (DELETE) secara reaktif.
- Filter pencarian query backend (`?search=`).

## Cara Menjalankan

1. Clone repositori:
   ```bash
   git clone https://github.com/Satyzfying/asistensi-modul5-pweb.git
   cd asistensi-modul5-pweb
   ```

2. Install dependensi:
   ```bash
   npm install
   ```

3. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

4. Build produksi (opsional):
   ```bash
   npm run build
   ```
