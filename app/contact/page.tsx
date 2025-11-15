import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <div className="pb-32">
      <PageHero
        kicker="Contact"
        title="联系我们"
        subtitle="Connect with Zhengshi AgriTech Group for strategic partnerships, technology collaborations, and media inquiries."
      />

      <section className="section-container">
        <SectionTitle
          kicker="Form"
          title="发送信息"
          subtitle="填写下方表单，我们的团队将在 48 小时内回复。"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="surface-card space-y-6">
            {[
              { label: "Name / 姓名", type: "text" },
              { label: "Email", type: "email" },
              { label: "Company / 机构", type: "text" },
            ].map((field) => (
              <div key={field.label} className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-secondary/50">{field.label}</label>
                <input
                  type={field.type}
                  className="w-full rounded-full border border-accent/40 bg-white px-5 py-3 text-sm text-secondary focus:border-primary focus:outline-none"
                  placeholder={field.label}
                  required
                />
              </div>
            ))}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.3em] text-secondary/50">Message / 信息</label>
              <textarea
                className="h-32 w-full rounded-3xl border border-accent/40 bg-white px-5 py-4 text-sm text-secondary focus:border-primary focus:outline-none"
                placeholder="Tell us about your project or inquiry"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white"
            >
              Submit
            </button>
          </form>
          <div className="space-y-6">
            <div className="surface-card text-sm text-secondary/70">
              <h3 className="text-lg font-semibold text-secondary">Headquarters</h3>
              <p className="mt-2">Fuzhou High-Tech District, Fujian, China</p>
              <p className="mt-2">Email: contact@zhengshi.ai</p>
              <p className="mt-2">Phone: +86 591 1234 5678</p>
              <p className="mt-2">Media: press@zhengshi.ai</p>
            </div>
            <div className="surface-card flex h-72 flex-col items-center justify-center text-center text-sm text-secondary/60">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary/50">Map Placeholder</p>
              <p className="mt-3 max-w-xs">
                Google Maps view of Zhengshi AgriTech HQ. Replace with embedded map in production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
