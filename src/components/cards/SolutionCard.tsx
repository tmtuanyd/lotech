import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  href: string;
  image: string;
}

export default function SolutionCard({
  title,
  description,
  icon,
  tags,
  href,
  image,
}: SolutionCardProps) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-[28px] border"
      style={{ aspectRatio: "4/3", borderColor: "rgba(255,255,255,0.1)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(8,20,47,0.94) 0%, rgba(15,42,86,0.7) 55%, rgba(15,42,86,0.24) 100%)",
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        {/* Icon */}
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-2xl"
          style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(10px)" }}
        >
          {icon}
        </div>
        {/* Bottom */}
        <div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3
            className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-white"
          >
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            {description}
          </p>
          <span
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2"
            style={{ color: "#F6B457" }}
          >
            Xem chi tiết <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
