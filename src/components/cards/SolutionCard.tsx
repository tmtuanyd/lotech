import Link from "next/link";
import {
  ArrowRight,
  Cctv,
  Thermometer,
  BrickWallShield,
  Cpu,
  BatteryCharging,
  Sun,
} from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  iconKey: string;
  tags: string[];
  href: string;
  image: string;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "camera-ai": Cctv,
  "giam-sat-nhiet": Thermometer,
  "hang-rao": BrickWallShield,
  "scada-plc": Cpu,
  "giam-sat-dc": BatteryCharging,
  solar: Sun,
};

export default function SolutionCard({
  title,
  description,
  iconKey,
  tags,
  href,
  image,
}: SolutionCardProps) {
  const Icon = iconMap[iconKey] ?? Cctv;

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-[28px] border min-h-[260px] sm:min-h-0 aspect-auto sm:aspect-[4/3]"
      style={{ borderColor: "rgba(255,255,255,0.1)" }}
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
      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-6">
        {/* Icon */}
        <div
          className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-2xl"
          style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(10px)" }}
        >
          <Icon size={20} className="text-[#F6B457]" />
        </div>
        {/* Bottom */}
        <div>
          <div className="mb-2 sm:mb-3 flex flex-wrap gap-1.5">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
              className="rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
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
            className="mb-2 line-clamp-2 text-lg sm:text-xl font-bold text-white transition-colors group-hover:text-white"
          >
            {title}
          </h3>
          <p className="mb-3 sm:mb-4 line-clamp-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
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
