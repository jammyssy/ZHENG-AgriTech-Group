# Zhengshi AgriTech Group Website

This repository contains the complete Next.js + Tailwind CSS codebase for **郑氏农业科技集团 (Zhengshi AgriTech Group)** — a future-oriented AI agriculture technology platform with a bright, Apple/Tesla-inspired, biotech-clean aesthetic.

## ✨ Tech Stack
- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)

## 🎨 Design System
- **背景 Background**: Pure white `#FFFFFF`
- **Primary (科技绿 / Agritech Green)**: `#3EB489`
- **Secondary (岩石灰 / Stone Gray)**: `#2A2D33`
- **Accent (未来银 / Future Silver)**: `#AEB7C4`
- **AI Blue (数据蓝)**: `#4AA8FF`
- **Warm Earth Beige**: `#D9CBB8` (micro accents only)
- **Typography**: Inter / SF Pro Display / HarmonyOS Sans for bilingual EN + 中文 copy

All sections use a white foundation with soft shadows, subtle gradients, and restrained pops of green and AI blue to communicate biotech-grade precision.

## 📂 Project Structure
```
.
├── app/
│   ├── layout.tsx          # Global layout with navigation, footer, metadata
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About Zhengshi
│   ├── vision-mission/     # Vision & Mission
│   ├── technology/         # AI × Agriculture Platform
│   ├── genetics/           # Zhengshi Genetics Division
│   ├── smart-os/           # ASSA Intelligence System
│   ├── green-farm/         # Green Farm Ecology Base
│   ├── news/               # News & Insights
│   ├── careers/            # Careers
│   └── contact/            # Contact Us
├── components/             # Reusable UI components (Navigation, Footer, PageHero, SectionTitle, Floating CTA)
├── public/                 # Placeholder assets
├── tailwind.config.ts      # Custom Tailwind theme (brand colors, shadows, fonts)
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Local Development
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

## 📄 Content Highlights
Every page delivers bilingual (EN + 中文) placeholder copy covering the group’s strategic pillars:
- AI-driven genetics & disease-free GGP lines (蓝耳/非瘟双阴)
- ASSA 智慧农场操作系统（Prediction / Operation / Health / Cost）
- 泰宁绿色生态基地与循环农业体系
- 新闻、招聘、联系等企业级内容模块

## 🔧 Customization Notes
- Replace placeholder imagery in `/public` with production visuals.
- Connect the contact form to your preferred backend or CRM.
- Tailwind theme tokens can be extended in `tailwind.config.ts` for additional brand-specific shades.

## 📜 License
Proprietary — Zhengshi AgriTech Group. All rights reserved.
