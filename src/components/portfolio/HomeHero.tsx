import { Link } from "react-router-dom";

import { profile } from "../../data/profile";
import { Icon } from "../ui/Icon";

const heroPhoto = new URL("../../../assets/profile/profil-saya.jpeg", import.meta.url).href;

export function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow">Belajar · Berkembang · Berdampak</p>
        <h1 id="home-title" className="hero-title">
          <span>E-Portfolio</span>
          <strong>Computational Thinking</strong>
        </h1>
        <p className="hero-subtitle">Portofolio perjalanan belajar Computational Thinking</p>
        <ul className="identity-list" aria-label="Identitas portofolio">
          <li><Icon name="person" size={17} />{profile.name}</li>
          <li><Icon name="graduation" size={17} />{profile.program}</li>
          <li><Icon name="runner" size={17} />{profile.field}</li>
          <li><Icon name="calendar" size={17} />{profile.year}</li>
        </ul>
        <p className="hero-placeholder">{profile.introduction ?? "[Pengantar portofolio akan ditambahkan]"}</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/topik">
            Lihat Topik Pembelajaran <Icon name="arrow-right" size={20} />
          </Link>
          <a className="button button-secondary" href="#profil">
            Lihat Profil <Icon name="arrow-down" size={18} />
          </a>
        </div>
        <aside className="hero-quote" aria-label="Catatan portofolio">
          <span className="hero-quote-mark" aria-hidden="true">“</span>
          <p>{profile.quote ?? "[Pengantar singkat tentang perjalanan belajar akan ditambahkan]"}</p>
        </aside>
      </div>
      <div className="hero-visual" aria-label="Area foto pemilik portofolio">
        <div className="hero-dots" aria-hidden="true" />
        <div className="hero-photo-tag" aria-label="Program dan bidang studi">
          <span>PPG Prajabatan</span>
          <i aria-hidden="true">•</i>
          <span>PJOK</span>
        </div>
        <div className="hero-photo-placeholder">
          {heroPhoto ? (
            <img src={heroPhoto} alt="Dokumentasi pemilik portofolio" />
          ) : (
            <>
              <span className="placeholder-kicker">Foto pemilik portofolio</span>
              <strong>[Foto akan ditambahkan]</strong>
              <small>Gunakan dokumentasi asli saat sudah tersedia.</small>
            </>
          )}
        </div>
        <div className="hero-note">
          <span className="hero-note-icon"><Icon name="dumbbell" size={20} /></span>
          <div>
            <strong>Olahraga</strong>
            <p>Ruang belajar yang dekat dengan gerak, kesehatan, dan karakter.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
