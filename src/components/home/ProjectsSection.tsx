"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/cards/ProjectCard";
import { PROJECTS } from "@/data";

const filters = ["Tất cả", "220kV", "110kV", "Solar", "Tự động hóa"];

export default function ProjectsSection() {
  const [active, setActive] = useState("Tất cả");
  const { ref } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    active === "Tất cả"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active || p.tags.includes(active));

  return (
    <section
      ref={ref}
      className="py-14 sm:py-20 md:py-24"
      style={{
        background:
          "radial-gradient(circle at 90% 5%, rgba(34,211,238,0.08), transparent 28%), linear-gradient(180deg, #F6F9FE 0%, #EFF5FC 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionTitle
            label="Công trình tiêu biểu"
            title="130+ Dự Án Đã Triển Khai"
            description="Trải dài 20+ tỉnh thành phía Bắc với 100% đúng tiến độ"
          />
          <Link
            href="/du-an"
            className="flex-shrink-0 text-sm font-bold flex items-center gap-1 transition-all hover:gap-2"
            style={{ color: "#E87722" }}
          >
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-px"
              style={{
                background: active === f ? "#0D2B5E" : "white",
                color: active === f ? "white" : "#0D2B5E",
                border: `1px solid ${active === f ? "#0D2B5E" : "#DCE4F0"}`,
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <ProjectCard
                  index={p.id}
                  title={p.title}
                  location={p.location}
                  client={p.client}
                  year={p.year}
                  tags={p.tags}
                  image={p.image}
                  href={`/du-an/${p.slug}`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
