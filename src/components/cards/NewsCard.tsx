import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  href: string;
  featured?: boolean;
}

export default function NewsCard({
  title,
  excerpt,
  category,
  date,
  image,
  href,
  featured = false,
}: NewsCardProps) {
  if (featured) {
    return (
      <Link href={href} className="group block md:col-span-2">
        <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "16/8" }}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(13,43,94,0.96) 30%, rgba(13,43,94,0.2) 100%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase text-white"
                style={{ background: "#E87722" }}
              >
                {category}
              </span>
              <span className="text-white/50 text-xs">{date}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-400 transition-colors">
              {title}
            </h3>
            <p className="text-sm line-clamp-2 mb-3" style={{ color: "rgba(255,255,255,0.65)" }}>
              {excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "#F5A623" }}>
              Đọc tiếp <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ borderColor: "#DCE4F0" }}
    >
      <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase"
            style={{ background: "#EEF2FF", color: "#0D2B5E" }}
          >
            {category}
          </span>
          <span className="text-xs" style={{ color: "#7B8FA8" }}>
            {date}
          </span>
        </div>
        <h3
          className="font-bold text-sm mb-2 line-clamp-2 flex-1 group-hover:text-[#E87722] transition-colors"
          style={{ color: "#0D2B5E" }}
        >
          {title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold mt-auto" style={{ color: "#E87722" }}>
          Đọc tiếp <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
