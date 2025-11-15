import Link from "next/link";

export default function FloatingCTA() {
  return (
    <div className="floating-cta">
      <Link
        href="/contact"
        className="flex items-center space-x-3 rounded-full bg-primary px-6 py-3 font-semibold text-secondary shadow-glow transition hover:-translate-y-1"
      >
        <span className="h-2 w-2 rounded-full bg-secondary" />
        <span>预约战略咨询 · Schedule Consultation</span>
      </Link>
    </div>
  );
}
