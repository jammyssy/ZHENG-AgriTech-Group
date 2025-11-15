import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const coreModules = [
  {
    title: "Prediction",
    description: "多模型集成预测生产节律、饲料消耗与生长曲线。",
    details: ["Production Forecast", "Mortality Risk", "Climate Scenario"],
  },
  {
    title: "Operation",
    description: "排程自动化、任务派发、物资调度的一体化平台。",
    details: ["Smart Scheduling", "Inventory Sync", "IoT Control"],
  },
  {
    title: "Health",
    description: "蓝耳/非瘟双阴监测、行为识别、异常预警。",
    details: ["Bio-Security Radar", "Computer Vision", "Lab Integration"],
  },
  {
    title: "Cost Efficiency",
    description: "实时追踪生产成本、能源使用与碳排。",
    details: ["Feed Optimization", "Energy Loop", "ESG Dashboard"],
  },
];

export default function SmartOSPage() {
  return (
    <div className="pb-32">
      <PageHero
        kicker="ASSA OS"
        title="Smart Agriculture System ASSA"
        subtitle="ASSA unifies sensing, AI analytics, and autonomous execution to create an intelligent operating system for next-generation farms."
      />

      <section className="section-container">
        <SectionTitle
          kicker="Interface"
          title="Dashboard 体验"
          subtitle="设计遵循Apple/Tesla式极简界面，强调数据可视化与关键指标洞察。"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="gradient-border p-[1px]">
            <div className="glass-panel rounded-[22px] p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-light">ASSA Control Center</h3>
                  <span className="rounded-full border border-primary/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary/80">
                    Live Sync
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {["Production", "Health", "Environment", "Energy"].map((panel) => (
                    <div key={panel} className="rounded-2xl border border-accent/15 bg-secondary/60 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-accent/60">{panel}</p>
                      <p className="mt-3 text-2xl font-semibold text-light">{Math.round(Math.random() * 40 + 50)}%</p>
                      <p className="text-xs text-accent/50">Realtime Signal</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-accent/10 bg-secondary/70 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Anomaly Radar</p>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center text-xs text-accent/60">
                    {["Bio-Security", "Climate", "Operations"].map((item) => (
                      <div key={item}>
                        <p className="text-sm font-semibold text-light">{Math.round(Math.random() * 10)}</p>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-accent/15 bg-secondary/60 p-6">
              <h3 className="text-lg font-semibold text-light">Algorithm Engine</h3>
              <p className="mt-3 text-sm text-accent/70">
                基于云边协同架构的算法引擎，结合时序预测、强化学习与贝叶斯网络，为每个场景提供决策建议。
              </p>
            </div>
            <div className="rounded-3xl border border-accent/15 bg-secondary/60 p-6">
              <h3 className="text-lg font-semibold text-light">开放接口</h3>
              <p className="mt-3 text-sm text-accent/70">
                通过API与MQTT协议对接第三方硬件与供应链系统，实现跨平台数据共享与流程自动化。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Core Modules"
          title="四大模块"
          subtitle="Prediction / Operation / Health / Cost Efficiency"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {coreModules.map((module) => (
            <div key={module.title} className="rounded-3xl border border-primary/20 bg-secondary/60 p-6">
              <h3 className="text-lg font-semibold text-light">{module.title}</h3>
              <p className="mt-3 text-sm text-accent/70">{module.description}</p>
              <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.25em] text-accent/60">
                {module.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Methodology"
          title="算法方法论"
          subtitle="跨越数据采集、建模、推理、反馈的闭环优化。"
        />
        <div className="mt-10 space-y-6 text-sm text-accent/70">
          <p>
            ASSA采用多层神经网络、图模型与强化学习算法，针对生产效率、健康风险、成本控制进行联合优化。通过数字孪生仿真与A/B测试，我们在虚拟场景中验证策略，再快速部署至真实农场。
          </p>
          <p>
            系统内置知识图谱与专家规则库，为算法决策提供解释性输出，让管理者能够理解每一次建议的依据，实现“AI + Expert”共驾的运营模式。
          </p>
        </div>
      </section>
    </div>
  );
}
