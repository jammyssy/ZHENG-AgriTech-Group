import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const timeline = [
  { year: "1996", detail: "成立郑氏农业合作社，启动遗传改良实验场。" },
  { year: "2007", detail: "引入Cedarridge核心种猪，搭建生物安全体系。" },
  { year: "2010", detail: "推出第一代数字化养殖系统，实现批次数据追踪。" },
  { year: "2023", detail: "发布ASSA智慧农场操作系统与AI育种模型。" },
  { year: "Future", detail: "构建全球多基地绿色生态网络，赋能未来食品安全。" },
];

type SubsidiaryNode = {
  name: string;
  children?: SubsidiaryNode[];
};

const subsidiaries: SubsidiaryNode[] = [
  {
    name: "郑氏农业科技集团总部",
    children: [
      {
        name: "源种科技 Zhengshi Genetics",
        children: [
          { name: "GGP 双阴核心育种场" },
          { name: "Cedarridge & ACU Fast 联合实验室" },
        ],
      },
      {
        name: "ASSA Smart Farming OS",
        children: [
          { name: "AI 决策中枢" },
          { name: "Farm Digital Twin 团队" },
        ],
      },
      {
        name: "Green Farm Ecology",
        children: [
          { name: "泰宁绿色生态基地" },
          { name: "循环农业研究院" },
        ],
      },
    ],
  },
];

function renderTree(nodes: SubsidiaryNode[]) {
  return (
    <ul className="space-y-3 border-l border-accent/20 pl-6">
      {nodes.map((node) => (
        <li key={node.name}>
          <p className="text-sm font-semibold text-light">{node.name}</p>
          {node.children && (
            <div className="mt-2">{renderTree(node.children)}</div>
          )}
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
      />

      <section className="section-container">
        <SectionTitle
          kicker="Origin Story"
          title="从家族农场到AI农业平台"
          subtitle="郑氏农业科技集团扎根福建，持续迭代遗传与数字技术，构建面向未来的农业操作系统。"
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-sm text-accent/70">
            <p>
              集团始终坚持“科技重塑农业”的发展哲学，将生物学、数据科学与工程能力整合为一体。自1996年建立起第一批遗传试验群体，到今日部署AI驱动的遗传优化模型，我们持续扩展技术边界，聚焦高健康度、可持续、可预测的生物生产体系。
            </p>
            <p>
              在泉州、福州与泰宁等地布局核心研发节点，形成涵盖育种、生产、加工、生态的闭环体系。通过跨学科团队协作，我们与国内外领先高校、研究机构共建平台，实现科研成果的快速产业化。
            </p>
          </div>
          <div className="rounded-3xl border border-accent/10 bg-secondary/60 p-8">
            <h3 className="text-lg font-semibold text-light">Philosophy 哲学</h3>
            <ul className="mt-4 space-y-3 text-sm text-accent/70">
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
          subtitle="关键节点构成集团持续创新的DNA。"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {timeline.map((item) => (
            <div key={item.year} className="rounded-3xl border border-accent/10 bg-secondary/60 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{item.year}</p>
              <p className="mt-3 text-sm text-accent/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Group Structure"
          title="集团矩阵"
          subtitle="以平台化运营支持多业务协同。"
        />
        <div className="mt-10 rounded-3xl border border-accent/10 bg-secondary/60 p-8">
          {renderTree(subsidiaries)}
        </div>
      </section>
    </div>
  );
}
