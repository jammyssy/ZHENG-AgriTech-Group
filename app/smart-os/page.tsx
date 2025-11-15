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

const dashboardPanels = [
  { label: "Production", value: "+21%", note: "周同比增长" },
  { label: "Health", value: "99.8%", note: "双阴健康指数" },
  { label: "Environment", value: "24°C", note: "舍内温控" },
  { label: "Energy", value: "-12%", note: "能耗优化" },
];

const interfaceNotes = [
  {
    title: "Algorithm Engine",
    text: "云边协同架构结合时序预测、强化学习与贝叶斯网络，为每个场景提供可解释的决策建议。",
  },
  {
    title: "开放接口",
    text: "API 与 MQTT 协议打通第三方硬件与供应链系统，实现跨平台数据共享与流程自动化。",
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
          subtitle="Apple/Tesla 式极简界面，强调数据可视化与关键指标洞察。"
        />
        <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="surface-card space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-secondary">ASSA Control Center</h3>
              <span className="data-pill">Live Sync</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {dashboardPanels.map((panel) => (
                <div key={panel.label} className="grid-card">
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary/50">{panel.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-secondary">{panel.value}</p>
                  <p className="text-xs text-secondary/60">{panel.note}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Bio-Security", "Climate", "Operations"].map((item, index) => (
                <div key={item} className="grid-card text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary/50">Radar {index + 1}</p>
                  <p className="mt-2 text-lg font-semibold text-secondary">{index === 0 ? "Level 0" : index === 1 ? "Stable" : "Synced"}</p>
                  <p className="text-xs text-secondary/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {interfaceNotes.map((note) => (
              <div key={note.title} className="grid-card">
                <h3 className="text-lg font-semibold text-secondary">{note.title}</h3>
                <p className="mt-3 text-sm text-secondary/70">{note.text}</p>
              </div>
            ))}
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
            <div key={module.title} className="grid-card">
              <h3 className="text-lg font-semibold text-secondary">{module.title}</h3>
              <p className="mt-3 text-sm text-secondary/70">{module.description}</p>
              <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.25em] text-secondary/60">
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
        <div className="mt-10 surface-card space-y-6 text-sm text-secondary/70">
          <p>
            ASSA 采用多层神经网络、图模型与强化学习算法，针对生产效率、健康风险、成本控制进行联合优化。通过数字孪生仿真与 A/B 测试，我们在虚拟场景中验证策略，再快速部署至真实农场。
          </p>
          <p>
            系统内置知识图谱与专家规则库，为算法决策提供解释性输出，让管理者能够理解每一次建议的依据，实现“AI + Expert”共驾的运营模式。
          </p>
        </div>
      </section>
    </div>
  );
}
