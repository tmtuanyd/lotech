"use client";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { COMPANY } from "@/data";

export default function TopBar() {
  return (
    <div
      className="hidden lg:block text-white text-sm border-b"
      style={{
        background: "linear-gradient(90deg, #08142F 0%, #0F2A56 45%, #1E458A 100%)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between gap-4 overflow-hidden">
        <div className="flex items-center gap-4 xl:gap-6 text-white/75 min-w-0">
          <span className="flex items-center gap-1.5 min-w-0">
            <MapPin size={13} className="flex-shrink-0" />
            <span className="truncate">{COMPANY.address1}</span>
          </span>
          <span className="hidden xl:flex items-center gap-1.5 flex-shrink-0">
            <Clock size={13} />
            Hỗ trợ 24/7
          </span>
        </div>
        <div className="flex items-center gap-4 xl:gap-6 text-white/75 flex-shrink-0">
          <Link
            href={`tel:${COMPANY.hotline1.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={13} />
            {COMPANY.hotline1}
          </Link>
          <Link
            href={`mailto:${COMPANY.email1}`}
            className="hidden xl:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={13} />
            {COMPANY.email1}
          </Link>
        </div>
      </div>
    </div>
  );
}
