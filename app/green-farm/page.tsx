import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const ecosystem = [
  {
    title: "泰宁山水生态",
    description: "位于福建泰宁山系，水源纯净，构建天然屏障与低密度生态养殖。",
  },
  {
    title: "无抗养殖体系",
    description: "实施精准营养与微生态调控，减少抗生素使用，实现零药残目标。",
  },
  {
    title: "循环农业",
    description: "粪污资源化、沼气发电与生态种植形成闭环，打造碳中和示范基地。",
  },
];

const initiatives = [
  "智能环境控制，实现温湿度、空气质量的微环境调节",
  "生态监测网络追踪水质、土壤与生物多样性",
  "绿色能源系统将沼气、太阳能用于生产",
  "消费者可视化平台提供全链路透明追溯",
];

export default function GreenFarmPage() {
  return (
    <div className="pb-32">
      <PageHero
        kicker="Green Farm Ecology"
        title="绿色农场生态 · 泰宁基地"
        subtitle="Our green base in Taining integrates regenerative agriculture principles with AI monitoring to realize antibiotic-free, low-carbon farming."
      />

      <section className="section-container">
        <SectionTitle
          kicker="Ecology"
          title="泰宁自然生态"
          subtitle="山水相依的自然环境为绿色养殖提供独特优势。"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {ecosystem.map((item) => (
            <div key={item.title} className="rounded-3xl border border-accent/15 bg-secondary/60 p-8">
              <h3 className="text-lg font-semibold text-light">{item.title}</h3>
              <p className="mt-3 text-sm text-accent/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Sustainability"
          title="无抗、绿色、可持续体系"
          subtitle="将生物安全、环境保护与消费信任整合为统一标准。"
        />
        <div className="mt-10 rounded-3xl border border-accent/15 bg-secondary/60 p-8">
          <ul className="space-y-4 text-sm text-accent/70">
            {initiatives.map((initiative) => (
              <li key={initiative}>• {initiative}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Data"
          title="生态数据指标"
          subtitle="实时监控支撑绿色运营。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {["Water Quality Index", "Carbon Intensity", "Biodiversity", "Animal Wellness"].map((metric) => (
            <div key={metric} className="rounded-3xl border border-primary/20 bg-secondary/60 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{metric}</p>
              <p className="mt-4 text-2xl font-semibold text-light">{Math.round(Math.random() * 30 + 60)}%</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
