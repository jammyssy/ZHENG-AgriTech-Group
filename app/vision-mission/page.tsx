import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const values = [
  {
    title: "Precision",
    description: "以数据精度驱动遗传改良与生产决策，确保每一步都是可追踪、可验证的。",
  },
  {
    title: "Integrity",
    description: "坚持生物安全与动物福利，构建高信任的食品供应体系。",
  },
  {
    title: "Co-evolution",
    description: "与合作伙伴、生态系统共同成长，推动农业科技产业链协同升级。",
  },
  {
    title: "Sustainability",
    description: "以碳中和与绿色生态为目标，设计可持续、循环的农业模式。",
  },
];

export default function VisionMissionPage() {
  return (
    <div className="pb-32">
      <PageHero
        kicker="愿景使命 Vision & Mission"
        title="成为全球领先的AI农业操作系统赋能者"
        subtitle="Our purpose is to orchestrate intelligent genetics, autonomous farm operations, and regenerative ecosystems that secure healthy protein for humanity."
      />

      <section className="section-container">
        <SectionTitle
          kicker="Vision"
          title="Vision 愿景"
          subtitle="构建一个AI协同、生态友好、完全透明的农业新世界。"
        />
        <div className="mt-10 rounded-3xl border border-primary/20 bg-secondary/60 p-10">
          <p className="text-lg leading-relaxed text-accent/70">
            我们的愿景是打造一个数据驱动、算法协同的农业生态网络。在这个网络中，遗传进化、生产运营与生态循环彼此反馈，共享数据，形成自学习的农业系统。Zhengshi AgriTech Group将以开放的技术平台连接全球合作伙伴，共同守护粮食安全与地球生态。
          </p>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Mission"
          title="Mission 使命"
          subtitle="以科技重塑农业未来，让每一份食品都来自智能、绿色、透明的体系。"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-accent/15 bg-secondary/60 p-8">
            <h3 className="text-xl font-semibold text-light">AI Genetics Model</h3>
            <p className="mt-3 text-sm text-accent/70">
              通过融合表型、基因组、环境数据的AI模型，构建自主种源，确保蓝耳/非瘟双阴的高健康群体，为行业提供可复制的遗传标准。
            </p>
          </div>
          <div className="rounded-3xl border border-accent/15 bg-secondary/60 p-8">
            <h3 className="text-xl font-semibold text-light">Smart Agriculture System ASSA</h3>
            <p className="mt-3 text-sm text-accent/70">
              以ASSA智慧操作系统连接传感器、智能设备与管理流程，实现实时洞察、自动控制与风险预警，打造数字化的农场大脑。
            </p>
          </div>
          <div className="rounded-3xl border border-accent/15 bg-secondary/60 p-8">
            <h3 className="text-xl font-semibold text-light">Green Farm Ecology</h3>
            <p className="mt-3 text-sm text-accent/70">
              在泰宁等基地建立无抗、绿色、循环的生态体系，让生产与环境实现共生，为可持续农业提供标准化样板。
            </p>
          </div>
          <div className="rounded-3xl border border-accent/15 bg-secondary/60 p-8">
            <h3 className="text-xl font-semibold text-light">Global Collaboration</h3>
            <p className="mt-3 text-sm text-accent/70">
              联合科研院校、产业伙伴、政策机构，搭建开放协同的AI农业生态，共同推进科技成果转化与全球农业升级。
            </p>
          </div>
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
            <div key={value.title} className="rounded-3xl border border-accent/15 bg-secondary/60 p-6">
              <h3 className="text-lg font-semibold text-light">{value.title}</h3>
              <p className="mt-3 text-sm text-accent/70">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
