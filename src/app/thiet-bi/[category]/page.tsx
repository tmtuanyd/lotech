import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Boxes, FileText, Filter, ShieldCheck, Truck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProductCard from "@/components/cards/ProductCard";
import CtaBand from "@/components/home/CtaBand";
import {
  PRODUCT_CATEGORIES,
  getProductCategoryMeta,
  getProductsByCategory,
} from "@/data";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const meta = getProductCategoryMeta(category);

  if (!meta) {
    return {};
  }

  return {
    title: `${meta.label} – LOTEC Việt Nam`,
    description: meta.description,
  };
}

export default async function ProductCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const meta = getProductCategoryMeta(category);

  if (!meta) {
    notFound();
  }

  const products = getProductsByCategory(category);

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Trang chủ", href: "/" },
          { label: "Thiết bị", href: "/thiet-bi" },
          { label: meta.label },
        ]}
        title={meta.label}
        description={meta.description}
        image={meta.heroImage}
      />

      <section className="py-10 bg-white border-b" style={{ borderColor: "#DCE4F0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Boxes,
                title: `${products.length} sản phẩm mẫu`,
                desc: "Mock data có cấu trúc thật để dễ nối API sau này.",
              },
              {
                icon: ShieldCheck,
                title: "Chính hãng và rõ xuất xứ",
                desc: "Hiển thị hãng, bảo hành, tình trạng và hồ sơ kỹ thuật.",
              },
              {
                icon: Truck,
                title: "Phù hợp tư vấn - báo giá",
                desc: "Tối ưu cho sale B2B và nhu cầu gửi báo giá nhanh.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="modern-card flex items-start gap-4 p-5"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: "#EEF4FB", color: "#0F2A56" }}
                >
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="font-bold mb-1" style={{ color: "#0F2A56" }}>
                    {item.title}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7C93" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "#F6F8FC" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "#0F2A56" }}>
                Danh sách {meta.shortLabel.toLowerCase()}
              </h2>
              <p className="text-sm mt-2" style={{ color: "#6B7C93" }}>
                Toàn bộ sản phẩm bên dưới là dữ liệu mẫu để demo giao diện danh mục và chi tiết sản phẩm.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ background: "white", color: "#0F2A56", border: "1px solid #DCE4F0" }}
              >
                <Filter size={15} />
                {products.length} mặt hàng
              </div>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{ background: "#0F2A56" }}
              >
                <FileText size={15} />
                Yêu cầu báo giá
              </Link>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="modern-card p-5 h-fit">
              <div className="text-sm font-bold uppercase tracking-[0.18em] mb-4" style={{ color: "#6B7C93" }}>
                Danh mục
              </div>
              <div className="space-y-2">
                {PRODUCT_CATEGORIES.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/thiet-bi/${item.slug}`}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors"
                    style={{
                      background: item.slug === category ? "#EEF4FB" : "transparent",
                      color: item.slug === category ? "#0F2A56" : "#51627E",
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </aside>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  brand={product.brand}
                  code={product.code}
                  badge={product.badge}
                  inStock={product.inStock}
                  image={product.image}
                  href={`/thiet-bi/san-pham/${product.slug}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
