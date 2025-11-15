interface SectionTitleProps {
  kicker?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ kicker, title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-4">
      {kicker && (
        <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{kicker}</p>
      )}
      <h2 className="text-3xl font-semibold text-light md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-3xl text-accent/70">{subtitle}</p>}
    </div>
  );
}
