import type { Metadata } from "next";
import { BadgeCheck, FileText, Leaf, Lightbulb, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import CtaBand from "@/components/home/CtaBand";
import Reveal from "@/components/common/Reveal";
import { COMPANY, PARTNERS } from "@/data";

export const metadata: Metadata = {
  title: "Về Chúng Tôi – LOTEC Việt Nam",
  description:
    "Công ty TNHH Phát Triển LOTEC Việt Nam – Đơn vị tiên phong về giải pháp năng lượng và tự động hóa. 130+ công trình, 20+ tỉnh thành.",
};

const stats = [
  { value: "130+", label: "Trạm đã triển khai" },
  { value: "20+", label: "Tỉnh thành đã có mặt" },
  { value: "500+", label: "Camera lắp đặt" },
  { value: "100+", label: "Tủ điện PLC/SCADA" },
];

const values = [
  {
    icon: ShieldCheck,
    label: "An Toàn",
    desc: "Mọi công trình đều tuân thủ nghiêm ngặt các tiêu chuẩn EVN, EVNNPT, IEC và TCVN. An toàn là ưu tiên hàng đầu trong từng bước thi công.",
  },
  {
    icon: BadgeCheck,
    label: "Tin Cậy",
    desc: "Với tỷ lệ 100% công trình hoàn thành đúng tiến độ, LOTEC là đối tác đáng tin cậy cho các chủ đầu tư lớn như EVNNPT, EVNNPC.",
  },
  {
    icon: Lightbulb,
    label: "Đổi Mới",
    desc: "Liên tục cập nhật và ứng dụng công nghệ mới nhất: Camera AI, SCADA IEC 61850, giám sát nhiệt hồng ngoại, điện mặt trời.",
  },
  {
    icon: Leaf,
    label: "Bền Vững",
    desc: "Cam kết cung cấp giải pháp dài hạn, hỗ trợ hậu mãi 24/7 và đảm bảo hệ thống vận hành ổn định trong nhiều năm.",
  },
];

const certifications = [
  "EVN",
  "EVNNPT",
  "ISO 9001",
  "IEC 61850",
  "TCVN",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Trang chủ", href: "/" }, { label: "Về Chúng Tôi" }]}
        title="Về LOTEC Việt Nam"
        description={`"${COMPANY.slogan}"`}
        image="https://images.unsplash.com/photo-1487875961445-47a00398c267?w=1920&q=80"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-hidden rounded-[30px] modern-card p-2">
              <div className="relative overflow-hidden rounded-[24px]" style={{ aspectRatio: "4/3" }}>
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                alt="LOTEC văn phòng"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                style={{ background: "#E87722" }}
              >
                EVN & EVNNPT Certified
              </div>
              </div>
            </div>
            <div>
              <SectionTitle
                label="Câu chuyện công ty"
                title="Đơn vị tiên phong về giải pháp điện năng lượng"
              />
              <p className="text-base leading-relaxed mt-4 mb-4" style={{ color: "#7B8FA8" }}>
                <strong style={{ color: "#2C3E50" }}>{COMPANY.fullName}</strong> là đơn vị chuyên
                thi công và phân phối thiết bị trong lĩnh vực điện năng lượng và tự động hóa tại
                Việt Nam. Thành lập với sứ mệnh mang công nghệ tiên tiến nhất đến các trạm biến áp
                110kV–220kV trên toàn quốc.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#7B8FA8" }}>
                Đội ngũ kỹ sư LOTEC có kinh nghiệm dày dặn, đã hoàn thành hơn 130 công trình trải
                dài 20+ tỉnh thành phía Bắc Việt Nam với tỷ lệ 100% đúng tiến độ. Chúng tôi cam
                kết theo tiêu chí:{" "}
                <em style={{ color: "#0D2B5E", fontStyle: "normal", fontWeight: 700 }}>
                  AN TOÀN – TIN CẬY – ĐỔI MỚI – BỀN VỮNG
                </em>
                .
              </p>
              <a
                href="/documents/ho-so-nang-luc.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-px"
                style={{ background: "#0F2A56" }}
              >
                <FileText size={16} />
                Tải Hồ Sơ Năng Lực
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section style={{ background: "linear-gradient(135deg, #08142F 0%, #0F2A56 60%, #1B3F7A 100%)" }}>
        <Reveal className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Core values */}
      <section className="py-20" style={{ background: "#F6F8FC" }}>
        <Reveal className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Giá trị cốt lõi"
            title="Phương Châm Hoạt Động"
            align="center"
            description="4 giá trị định hướng mọi hoạt động của LOTEC Việt Nam"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="modern-card rounded-[24px] p-6"
                >
                  <div
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "#FFF3E8", color: "#E87722" }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: "#0D2B5E" }}>
                    {v.label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#7B8FA8" }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Certifications & Partners */}
      <section className="py-20 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <SectionTitle label="Chứng nhận" title="Tiêu Chuẩn & Chứng Chỉ" />
              <div className="flex flex-wrap gap-3 mt-6">
                {certifications.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 rounded-2xl border font-bold text-sm"
                    style={{ borderColor: "#DCE4F0", color: "#0D2B5E", background: "#F7FAFE" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle label="Đối tác" title="Thương Hiệu Chính Hãng" />
              <div className="grid grid-cols-2 gap-3 mt-6">
                {PARTNERS.slice(0, 8).map((partner) => (
                  <div
                    key={partner.name}
                    className="group rounded-2xl border bg-white px-3 py-2 flex items-center justify-center transition-all hover:border-[#0F2A56]"
                    style={{ borderColor: "#DCE4F0", minHeight: "82px" }}
                  >
                    {partner.logoUrl ? (
                      <img
                        src={partner.logoUrl}
                        alt={partner.name}
                        className="max-h-full max-w-full w-auto object-contain opacity-95 transition-all group-hover:opacity-100"
                        style={{ height: partner.logoHeight ? `${partner.logoHeight + 10}px` : "40px" }}
                      />
                    ) : (
                      <span className="font-bold text-sm" style={{ color: "#7B8FA8" }}>
                        {partner.logo}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
