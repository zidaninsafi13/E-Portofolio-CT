type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  aside?: string;
};

export function SectionHeading({ eyebrow, title, titleId, aside }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      {aside ? <p className="section-aside">{aside}</p> : null}
    </div>
  );
}
