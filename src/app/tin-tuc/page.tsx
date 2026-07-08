import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NewsCard from "@/components/cards/NewsCard";
import CtaBand from "@/components/home/CtaBand";
import { NEWS } from "@/data";

export const metadata: Metadata = {
  title: "Tin Tức & Kiến Thức – LOTEC Việt Nam",
  description: "Tin tức công ty, dự án mới hoàn thành và kiến thức kỹ thuật ngành điện từ LOTEC Việt Nam.",
};

export default function NewsPage() {
  const featured = NEWS.find((n) => n.featured)!;
  const rest = NEWS.filter((n) => !n.featured);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: "Trang chủ", href: "/" }, { label: "Tin Tức" }]}
        title="Tin Tức & Kiến Thức"
        description="Cập nhật mới nhất từ LOTEC Việt Nam"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <NewsCard
              title={featured.title}
              excerpt={featured.excerpt}
              category={featured.category}
              date={featured.date}
              image={featured.image}
              href={`/tin-tuc/${featured.slug}`}
              featured
            />
            <div className="flex flex-col gap-5">
              {rest.slice(0, 2).map((n) => (
                <NewsCard
                  key={n.id}
                  title={n.title}
                  excerpt={n.excerpt}
                  category={n.category}
                  date={n.date}
                  image={n.image}
                  href={`/tin-tuc/${n.slug}`}
                />
              ))}
            </div>
          </div>

          {rest.length > 2 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.slice(2).map((n) => (
                <NewsCard
                  key={n.id}
                  title={n.title}
                  excerpt={n.excerpt}
                  category={n.category}
                  date={n.date}
                  image={n.image}
                  href={`/tin-tuc/${n.slug}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
