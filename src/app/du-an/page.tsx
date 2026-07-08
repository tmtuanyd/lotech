"use client";
import { useState } from "react";
import { Filter } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/cards/ProjectCard";
import CtaBand from "@/components/home/CtaBand";
import { PROJECTS } from "@/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/common/Reveal";

const filters = ["Tất cả", "220kV", "110kV", "Solar", "Tự động hóa"];

export default function ProjectsPage() {
  const [active, setActive] = useState("Tất cả");

  const filtered =
    active === "Tất cả"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active || p.tags.includes(active));

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Trang chủ", href: "/" }, { label: "Dự Án Tiêu Biểu" }]}
        title="130+ Công Trình Đã Triển Khai"
        description="Trạm biến áp 110kV–220kV · Tự động hóa · Điện mặt trời"
        image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
      />

      <section className="py-20" style={{ background: "#F6F8FC" }}>
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
            <SectionTitle
              label="Danh mục dự án"
              title="Dự án thi công tiêu biểu"
              description="Sắp xếp theo nhóm công trình để dễ tham khảo năng lực triển khai của LOTEC."
            />
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: "white", border: "1px solid #DCE4F0", color: "#0F2A56" }}
            >
              <Filter size={15} />
              {filtered.length} dự án
            </div>
          </div>
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-4 py-2 rounded-full text-sm font-bold transition-all duration-200"
                style={{
                  background: active === f ? "#0F2A56" : "white",
                  color: active === f ? "white" : "#0F2A56",
                  border: `1px solid ${active === f ? "#0F2A56" : "#DCE4F0"}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <ProjectCard
                key={p.id}
                index={p.id}
                title={p.title}
                location={p.location}
                client={p.client}
                year={p.year}
                tags={p.tags}
                image={p.image}
                href={`/du-an/${p.slug}`}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20" style={{ color: "#7B8FA8" }}>
              Không có dự án nào trong danh mục này.
            </div>
          )}
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
