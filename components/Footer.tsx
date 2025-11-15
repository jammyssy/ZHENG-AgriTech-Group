import Link from "next/link";

const footerLinks = [
  {
    title: "Divisions",
    items: [
      { label: "Zhengshi Genetics", href: "/genetics" },
      { label: "Smart Agriculture System ASSA", href: "/smart-os" },
      { label: "Green Farm Ecology", href: "/green-farm" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "LinkedIn", href: "#" },
      { label: "WeChat", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent/10 bg-secondary/80">
      <div className="section-container grid gap-12 md:grid-cols-4">
        <div className="space-y-3">
          <span className="inline-flex items-center space-x-2 rounded-full border border-accent/20 px-4 py-1 text-xs uppercase tracking-[0.25em] text-accent/70">
            <span>郑氏农业科技集团</span>
          </span>
          <p className="text-2xl font-semibold text-light">
            Zhengshi AgriTech Group
          </p>
          <p className="text-sm text-accent/70">
            “以科技重塑农业未来。” AI-driven genetics, smart farming OS, and sustainable ecology.
          </p>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              {column.title}
            </h3>
            <ul className="space-y-2 text-sm text-accent/70">
              {column.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-accent/10 py-8 text-center text-xs uppercase tracking-[0.3em] text-accent/50">
        © {new Date().getFullYear()} Zhengshi AgriTech Group. All rights reserved.
      </div>
    </footer>
  );
}
