import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const lineage = [
  {
    name: "Cedarridge Elite Line",
    description: "源自北美的高产、稳健血统，适配高密度生产环境。",
  },
  {
    name: "ACU Fast Performance",
    description: "强调饲料效率与日增重表现，支撑经济性提升。",
  },
  {
    name: "Zhengshi Native Resilience",
    description: "针对南方气候与病原环境优化的自研蓝耳/非瘟双阴种群。",
  },
];

const metrics = [
  { label: "年度 GGP 输出", value: "32,000+" },
  { label: "蓝耳/非瘟检测阳性率", value: "0%" },
  { label: "遗传增益速度", value: "+18% YoY" },
  { label: "合作核心场", value: "20+" },
];

const safeguards = [
  "多点实时监测与分区隔离管理，构建预防前置的生物安全体系。",
  "PCR + 基因测序 + AI 异常识别，形成三重验证机制。",
  "全生命周期追踪系统对接 ASSA，异常 15 分钟内响应。",
];

export default function GeneticsPage() {
  return (
    <div className="pb-32">
      <PageHero
        kicker="Zhengshi Genetics"
        title="源种科技 · Blue-ear & ASF Double-Negative Core"
        subtitle="We engineer resilient genetics through AI-assisted selection and rigorous bio-security, delivering pure GGP lines for future-ready farming."
      />

      <section className="section-container">
        <SectionTitle
          kicker="Lineage"
          title="纯净血统矩阵"
          subtitle="融合国际优质血统与自主研发种群，打造双阴安全核心。"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {lineage.map((item) => (
            <div key={item.name} className="grid-card">
              <h3 className="text-lg font-semibold text-secondary">{item.name}</h3>
              <p className="mt-3 text-sm text-secondary/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Bio-Security"
          title="蓝耳/非瘟双阴体系"
          subtitle="构建多层级的检测、防护、净化流程，确保核心群体持续稳定。"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-sm text-secondary/70">
            <p>
              通过多点实时监测、分区隔离管理与基因检测组合，形成“预防-检测-隔离-净化”闭环。与国家级实验室合作，采用 PCR、基因测序与 AI 异常识别技术，保障双阴状态长期维持。
            </p>
            <p>
              我们的全生命周期追踪系统覆盖种猪繁育、育肥、出栏每个环节，并与 ASSA 操作系统互通，实现任何风险的快速响应与可视化追踪。
            </p>
          </div>
          <div className="surface-card space-y-3">
            <h3 className="text-lg font-semibold text-secondary">安全防护三要素</h3>
            <ul className="space-y-2 text-sm text-secondary/70">
              {safeguards.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Output"
          title="年度遗传产能"
          subtitle="数据体现平台化育种的效率。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="grid-card text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary/50">{metric.label}</p>
              <p className="mt-4 text-2xl font-semibold text-secondary">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
