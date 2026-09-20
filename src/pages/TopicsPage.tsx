import { TopicCard } from "../components/portfolio/TopicCard";
import { profile } from "../data/profile";
import { topics } from "../data/topics";

const topicsPhoto = new URL("../../assets/profile/profil-saya.jpeg", import.meta.url).href;

export function TopicsPage() {
  const availableWorksheets = topics.reduce((total, topic) => total + topic.worksheets.length, 0);

  return (
    <section className="topics-page" aria-labelledby="topics-title">
      <div className="topics-page-inner">
        <header className="topics-intro">
          <div className="topics-intro-copy">
            <p className="page-eyebrow">Materi Pembelajaran</p>
            <h1 id="topics-title">Topik Pembelajaran</h1>
            <p>
              Pelajari setiap topik untuk memperkuat pemahaman tentang Computational Thinking
              dan penerapannya dalam pembelajaran PJOK.
            </p>

            <div className="topics-stats" aria-label="Ringkasan materi">
              <span><strong>{String(topics.length).padStart(2, "0")}</strong> Topik pembelajaran</span>
              <span><strong>{String(availableWorksheets).padStart(2, "0")}</strong> LK terdokumentasi</span>
            </div>
          </div>

          <blockquote className="topics-quote">
            “{profile.quote}”
            <span aria-hidden="true" />
          </blockquote>

          {topicsPhoto ? (
            <div className="topics-portrait" aria-label="Visual pemilik portofolio">
              <img src={topicsPhoto} alt="Dokumentasi pemilik portofolio" />
              <p>
                <span>Belajar</span>
                <span>Berpikir</span>
                <span>Berdampak</span>
              </p>
            </div>
          ) : null}
        </header>

        <ul className="topic-grid" aria-label="Daftar topik pembelajaran">
          {topics.map((topic) => <TopicCard key={topic.id} topic={topic} />)}
        </ul>
      </div>
    </section>
  );
}
