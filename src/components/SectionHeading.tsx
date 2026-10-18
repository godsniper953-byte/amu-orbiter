type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  titleId?: string;
};

export default function SectionHeading({ eyebrow, title, description, align = "left", titleId }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <span className="eyebrow section-eyebrow"><span className="eyebrow-mark">✳</span> {eyebrow}</span>
      <h2 id={titleId}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
