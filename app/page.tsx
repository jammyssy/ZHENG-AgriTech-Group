
"use client";

main
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";

const pillars = [
  {
    title: "源种科技 Zhengshi Genetics",
    description:
      "AI驱动的GGP双阴种源体系，融合Cedarridge与ACU Fast血统，打造蓝耳/非瘟双阴核心群。",
  },
  {
    title: "智慧农牧 Smart Farming",
    description:
      "ASSA智慧猪场操作系统，联接预测、运营、健康与成本模块，实现全流程数据运营。",
  },
  {
    title: "绿色生态 Green Ecology",
    description:
      "泰宁绿色生态基地，无抗养殖、循环农业与碳中和策略，构建未来生态农场范式。",
  },
];

const whyCards = [
  {
    title: "AI Breeding Intelligence",
    text: "自研AI育种模型，以多维基因组数据构建未来畜牧遗传优势。",
  },
  {
    title: "ASSA OS",
    text: "智慧农场操作系统贯通生产全链路，实时洞察运营状态。",
  },
  {
    title: "Bio-Security",
    text: "蓝耳、非瘟双阴净化体系，保障群体健康与供应稳定。",
  },
  {
    title: "Sustainable Value",
    text: "绿色、低抗、可持续农场体系为全球食品安全提供新范式。",
  },
];

const partners = ["SynBio Labs", "Future Farms", "AgriNet", "DeepAg", "Sino Green", "BioCompute"];

export default function HomePage() {
  return (
    <div className="space-y-32 pb-32">
      <section className="relative overflow-hidden pt-36">
        <div className="absolute inset-0 bg-gradient-ai" />
        <div className="relative section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.5em] text-accent/80">
              AI × AGRICULTURE FUTURES
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-light md:text-6xl">
              以科技重塑农业未来 · Zhengshi AgriTech Group
            </h1>
            <p className="text-lg text-accent/70">
              We orchestrate AI genetics, smart farming operating systems, and green ecological bases to enable resilient food systems for the next century.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/technology"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary shadow-glow"
              >
                Explore Platform
              </Link>
              <Link
                href="/vision-mission"
                className="rounded-full border border-accent/30 px-6 py-3 text-sm uppercase tracking-[0.3em] text-accent/80"
              >
                愿景使命
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Core Pillars"
          title="三大板块协同驱动未来农业系统"
          subtitle="源种科技、智慧农牧、绿色生态三位一体，形成闭环数据循环与产业护城河。"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="gradient-border p-[1px]">
              <div className="glass-panel h-full rounded-[22px] p-8">
                <h3 className="text-xl font-semibold text-light">{pillar.title}</h3>
                <p className="mt-4 text-sm text-accent/70">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="AI Data Fabric"
          title="实时洞察的农业大脑"
          subtitle="ASSA智慧农场数据中枢整合传感、环境、生产与财务数据，以AI算法驱动每一次决策。"
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="gradient-border p-[1px]">
            <div className="data-grid rounded-[22px] p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {["Production Forecast", "Genetic Gain", "Bio-Security", "Carbon Index"].map((metric) => (
                  <div key={metric} className="rounded-2xl border border-primary/10 bg-secondary/40 p-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-primary/70">{metric}</p>
                    <p className="mt-3 text-3xl font-semibold text-light">
                      {Math.round(Math.random() * 40 + 60)}%
                    </p>
                    <p className="mt-2 text-xs text-accent/60">Simulated data stream · 实时模拟数据</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl border border-accent/10">
                <Image
                  src="/images/ai-grid.png"
                  alt="AI data visualization"
                  width={512}
                  height={512}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {whyCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-accent/10 bg-secondary/60 p-6 shadow-panel">
                <h3 className="text-lg font-semibold text-light">{card.title}</h3>
                <p className="mt-2 text-sm text-accent/70">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Why Zhengshi"
          title="智能农业领航者的系统化能力"
          subtitle="多学科团队融合AI科学、动物营养、生态工程与供应链管理，实现端到端赋能。"
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl border border-accent/10 bg-secondary/60 p-8">
              <h3 className="text-xl font-semibold text-light">Integrated AI Genetics Lab</h3>
              <p className="mt-3 text-accent/70">
                开发涵盖表型、基因组与生产数据的AI模型，快速迭代遗传改良策略，实现可验证的生产力跃迁。
              </p>
            </div>
            <div className="rounded-3xl border border-accent/10 bg-secondary/60 p-8">
              <h3 className="text-xl font-semibold text-light">ASSA Scenario Engine</h3>
              <p className="mt-3 text-accent/70">
                模拟运营情景，预测极端事件影响，提供能源、饲料、劳动力的多维优化方案。
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-accent/10 bg-secondary/60 p-8">
            <h3 className="text-xl font-semibold text-light">Digital Farm Twin</h3>
            <p className="mt-3 text-accent/70">
              通过IoT与边缘计算构建数字孪生农场，实现实时监测、预警与自动执行，保障生物安全与成本效率。
            </p>
            <ul className="mt-6 space-y-3 text-sm text-accent/60">
              <li>• Sensor fusion for micro-climate &amp; animal wellness</li>
              <li>• Smart robotics integration with AI scheduling</li>
              <li>• ESG dashboards for carbon and water intelligence</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          kicker="Global Partners"
          title="与全球先锋共建农业未来"
          subtitle="跨界合作加速技术迭代，共享数据平台与研究成果。"
        />
        <div className="mt-10 grid gap-4 rounded-3xl border border-accent/10 bg-secondary/50 p-10 text-center text-sm uppercase tracking-[0.5em] text-accent/60 md:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner} className="rounded-full border border-accent/20 px-4 py-3 text-accent/80">
              {partner}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
