"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cctv, Zap, Server, LayoutGrid, ArrowRight, FileText } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/cards/ProductCard";
import { PRODUCTS } from "@/data";

const categories = [
  {
    icon: Cctv,
    label: "Camera & An Ninh",
    count: "50 SP",
    href: "/thiet-bi/camera",
    desc: "AI PTZ, Thermal, NVR",
  },
  {
    icon: Zap,
    label: "Thiết Bị Điện Hạ Thế",
    count: "200 SP",
    href: "/thiet-bi/thiet-bi-dien",
    desc: "CB, MCCB, ACB, Biến tần",
  },
  {
    icon: Server,
    label: "Máy Biến Áp",
    count: "30 SP",
    href: "/thiet-bi/may-bien-ap",
    desc: "Dầu, Khô, Amorphous",
  },
  {
    icon: LayoutGrid,
    label: "Tủ Điện & Phụ Kiện",
    count: "80 SP",
    href: "/thiet-bi/tu-dien",
    desc: "MDB, MSB, RMU, Phụ kiện",
  },
];

export default function ProductsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      ref={ref}
      className="py-14 sm:py-20 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F8FBFF 44%, #F4F8FE 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <SectionTitle
            label="Phân phối & Bán lẻ"
            title="Thiết Bị Chính Hãng"
            description="Phân phối trực tiếp từ Siemens, ABB, Schneider, Hikvision, FLIR, LS Electric"
          />
          <div className="flex gap-2 flex-shrink-0">
            <Link
              href="/thiet-bi"
              className="px-5 py-2.5 rounded-xl text-sm font-bold border-2 transition-all hover:bg-[#0D2B5E] hover:text-white"
              style={{ borderColor: "#0D2B5E", color: "#0D2B5E" }}
            >
              Danh mục
            </Link>
            <Link
              href="/lien-he"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: "#E87722" }}
            >
              Báo giá nhanh
            </Link>
          </div>
        </div>

        {/* ── Category strip ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10 sm:mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                href={cat.href}
                className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl border bg-white transition-all duration-200 hover:border-[#B9CBE4] hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-26px_rgba(15,42,86,0.55)]"
                style={{
                  borderColor: "#D8E2F0",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(249,252,255,0.96))",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-[#0D2B5E]"
                  style={{ background: "#EEF4FD" }}
                >
                  <cat.icon
                    size={18}
                    className="transition-colors duration-200 group-hover:text-white"
                    style={{ color: "#0D2B5E" }}
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-xs leading-tight line-clamp-2" style={{ color: "#0F172A" }}>
                    {cat.label}
                  </div>
                  <div className="text-[10px] mt-0.5 line-clamp-1" style={{ color: "#94A3B8" }}>
                    {cat.desc}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Products grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.06 }}
            >
              <ProductCard
                name={p.name}
                brand={p.brand}
                code={p.code}
                badge={p.badge}
                inStock={p.inStock}
                image={p.image}
                href={`/thiet-bi/san-pham/${p.slug}`}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Inquiry strip ── */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 px-4 sm:px-6 py-5 rounded-[26px]"
          style={{
            background:
              "linear-gradient(128deg, #0A1E42 0%, #0D2B5E 52%, #1C4A96 100%)",
            boxShadow: "0 30px 48px -30px rgba(10, 30, 66, 0.8)",
          }}
        >
          <div className="flex-1">
            <div className="font-bold text-white text-sm">Cần báo giá cho nhiều sản phẩm?</div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
              Gửi danh sách sản phẩm và số lượng — nhận báo giá trong 2 giờ
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <span
                className="text-[10px] font-semibold rounded-full px-2.5 py-1"
                style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)" }}
              >
                Tư vấn kỹ thuật miễn phí
              </span>
              <span
                className="text-[10px] font-semibold rounded-full px-2.5 py-1"
                style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)" }}
              >
                Đối tác chính hãng
              </span>
            </div>
          </div>
          <Link
            href="/lien-he"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold flex-shrink-0 transition-all hover:opacity-90"
            style={{ background: "#E87722", color: "white" }}
          >
            <FileText size={15} />
            Gửi yêu cầu báo giá
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
