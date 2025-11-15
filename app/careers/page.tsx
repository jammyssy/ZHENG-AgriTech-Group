import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const culture = [
  "系统思维：跨学科协作构建端到端解决方案",
  "科学精神：以数据验证每个假设",
  "绿色责任：以生态影响衡量每一项决策",
  "全球视野：与国际伙伴共同推进农业创新",
];

const jobs = [
  {
    title: "AI Genetics Scientist / AI育种科学家",
    location: "Fuzhou · Full-time",
    description: "负责 AI 遗传模型构建，整合多源数据提升遗传增益。",
  },
  {
    title: "ASSA Product Architect / 操作系统架构师",
    location: "Quanzhou · Full-time",
    description: "设计智慧农场操作系统模块，推动算法与硬件协同。",
  },
  {
    title: "Green Farm Sustainability Lead / 绿色农场负责人",
    location: "Taining Base · Full-time",
    description: "负责无抗生态体系构建与 ESG 指标监控。",
  },
];

export default function CareersPage() {
  return (
    <div className="pb-32">
      <PageHero
        kicker="Join Us"
        title="加入我们 · Co-create the Future of Farming"
        subtitle="We are assembling a multi-disciplinary team spanning AI, biosciences, engineering, and ecological design."
      />

      <section className="section-container">
        <SectionTitle
          kicker="Culture"
          title="文化 Culture"
          subtitle="在郑氏农业科技集团，人才的多维度与跨界协作是核心。"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="grid-card">
            <h3 className="text-lg font-semibold text-secondary">What We Believe</h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary/70">
              {culture.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="grid-card">
            <h3 className="text-lg font-semibold text-secondary">Benefits</h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary/70">
              <li>• 创新实验经费与全球交流计划</li>
              <li>• 弹性工作制与远程协作支持</li>
              <li>• 绿色健康的工作生活环境</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Open Roles"
          title="开放职位"
          subtitle="持续招聘中，欢迎发送履历至 talent@zhengshi.ai"
        />
        <div className="mt-10 space-y-6">
          {jobs.map((job) => (
            <div key={job.title} className="grid-card">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary/50">{job.location}</p>
              <h3 className="mt-3 text-xl font-semibold text-secondary">{job.title}</h3>
              <p className="mt-2 text-sm text-secondary/70">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Call to Action"
          title="与我们对话"
          subtitle="Send your portfolio, GitHub, or research summary — we read every submission."
        />
        <div className="mt-10 surface-card text-sm text-secondary/70">
          <p>邮箱 Email：talent@zhengshi.ai</p>
          <p className="mt-3">We encourage bilingual applications. 请附上中英文简历。</p>
        </div>
      </section>
    </div>
  );
}
