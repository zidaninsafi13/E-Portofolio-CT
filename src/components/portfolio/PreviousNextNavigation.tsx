import { Link } from "react-router-dom";

import type { LearningWorksheet, Topic } from "../../types/portfolio";
import { Icon } from "../ui/Icon";

type PreviousNextNavigationProps = {
  activeWorksheet?: LearningWorksheet;
  topics: Topic[];
  topic: Topic;
};

export function PreviousNextNavigation({ activeWorksheet, topics, topic }: PreviousNextNavigationProps) {
  const topicIndex = topics.findIndex((item) => item.id === topic.id);
  const worksheetIndex = activeWorksheet
    ? topic.worksheets.findIndex((worksheet) => worksheet.id === activeWorksheet.id)
    : -1;
  const previousWorksheet = worksheetIndex > 0 ? topic.worksheets[worksheetIndex - 1] : undefined;
  const nextWorksheet = worksheetIndex >= 0 ? topic.worksheets[worksheetIndex + 1] : undefined;
  const previousTopic = topicIndex > 0 ? topics[topicIndex - 1] : undefined;
  const nextTopic = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : undefined;

  return (
    <nav className="topic-pagination" aria-label="Navigasi topik dan LK">
      {activeWorksheet ? (
        <div className="worksheet-pagination">
          {previousWorksheet ? (
            <Link className="worksheet-nav secondary" to={`?lk=${encodeURIComponent(previousWorksheet.slug)}`}>
              <Icon name="arrow-left" size={22} />
              <span><strong>{previousWorksheet.code}</strong>LK sebelumnya</span>
            </Link>
          ) : <span className="worksheet-nav-placeholder" />}

          <Link className="worksheet-nav back" to="/topik">
            <Icon name="home" size={20} />
            Kembali ke Topik
          </Link>

          {nextWorksheet ? (
            <Link className="worksheet-nav primary" to={`?lk=${encodeURIComponent(nextWorksheet.slug)}`}>
              <span><strong>{nextWorksheet.code}</strong>LK berikutnya</span>
              <Icon name="arrow-right" size={22} />
            </Link>
          ) : <span className="worksheet-nav-placeholder" />}
        </div>
      ) : (
        <Link className="worksheet-nav back standalone" to="/topik">
          <Icon name="home" size={20} />
          Kembali ke Topik
        </Link>
      )}

      <div className="topic-neighbor-bar">
        {previousTopic ? (
          <Link to={`/topik/${previousTopic.id}`}>
            <Icon name="arrow-left" size={22} />
            <span><strong>Topik {previousTopic.number}</strong>{previousTopic.title}</span>
          </Link>
        ) : <span />}
        {nextTopic ? (
          <Link className="next" to={`/topik/${nextTopic.id}`}>
            <span><strong>Topik {nextTopic.number}</strong>{nextTopic.title}</span>
            <Icon name="arrow-right" size={22} />
          </Link>
        ) : <span />}
      </div>
    </nav>
  );
}
