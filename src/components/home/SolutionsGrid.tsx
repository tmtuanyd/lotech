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
    <section
      ref={ref}
      style={{
        background:
          "radial-gradient(circle at 12% 12%, rgba(34,211,238,0.14), transparent 30%), linear-gradient(135deg, #0B1E45 0%, #0D2B5E 55%, #123875 100%)",
      }}
      className="py-14 sm:py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
            className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3 flex-shrink-0 text-white/60 hover:text-[#F5A623]"
          >
            Xem tất cả <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SOLUTIONS.map((sol, i) => {
            const Icon = iconMap[sol.id] ?? Cctv;
            return (
              <motion.div
                key={sol.id}
                className="h-full"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <Link
                  href={`/giai-phap/${sol.slug}`}
                  className="group relative flex flex-col p-5 sm:p-8 h-full overflow-hidden transition-all duration-300 rounded-[24px] hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(13,43,94,0.96), rgba(14,55,116,0.95))",
                    boxShadow:
                      "inset 0 0 0 1px rgba(255,255,255,0.12), 0 22px 38px -28px rgba(5,13,30,0.8)",
                  }}
                >
                  {/* Subtle image bg */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 bg-cover bg-center opacity-0 group-hover:opacity-[0.08]"
                    style={{ backgroundImage: `url(${sol.image})` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300"
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
