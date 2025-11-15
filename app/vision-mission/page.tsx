import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const missionPillars = [
  {
    title: "AI Genetics Model",
    detail: "融合表型、基因组、环境数据的自研模型，为蓝耳/非瘟双阴核心群体提供持续进化的遗传优势。",
  },
  {
    title: "Smart Agriculture System ASSA",
    detail: "智慧农场操作系统连接传感器、自动化设备与管理流程，形成实时可控的数字大脑。",
  },
  {
    title: "Green Farm Ecology",
    detail: "泰宁生态基地构建无抗、循环的 Warm Earth Beige 生态样板，实现碳中和与动物福祉。",
  },
  {
    title: "Global Collaboration",
    detail: "联合科研机构、产业伙伴与政策平台，共同推进农业科技的开放创新。",
  },
];

const values = [
  {
    title: "Precision",
    description: "以数据精度驱动遗传改良与生产决策，确保可追踪、可验证。",
  },
  {
    title: "Integrity",
    description: "坚持生物安全与动物福利，构建高信任的食品供应体系。",
  },
  {
    title: "Co-evolution",
    description: "与合作伙伴与生态系统共同成长，推动产业协同升级。",
  },
  {
    title: "Sustainability",
    description: "以碳中和与绿色生态为目标，设计循环农业模式。",
  },
];

export default function VisionMissionPage() {
  return (
    <div className="pb-32">
      <PageHero
        kicker="愿景使命 Vision & Mission"
        title="成为全球领先的 AI 农业操作系统赋能者"
        subtitle="Our purpose is to orchestrate intelligent genetics, autonomous farm operations, and regenerative ecosystems that secure healthy protein for humanity."
      />

      <section className="section-container">
        <SectionTitle
          kicker="Vision"
          title="Vision 愿景"
          subtitle="构建一个 AI 协同、生态友好、完全透明的农业新世界。"
        />
        <div className="mt-10 surface-card space-y-4 text-lg leading-relaxed text-secondary/75">
          <p>
            我们的愿景是打造一个数据驱动、算法协同的农业生态网络。在这个网络中，遗传进化、生产运营与生态循环彼此反馈，共享数据，形成自学习的农业系统。
          </p>
          <p>
            Zhengshi AgriTech Group 将以开放的技术平台连接全球合作伙伴，共同守护粮食安全与地球生态，为下一代提供健康、可信赖的食品来源。
          </p>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Mission"
          title="Mission 使命"
          subtitle="以科技重塑农业未来，让每一份食品都来自智能、绿色、透明的体系。"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {missionPillars.map((pillar) => (
            <div key={pillar.title} className="grid-card">
              <h3 className="text-lg font-semibold text-secondary">{pillar.title}</h3>
              <p className="mt-3 text-sm text-secondary/70">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Values"
          title="价值观 Values"
          subtitle="我们在每个决策、每个合作中坚持的原则。"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="grid-card">
              <h3 className="text-lg font-semibold text-secondary">{value.title}</h3>
              <p className="mt-3 text-sm text-secondary/70">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
