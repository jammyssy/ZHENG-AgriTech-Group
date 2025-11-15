import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const timeline = [
  { year: "1996", detail: "成立郑氏农业合作社，启动遗传改良实验场。" },
  { year: "2007", detail: "引入 Cedarridge 核心种猪，搭建生物安全体系。" },
  { year: "2010", detail: "推出第一代数字化养殖系统，实现批次数据追踪。" },
  { year: "2023", detail: "发布 ASSA 智慧农场操作系统与 AI 育种模型。" },
  { year: "Future", detail: "构建全球多基地绿色生态网络，赋能未来食品安全。" },
];

const values = [
  {
    title: "Culture of Precision",
    text: "以科学方法与工艺标准打造高可信度的农业系统，追求每一次数据的准确。",
  },
  {
    title: "Open Collaboration",
    text: "与高校、研究院和前沿科技企业共建，形成多元创新生态。",
  },
  {
    title: "Sustainability",
    text: "以 Warm Earth Beige 为灵感的生态美学，强调土地、动物与社区共生。",
  },
];

type SubsidiaryNode = {
  name: string;
  description?: string;
  children?: SubsidiaryNode[];
};

const subsidiaries: SubsidiaryNode[] = [
  {
    name: "集团总部 HQ",
    description: "战略中台 · 数据与治理中心",
    children: [
      {
        name: "源种科技 Zhengshi Genetics",
        description: "GGP 双阴核心群体 · 遗传研究中心",
        children: [
          { name: "Cedarridge & ACU Fast 联合实验室" },
          { name: "疾病净化与生物安全研究组" },
        ],
      },
      {
        name: "ASSA Smart Farming OS",
        description: "AI 农场操作系统 · 数字孪生团队",
        children: [
          { name: "数据科学与算法团队" },
          { name: "IoT & 自动化实验中心" },
        ],
      },
      {
        name: "Green Farm Ecology",
        description: "泰宁生态基地 · 循环农业研究院",
        children: [
          { name: "零抗饲养体系" },
          { name: "碳足迹与生态修复团队" },
        ],
      },
    ],
  },
];

function renderTree(nodes: SubsidiaryNode[]) {
  return (
    <ul className="space-y-4 border-l border-accent/40 pl-6">
      {nodes.map((node) => (
        <li key={node.name} className="space-y-2">
          <p className="text-sm font-semibold text-secondary">{node.name}</p>
          {node.description && <p className="text-xs text-secondary/60">{node.description}</p>}
          {node.children && <div className="mt-2">{renderTree(node.children)}</div>}
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <div className="pb-32">
      <PageHero
        kicker="About Zhengshi"
        title="以系统思维定义农业科技集团的下一阶段"
        subtitle="We blend AI research, bio-security engineering, and ecological farming practices to deliver resilient protein supply chains for China and the world."
      >
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-secondary/60">
          <span className="data-pill">AI</span>
          <span className="data-pill">Genetics</span>
          <span className="data-pill">Ecology</span>
          <span className="data-pill">Bio-Safety</span>
        </div>
      </PageHero>

      <section className="section-container">
        <SectionTitle
          kicker="Origin Story"
          title="从家族农场到 AI 农业平台"
          subtitle="扎根福建，持续迭代遗传与数字技术，构建面向未来的农业操作系统。"
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-sm text-secondary/70">
            <p>
              自 1996 年第一批遗传试验群体建立起，郑氏农业科技集团始终坚持“科技重塑农业”的发展哲学。我们将生物学、数据科学与工程能力整合，专注高健康度、可持续、可预测的生物生产体系。
            </p>
            <p>
              集团在泉州、福州与泰宁布局核心研发节点，形成涵盖育种、生产、加工、生态的闭环体系。通过跨学科团队协作，与国内外领先高校、研究机构共建平台，实现科研成果的快速产业化。
            </p>
          </div>
          <div className="surface-card space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Philosophy 哲学</h3>
            <ul className="space-y-3 text-sm text-secondary/70">
              <li>• 以数据驱动决策，以算法赋能生产</li>
              <li>• 以生物安全为底座，以绿色生态为路径</li>
              <li>• 以系统思维构建端到端农业平台</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Milestones"
          title="技术演进年轮"
          subtitle="关键节点构成集团持续创新的 DNA。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {timeline.map((item) => (
            <div key={item.year} className="grid-card">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary/50">{item.year}</p>
              <p className="mt-3 text-sm text-secondary/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Value DNA"
          title="文化与价值观"
          subtitle="在精准、开放、可持续之间取得平衡。"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="grid-card">
              <h3 className="text-lg font-semibold text-secondary">{value.title}</h3>
              <p className="mt-3 text-sm text-secondary/70">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Group Structure"
          title="集团矩阵"
          subtitle="平台化运营支持多业务协同。"
        />
        <div className="mt-10 surface-card">
          {renderTree(subsidiaries)}
        </div>
      </section>
    </div>
  );
}
