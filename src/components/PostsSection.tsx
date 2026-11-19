export function PostsSection() {
  return (
    <section className="section-stack">
      <div className="card form-box">
        <h2>Tahap 2: Integrasi REST API (Express + Neon / JSONPlaceholder)</h2>
        <p className="muted-text" style={{ marginBottom: '1rem' }}>
          Area kerja kolaborasi untuk <strong>Anggota 2</strong> dan <strong>Anggota 3</strong>.
        </p>

        <div className="status-info" style={{ marginBottom: '1rem' }}>
          <strong>📌 Panduan Pembagian Tugas Tahap 2:</strong>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', lineHeight: '1.6' }}>
            <li>
              <strong>Anggota 2:</strong> Konfigurasi CORS backend, fetch <code>GET /api/posts</code>, handle state <em>loading</em> &amp; pesan <em>error</em> jika server mati, serta fitur pencarian <code>?search=...</code> (Bonus).
            </li>
            <li>
              <strong>Anggota 3:</strong> Form tambah post (<code>POST /api/posts</code>), tombol hapus post (<code>DELETE /api/posts/:id</code>), dan update state UI reaktif tanpa refresh halaman.
            </li>
          </ul>
        </div>

        <div className="card empty-state" style={{ border: '2px dashed #d1d5db', background: '#f9fafb' }}>
          <h3>🚀 Siap Diintegrasikan</h3>
          <p className="muted-text">
            Kalian dapat mengedit berkas ini di <code>src/components/PostsSection.tsx</code> dan menambahkan service API di <code>src/services/postApi.ts</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
