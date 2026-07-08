import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, BarChart3, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SolutionCard from "@/components/cards/SolutionCard";
import ContactForm from "@/components/forms/ContactForm";
import { SOLUTIONS, PROJECTS } from "@/data";
import ProjectCard from "@/components/cards/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) return {};
  return {
    title: `${sol.title} – LOTEC Việt Nam`,
    description: sol.description,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.slug === slug);
  if (!sol) notFound();

  const relatedProjects = PROJECTS.filter((p) =>
    p.tags.some((t) => sol.tags.includes(t))
  ).slice(0, 3);

  const otherSolutions = SOLUTIONS.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Trang chủ", href: "/" },
          { label: "Giải Pháp", href: "/giai-phap" },
          { label: sol.title },
        ]}
        title={sol.title}
        description={`Cho trạm biến áp 110kV–500kV · Nhà máy · Khu công nghiệp`}
        image={sol.image}
      />

      <div className="py-5 border-b bg-white" style={{ borderColor: "#DCE4F0" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2">
          {sol.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.14em]"
              style={{ background: "#EEF4FB", color: "#0F2A56" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <SectionTitle
                label="Tổng quan"
                title="Mô hình triển khai và giá trị vận hành"
                description="Nội dung được tổng hợp theo hồ sơ năng lực LOTEC, tập trung vào năng lực triển khai thực tế và giá trị vận hành."
              />
              <p className="text-base leading-relaxed mb-6" style={{ color: "#7B8FA8" }}>
                {sol.description} LOTEC cung cấp giải pháp tổng thể từ khảo sát, thiết kế, thi
                công đến bàn giao và hỗ trợ vận hành dài hạn theo tiêu chuẩn EVN/EVNNPT.
              </p>
              <div className="modern-card p-6">
              <ul className="space-y-3">
                {sol.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: "#EEF4FB", color: "#0F2A56" }}
                    >
                      <BadgeCheck size={13} />
                    </div>
                    <span className="text-sm" style={{ color: "#2C3E50" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
            <div className="modern-card overflow-hidden p-2" style={{ aspectRatio: "4/3" }}>
              <img src={sol.image} alt={sol.title} className="w-full h-full rounded-[20px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #08142F 0%, #0F2A56 60%, #1B3F7A 100%)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { icon: ShieldCheck, value: "An toàn", label: "Phát hiện sớm bất thường" },
              { icon: BarChart3, value: "Tin cậy", label: "Vận hành ổn định liên tục" },
              { icon: BadgeCheck, value: "Hiệu quả", label: "Tối ưu chi phí vận hành" },
              { icon: ArrowRight, value: "24/7", label: "Theo dõi và hỗ trợ kỹ thuật" },
            ].map((b) => (
              <div
                key={b.label}
                className="rounded-2xl border p-4 sm:p-5 transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="mb-2 sm:mb-3 flex justify-center text-white/80">
                  <b.icon size={18} />
                </div>
                <div
                  className="text-2xl sm:text-3xl font-black mb-1"
                  style={{ color: "#F5A623" }}
                >
                  {b.value}
                </div>
                <div className="text-sm text-white/60">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section className="py-14 sm:py-20" style={{ background: "#F6F8FC" }}>
          <div className="max-w-7xl mx-auto px-4">
            <SectionTitle
              label="Dự án tham chiếu"
              title="Dự án đã triển khai"
              description="Những công trình có điểm giao về công nghệ và phạm vi ứng dụng."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProjects.map((p) => (
                <ProjectCard
                  key={p.id}
                  index={p.id}
                  title={p.title}
                  location={p.location}
                  client={p.client}
                  year={p.year}
                  tags={p.tags}
                  image={p.image}
                  href={`/du-an/${p.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact form */}
      <section className="py-14 sm:py-20" style={{ background: "#F6F8FC" }}>
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle
            label="Liên hệ kỹ thuật"
            title="Nhận tư vấn giải pháp từ đội ngũ LOTEC"
            description="Để lại nhu cầu để nhận phương án đề xuất, thông số và báo giá phù hợp với công trình."
            align="center"
          />
          <div className="modern-card mt-8 p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Liên quan"
            title="Giải pháp khác"
            description="Mở rộng tham khảo theo các nhóm công nghệ LOTEC đang triển khai."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherSolutions.map((s) => (
              <SolutionCard
                key={s.id}
                title={s.title}
                description={s.description}
                iconKey={s.id}
                tags={s.tags}
                href={`/giai-phap/${s.slug}`}
                image={s.image}
              />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
