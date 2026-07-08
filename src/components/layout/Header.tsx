"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Phone,
  ShoppingCart,
  Cctv,
  Thermometer,
  BrickWallShield,
  Cpu,
  BatteryCharging,
  Sun,
  Zap,
  Server,
  LayoutGrid,
} from "lucide-react";
import { COMPANY } from "@/data";

const solutionItems = [
  { icon: Cctv,             label: "Camera AI & An Ninh",  sub: "Giám sát trạm 24/7",       href: "/giai-phap/camera-ai-an-ninh" },
  { icon: Thermometer,      label: "Giám Sát Nhiệt",       sub: "Phát hiện điểm nóng",      href: "/giai-phap/giam-sat-nhiet" },
  { icon: BrickWallShield,  label: "Bảo Vệ Hàng Rào",     sub: "Perimeter 110–500kV",      href: "/giai-phap/bao-ve-hang-rao" },
  { icon: Cpu,              label: "SCADA / PLC",           sub: "Tự động hóa",              href: "/giai-phap/scada-plc-tu-dong-hoa" },
  { icon: BatteryCharging,  label: "Giám Sát DC & Ắc Quy", sub: "Nguồn trạm truyền tải",    href: "/giai-phap/giam-sat-dc-ac-quy" },
  { icon: Sun,              label: "Điện Mặt Trời",         sub: "Solar on-grid",            href: "/giai-phap/dien-mat-troi-solar" },
];

