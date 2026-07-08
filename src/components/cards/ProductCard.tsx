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
      className="group flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-[24px] border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(15,42,86,0.45)]"
      style={{ borderColor: "#DCE4F0" }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          aspectRatio: "16 / 10",
          background: "linear-gradient(180deg, #F8FBFE 0%, #EEF4FB 100%)",
        }}
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 sm:h-24"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(8,20,47,0.18) 100%)" }}
        />

        <div className="absolute left-2.5 right-2.5 top-2.5 sm:left-3.5 sm:right-3.5 sm:top-3.5 flex items-start justify-between gap-2">
          <span
            className="inline-flex max-w-[70%] items-center gap-1 sm:gap-1.5 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] font-bold uppercase tracking-[0.08em] sm:tracking-[0.16em]"
            style={{
              background: "rgba(255,255,255,0.92)",
              color: "#0F2A56",
              backdropFilter: "blur(6px)",
            }}
          >
            <Building2 size={11} className="hidden sm:block" />
            <span className="truncate">{brand}</span>
          </span>
          {badge && badge !== "LIÊN HỆ" && (
            <span
              className="rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-black uppercase text-white"
              style={{ background: "#F28D35" }}
            >
              {badge}
            </span>
          )}
        </div>

        <Link href={href} className="absolute inset-0" aria-label={name} />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] truncate" style={{ color: "#7B8FA8" }}>
          {code}
        </div>
        <Link href={href}>
          <h3 className="mb-2.5 line-clamp-2 text-[15px] sm:text-[14px] font-bold leading-snug text-slate-800 transition-colors group-hover:text-[#0F2A56]">
            {name}
          </h3>
        </Link>

        <div className="mb-3 flex flex-col gap-1.5 text-[11px] sm:flex-row sm:items-center sm:justify-between sm:gap-2" style={{ color: "#7B8FA8" }}>
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold"
            style={{ background: "#EEF4FB", color: "#0F2A56" }}
          >
            <FileText size={11} />
            Báo giá
          </span>
          <div className="flex items-center gap-1">
            {inStock ? (
              <CheckCircle2 size={13} color="#10B981" />
            ) : (
              <Clock3 size={13} color="#7B8FA8" />
            )}
            <span className="font-semibold" style={{ color: inStock ? "#10B981" : "#7B8FA8" }}>
              {inStock ? "Còn hàng" : "Đặt hàng"}
            </span>
          </div>
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-2">
          <Link
            href="/lien-he"
            className="flex w-full sm:flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold transition-all hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #0F2A56 0%, #1E458A 100%)",
              color: "white",
              boxShadow: "0 16px 30px -22px rgba(15,42,86,0.85)",
            }}
          >
            <FileText size={13} />
            <span className="sm:hidden">Báo giá</span>
            <span className="hidden sm:inline">Yêu cầu báo giá</span>
          </Link>
          <Link
            href={href}
            className="flex h-10 w-full sm:w-10 flex-shrink-0 items-center justify-center gap-1.5 rounded-xl border transition-all hover:bg-[#EEF4FB] hover:border-[#C9D8EB]"
            style={{ borderColor: "#DCE4F0", color: "#0F2A56" }}
          >
            <ArrowRight size={15} />
            <span className="sm:hidden text-xs font-bold">Chi tiết</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
