# Zhengshi AgriTech Group Website

This repository contains the complete Next.js + Tailwind CSS codebase for **Zhengshi AgriTech Group (郑氏农业科技集团)** — a future-oriented AI agriculture technology platform with a minimal, Apple/Tesla-inspired visual language.

## ✨ Tech Stack
- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 📂 Project Structure
```
.
├── app/
│   ├── layout.tsx          # Global layout with navigation, footer, metadata
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # 企业介绍
│   ├── vision-mission/...  # 愿景使命
│   ├── technology/...      # AI × Agriculture Platform
│   ├── genetics/...        # 源种科技 Zhengshi Genetics
│   ├── smart-os/...        # ASSA Smart Farming OS
│   ├── green-farm/...      # Green Farm Ecology
│   ├── news/...            # 集团动态 / 科技文章
│   ├── careers/...         # 加入我们
│   └── contact/...         # 联系我们
├── components/             # Reusable UI components
├── public/images/          # Placeholder imagery
├── tailwind.config.ts      # Custom theme tokens & colors
└── README.md
```

## 🛠️ Setup
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to explore the site.
3. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

### Common Issue: `createContext is not a function`
- **Symptoms**: When running `npm run dev`, the browser shows a Next.js server error with the stack trace pointing to `framer-motion/dist` and the message `_react__WEBPACK_IMPORTED_MODULE__...createContext is not a function`.
- **Cause**: The homepage (`app/page.tsx`) renders Framer Motion animations. In the App Router, pages are Server Components by default, and the server runtime only exposes a limited React API without `createContext`. Importing Framer Motion from a Server Component triggers this error.
- **Resolution**: Mark the homepage as a Client Component by placing a top-level `"use client";` directive before its imports. This repository already includes the fix so the development server can run normally locally.

## 🎨 Design System
- **Colors**: Tech Agrigreen `#45C1A1`, Obsidian Black `#1B1D1F`, Stardust Silver `#A9B5C9`, AI Blue `#4AA8FF`, Light Mist `#F4F7F8`
- **Typography**: Inter / HarmonyOS Sans / Alibaba PuHuiTi
- **Effects**: Glassmorphism panels, subtle glow shadows, radial AI gradients

## 📦 Pages & Content
Each page combines bilingual (EN + 中文) placeholder content aligned with brand pillars:
- AI育种模型（AI Genetics Model）
- ASSA智慧猪场AI操作系统
- 数字化养殖技术
- 自主种源 GGP 双阴育种体系
- 无抗绿色生态养殖（泰宁基地）
- 生物安全与疾病净化（蓝耳/非瘟双阴）

## 🔄 Customization
- Replace `/public/images/ai-grid.png` with production-grade visuals.
- Update copy, metrics, and data visualizations with live content.
- Integrate actual forms or APIs by extending the placeholders.

## 📄 License
Proprietary — Zhengshi AgriTech Group. All rights reserved.
