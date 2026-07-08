import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FileBadge2,
  FileText,
  MapPinned,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProductCard from "@/components/cards/ProductCard";
import CtaBand from "@/components/home/CtaBand";
import { ProductGallery } from "@/components/common/ImageLightbox";
import {
  PRODUCTS,
  getProductBySlug,
  getProductCategoryMeta,
  getRelatedProducts,
} from "@/data";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} – LOTEC Việt Nam`,
    description: product.shortDesc,
  };
}

function getDocumentTypeLabel(type: string) {
  switch (type) {
    case "datasheet":
      return "Datasheet";
    case "manual":
      return "Hướng dẫn";
    case "catalogue":
      return "Catalogue";
    case "certificate":
      return "Chứng chỉ";
    default:
      return "Tài liệu";
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryMeta = getProductCategoryMeta(product.category);
  const relatedProducts = getRelatedProducts(product);

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Trang chủ", href: "/" },
          { label: "Thiết bị", href: "/thiet-bi" },
          categoryMeta
            ? { label: categoryMeta.label, href: `/thiet-bi/${categoryMeta.slug}` }
            : { label: product.category, href: "/thiet-bi" },
          { label: product.code },
        ]}
        title={product.name}
        description={product.shortDesc}
        image={product.image}
      />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <ProductGallery images={product.images} name={product.name} />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <span
                  className="rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-black uppercase"
                  style={{ background: "#EEF4FB", color: "#0F2A56" }}
                >
                  {product.brand}
                </span>
                <span
                  className="rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold max-w-full truncate"
                  style={{ background: "#FFF3E8", color: "#F28D35" }}
                >
                  Mã: {product.code}
                </span>
                {product.badge && (
                  <span
                    className="rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-black uppercase text-white"
                    style={{ background: "#F28D35" }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 break-words" style={{ color: "#0F2A56" }}>
                {product.name}
              </h1>

              <p className="text-base leading-relaxed mb-6" style={{ color: "#6B7C93" }}>
                {product.shortDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  {
                    icon: product.inStock ? PackageCheck : Truck,
                    label: "Tình trạng",
                    value: product.inStock ? "Còn hàng" : `Đặt ${product.deliveryDays ?? 7} ngày`,
                  },
                  {
                    icon: ShieldCheck,
                    label: "Bảo hành",
                    value: product.warranty,
                  },
                  {
                    icon: MapPinned,
                    label: "Xuất xứ",
                    value: product.origin ?? "Đang cập nhật",
                  },
                  {
                    icon: BadgeCheck,
                    label: "Danh mục",
                    value: categoryMeta?.shortLabel ?? product.category,
                  },
                ].map((item) => (
                  <div key={item.label} className="modern-card p-3.5 sm:p-4">
                    <div className="flex items-center gap-2 mb-1" style={{ color: "#0F2A56" }}>
                      <item.icon size={16} />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em]">
                        {item.label}
                      </span>
                    </div>
                    <div className="text-sm font-semibold" style={{ color: "#51627E" }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="modern-card p-4 sm:p-6 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "#6B7C93" }}>
                      Báo giá
                    </div>
                    <div className="text-3xl font-black" style={{ color: "#0F2A56" }}>
                      Liên hệ
                    </div>
                  </div>
                  <div
                    className="rounded-2xl px-4 py-3 text-sm font-semibold w-fit"
                    style={{ background: "#F7FAFE", color: "#51627E" }}
                  >
                    Hỗ trợ tư vấn B2B
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
                  <Link
                    href="/lien-he"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white"
                    style={{ background: "#0F2A56" }}
                  >
                    <FileText size={16} />
                    Yêu cầu báo giá
                  </Link>
                  <Link
                    href={`tel:0945225884`}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold"
                    style={{ background: "#FFF3E8", color: "#F28D35" }}
                  >
                    <Truck size={16} />
                    Gọi tư vấn nhanh
                  </Link>
                </div>
              </div>

              <div className="modern-card p-4 sm:p-6">
                <div className="text-lg font-bold mb-4" style={{ color: "#0F2A56" }}>
                  Điểm nổi bật
                </div>
                <div className="space-y-3">
                  {product.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full"
                        style={{ background: "#EEF4FB", color: "#0F2A56" }}
                      >
                        <ArrowRight size={12} />
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "#51627E" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "#F6F8FC" }}>
        <div className="max-w-7xl mx-auto px-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="modern-card p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-6" style={{ color: "#0F2A56" }}>
              Thông số kỹ thuật
            </h2>
            <div className="divide-y" style={{ borderColor: "#E6EDF6" }}>
              {product.specs.map((spec) => (
                <div key={spec.label} className="grid gap-2 py-3 md:grid-cols-[220px_minmax(0,1fr)]">
                  <div className="text-sm font-semibold" style={{ color: "#0F2A56" }}>
                    {spec.label}
                  </div>
                  <div className="text-sm" style={{ color: "#51627E" }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="modern-card p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-6" style={{ color: "#0F2A56" }}>
              Tài liệu mẫu
            </h2>
            <div className="space-y-3">
              {product.documents.map((doc) => (
                <Link
                  key={doc.name}
                  href={doc.url}
                  className="flex items-center justify-between gap-3 rounded-2xl border px-3 sm:px-4 py-3 sm:py-4 transition-colors hover:bg-[#F8FBFE]"
                  style={{ borderColor: "#E6EDF6" }}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                      style={{ background: "#EEF4FB", color: "#0F2A56" }}
                    >
                      <FileBadge2 size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold truncate" style={{ color: "#0F2A56" }}>
                        {doc.name}
                      </div>
                      <div className="text-xs" style={{ color: "#6B7C93" }}>
                        {getDocumentTypeLabel(doc.type)} · {doc.size}
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={16} className="flex-shrink-0" style={{ color: "#F28D35" }} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <div>
                <div className="section-label">Sản phẩm liên quan</div>
                <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: "#0F2A56" }}>
                  Đề xuất theo cùng nhu cầu
                </h2>
              </div>
              {categoryMeta && (
                <Link
                  href={`/thiet-bi/${categoryMeta.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold"
                  style={{ color: "#F28D35" }}
                >
                  Xem danh mục <ArrowRight size={14} />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  brand={item.brand}
                  code={item.code}
                  badge={item.badge}
                  inStock={item.inStock}
                  image={item.image}
                  href={`/thiet-bi/san-pham/${item.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
