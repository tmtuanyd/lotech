"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    eyebrow: "Công nghệ tiên phong",
    title: ["Giải Pháp Giám Sát", "An Ninh Thông Minh", "Cho Trạm Biến Áp"],
    subtitle: "Camera AI · Giám sát nhiệt · Hàng rào 110kV–500kV",
    image: "https://images.unsplash.com/photo-1487875961445-47a00398c267?w=1920&q=80",
    cta1: { label: "Xem Giải Pháp", href: "/giai-phap" },
    cta2: { label: "Liên Hệ Tư Vấn", href: "/lien-he" },
  },
  {
    eyebrow: "Tự động hóa công nghiệp",
    title: ["SCADA / PLC", "Tự Động Hóa", "Trạm Biến Áp"],
    subtitle: "IEC 61850 · HMI · Điều khiển từ xa · Dự phòng N+1",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
    cta1: { label: "Xem Giải Pháp", href: "/giai-phap/scada-plc-tu-dong-hoa" },
    cta2: { label: "Liên Hệ Tư Vấn", href: "/lien-he" },
  },
  {
    eyebrow: "Năng lượng tái tạo",
    title: ["Điện Năng Lượng", "Mặt Trời", "On-Grid & Hybrid"],
    subtitle: "Solar · Inverter Huawei/SMA · Monitoring online",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
    cta1: { label: "Xem Giải Pháp", href: "/giai-phap/dien-mat-troi-solar" },
    cta2: { label: "Liên Hệ Tư Vấn", href: "/lien-he" },
  },
];

export default function HeroSlider() {
  return (
    <section className="section-shell relative min-h-[min(100svh,480px)] sm:min-h-[420px] sm:h-[min(88svh,860px)]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="hero-swiper h-full min-h-[min(100svh,480px)] sm:min-h-0"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="relative overflow-hidden !h-auto min-h-[min(100svh,480px)] sm:min-h-0 sm:!h-full">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(108deg, rgba(8,20,47,0.9) 0%, rgba(15,42,86,0.78) 45%, rgba(15,42,86,0.2) 80%, rgba(0,0,0,0.05) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 80% 18%, rgba(34,211,238,0.18), transparent 34%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,20,47,0.06) 0%, rgba(8,20,47,0.25) 100%)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center py-10 sm:py-0">
              <div
                className="max-w-[800px] rounded-2xl sm:rounded-[32px] px-4 py-5 sm:px-8 sm:py-8"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0.12))",
                  border: "1px solid rgba(255,255,255,0.28)",
                  backdropFilter: "blur(11px)",
                  boxShadow: "0 34px 60px -30px rgba(8,20,47,0.55)",
                }}
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="h-px w-10 flex-shrink-0"
                    style={{ background: "var(--orange)" }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ color: "rgba(7,18,37,0.62)" }}
                  >
                    {slide.eyebrow}
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="font-black leading-[1.08] mb-4 tracking-tight"
                  style={{ fontSize: "clamp(1.65rem, 6.5vw, 4.35rem)", color: "white" }}
                >
                  {slide.title.map((line, li) => (
                    <span key={li} className="block">
                      {li === 1 ? (
                        <span style={{ color: "var(--orange)" }}>{line}</span>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
                </h1>

                {/* Subtitle */}
                <div className="inline-flex rounded-2xl p-[1px] mb-7 bg-gradient-to-r from-white/18 to-white/6">
                  <p
                    className="text-sm sm:text-base font-medium rounded-2xl px-4 py-3"
                    style={{
                      color: "rgba(255,255,255,0.82)",
                      letterSpacing: "0.02em",
                      background: "rgba(8,20,47,0.3)",
                    }}
                  >
                    {slide.subtitle}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
                  <Link
                    href={slide.cta1.href}
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-sm font-black text-white transition-all duration-200 hover:-translate-y-px"
                    style={{ background: "linear-gradient(135deg, #F28D35, #F6B457)", boxShadow: "0 12px 28px rgba(242,141,53,0.4)" }}
                  >
                    {slide.cta1.label}
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href={slide.cta2.href}
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-px"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.24)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {slide.cta2.label}
                  </Link>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
