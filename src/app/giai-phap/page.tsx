import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SolutionCard from "@/components/cards/SolutionCard";
import CtaBand from "@/components/home/CtaBand";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/common/Reveal";
import { SOLUTIONS } from "@/data";

export const metadata: Metadata = {
  title: "Giải Pháp Thi Công – LOTEC Việt Nam",
  description:
    "Giải pháp tổng thể cho trạm biến áp: Camera AI, Giám sát nhiệt, Hàng rào điện tử, SCADA/PLC, Điện mặt trời.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Trang chủ", href: "/" }, { label: "Giải Pháp" }]}
        title="Giải Pháp Thi Công"
        description="Giải pháp tổng thể cho trạm biến áp 110kV–500kV, nhà máy và khu công nghiệp"
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
      />

      <section className="py-20" style={{ background: "#F6F8FC" }}>
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              label="Danh mục giải pháp"
              title="Hệ giải pháp cho trạm biến áp và công nghiệp"
              description="Các nhóm giải pháp được trình bày theo hướng profile thi công và tư vấn kỹ thuật."
            />
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: "white", border: "1px solid #DCE4F0", color: "#0F2A56" }}
            >
              {SOLUTIONS.length} nhóm giải pháp
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((sol) => (
              <SolutionCard
                key={sol.id}
                title={sol.title}
                description={sol.description}
                icon={sol.icon}
                tags={sol.tags}
                href={`/giai-phap/${sol.slug}`}
                image={sol.image}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
