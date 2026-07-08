import Link from "next/link";
import { ChevronRight, House } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumb: Crumb[];
  title: string;
  description?: string;
  image?: string;
}

export default function PageHero({ breadcrumb, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(8,20,47,0.92) 0%, rgba(15,42,86,0.82) 48%, rgba(15,42,86,0.46) 100%)",
            }}
          />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #08142F 0%, #0F2A56 52%, #1E458A 100%)" }}
        />
      )}

      <div
        className="soft-orb absolute -top-24 right-0 h-80 w-80 rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(242,141,53,0.22), transparent 70%)" }}
      />
      <div
        className="soft-orb absolute inset-0"
        style={{
          background: "radial-gradient(circle at 82% 18%, rgba(34,211,238,0.14), transparent 28%)",
          animationDelay: "1.2s",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl rounded-2xl sm:rounded-[28px] border px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:py-9" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)" }}>
        <nav
          className="mb-4 sm:mb-5 inline-flex max-w-full items-center gap-1.5 sm:gap-2 rounded-full border px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs overflow-x-auto whitespace-nowrap scrollbar-none"
          style={{
            background: "rgba(255,255,255,0.08)",
            borderColor: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(8px)",
          }}
        >
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5 sm:gap-2">
              {i === 0 && <House size={12} className="text-white/70" />}
              {i > 0 && <ChevronRight size={12} className="text-white/35" />}
              {crumb.href ? (
                <Link href={crumb.href} className="rounded-full px-1.5 sm:px-2 py-1 text-white/68 transition-colors hover:bg-white/8 hover:text-white">
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className="rounded-full px-2 sm:px-2.5 py-1 font-semibold text-white max-w-[10rem] truncate inline-block align-bottom"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mb-3 sm:mb-4 text-[1.75rem] sm:text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </p>
        )}
        </div>
      </div>
    </section>
  );
}
