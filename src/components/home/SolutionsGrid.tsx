"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Cctv, Thermometer, BrickWallShield, Cpu, BatteryCharging, Sun } from "lucide-react";
import { SOLUTIONS } from "@/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "camera-ai": Cctv,
  "giam-sat-nhiet": Thermometer,
  "hang-rao": BrickWallShield,
  "scada-plc": Cpu,
  "giam-sat-dc": BatteryCharging,
  "solar": Sun,
};

export default function SolutionsGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section ref={ref} style={{ background: "#0B1E45" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 flex-shrink-0" style={{ background: "#E87722" }} />
              <span className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: "#E87722" }}>
                Lĩnh vực thi công
              </span>
            </div>
            <h2
              className="font-black text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
            >
              Giải Pháp Thi Công
              <br />
              <span style={{ color: "#F5A623" }}>Chuyên Nghiệp</span>
            </h2>
          </div>
          <Link
            href="/giai-phap"
            className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3 flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F5A623")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            Xem tất cả <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.07)", borderRadius: 16, overflow: "hidden" }}>
          {SOLUTIONS.map((sol, i) => {
            const Icon = iconMap[sol.id] ?? Cctv;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <Link
                  href={`/giai-phap/${sol.slug}`}
                  className="group relative flex flex-col p-8 h-full overflow-hidden transition-colors duration-300"
                  style={{ background: "#0D2B5E" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#1A3570")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0D2B5E")}
                >
                  {/* Subtle image bg */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-8 transition-opacity duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url(${sol.image})`, opacity: 0 }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.06")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  />

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                    style={{ background: "rgba(232,119,34,0.12)", border: "1px solid rgba(232,119,34,0.2)" }}
                  >
                    <Icon
                      size={22}
                      className="transition-colors duration-300 text-[#F5A623]"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {sol.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded"
                        style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-black text-white mb-2 uppercase tracking-wide leading-tight transition-colors duration-200 group-hover:text-[#F5A623]"
                  >
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed line-clamp-2 flex-1"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {sol.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-1.5 mt-6 text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    Xem chi tiết
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "#E87722" }}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
