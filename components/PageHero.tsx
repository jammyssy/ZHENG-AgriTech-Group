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
      <div className="gradient-border p-[1px]">
        <div className="glass-panel rounded-[22px] p-10 md:p-16">
          <div className="space-y-6">
            {kicker && (
              <p className="text-xs uppercase tracking-[0.35em] text-primary/80">{kicker}</p>
            )}
            <h1 className="text-4xl font-semibold leading-tight text-light md:text-5xl">
              {title}
            </h1>
            {subtitle && <p className="max-w-3xl text-lg text-accent/70">{subtitle}</p>}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
