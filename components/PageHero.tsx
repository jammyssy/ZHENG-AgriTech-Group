import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  children?: ReactNode;
}

export default function PageHero({ title, subtitle, kicker, children }: PageHeroProps) {
  return (
    <section className="section-container pt-32 md:pt-40">
      <div className="hero-panel">
        <div className="space-y-6">
          {kicker && <p className="kicker text-secondary/60">{kicker}</p>}
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          {subtitle && <p className="max-w-3xl text-lg text-secondary/70">{subtitle}</p>}
          <div className="divider-line max-w-[180px]" />
          {children}
        </div>
      </div>
    </section>
  );
}
