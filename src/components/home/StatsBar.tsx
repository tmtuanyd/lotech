"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Zap, MapPin, ShieldCheck, Headphones } from "lucide-react";

const stats = [
  {
    value: 130,
    suffix: "+",
    label: "Trạm biến áp",
    sub: "110kV – 220kV thi công",
    icon: Zap,
  },
  {
    value: 20,
    suffix: "+",
    label: "Tỉnh thành",
    sub: "Phủ rộng khắp miền Bắc",
    icon: MapPin,
  },
  {
    value: 100,
    suffix: "%",
    label: "Đúng tiến độ",
    sub: "Cam kết bàn giao đúng hạn",
    icon: ShieldCheck,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Hỗ trợ kỹ thuật",
    sub: "Luôn sẵn sàng mọi lúc",
    icon: Headphones,
  },
];

function Counter({
  value,
  suffix,
  started,
}: {
  value: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1E45 0%, #0D2B5E 50%, #1A4490 100%)" }}
    >
      {/* Subtle top line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(232,119,34,0.6)" }} />

      <div className="max-w-7xl mx-auto px-4 py-14 sm:py-16">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 rounded-[28px] p-3 sm:p-4 border"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(6px)",
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="relative flex flex-col items-center text-center px-3 sm:px-6 py-4 sm:py-5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: "rgba(232,119,34,0.18)", border: "1px solid rgba(232,119,34,0.3)" }}
                >
                  <Icon size={18} style={{ color: "#F5A623" }} />
                </div>
                {/* Number */}
                <div className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-none mb-1 tabular-nums">
                  <Counter value={stat.value} suffix={stat.suffix} started={inView} />
                </div>
                {/* Label */}
                <div className="font-bold text-sm text-white mt-1">{stat.label}</div>
                {/* Sub */}
                <div className="text-[11px] sm:text-xs mt-0.5 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
    </section>
  );
}
