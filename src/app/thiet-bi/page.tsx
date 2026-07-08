import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ProductCard from "@/components/cards/ProductCard";
import CtaBand from "@/components/home/CtaBand";
import Reveal from "@/components/common/Reveal";
import {
  PRODUCT_CATEGORIES,
  PRODUCTS,
  getProductsByCategory,
} from "@/data";
import { ArrowRight, Cctv, Zap, Server, LayoutGrid, Wrench } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Phân Phối Thiết Bị – LOTEC Việt Nam",
  description:
    "Phân phối chính hãng: Camera AI, Thiết bị điện hạ thế, Máy biến áp, Tủ điện từ Siemens, Hikvision, ABB, LS Electric.",
};

const categoryIcons = {
  camera: Cctv,
  "thiet-bi-dien": Zap,
  "may-bien-ap": Server,
  "tu-dien": LayoutGrid,
  "phu-kien": Wrench,
} as const;

export default function ProductsPage() {
  const categoriesWithProducts = PRODUCT_CATEGORIES.map((cat) => ({
    ...cat,
    products: getProductsByCategory(cat.slug),
    Icon: categoryIcons[cat.slug as keyof typeof categoryIcons] ?? LayoutGrid,
  }));

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Trang chủ", href: "/" }, { label: "Phân Phối Thiết Bị" }]}
        title="Phân Phối Thiết Bị"
        description="Hàng chính hãng 100% – Giao hàng toàn quốc – Hỗ trợ kỹ thuật 24/7"
        image="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&q=80"
      />

      {/* Quick category jump */}
      <section className="py-10 border-b" style={{ borderColor: "#DCE4F0", background: "white" }}>
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
            <div>
              <h2 className="text-xl font-extrabold" style={{ color: "#0D2B5E" }}>
                Tất Cả Danh Mục
              </h2>
              <p className="text-sm mt-1" style={{ color: "#7B8FA8" }}>
                Tổng quan {PRODUCTS.length} sản phẩm theo từng nhóm thiết bị
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {categoriesWithProducts.map((cat) => (
              <a
                key={cat.slug}
                href={`#danh-muc-${cat.slug}`}
                className="flex items-center gap-3 p-3.5 rounded-2xl border bg-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ borderColor: "#DCE4F0" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#EEF2FF" }}
                >
                  <cat.Icon size={18} style={{ color: "#0D2B5E" }} />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm leading-tight truncate" style={{ color: "#0D2B5E" }}>
                    {cat.shortLabel}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#7B8FA8" }}>
                    {cat.products.length} sản phẩm
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Products by category */}
      <section className="py-16" style={{ background: "#F6F8FC" }}>
        <div className="max-w-7xl mx-auto px-4 space-y-14">
          {categoriesWithProducts.map((cat) => (
            <Reveal key={cat.slug} id={`danh-muc-${cat.slug}`}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "#EEF2FF" }}
                    >
                      <cat.Icon size={18} style={{ color: "#0D2B5E" }} />
                    </div>
                    <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "#0F2A56" }}>
                      {cat.label}
                    </h2>
                  </div>
                  <p className="text-sm max-w-2xl" style={{ color: "#6B7C93" }}>
                    {cat.description}
                  </p>
                </div>

                <Link
                  href={`/thiet-bi/${cat.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold flex-shrink-0 transition-all hover:gap-3"
                  style={{ color: "#F28D35" }}
                >
                  Xem danh mục
                  <ArrowRight size={15} />
                </Link>
              </div>

              {cat.products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {cat.products.map((p) => (
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
              ) : (
                <div
                  className="rounded-[24px] border bg-white px-6 py-10 text-center"
                  style={{ borderColor: "#DCE4F0" }}
                >
                  <p className="text-sm mb-4" style={{ color: "#6B7C93" }}>
                    Danh mục đang được cập nhật sản phẩm. Liên hệ để nhận tư vấn và báo giá nhanh.
                  </p>
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #0F2A56 0%, #1E458A 100%)" }}
                  >
                    Liên hệ báo giá
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
