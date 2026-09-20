import { Link } from "react-router-dom";

import type { Topic } from "../../types/portfolio";
import { Icon } from "../ui/Icon";
import type { IconName } from "../ui/Icon";

const topicIcons: IconName[] = ["settings", "lightbulb", "chart", "book", "users", "puzzle"];

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  const worksheetLabel = topic.worksheets.length
    ? `${topic.worksheets.length} LK`
    : "LK belum tersedia";

  return (
    <li className={`topic-card topic-card-${topic.number}`}>
      <span className="topic-card-watermark" aria-hidden="true">{String(topic.number).padStart(2, "0")}</span>
      <div className="topic-card-main">
        <span className="topic-card-icon" aria-hidden="true">
          <Icon name={topicIcons[(topic.number - 1) % topicIcons.length]} size={34} />
        </span>
        <div>
          <span className="topic-number">{String(topic.number).padStart(2, "0")}</span>
          <h2>{topic.title}</h2>
        </div>
      </div>
      <p className="topic-card-description">{topic.shortDescription}</p>
      <div className="topic-card-footer">
        <span className="topic-lk-count">
          <Icon name="document" size={17} />
          {worksheetLabel}
        </span>
        <Link className="topic-card-link" to={`/topik/${topic.id}`}>
          Buka Topik
          <Icon name="arrow-right" size={18} />
        </Link>
      </div>
    </li>
  );
}
