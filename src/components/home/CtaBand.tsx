import Link from "next/link";
import { Phone, Mail, FileText, ArrowRight } from "lucide-react";
import { COMPANY } from "@/data";

export default function CtaBand() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1E45 0%, #0D2B5E 60%, #1A4490 100%)" }}
    >
      {/* Geometric decoration */}
      <div
        className="soft-orb absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,119,34,0.12), transparent 70%)" }}
      />
      <div
        className="soft-orb absolute -bottom-40 -left-40 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,68,144,0.5), transparent 70%)", animationDelay: "1s" }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(232,119,34,0.6), transparent)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          style={{
            background: "rgba(232,119,34,0.15)",
            border: "1px solid rgba(232,119,34,0.35)",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#E87722" }}
          />
          Sẵn sàng tư vấn miễn phí
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-[1.1] tracking-tight">
          Bắt Đầu Dự Án Của Bạn
          <br />
          <span style={{ color: "#F5A623" }}>Ngay Hôm Nay</span>
        </h2>
        <p className="text-base max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
          Đội ngũ kỹ sư LOTEC sẵn sàng tư vấn miễn phí, khảo sát thực tế và đưa ra giải pháp tối ưu cho công trình của bạn
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href={`tel:${COMPANY.hotline1.replace(/\s/g, "")}`}
            className="pulse-glow flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            style={{ background: "#E87722", boxShadow: "0 4px 14px rgba(232,119,34,0.35)" }}
          >
            <Phone size={16} />
            Gọi Ngay: {COMPANY.hotline1}
          </Link>
          <Link
            href={`mailto:${COMPANY.email1}`}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:bg-white/15 w-full sm:w-auto justify-center"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            <Mail size={16} />
            Gửi Email
          </Link>
          <Link
            href="/ve-chung-toi"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-200 hover:bg-white/15 w-full sm:w-auto justify-center"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            <FileText size={16} />
            Hồ Sơ Năng Lực
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px w-24 mx-auto mb-8" style={{ background: "rgba(255,255,255,0.12)" }} />

        {/* Contact info */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          <Link
            href={`tel:${COMPANY.hotline1.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-white/70 transition-colors"
          >
            <Phone size={13} style={{ color: "#E87722" }} />
            {COMPANY.hotline1}
          </Link>
          <span className="hidden sm:block" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          <Link
            href={`tel:${COMPANY.hotline2.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-white/70 transition-colors"
          >
            <Phone size={13} style={{ color: "#E87722" }} />
            {COMPANY.hotline2}
          </Link>
          <span className="hidden sm:block" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          <span className="flex items-center gap-1.5">
            <ArrowRight size={13} style={{ color: "#E87722" }} />
            Long Biên, Hà Nội
          </span>
        </div>
      </div>
    </section>
  );
}
