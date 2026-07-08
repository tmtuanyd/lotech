import Link from "next/link";
import { ArrowRight, Building2, CalendarDays, MapPin } from "lucide-react";

interface ProjectCardProps {
  index: number;
  title: string;
  location: string;
  client: string;
  year: number;
  tags: string[];
  image: string;
  href: string;
}

export default function ProjectCard({
  index,
  title,
  location,
  client,
  year,
  tags,
  image,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[26px] border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(15,42,86,0.45)]"
      style={{ borderColor: "#DCE4F0" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-4 right-4 rounded-full px-2.5 py-1 text-[10px] font-black text-white"
          style={{ background: "rgba(15,42,86,0.88)", backdropFilter: "blur(6px)" }}
        >
          {String(index).padStart(2, "0")}
        </div>
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white max-w-[75%] truncate"
          style={{ background: "rgba(8,20,47,0.44)", backdropFilter: "blur(6px)" }}>
          <MapPin size={11} className="flex-shrink-0" style={{ color: "#F28D35" }} />
          <span className="truncate">{location}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap gap-1.5 mb-2.5 sm:mb-3">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ background: "#EEF4FB", color: "#0F2A56" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3
          className="mb-2.5 sm:mb-3 line-clamp-2 text-[15px] sm:text-base font-bold leading-snug transition-colors group-hover:text-[#0F2A56]"
          style={{ color: "#13233D" }}
        >
          {title}
        </h3>
        <div className="grid gap-2 text-xs" style={{ color: "#6B7C93" }}>
          <div className="flex items-center gap-2">
            <Building2 size={13} />
            <span className="font-medium">{client}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays size={13} />
              <span>{year}</span>
            </div>
            <span className="inline-flex items-center gap-1 font-bold" style={{ color: "#F28D35" }}>
              Xem dự án <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
