"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "@/components/ui/SectionTitle";
import { ShieldCheck, CheckCircle, Lightbulb, Leaf, ArrowRight } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    label: "An Toàn",
    desc: "Tuân thủ tiêu chuẩn EVN/EVNNPT, IEC, TCVN trong từng hạng mục",
    color: "#0D2B5E",
    bg: "#EEF2FF",
  },
  {
    icon: CheckCircle,
    label: "Tin Cậy",
    desc: "100% công trình hoàn thành đúng tiến độ cam kết",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    icon: Lightbulb,
    label: "Đổi Mới",
    desc: "Ứng dụng công nghệ mới nhất: AI, IEC 61850, IoT",
    color: "#E87722",
    bg: "#FFF3E8",
  },
  {
    icon: Leaf,
    label: "Bền Vững",
    desc: "Giải pháp dài hạn, hỗ trợ hậu mãi 24/7",
    color: "#0891B2",
    bg: "#F0F9FF",
  },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Image side ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Main photo */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="https://images.unsplash.com/photo-1487875961445-47a00398c267?w=800&q=80"
                alt="LOTEC công trình trạm biến áp"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,43,94,0.35) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating card – bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 rounded-xl overflow-hidden shadow-xl border-4 border-white"
              style={{ width: 130, height: 130 }}
            >
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&q=80"
                alt="Solar project"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Cert badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute top-4 left-4 flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg text-white text-xs font-bold"
              style={{ background: "#E87722" }}
            >
              <ShieldCheck size={14} />
              EVN &amp; EVNNPT Certified
            </motion.div>
          </motion.div>

          {/* ── Text side ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <SectionTitle
              label="Về LOTEC Việt Nam"
              title="Đơn vị tiên phong về Năng lượng & Tự động hóa"
              description="Với đội ngũ kỹ sư dày dặn kinh nghiệm, LOTEC đã hoàn thành hơn 130 công trình trạm biến áp 110kV–220kV trên 20+ tỉnh thành với tỷ lệ 100% đúng tiến độ."
            />

            {/* Values */}
            <div className="grid grid-cols-2 gap-3 mt-8 mb-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.09, duration: 0.5 }}
                    className="flex items-start gap-3 p-4 rounded-xl border"
                    style={{ borderColor: "#DCE4F0", background: v.bg }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
                    >
                      <Icon size={15} style={{ color: v.color }} />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-0.5" style={{ color: "#0D2B5E" }}>
                        {v.label}
                      </div>
                      <div className="text-xs leading-relaxed" style={{ color: "#7B8FA8" }}>
                        {v.desc}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/ve-chung-toi"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:gap-3"
              style={{ background: "#0D2B5E" }}
            >
              Xem Hồ Sơ Năng Lực
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
