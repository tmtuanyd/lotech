import Link from "next/link";
import { ArrowRight, CircleDashed, Globe2, Mail, MapPin, Phone, Play, MessageCircleMore } from "lucide-react";
import { COMPANY } from "@/data";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(145deg, #08142F 0%, #0F2A56 55%, #173A78 100%)",
      }}
      className="relative overflow-hidden"
    >
      <div
        className="absolute -top-40 -right-28 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.2), transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-lg"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                L
              </div>
              <div>
                <div className="font-black text-lg leading-none text-white">LOTEC</div>
                <div className="text-[10px] font-medium tracking-wider text-white/50">VIỆT NAM</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Đơn vị tiên phong về giải pháp an ninh thông minh và tự động hóa cho trạm biến áp tại Việt Nam.
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <Link
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-colors"
              >
                <Globe2 size={15} />
              </Link>
              {/* YouTube */}
              <Link
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-colors"
              >
                <Play size={15} />
              </Link>
              {/* Zalo */}
              <Link
                href={`https://zalo.me/${COMPANY.hotline1.replace(/\s/g, "")}`}
                aria-label="Zalo"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-colors"
              >
                <MessageCircleMore size={15} />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Giải Pháp</h4>
            <ul className="space-y-2.5">
              {[
                ["Giám sát an ninh thông minh", "/giai-phap/giam-sat-an-ninh-thong-minh"],
                ["Giám sát nhiệt thiết bị điện", "/giai-phap/giam-sat-nhiet-thiet-bi-dien"],
                ["Bảo vệ hàng rào và hành lang trạm", "/giai-phap/bao-ve-hang-rao-hanh-lang-tram-dien"],
                ["Nguồn điện và tự động hóa", "/giai-phap/nguon-dien-va-tu-dong-hoa"],
                ["Giám sát tủ điện một chiều (DC)", "/giai-phap/giam-sat-tu-dien-mot-chieu-dc"],
                ["Giám sát nguồn ắc quy", "/giai-phap/giam-sat-nguon-ac-quy-tram-truyen-tai"],
                ["Điện năng lượng mặt trời", "/giai-phap/dien-nang-luong-mat-troi"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <CircleDashed size={12} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Phân Phối</h4>
            <ul className="space-y-2.5">
              {[
                ["Camera & An Ninh", "/thiet-bi/camera"],
                ["Thiết Bị Điện Hạ Thế", "/thiet-bi/thiet-bi-dien"],
                ["Máy Biến Áp", "/thiet-bi/may-bien-ap"],
                ["Tủ Điện & Phụ Kiện", "/thiet-bi/tu-dien"],
                ["Dự Án Tiêu Biểu", "/du-an"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <CircleDashed size={12} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#E87722" }} />
                {COMPANY.address1}
              </li>
              <li>
                <Link
                  href={`tel:${COMPANY.hotline1.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={15} style={{ color: "#E87722" }} />
                  {COMPANY.hotline1}
                </Link>
              </li>
              <li>
                <Link
                  href={`tel:${COMPANY.hotline2.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={15} style={{ color: "#E87722" }} />
                  {COMPANY.hotline2}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${COMPANY.email1}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={15} style={{ color: "#E87722" }} />
                  {COMPANY.email1}
                </Link>
              </li>
            </ul>
            <Link
              href="/api/download/ho-so-nang-luc"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors hover:text-[#0F2A56]"
              style={{ background: "rgba(232,119,34,0.95)" }}
            >
              Tải hồ sơ năng lực
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 min-h-12 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>
            <span className="sm:hidden">© 2026 LOTEC Việt Nam</span>
            <span className="hidden sm:inline">© 2026 {COMPANY.fullName}. All rights reserved.</span>
          </span>
          <div className="flex items-center gap-4">
            <Link href="/chinh-sach-bao-mat" className="inline-flex items-center gap-1 hover:text-white/70 transition-colors">
              Chính sách bảo mật
              <ArrowRight size={12} />
            </Link>
            <Link href="/dieu-khoan" className="inline-flex items-center gap-1 hover:text-white/70 transition-colors">
              Điều khoản
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
