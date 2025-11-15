import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const modules = [
  {
    title: "AI Genetics Engine",
    points: [
      "融合表型、基因组、环境数据的多模态算法",
      "蓝耳/非瘟双阴基因库实时迭代",
      "遗传进化模拟与最优配种方案推荐",
    ],
  },
  {
    title: "ASSA Operating System",
    points: [
      "IoT边缘节点实时采集温湿度、采食量、行为数据",
      "算法引擎驱动生产预测、饲料优化、疾病预警",
      "可视化控制面板与移动端任务派发",
    ],
  },
  {
    title: "Data Fabric & ESG",
    points: [
      "碳、水、能耗指标自动核算",
      "农场数字孪生驱动场景演算",
      "与供应链系统打通，实现全链路可追溯",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <div className="pb-32">
      <PageHero
        kicker="Technology"
        title="AI × Agriculture Platform"
        subtitle="Our integrated technology stack combines AI-assisted breeding, smart operating systems, and regenerative farm frameworks to deliver resilient agricultural value chains."
      />

      <section className="section-container">
        <SectionTitle
          kicker="AI Breeding"
          title="AI育种模型 · Genetics Intelligence"
          subtitle="通过机器学习与群体遗传模型实时优化核心种群的健康度与生产力。"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-sm text-accent/70">
            <p>
              AI Genetics Engine融合国内外优质血统数据，建立蓝耳/非瘟双阴的种源库。利用深度学习预测繁殖性能、耐疫能力与胴体品质，并结合多目标优化算法推荐最佳配种方案，确保遗传进化的连续性与可控性。
            </p>
            <p>
              引入实时数据反馈机制，每批次生产数据都会回流模型，实现“生产-模型-生产”的闭环迭代，提升遗传增益速度20%以上。
            </p>
          </div>
          <div className="rounded-3xl border border-primary/20 bg-secondary/60 p-8">
            <h3 className="text-lg font-semibold text-light">核心指标</h3>
            <ul className="mt-4 space-y-3 text-sm text-accent/70">
              <li>• Genetic Gain Velocity 基因增益速率</li>
              <li>• Blue-ear/ASF Negative Assurance 双阴安全指数</li>
              <li>• Feed Conversion Efficiency 饲料效率</li>
              <li>• Resilience Score 抵抗力评分</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="ASSA OS"
          title="Smart Agriculture System Architecture"
          subtitle="ASSA以操作系统思维构建智慧农场，将数据、算法与执行统一。"
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {modules.map((module) => (
            <div key={module.title} className="rounded-3xl border border-accent/15 bg-secondary/60 p-8">
              <h3 className="text-lg font-semibold text-light">{module.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-accent/70">
                {module.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="System Diagram"
          title="系统拓扑"
          subtitle="从数据采集、算法处理到执行控制的闭环流程。"
        />
        <div className="mt-10 space-y-8 rounded-3xl border border-accent/15 bg-secondary/60 p-10">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Sensor Mesh",
              "Edge AI",
              "Cloud Brain",
              "Execution Layer",
            ].map((node, index) => (
              <div key={node} className="rounded-2xl border border-accent/10 bg-secondary/70 p-6 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Stage {index + 1}</p>
                <p className="mt-3 text-sm font-semibold text-light">{node}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-accent/70">
            传感器网络收集行为、生理、环境数据，经边缘AI初步处理后上传至云端AI大脑。云端算法生成策略，通过ASSA执行层分发至饲喂、环境控制、健康管理等子系统，实现闭环自适应调控。
          </p>
        </div>
      </section>
    </div>
  );
}
