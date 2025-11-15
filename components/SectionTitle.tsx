interface SectionTitleProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ kicker, title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-5">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="divider-line max-w-[160px]" />
    </div>
  );
}
