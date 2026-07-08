"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionTitle from "@/components/ui/SectionTitle";
import NewsCard from "@/components/cards/NewsCard";
import { NEWS } from "@/data";

export default function NewsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const featured = NEWS.find((n) => n.featured)!;
  const rest = NEWS.filter((n) => !n.featured).slice(0, 2);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <SectionTitle label="Tin tức & Kiến thức" title="Tin Tức Mới Nhất" />
          <Link
            href="/tin-tuc"
            className="flex-shrink-0 text-sm font-bold flex items-center gap-1 transition-all hover:gap-2"
            style={{ color: "#E87722" }}
          >
            Xem tất cả →
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-5"
        >
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
            {rest.map((n) => (
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
        </motion.div>
      </div>
    </section>
  );
}
