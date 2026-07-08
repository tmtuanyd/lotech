"use client";
import { useState } from "react";
import { CheckCircle2, Clock3, Send } from "lucide-react";

type FormData = {
  type: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
};

function Input({
  label,
  required = false,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0D2B5E" }}>
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors"
        style={{ borderColor: "#DCE4F0", color: "#2C3E50" }}
        onFocus={(e) => (e.target.style.borderColor = "#E87722")}
        onBlur={(e) => (e.target.style.borderColor = "#DCE4F0")}
      />
    </div>
  );
}

const inquiryTypes = [
  "Giải pháp thi công",
  "Báo giá thiết bị",
  "Hợp tác phân phối",
  "Khác",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    type: "Giải pháp thi công",
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="text-center py-14">
        <div className="mb-4 flex justify-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full"
            style={{ background: "#ECFDF5", color: "#10B981" }}
          >
            <CheckCircle2 size={34} />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "#0D2B5E" }}>
          Yêu cầu đã được gửi!
        </h3>
        <p style={{ color: "#7B8FA8" }}>
          Chúng tôi sẽ liên hệ lại với bạn trong vòng 2 giờ làm việc.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Type selection */}
      <div>
        <label className="block text-sm font-semibold mb-2" style={{ color: "#0D2B5E" }}>
          Bạn cần tư vấn về?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {inquiryTypes.map((t) => (
            <label
              key={t}
              className="flex items-center gap-2 cursor-pointer p-3 rounded-xl border transition-all select-none min-h-[3rem]"
              style={{
                borderColor: form.type === t ? "#E87722" : "#DCE4F0",
                background: form.type === t ? "#FFF3E8" : "white",
              }}
            >
              <input
                type="radio"
                name="type"
                value={t}
                checked={form.type === t}
                onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                className="hidden"
              />
              <span
                className="text-xs font-semibold"
                style={{ color: form.type === t ? "#E87722" : "#7B8FA8" }}
              >
                {t}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Họ và tên *"
          required
          value={form.name}
          onChange={(v) => setForm((f) => ({ ...f, name: v }))}
          placeholder="Nguyễn Văn A"
        />
        <Input
          label="Công ty"
          value={form.company}
          onChange={(v) => setForm((f) => ({ ...f, company: v }))}
          placeholder="Tên công ty"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Điện thoại *"
          required
          type="tel"
          value={form.phone}
          onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
          placeholder="0945 225 884"
        />
        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => setForm((f) => ({ ...f, email: v }))}
          placeholder="email@company.com"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: "#0D2B5E" }}>
          Nội dung *
        </label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Mô tả nhu cầu hoặc dự án của bạn..."
          rows={4}
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition-colors"
          style={{ borderColor: "#DCE4F0", color: "#2C3E50" }}
          onFocus={(e) => (e.target.style.borderColor = "#E87722")}
          onBlur={(e) => (e.target.style.borderColor = "#DCE4F0")}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90 disabled:opacity-60"
        style={{ background: "#E87722" }}
      >
        {loading ? (
          <span
            className="animate-spin rounded-full border-2 border-white/30 border-t-white"
            style={{ width: 20, height: 20 }}
          />
        ) : (
          <>
            <Send size={16} />
            Gửi Yêu Cầu Ngay
          </>
        )}
      </button>
      <p className="text-xs text-center" style={{ color: "#7B8FA8" }}>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 size={13} />
          Phản hồi trong vòng 2 giờ làm việc
        </span>
      </p>
    </form>
  );
}
