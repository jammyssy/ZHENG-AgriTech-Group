"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const categories = ["All", "Tech", "Research", "Group", "Market"] as const;

type Category = (typeof categories)[number];

const posts = [
  {
    title: "ASSA 3.2 发布：引入强化学习调度引擎",
    category: "Tech" as Category,
    summary: "最新版本ASSA将强化学习算法应用于任务调度，实现复杂工序自适应排序。",
    date: "2024-06-01",
  },
  {
    title: "蓝耳/非瘟双阴净化路径入选省级示范",
    category: "Research" as Category,
    summary: "集团生物安全团队发布净化技术白皮书，入选福建省重点示范项目。",
    date: "2024-05-18",
  },
  {
    title: "泰宁绿色生态基地碳中和里程碑",
    category: "Group" as Category,
    summary: "基地通过碳中和认证，标志着绿色循环体系达到国际标准。",
    date: "2024-04-22",
  },
  {
    title: "全球合作伙伴计划启动",
    category: "Market" as Category,
    summary: "面向全球开放技术合作与联合研发机会，推动AI农业生态共建。",
    date: "2024-04-05",
  },
  {
    title: "AI育种模型在多场景验证成功",
    category: "Tech" as Category,
    summary: "AI模型在不同气候与饲养模式下验证遗传增益稳定性。",
    date: "2024-03-30",
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="pb-32">
      <PageHero
        kicker="News & Insights"
        title="集团动态 / 科技文章"
        subtitle="Explore the latest updates across AI technology, genetics breakthroughs, ecological milestones, and market collaborations."
      />

      <section className="section-container">
        <SectionTitle
          kicker="Filter"
          title="按类别浏览"
          subtitle="Tech / Research / Group / Market"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.35em] transition ${
                activeCategory === category
                  ? "border-primary bg-primary text-secondary"
                  : "border-accent/30 text-accent/70 hover:border-primary/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filtered.map((post) => (
            <article key={post.title} className="rounded-3xl border border-accent/15 bg-secondary/60 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{post.category}</p>
              <h3 className="mt-4 text-xl font-semibold text-light">{post.title}</h3>
              <p className="mt-3 text-sm text-accent/70">{post.summary}</p>
              <p className="mt-6 text-xs text-accent/50">{post.date}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
