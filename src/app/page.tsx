import HeroSlider from "@/components/home/HeroSlider";
import StatsBar from "@/components/home/StatsBar";
import AboutSection from "@/components/home/AboutSection";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import ProductsSection from "@/components/home/ProductsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PartnersScroll from "@/components/home/PartnersScroll";
import NewsSection from "@/components/home/NewsSection";
import CtaBand from "@/components/home/CtaBand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOTEC Việt Nam – Công nghệ tiên phong, Giá trị trường tồn",
  description:
    "Đơn vị tiên phong về giải pháp an ninh thông minh và tự động hóa cho trạm biến áp tại Việt Nam. 130+ công trình 110kV–220kV.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <AboutSection />
      <SolutionsGrid />
      <ProductsSection />
      <ProjectsSection />
      <PartnersScroll />
      <NewsSection />
      <CtaBand />
    </>
  );
}
