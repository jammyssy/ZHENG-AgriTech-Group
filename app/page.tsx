import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const heroStats = [
  {
    label: "AI育种准确率",
    en: "Genomic Precision",
    value: "99.2%",
    description: "多维基因组 × 表型模型",
  },
  {
    label: "ASSA 智能响应",
    en: "Scenario Response",
    value: "< 12s",
    description: "实时异常告警与指令下发",
  },
  {
    label: "生态碳减排",
    en: "Carbon Intensity",
    value: "-38%",
    description: "泰宁绿色生态基地年度数据",
  },
];

const pillars = [
  {
    title: "源种科技 Zhengshi Genetics",
    description: "GGP 蓝耳/非瘟双阴纯合群体，融合 Cedarridge 与 ACU Fast 遗传优势。",
  },
  {
    title: "ASSA 智慧农场操作系统",
    description: "AI×IoT 数据中枢贯通饲养、健康、财务，构建数字化农场操作系统。",
  },
  {
    title: "绿色生态基地",
    description: "泰宁无抗绿色生态示范区，打造循环农业与生态修复并行的未来农场。",
  },
];

const intelligenceHighlights = [
  {
    title: "AI Breeding Cloud",
    detail: "跨基地遗传数据同步 · 1996-2024 家系资料沉淀，辅助快速迭代选留策略。",
  },
  {
    title: "Digital Farm Twin",
    detail: "Farm Digital Twin 数字孪生实时映射生产现场，实现远程调度与预警。",
  },
  {
    title: "Bio-Security Mesh",
    detail: "蓝耳/非瘟双阴净化流程标准化，结合环境微生物组监测，确保高健康度。",
  },
];

const valueDrivers = [
  {
    title: "Systems Thinking 系统方法论",
    text: "AI、遗传、营养、生态协同，形成闭环数据资产与持续竞争力。",
  },
  {
    title: "Human + Machine Co-creation",
    text: "跨学科团队与算法协同，构建场景化决策引擎，赋能现场运营团队。",
  },
  {
    title: "Bio-Safety Architecture",
    text: "从种源到生态基地的多层生物安全防护，稳固供应链抗风险能力。",
  },
  {
    title: "Green Value Chain",
    text: "无抗、低碳、可追溯，打造面向未来食品安全的生态型价值网络。",
  },
];

const partners = ["SynBio Labs", "Future Farms", "AgriNet", "DeepAg", "Sino Green", "BioCompute"];

const updates = [
  {
    title: "Zhengshi Genetics 发布 GGP Cedarridge-ACU Fast 联合育种白皮书",
    summary: "聚焦蓝耳/非瘟双阴自有核心群体的遗传提升与抗性表现。",
    link: "/news",
  },
  {
    title: "ASSA Intelligence System 推出碳足迹追踪模块",
    summary: "AI Blue 数据栈连接能源、饲料、排放指标，形成 ESG 监测闭环。",
    link: "/technology",
  },
  {
    title: "泰宁绿色生态基地获评国家无抗养殖示范区",
    summary: "Warm Earth Beige 微景观设计实现自然循环与动物福祉共赢。",
    link: "/green-farm",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-32 pb-32">
      <section className="section-container pt-36">
        <div className="hero-panel">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="kicker text-secondary/60">AI × AGRICULTURE FUTURES</p>
              <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
                郑氏农业科技集团 · 以科技重塑农业未来
              </h1>
              <p className="max-w-2xl text-lg text-secondary/70">
                Zhengshi AgriTech Group orchestrates genetics innovation, ASSA smart farming OS, and green ecological bases to build resilient, data-intelligent agriculture for the next century.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/technology"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white"
                >
                  Explore Platform
                </Link>
                <Link
                  href="/vision-mission"
                  className="rounded-full border border-accent/50 px-6 py-3 text-sm uppercase tracking-[0.3em] text-secondary/70 hover:text-secondary"
                >
                  愿景使命
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="grid-card">
                    <p className="text-xs uppercase tracking-[0.3em] text-secondary/50">{stat.en}</p>
                    <p className="mt-3 text-3xl font-semibold text-secondary">{stat.value}</p>
                    <p className="mt-2 text-xs text-secondary/60">{stat.label} · {stat.description}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[1.5rem] border border-ai/30 bg-soft/60 p-6">
                <p className="text-sm font-semibold text-secondary">ASSA Intelligence System</p>
                <p className="mt-2 text-sm text-secondary/70">
                  AI Blue 数据栈连接生产、环境、供应链，实现实时预测、协同调度与成本透明化。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Core Divisions"
          title="三大板块协同驱动农业未来"
          subtitle="Zhengshi Genetics · ASSA Smart Farming OS · Green Farm Ecology 形成闭环数据生态。"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="grid-card">
              <h3 className="text-xl font-semibold text-secondary">{pillar.title}</h3>
              <p className="mt-3 text-sm text-secondary/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Intelligence Fabric"
          title="AI × 农业的数据底座"
          subtitle="ASSA 智慧农场操作系统实时整合 IoT、基因组、生产与 ESG 指标，形成统一数据语言。"
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="surface-card space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              {["生产预测", "基因增益", "健康监测", "碳足迹"].map((metric) => (
                <div key={metric} className="stat-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary/50">{metric}</p>
                  <p className="mt-3 text-3xl font-semibold text-secondary">
                    {metric === "碳足迹" ? "-18%" : metric === "生产预测" ? "+21%" : metric === "基因增益" ? "+12%" : "99.8%"}
                  </p>
                  <p className="mt-2 text-xs text-secondary/60">AI Blue 数据流 · 实时洞察</p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.75rem] border border-ai/30 bg-white p-6 shadow-subtle">
              <p className="text-sm font-semibold text-secondary">Edge-to-Cloud Architecture</p>
              <p className="mt-2 text-sm text-secondary/70">
                场端传感器、无人巡检、AI 视觉与云端大模型协同，为每一头动物建立数字档案，实现预测性运营。
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {intelligenceHighlights.map((highlight) => (
              <div key={highlight.title} className="stat-card">
                <h3 className="text-lg font-semibold text-secondary">{highlight.title}</h3>
                <p className="mt-2 text-sm text-secondary/70">{highlight.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Why Zhengshi"
          title="系统化能力，链接未来食品安全"
          subtitle="从基因到生态的端到端能力，支撑中国农业的可持续增长。"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {valueDrivers.map((driver) => (
            <div key={driver.title} className="grid-card">
              <h3 className="text-xl font-semibold text-secondary">{driver.title}</h3>
              <p className="mt-3 text-sm text-secondary/70">{driver.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Global Partners"
          title="与全球先锋共建农业未来"
          subtitle="合作网络涵盖基因科学、AI 算法、生态设计与供应链管理。"
        />
        <div className="mt-10 grid gap-4 rounded-[1.75rem] border border-accent/30 bg-white p-10 text-center text-xs uppercase tracking-[0.35em] text-secondary/60 md:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner} className="rounded-full border border-accent/40 px-5 py-3 text-secondary/70">
              {partner}
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Latest"
          title="新闻 & 洞察"
          subtitle="关注郑氏农业科技集团的战略动态与技术发布。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {updates.map((item) => (
            <Link key={item.title} href={item.link} className="grid-card block hover:border-primary/60">
              <h3 className="text-lg font-semibold text-secondary">{item.title}</h3>
              <p className="mt-3 text-sm text-secondary/70">{item.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                阅读更多
                <span aria-hidden className="h-px w-8 bg-primary/60" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
