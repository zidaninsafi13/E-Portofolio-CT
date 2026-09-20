import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <p className="page-eyebrow">404</p>
      <h1 id="not-found-title">Halaman tidak ditemukan</h1>
      <p>Alamat yang dibuka belum tersedia.</p>
      <Link className="button button-primary" to="/">Kembali ke Beranda</Link>
    </section>
  );
}
