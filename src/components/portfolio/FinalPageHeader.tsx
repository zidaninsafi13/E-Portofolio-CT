import { Icon, type IconName } from "../ui/Icon";

type FinalPageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  quote: string;
  icon: IconName;
  iconLabel: string;
  titleId: string;
  tone?: "blue" | "green";
};

export function FinalPageHeader({
  eyebrow,
  title,
  description,
  quote,
  icon,
  iconLabel,
  titleId,
  tone = "blue",
}: FinalPageHeaderProps) {
  return (
    <header className={`final-page-header final-page-header-${tone}`}>
      <div className="final-page-heading">
        <p className="page-eyebrow">{eyebrow}</p>
        <h1 id={titleId}>{title}</h1>
        <p>{description}</p>
      </div>

      <blockquote>{quote}</blockquote>

      <div className="final-page-marker" aria-hidden="true">
        <span><Icon name={icon} size={28} /></span>
        <strong>{iconLabel}</strong>
      </div>
    </header>
  );
}
