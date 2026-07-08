import { PARTNERS } from "@/data";

export default function PartnersScroll() {
  const partners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-14 bg-white border-t border-b" style={{ borderColor: "#DCE4F0" }}>
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#7B8FA8" }}>
          Hợp tác với các thương hiệu hàng đầu thế giới
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex marquee-track gap-5">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="group flex-shrink-0 rounded-2xl border bg-white px-3 py-2 flex items-center justify-center transition-all"
              style={{ borderColor: "#DCE4F0", minWidth: "196px", height: "72px" }}
            >
              {partner.logoUrl ? (
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-full max-w-full w-auto object-contain opacity-95 transition-all group-hover:opacity-100"
                  style={{ height: partner.logoHeight ? `${partner.logoHeight + 8}px` : "38px" }}
                />
              ) : (
                <span
                  className="font-bold text-sm whitespace-nowrap transition-colors"
                  style={{ color: "#7B8FA8" }}
                >
                  {partner.logo}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
