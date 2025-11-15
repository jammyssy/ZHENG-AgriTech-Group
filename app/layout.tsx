import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: {
    default: "Zhengshi AgriTech Group | AI Agriculture Futures",
    template: "%s | Zhengshi AgriTech Group",
  },
  description:
    "Zhengshi AgriTech Group pioneers AI genetics, smart farming operating systems, and sustainable ecological bases to reshape the future of agriculture.",
  metadataBase: new URL("https://zhengshi-agritech.example.com"),
  openGraph: {
    title: "Zhengshi AgriTech Group",
    description:
      "AI × Agriculture platform delivering genetics innovation, smart farming OS, and green ecological production.",
    type: "website",
    locale: "zh-CN",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-background font-sans text-secondary antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
