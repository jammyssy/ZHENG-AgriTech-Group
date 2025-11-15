import Link from "next/link";

export default function FloatingCTA() {
  return (
    <div className="floating-cta">
      <Link
        href="/contact"
        className="flex items-center gap-3 rounded-full border border-primary/40 bg-white px-6 py-3 text-sm font-semibold text-secondary shadow-subtle transition hover:-translate-y-1"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        <span>预约战略咨询 · Schedule Consultation</span>
      </Link>
    </div>
  );
}
