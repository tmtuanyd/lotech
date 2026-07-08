import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Building2, Calendar, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/cards/ProjectCard";
import CtaBand from "@/components/home/CtaBand";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROJECTS } from "@/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} – LOTEC Việt Nam`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        breadcrumb={[
          { label: "Trang chủ", href: "/" },
          { label: "Dự Án", href: "/du-an" },
          { label: project.title },
        ]}
        title={project.title}
        description={`${project.category} · ${project.location} · ${project.year}`}
        image={project.image}
      />

      <section className="border-b bg-white py-5" style={{ borderColor: "#DCE4F0" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em]"
              style={{ background: "#EEF4FB", color: "#0F2A56" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Content */}
            <div className="lg:col-span-2">
              <SectionTitle
                label="Tổng quan dự án"
                title="Mô tả và phạm vi triển khai"
                description="Thông tin mẫu được bố trí theo hướng hồ sơ dự án doanh nghiệp, để sau này có thể thay bằng nội dung thật."
              />
              <p className="text-base leading-relaxed mb-8" style={{ color: "#7B8FA8" }}>
                {project.description}
              </p>

              <div className="modern-card p-6 mb-8">
                <h3 className="text-lg font-bold mb-4" style={{ color: "#0F2A56" }}>
                  Giải pháp đã triển khai
                </h3>
                <ul className="space-y-3">
                {project.tags.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: "#EEF4FB", color: "#0F2A56" }}
                    >
                      <BadgeCheck size={13} />
                    </div>
                    <span className="text-sm" style={{ color: "#2C3E50" }}>
                      Hệ thống {t}
                    </span>
                  </li>
                ))}
                </ul>
              </div>

              <div className="modern-card overflow-hidden p-2" style={{ aspectRatio: "16/9" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full rounded-[20px] object-cover"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div
                className="modern-card sticky top-24 p-6"
                style={{ background: "#FBFDFF" }}
              >
                <h3 className="font-bold text-base mb-5" style={{ color: "#0F2A56" }}>
                  Thông tin dự án
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} style={{ color: "#E87722", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div className="text-xs font-bold mb-0.5" style={{ color: "#7B8FA8" }}>
                        Địa điểm
                      </div>
                      <div className="text-sm font-semibold" style={{ color: "#0D2B5E" }}>
                        {project.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar size={16} style={{ color: "#E87722", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div className="text-xs font-bold mb-0.5" style={{ color: "#7B8FA8" }}>
                        Năm hoàn thành
                      </div>
                      <div className="text-sm font-semibold" style={{ color: "#0D2B5E" }}>
                        {project.year}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 size={16} style={{ color: "#E87722", flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div className="text-xs font-bold mb-0.5" style={{ color: "#7B8FA8" }}>
                        Chủ đầu tư
                      </div>
                      <div className="text-sm font-semibold" style={{ color: "#0D2B5E" }}>
                        {project.client}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/lien-he"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-px"
                  style={{ background: "#0F2A56" }}
                >
                  Tư vấn dự án tương tự
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16" style={{ background: "#F6F8FC" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            label="Liên quan"
            title="Dự án cùng nhóm"
            description="Nhóm công trình liên quan để người xem tiếp tục tham khảo năng lực thi công."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
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

      <CtaBand />
    </>
  );
}
