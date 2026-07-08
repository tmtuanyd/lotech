"use client";
import Link from "next/link";
import { FileText, ArrowRight, CheckCircle2, Clock3, Building2 } from "lucide-react";

interface ProductCardProps {
  name: string;
  brand: string;
  code: string;
  badge: string | null;
  inStock: boolean;
  image: string;
  href: string;
}

export default function ProductCard({
  name,
  brand,
  code,
  badge,
  inStock,
  image,
  href,
}: ProductCardProps) {
  return (
    <div
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(15,42,86,0.45)]"
      style={{ borderColor: "#DCE4F0" }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          aspectRatio: "1 / 0.74",
          background: "linear-gradient(180deg, #F8FBFE 0%, #EEF4FB 100%)",
        }}
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(8,20,47,0.18) 100%)" }}
        />

        <div className="absolute left-3.5 right-3.5 top-3.5 flex items-start justify-between gap-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{
              background: "rgba(255,255,255,0.9)",
              color: "#0F2A56",
              backdropFilter: "blur(6px)",
            }}
          >
            <Building2 size={12} />
            {brand}
          </span>
          {badge && badge !== "LIÊN HỆ" && (
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-black uppercase text-white"
              style={{ background: "#F28D35" }}
            >
              {badge}
            </span>
          )}
        </div>

        <Link href={href} className="absolute inset-0" aria-label={name} />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#7B8FA8" }}>
          Mã sản phẩm: {code}
        </div>
        <Link href={href}>
          <h3
            className="mb-2 min-h-[2.4rem] line-clamp-2 text-[14px] font-bold leading-snug text-slate-800 transition-colors group-hover:text-[#0F2A56]"
          >
            {name}
          </h3>
        </Link>

        <div className="mb-3">
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
            style={{ background: "#EEF4FB", color: "#0F2A56" }}
          >
            <FileText size={12} />
            Liên hệ để nhận báo giá
          </div>
        </div>

        <div
          className="mb-3 flex items-center justify-between rounded-xl border px-3 py-2 text-[11px]"
          style={{ borderColor: "#E6EDF6", background: "#FBFDFF" }}
        >
          <span className="font-semibold" style={{ color: "#7B8FA8" }}>
            Tình trạng
          </span>
          <div className="flex items-center gap-1.5">
          {inStock ? (
            <CheckCircle2 size={14} color="#10B981" />
          ) : (
            <Clock3 size={14} color="#7B8FA8" />
          )}
            <span className="font-semibold" style={{ color: inStock ? "#10B981" : "#7B8FA8" }}>
              {inStock ? "Còn hàng" : "Đặt hàng"}
            </span>
          </div>
        </div>

        <div className="mt-auto flex gap-2">
          <Link
            href="/lien-he"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-[11px] font-bold transition-all hover:-translate-y-px"
            style={{ background: "#0F2A56", color: "white" }}
          >
            <FileText size={13} />
            Yêu cầu báo giá
          </Link>
          <Link
            href={href}
            className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all hover:bg-[#EEF4FB] hover:border-[#C9D8EB]"
            style={{ borderColor: "#DCE4F0", color: "#0F2A56" }}
          >
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
