import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/common/Reveal";
import { COMPANY } from "@/data";

export const metadata: Metadata = {
  title: "Liên Hệ & Báo Giá – LOTEC Việt Nam",
  description:
    "Liên hệ với đội ngũ kỹ sư LOTEC để được tư vấn miễn phí về giải pháp thi công hoặc báo giá thiết bị.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Gọi Ngay",
    lines: [COMPANY.hotline1, COMPANY.hotline2],
    cta: { label: "Gọi ngay", href: `tel:${COMPANY.hotline1.replace(/\s/g, "")}` },
    color: "#0D2B5E",
  },
  {
    icon: MessageCircle,
    title: "Chat Zalo",
    lines: ["Phản hồi ngay", "trong 15 phút"],
    cta: { label: "Mở Zalo", href: `https://zalo.me/${COMPANY.hotline1.replace(/\s/g, "")}` },
    color: "#0068FF",
  },
  {
    icon: Mail,
    title: "Email",
    lines: [COMPANY.email1, COMPANY.email2],
    cta: { label: "Gửi email", href: `mailto:${COMPANY.email1}` },
    color: "#E87722",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Trang chủ", href: "/" }, { label: "Liên Hệ" }]}
        title="Liên Hệ & Báo Giá"
        description="Đội ngũ kỹ sư LOTEC sẵn sàng tư vấn miễn phí và phản hồi trong vòng 2 giờ"
      />

      {/* Quick contact cards */}
      <section className="py-14 sm:py-16" style={{ background: "#F6F8FC" }}>
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              label="Liên hệ nhanh"
              title="Chọn kênh phù hợp để bắt đầu"
              description="Mỗi kênh liên hệ được bố trí rõ ràng để phù hợp tư vấn nhanh, gửi tài liệu và báo giá B2B."
              align="center"
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="modern-card flex min-h-0 sm:min-h-[248px] flex-col items-center rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 text-center"
                style={{ borderColor: "#DCE4F0" }}
              >
                <div
                  className="mb-3 h-14 w-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${card.color}14` }}
                >
                  <card.icon size={24} style={{ color: card.color }} />
                </div>

                <h3 className="min-h-0 sm:min-h-[32px] text-lg font-bold leading-tight" style={{ color: "#0F2A56" }}>
                  {card.title}
                </h3>

                <div className="mt-3 flex min-h-0 sm:min-h-[62px] flex-col items-center justify-center gap-1">
                  {card.lines.map((l) => (
                    <p key={l} className="text-sm leading-relaxed" style={{ color: "#6B7C93" }}>
                      {l}
                    </p>
                  ))}
                </div>

                <a
                  href={card.cta.href}
                  target={card.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-w-[126px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-px"
                  style={{ background: card.color }}
                >
                  {card.cta.label}
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Form + Map */}
      <section className="py-14 sm:py-20 bg-white">
        <Reveal className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionTitle
                label="Gửi thông tin"
                title="Nhận tư vấn và báo giá theo nhu cầu"
                description="Điền thông tin cơ bản để đội ngũ LOTEC phân loại nhu cầu và liên hệ lại nhanh hơn."
              />
              <div className="modern-card mt-8 p-4 sm:p-6 md:p-7">
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className="modern-card overflow-hidden h-[200px] sm:h-[260px]"
                style={{ borderColor: "#DCE4F0", background: "#F4F7FB" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.641!2d105.886!3d21.055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAzJzE4LjAiTiAxMDXCsDUzJzA5LjYiRQ!5e0!3m2!1svi!2svn!4v1720000000000!5m2!1svi!2svn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LOTEC Việt Nam – Văn phòng Long Biên"
                />
              </div>

              <div
                className="modern-card p-6"
                style={{ background: "#FBFDFF" }}
              >
                <h3 className="font-bold text-sm uppercase tracking-[0.18em] mb-5" style={{ color: "#7B8FA8" }}>
                  Thông tin liên hệ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} style={{ color: "#E87722", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div className="text-xs font-bold mb-0.5" style={{ color: "#7B8FA8" }}>
                        Văn phòng
                      </div>
                      <div className="text-sm" style={{ color: "#13233D" }}>
                        {COMPANY.address1}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} style={{ color: "#E87722", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div className="text-xs font-bold mb-0.5" style={{ color: "#7B8FA8" }}>
                        Trụ sở
                      </div>
                      <div className="text-sm" style={{ color: "#13233D" }}>
                        {COMPANY.address2}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} style={{ color: "#E87722", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div className="text-xs font-bold mb-0.5" style={{ color: "#7B8FA8" }}>
                        Hotline
                      </div>
                      <div className="text-sm font-semibold" style={{ color: "#0D2B5E" }}>
                        {COMPANY.hotline1} / {COMPANY.hotline2}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={16} style={{ color: "#E87722", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div className="text-xs font-bold mb-0.5" style={{ color: "#7B8FA8" }}>
                        Email
                      </div>
                      <div className="text-sm" style={{ color: "#0D2B5E" }}>
                        {COMPANY.email1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
