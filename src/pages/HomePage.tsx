import { InstitutionCard } from "../components/portfolio/InstitutionCard";
import { HomeHero } from "../components/portfolio/HomeHero";
import { ProfileSection } from "../components/portfolio/ProfileSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { institutions } from "../data/institutions";
import { Link } from "react-router-dom";
import { Icon } from "../components/ui/Icon";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <ProfileSection />
      <section id="lingkungan-belajar" className="home-section environment-section" aria-labelledby="environment-title">
        <SectionHeading eyebrow="Lingkungan Belajar" title="LPTK & Tempat PPL" titleId="environment-title" aside="LPTK memberi konteks program; tempat PPL memberi ruang untuk menghubungkan pembelajaran dengan praktik." />
        <div className="institutions-grid">
          {institutions.map((institution) => (
            <InstitutionCard key={institution.id} institution={institution} />
          ))}
        </div>
      </section>
      <section className="home-topic-invite site-container" aria-labelledby="topic-invite-title">
        <span className="invite-sticker" aria-hidden="true">lanjut eksplorasi!</span>
        <div className="invite-orbit" aria-hidden="true"><Icon name="puzzle" size={48} /><span>CT</span></div>
        <div className="invite-copy">
          <p className="page-eyebrow">Perjalanan berikutnya</p>
          <h2 id="topic-invite-title">Sudah kenal saya.<br />Sekarang, lihat prosesnya.</h2>
          <p>Jelajahi topik, lembar kerja, dan cerita belajar di balik portofolio ini.</p>
          <Link className="button button-primary invite-button" to="/topik">Masuk ke Topik <Icon name="arrow-right" size={22} /></Link>
        </div>
        <span className="invite-spark" aria-hidden="true">✳</span>
      </section>
    </>
  );
}