const productItems = [
  { icon: Cctv,        label: "Camera & An Ninh",      count: "50 SP",  href: "/thiet-bi/camera" },
  { icon: Zap,         label: "Thiết Bị Điện Hạ Thế", count: "200 SP", href: "/thiet-bi/thiet-bi-dien" },
  { icon: Server,      label: "Máy Biến Áp",           count: "30 SP",  href: "/thiet-bi/may-bien-ap" },
  { icon: LayoutGrid,  label: "Tủ Điện & Phụ Kiện",    count: "80 SP",  href: "/thiet-bi/tu-dien" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Trang Chủ", href: "/" },
    { label: "Về Chúng Tôi", href: "/ve-chung-toi" },
    { label: "Giải Pháp", href: "/giai-phap", mega: "solutions" },
    { label: "Thiết Bị", href: "/thiet-bi", mega: "products" },
    { label: "Dự Án", href: "/du-an" },
    { label: "Tin Tức", href: "/tin-tuc" },
    { label: "Liên Hệ", href: "/lien-he" },
  ];

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 bg-white/96 backdrop-blur-md border-b"
        animate={{
          boxShadow: scrolled ? "0 18px 40px -28px rgba(8,20,47,0.28)" : "0 1px 0 rgba(215,223,236,0.9)",
        }}
        style={{ borderColor: "rgba(215,223,236,0.9)" }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, #22D3EE 0%, #0F2A56 45%, #F28D35 100%)" }}
        />
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[74px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #0F2A56 0%, #1E458A 75%)",
                  boxShadow: "0 14px 30px -20px rgba(15,42,86,0.7)",
                }}
              >
                L
              </div>
              <div>
                <div className="font-black text-[1.05rem] leading-none tracking-[0.08em]" style={{ color: "#0F2A56" }}>
                  LOTEC
                </div>
                <div className="text-[10px] font-semibold tracking-[0.24em] uppercase" style={{ color: "#7B8FA8" }}>
                  Việt Nam
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) =>
                link.mega ? (
                  <div key={link.href} className="relative mega-menu-trigger">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                        pathname.startsWith(link.href)
                          ? "text-orange-500"
                          : "text-slate-700 hover:text-[#0F2A56] hover:bg-slate-50"
                      }`}
                      style={
                        pathname.startsWith(link.href)
                          ? { color: "#0F2A56", background: "linear-gradient(180deg, #F7FAFE 0%, #EEF4FB 100%)" }
                          : {}
                      }
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </Link>

                    {/* Mega Menu */}
                    <div
                      className="mega-menu absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      style={{
                        width: link.mega === "solutions" ? "680px" : "520px",
                      }}
                    >
                      <div
                        className="rounded-[24px] shadow-2xl border overflow-hidden"
                        style={{
                          background: "linear-gradient(180deg, #FFFFFF 0%, #FBFDFF 100%)",
                          borderColor: "#E1E8F2",
                          boxShadow: "0 32px 64px -36px rgba(8,20,47,0.45)",
                        }}
                      >
                      {link.mega === "solutions" && (
                        <div className="flex">
                          <div className="flex-1 p-5">
                            <div className="text-xs font-bold uppercase tracking-[0.18em] mb-3 px-2" style={{ color: "#7B8FA8" }}>
                              Giải Pháp Thi Công
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {solutionItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center gap-3 px-3 py-3 rounded-2xl border border-transparent hover:border-[#E6EDF6] hover:bg-[#F8FBFE] group transition-colors"
                                >
                                  <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform"
                                    style={{ background: "#F2F6FB" }}
                                  >
                                    <item.icon size={16} style={{ color: "#0F2A56" }} />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-slate-800">{item.label}</div>
                                    <div className="text-xs mt-0.5" style={{ color: "#7B8FA8" }}>{item.sub}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="w-56 p-5 border-l" style={{ background: "linear-gradient(180deg, #F6FAFF 0%, #F0F5FB 100%)", borderColor: "#E1E8F2" }}>
                            <div className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#7B8FA8" }}>
                              Tại Sao Chọn LOTEC
                            </div>
                            {[
                              "130+ công trình triển khai",
                              "20+ tỉnh thành phía Bắc",
                              "Tuân thủ EVN - IEC",
                            ].map((t) => (
                              <div key={t} className="flex items-start gap-2.5 mb-3">
                                <CheckCircle2
                                  size={15}
                                  className="mt-0.5 flex-shrink-0"
                                  style={{ color: "#0F2A56" }}
                                />
                                <span className="text-sm text-slate-700 font-medium">{t}</span>
                              </div>
                            ))}
                            <Link
                              href="/giai-phap"
                              className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                              style={{ color: "#0F2A56", background: "white" }}
                            >
                              Xem tất cả
                              <ArrowRight size={14} style={{ color: "#F28D35" }} />
                            </Link>
                          </div>
                        </div>
                      )}
                      {link.mega === "products" && (
                        <div className="flex">
                          <div className="flex-1 p-5">
                            <div className="text-xs font-bold uppercase tracking-[0.18em] mb-3 px-2" style={{ color: "#7B8FA8" }}>
                              Danh Mục Sản Phẩm
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {productItems.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center gap-3 px-3 py-3 rounded-2xl border border-transparent hover:border-[#EADFD0] hover:bg-[#FFFBF7] group transition-colors"
                                >
                                  <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: "#FFF6ED" }}
                                  >
                                    <item.icon size={16} style={{ color: "#E87722" }} />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-semibold text-slate-800">{item.label}</div>
                                  </div>
                                  <div className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#F7F9FC", color: "#7B8FA8" }}>
                                    {item.count}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="w-44 p-5 border-l" style={{ background: "linear-gradient(180deg, #FDF8F3 0%, #FBF4EC 100%)", borderColor: "#F2E4D4" }}>
                            <div className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: "#7B8FA8" }}>
                              Nhanh
                            </div>
                            {[
                              { label: "Thiết bị bán chạy", href: "/thiet-bi" },
                              { label: "Danh mục mới", href: "/thiet-bi" },
                              { label: "Báo giá nhanh", href: "/lien-he" },
                            ].map((q) => (
                              <Link
                                key={q.label}
                                href={q.href}
                                className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#E87722] mb-2.5 transition-colors"
                              >
                                <ArrowRight size={13} />
                                {q.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                      pathname === link.href ? "font-bold" : "text-slate-700 hover:text-[#0F2A56] hover:bg-slate-50"
                    }`}
                    style={
                      pathname === link.href
                        ? { color: "#0F2A56", background: "linear-gradient(180deg, #F7FAFE 0%, #EEF4FB 100%)" }
                        : {}
                    }
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link
                href="/lien-he"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all hover:bg-slate-50"
                style={{ borderColor: "#D7DFEC", color: "#0F2A56" }}
              >
                <Phone size={14} />
                Tư Vấn
              </Link>
              <Link
                href="/thiet-bi"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-px"
                style={{
                  background: "linear-gradient(135deg, #0F2A56 0%, #1E458A 100%)",
                  boxShadow: "0 16px 28px -20px rgba(15,42,86,0.7)",
                }}
              >
                <ShoppingCart size={14} />
                Xem Thiết Bị
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg"
              style={{ color: "#0D2B5E" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 left-0 bottom-0 w-80 z-50 bg-white shadow-2xl lg:hidden overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: "#DCE4F0" }}>
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black"
                    style={{ background: "linear-gradient(135deg, #0F2A56, #1E458A)" }}
                  >
                    L
                  </div>
                  <span className="font-black tracking-[0.08em]" style={{ color: "#0F2A56" }}>LOTEC</span>
                </div>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={20} style={{ color: "#7B8FA8" }} />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                {navLinks.map((link) =>
                  link.mega ? (
                    <div key={link.href}>
                      <button
                        className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-[#F4F7FB]"
                        onClick={() => setMobileExpanded(mobileExpanded === link.href ? null : link.href)}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className="transition-transform"
                          style={{ transform: mobileExpanded === link.href ? "rotate(180deg)" : "none", color: "#7B8FA8" }}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-0.5 pb-2">
                              {(link.mega === "solutions" ? solutionItems : productItems).map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-[#F4F7FB]"
                                >
                                  <item.icon size={15} style={{ color: "#E87722" }} />
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                        pathname === link.href ? "font-bold" : "text-gray-800 hover:bg-[#F4F7FB]"
                      }`}
                      style={pathname === link.href ? { color: "#E87722", background: "#FFF3E8" } : {}}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="p-4 border-t space-y-2" style={{ borderColor: "#DCE4F0" }}>
                <Link
                  href={`tel:${COMPANY.hotline1.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm"
                  style={{ background: "#0D2B5E" }}
                >
                  <Phone size={16} />
                  {COMPANY.hotline1}
                </Link>
                <Link
                  href="/lien-he"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm"
                  style={{ background: "#E87722" }}
                >
                  Liên Hệ Tư Vấn
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
