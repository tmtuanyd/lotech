import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProductCard from "@/components/cards/ProductCard";
import CtaBand from "@/components/home/CtaBand";
import Reveal from "@/components/common/Reveal";
import { PRODUCTS } from "@/data";
import { Cctv, Zap, Server, LayoutGrid, Factory, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Phân Phối Thiết Bị – LOTEC Việt Nam",
  description:
    "Phân phối chính hãng: Camera AI, Thiết bị điện hạ thế, Máy biến áp, Tủ điện từ Siemens, Hikvision, ABB, LS Electric.",
};

const categories = [
  { icon: Cctv,        label: "Camera & An Ninh",      count: "50 SP",  href: "/thiet-bi/camera",       bg: "#EEF2FF", color: "#0D2B5E" },
  { icon: Zap,         label: "Thiết Bị Điện Hạ Thế", count: "200 SP", href: "/thiet-bi/thiet-bi-dien", bg: "#FFF3E8", color: "#E87722" },
  { icon: Server,      label: "Máy Biến Áp",           count: "30 SP",  href: "/thiet-bi/may-bien-ap",  bg: "#EEF2FF", color: "#0D2B5E" },
  { icon: LayoutGrid,  label: "Tủ Điện & Phụ Kiện",    count: "80 SP",  href: "/thiet-bi/tu-dien",      bg: "#FFF3E8", color: "#E87722" },
  { icon: Factory,     label: "Máy Biến Áp Lực",       count: "30 SP",  href: "/thiet-bi/may-bien-ap",  bg: "#EEF2FF", color: "#0D2B5E" },
  { icon: Wrench,      label: "Phụ Kiện",              count: "100 SP", href: "/thiet-bi/phu-kien",     bg: "#FFF3E8", color: "#E87722" },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Trang chủ", href: "/" }, { label: "Phân Phối Thiết Bị" }]}
        title="Phân Phối Thiết Bị"
        description="Hàng chính hãng 100% – Giao hàng toàn quốc – Hỗ trợ kỹ thuật 24/7"
        image="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&q=80"
      />

      {/* Search bar */}
      <div className="py-6 border-b" style={{ borderColor: "#DCE4F0", background: "white" }}>
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="🔍  Tìm theo tên, mã hàng, hãng sản xuất..."
              className="flex-1 px-4 py-3 rounded-xl border text-sm outline-none transition-colors"
              style={{ borderColor: "#DCE4F0", color: "#2C3E50" }}
            />
            <button
              className="px-6 py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: "#0D2B5E" }}
            >
              Tìm kiếm
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {["Camera AI", "MCCB LS", "PLC Siemens", "FLIR Thermal"].map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all hover:border-[#E87722] hover:text-[#E87722]"
                style={{ border: "1px solid #DCE4F0", color: "#7B8FA8" }}
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Categories */}
      <section className="py-14" style={{ background: "#F4F7FB" }}>
        <Reveal className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-extrabold mb-6" style={{ color: "#0D2B5E" }}>
            Danh Mục Sản Phẩm
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border text-center bg-white transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "#DCE4F0" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: cat.bg }}
                >
                  <cat.icon size={20} style={{ color: cat.color }} />
                </div>
                <div className="font-bold text-xs leading-tight" style={{ color: "#0D2B5E" }}>
                  {cat.label}
                </div>
                <div
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: cat.bg, color: cat.color }}
                >
                  {cat.count}
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Products grid */}
      <section className="py-16 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-extrabold" style={{ color: "#0D2B5E" }}>
              Sản Phẩm Nổi Bật
            </h2>
            <span className="text-sm" style={{ color: "#7B8FA8" }}>
              {PRODUCTS.length} sản phẩm
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <ProductCard
                key={p.id}
                name={p.name}
                brand={p.brand}
                code={p.code}
                badge={p.badge}
                inStock={p.inStock}
                image={p.image}
                href={`/thiet-bi/san-pham/${p.slug}`}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
