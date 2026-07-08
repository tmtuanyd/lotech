import siemensLogo from "@/image/logo/siemens-ag-logo.svg";
import hikvisionLogo from "@/image/logo/hikvision-logo.svg";
import flirLogo from "@/image/logo/flir-systems.svg";
import schneiderLogo from "@/image/logo/schneider-electric.svg";
import abbLogo from "@/image/logo/abb-logo.svg";
import lsLogo from "@/image/logo/Ls.png";
import dahuaLogo from "@/image/logo/dahua.png";
import omronLogo from "@/image/logo/omron-logo.svg";
import mitsubishiLogo from "@/image/logo/mitsubishi-1.svg";
import btbLogo from "@/image/logo/logo-btb-electric.png";

export const COMPANY = {
  name: "LOTEC Việt Nam",
  fullName: "Công ty TNHH Phát Triển LOTEC Việt Nam",
  slogan: "Công nghệ tiên phong – Giá trị trường tồn",
  hotline1: "0945 225 884",
  hotline2: "0847 641 813",
  email1: "lotec.kd@gmail.com",
  email2: "lotec.kd3@gmail.com",
  address1: "50 Tân Thụy – Phúc Lợi – Long Biên – Hà Nội",
  address2: "Số 90, Ngõ 74 Đường Hữu Hưng, Tây Mỗ, Hà Nội",
  website: "www.lotecvietnam.vn",
};

export const SOLUTIONS = [
  {
    id: "camera-ai",
    slug: "camera-ai-an-ninh",
    title: "Camera AI & An Ninh",
    description:
      "Hệ thống giám sát an ninh thông minh 24/7 với công nghệ AI nhận diện người, phát hiện xâm nhập tức thì cho trạm biến áp.",
    icon: "📷",
    color: "#0D2B5E",
    tags: ["AI Camera", "24/7", "Alert"],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    features: ["AI nhận diện đối tượng", "Cảnh báo xâm nhập < 0.5s", "Lưu trữ đám mây", "Quản lý tập trung"],
  },
  {
    id: "giam-sat-nhiet",
    slug: "giam-sat-nhiet",
    title: "Giám Sát Nhiệt",
    description:
      "Phát hiện điểm nóng trên thiết bị điện bằng camera nhiệt hồng ngoại, ngăn ngừa sự cố trước khi xảy ra.",
    icon: "🌡️",
    color: "#1A4490",
    tags: ["Thermal", "Predictive", "IEC"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    features: ["Camera nhiệt FLIR", "Phát hiện điểm nóng", "Báo cáo tự động", "Tích hợp SCADA"],
  },
  {
    id: "hang-rao",
    slug: "bao-ve-hang-rao",
    title: "Bảo Vệ Hàng Rào",
    description:
      "Hệ thống hàng rào điện tử perimeter bảo vệ hành lang trạm điện 110kV–500kV theo tiêu chuẩn EVN/EVNNPT.",
    icon: "🛡️",
    color: "#E87722",
    tags: ["Perimeter", "EVN", "500kV"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    features: ["Hàng rào điện tử", "Cảm biến rung", "Phân vùng độc lập", "IP67"],
  },
  {
    id: "scada-plc",
    slug: "scada-plc-tu-dong-hoa",
    title: "SCADA / PLC Tự Động Hóa",
    description:
      "Hệ thống tự động hóa và giám sát điều khiển xa SCADA/PLC cho trạm biến áp và nhà máy công nghiệp.",
    icon: "⚙️",
    color: "#0D2B5E",
    tags: ["SCADA", "PLC", "IEC 61850"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    features: ["Giao diện HMI", "Điều khiển từ xa", "IEC 61850", "Dự phòng N+1"],
  },
  {
    id: "giam-sat-dc",
    slug: "giam-sat-dc-ac-quy",
    title: "Giám Sát DC & Ắc Quy",
    description:
      "Giám sát liên tục tủ điện một chiều DC và nguồn ắc quy trạm truyền tải đảm bảo vận hành ổn định.",
    icon: "🔋",
    color: "#1A4490",
    tags: ["DC System", "Battery", "VRLA"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    features: ["Đo điện áp/dòng điện", "Cảnh báo ngưỡng", "Lịch sử vận hành", "MODBUS"],
  },
  {
    id: "solar",
    slug: "dien-mat-troi-solar",
    title: "Điện Năng Lượng Mặt Trời",
    description:
      "Thi công lắp đặt hệ thống điện mặt trời áp mái và mặt đất cho công trình dân dụng và công nghiệp.",
    icon: "☀️",
    color: "#F5A623",
    tags: ["Solar", "Inverter", "On-grid"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    features: ["Thiết kế tối ưu", "Inverter Huawei/SMA", "Monitoring online", "Bảo hành 25 năm"],
  },
];

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDocument {
  name: string;
  type: "datasheet" | "manual" | "catalogue" | "certificate";
  size: string;
  url: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  brandLogo?: string;
  code: string;
  price: number | null;
  originalPrice: number | null;
  category: string;
  badge: string | null;
  inStock: boolean;
  deliveryDays?: number;
  warranty: string;
  image: string;
  images: string[];
  shortDesc: string;
  highlights: string[];
  specs: ProductSpec[];
  documents: ProductDocument[];
  relatedIds?: string[];
  tags?: string[];
  origin?: string;
}

export interface ProductCategoryMeta {
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  heroImage: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "camera-ai-ptz",
    slug: "hikvision-ds-2de4a425iwg-e",
    name: "Camera AI PTZ 4MP DS-2DE4A425IWG-E",
    brand: "Hikvision",
    code: "DS-2DE4A425IWG-E",
    price: 4500000,
    originalPrice: 5200000,
    category: "camera",
    badge: "BÁN CHẠY",
    inStock: true,
    deliveryDays: 2,
    warranty: "24 tháng",
    origin: "Trung Quốc",
    shortDesc: "Camera AI PTZ 4MP với khả năng nhận diện người, phương tiện và phát hiện xâm nhập tức thì. Thiết kế IP67 chịu thời tiết khắc nghiệt, phù hợp trạm biến áp 110–500kV.",
    highlights: [
      "Deep learning AI nhận diện người & phương tiện",
      "PTZ quay 360° liên tục, zoom quang học 25x",
      "Phát hiện xâm nhập trong < 0.5 giây",
      "Cảnh báo qua App / SMS / Email tức thì",
      "Chịu nhiệt độ -40°C đến +70°C",
      "Bảo vệ IP67 + IK10, chịu va đập",
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    ],
    specs: [
      { label: "Độ phân giải", value: "4MP (2560×1440)" },
      { label: "Loại cảm biến", value: "1/2.8\" Progressive Scan CMOS" },
      { label: "Quay ngang (Pan)", value: "360° liên tục, 0.1–160°/s" },
      { label: "Nghiêng dọc (Tilt)", value: "-15° ~ +90°, 0.1–120°/s" },
      { label: "Zoom quang học", value: "25x (4.8mm ~ 120mm)" },
      { label: "Tầm hồng ngoại", value: "100m" },
      { label: "AI nhận diện", value: "Người, Phương tiện, Xâm nhập, Vùng ảo" },
      { label: "Nén video", value: "H.265+/H.265/H.264+/H.264" },
      { label: "Cổng kết nối", value: "1x RJ45 100M, 1x RS-485" },
      { label: "Nguồn cấp", value: "24VAC / PoE+ (802.3at)" },
      { label: "Tiêu thụ điện", value: "Max 25W" },
      { label: "Nhiệt độ hoạt động", value: "-40°C ~ +70°C" },
      { label: "Bảo vệ", value: "IP67, IK10" },
      { label: "Trọng lượng", value: "3.15 kg" },
    ],
    documents: [
      { name: "Datasheet DS-2DE4A425IWG-E v2.1", type: "datasheet", size: "2.4 MB", url: "#" },
      { name: "Hướng dẫn lắp đặt nhanh", type: "manual", size: "1.1 MB", url: "#" },
      { name: "Catalogue Camera AI PTZ 2026", type: "catalogue", size: "8.5 MB", url: "#" },
      { name: "Chứng nhận CE / FCC / RoHS", type: "certificate", size: "0.8 MB", url: "#" },
    ],
    tags: ["AI Camera", "PTZ", "IP67", "4MP"],
    relatedIds: ["nvr-dahua", "camera-nhiet-flir", "mccb-ls"],
  },
  {
    id: "camera-nhiet-flir",
    slug: "camera-nhiet-flir-a315",
    name: "Camera Nhiệt FLIR A315 15mm",
    brand: "FLIR",
    code: "FLIR-A315-15MM",
    price: null,
    originalPrice: null,
    category: "camera",
    badge: "LIÊN HỆ",
    inStock: false,
    deliveryDays: 14,
    warranty: "24 tháng",
    origin: "Thụy Điển",
    shortDesc: "Camera nhiệt hồng ngoại FLIR A315 chuyên dụng giám sát nhiệt độ thiết bị điện – máy biến áp, thanh cái, tủ điện. Phát hiện điểm nóng tự động 24/7.",
    highlights: [
      "Độ nhạy nhiệt NETD < 50mK – phát hiện chênh lệch 0.05°C",
      "Giải thuật phát hiện điểm nóng tự động",
      "Cảnh báo khi vượt ngưỡng nhiệt độ định trước",
      "Tích hợp giao thức MODBUS/TCP dễ kết nối SCADA",
      "Kết xuất báo cáo nhiệt tự động (PDF/CSV)",
      "Tiêu chuẩn IP54, hoạt động trong môi trường công nghiệp",
    ],
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    ],
    specs: [
      { label: "Ma trận cảm biến", value: "320×240 pixel" },
      { label: "Tầm đo nhiệt độ", value: "-20°C ~ +350°C" },
      { label: "Độ chính xác", value: "±2°C hoặc ±2%" },
      { label: "Độ nhạy nhiệt (NETD)", value: "< 50mK tại 30°C" },
      { label: "Tiêu cự lens", value: "15mm (FOV 25°×19°)" },
      { label: "Cổng kết nối", value: "Gigabit Ethernet, RS-232, I/O" },
      { label: "Giao thức", value: "MODBUS TCP, FLIR ATLAS SDK" },
      { label: "Nguồn cấp", value: "PoE (802.3af) hoặc 12–24VDC" },
      { label: "Nhiệt độ hoạt động", value: "-15°C ~ +50°C" },
      { label: "Bảo vệ", value: "IP54" },
      { label: "Kích thước", value: "68×68×85mm" },
    ],
    documents: [
      { name: "Datasheet FLIR A315 Series", type: "datasheet", size: "3.1 MB", url: "#" },
      { name: "User Manual FLIR A310/A315/A325", type: "manual", size: "5.2 MB", url: "#" },
      { name: "Software Integration Guide", type: "manual", size: "2.8 MB", url: "#" },
      { name: "Catalogue FLIR Thermal 2026", type: "catalogue", size: "12 MB", url: "#" },
    ],
    tags: ["Thermal", "FLIR", "MODBUS", "IP54"],
    relatedIds: ["camera-ai-ptz", "nvr-dahua", "plc-siemens"],
  },
  {
    id: "nvr-dahua",
    slug: "nvr-dahua-4k-16ch",
    name: "NVR Dahua 4K 16 kênh H.265+",
    brand: "Dahua",
    code: "NVR4216-EI",
    price: 6200000,
    originalPrice: 7500000,
    category: "camera",
    badge: "GIẢM 17%",
    inStock: true,
    deliveryDays: 3,
    warranty: "24 tháng",
    origin: "Trung Quốc",
    shortDesc: "Đầu ghi NVR Dahua 16 kênh, hỗ trợ camera AI, phân giải 4K, nén H.265+ tiết kiệm dung lượng 75% so với H.264. Lưu trữ lên đến 2×8TB.",
    highlights: [
      "Hỗ trợ 16 kênh camera IP tới 8MP (4K)",
      "AI tích hợp: SMD Plus, Face Detection, ANPR",
      "Nén H.265+ tiết kiệm 75% dung lượng so với H.264",
      "2 khe HDD SATA, hỗ trợ tới 2×8TB",
      "Xuất HDMI 4K + VGA đồng thời",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    ],
    specs: [
      { label: "Số kênh", value: "16 kênh IP" },
      { label: "Độ phân giải ghi", value: "Lên tới 8MP (4K)" },
      { label: "Tốc độ ghi", value: "160Mbps tổng" },
      { label: "Nén video", value: "H.265+/H.265/H.264+/H.264" },
      { label: "HDD", value: "2 khe SATA, tối đa 2×8TB" },
      { label: "Xuất hình ảnh", value: "1x HDMI (4K), 1x VGA" },
      { label: "Cổng mạng", value: "1x 1000M RJ45" },
      { label: "Cổng USB", value: "2x USB 3.0" },
      { label: "Nguồn", value: "12V DC, 5A" },
      { label: "Nhiệt độ", value: "-10°C ~ +55°C" },
      { label: "Kích thước", value: "375×290×52mm (1U)" },
    ],
    documents: [
      { name: "Datasheet NVR4216-EI", type: "datasheet", size: "1.8 MB", url: "#" },
      { name: "Quick Start Guide", type: "manual", size: "2.1 MB", url: "#" },
      { name: "Catalogue Dahua NVR 2026", type: "catalogue", size: "9.3 MB", url: "#" },
    ],
    tags: ["NVR", "4K", "H.265+", "AI"],
    relatedIds: ["camera-ai-ptz", "camera-nhiet-flir"],
  },
  {
    id: "mccb-ls",
    slug: "mccb-ls-abn103c",
    name: "MCCB LS ABN103c 100A 3P 18kA",
    brand: "LS Electric",
    code: "ABN103c",
    price: 850000,
    originalPrice: null,
    category: "thiet-bi-dien",
    badge: null,
    inStock: true,
    deliveryDays: 1,
    warranty: "12 tháng",
    origin: "Hàn Quốc",
    shortDesc: "Cầu dao tự động khối (MCCB) LS ABN103c 3 cực 100A, khả năng cắt ngắn mạch 18kA. Tiêu chuẩn IEC 60947-2, phù hợp tủ điện phân phối công nghiệp.",
    highlights: [
      "Dòng định mức 100A, điều chỉnh 50–100A",
      "Khả năng cắt ngắn mạch Icu = 18kA @ 380V",
      "Tiêu chuẩn IEC 60947-2, chứng nhận CB, CE",
      "Bảo vệ quá tải, ngắn mạch tích hợp",
      "Lắp DIN rail hoặc cố định, phụ kiện đa dạng",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    ],
    specs: [
      { label: "Dòng định mức (In)", value: "100A (điều chỉnh 50–100A)" },
      { label: "Số cực", value: "3P" },
      { label: "Điện áp định mức (Ue)", value: "380/415V AC" },
      { label: "Cắt ngắn mạch (Icu)", value: "18kA @ 380V" },
      { label: "Cắt giới hạn (Ics)", value: "100% Icu" },
      { label: "Bảo vệ", value: "Quá tải + Ngắn mạch (Thermal-Magnetic)" },
      { label: "Tiêu chuẩn", value: "IEC 60947-2" },
      { label: "Chứng nhận", value: "CB, CE, UL" },
      { label: "Phương thức lắp đặt", value: "DIN rail / Fixed" },
      { label: "Nhiệt độ hoạt động", value: "-25°C ~ +70°C" },
      { label: "Kích thước (W×H×D)", value: "75×126×66mm" },
    ],
    documents: [
      { name: "Catalogue MCCB LS ABN Series", type: "catalogue", size: "4.2 MB", url: "#" },
      { name: "Technical Data ABN103c", type: "datasheet", size: "1.5 MB", url: "#" },
      { name: "Certificate IEC 60947-2", type: "certificate", size: "0.6 MB", url: "#" },
    ],
    tags: ["MCCB", "100A", "3P", "IEC"],
    relatedIds: ["plc-siemens", "bien-tan-schneider", "abb-acb"],
  },
  {
    id: "plc-siemens",
    slug: "plc-siemens-s7-1200",
    name: "PLC Siemens S7-1200 CPU 1214C DC/DC/DC",
    brand: "Siemens",
    code: "6ES7214-1AG40-0XB0",
    price: 12800000,
    originalPrice: 15000000,
    category: "thiet-bi-dien",
    badge: "MỚI",
    inStock: true,
    deliveryDays: 5,
    warranty: "36 tháng",
    origin: "Đức",
    shortDesc: "PLC Siemens SIMATIC S7-1200 CPU 1214C – dòng PLC compact hiệu năng cao cho tự động hóa trạm biến áp và công nghiệp. Hỗ trợ PROFINET, lập trình TIA Portal.",
    highlights: [
      "CPU 1214C: 14 DI + 10 DO + 2 AI tích hợp",
      "Kết nối PROFINET tốc độ cao",
      "Lập trình TIA Portal v17+, hỗ trợ LAD/FBD/SCL",
      "Tích hợp Web Server và OPC UA server",
      "Mở rộng linh hoạt tới 8 Signal Boards + 8 Signal Modules",
      "Bộ nhớ 100KB work memory, 4MB load memory",
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    ],
    specs: [
      { label: "CPU", value: "1214C DC/DC/DC" },
      { label: "Nguồn cấp", value: "24 VDC" },
      { label: "Digital Input", value: "14 DI × 24VDC" },
      { label: "Digital Output", value: "10 DO × 24VDC (0.5A/ch)" },
      { label: "Analog Input", value: "2 AI (0–10V / 0–20mA)" },
      { label: "Work Memory", value: "100KB" },
      { label: "Load Memory", value: "4MB (tích hợp)" },
      { label: "Giao thức", value: "PROFINET, Modbus TCP/RTU, OPC UA" },
      { label: "Phần mềm lập trình", value: "TIA Portal V17+" },
      { label: "Thời gian thực thi bit", value: "0.08µs/lệnh" },
      { label: "Nhiệt độ hoạt động", value: "0°C ~ +55°C" },
      { label: "Bảo vệ", value: "IP20" },
      { label: "Kích thước (W×H×D)", value: "110×100×75mm" },
    ],
    documents: [
      { name: "Datasheet S7-1200 CPU 1214C", type: "datasheet", size: "3.8 MB", url: "#" },
      { name: "Getting Started S7-1200", type: "manual", size: "6.2 MB", url: "#" },
      { name: "System Manual SIMATIC S7-1200", type: "manual", size: "18.5 MB", url: "#" },
      { name: "Catalogue SIMATIC S7-1200 2026", type: "catalogue", size: "11 MB", url: "#" },
      { name: "CE Declaration of Conformity", type: "certificate", size: "0.5 MB", url: "#" },
    ],
    tags: ["PLC", "PROFINET", "IEC 61131-3", "TIA Portal"],
    relatedIds: ["bien-tan-schneider", "camera-nhiet-flir", "abb-acb"],
  },
  {
    id: "bien-tan-schneider",
    slug: "bien-tan-schneider-atv320",
    name: "Biến Tần Schneider ATV320 7.5kW 380V 3P",
    brand: "Schneider Electric",
    code: "ATV320U75N4B",
    price: 8900000,
    originalPrice: null,
    category: "thiet-bi-dien",
    badge: null,
    inStock: true,
    deliveryDays: 7,
    warranty: "18 tháng",
    origin: "Pháp",
    shortDesc: "Biến tần Schneider Altivar ATV320 7.5kW 3 pha 380V – điều khiển tốc độ động cơ, tích hợp an toàn STO, PLC on-board, kết nối Modbus/CANopen.",
    highlights: [
      "Công suất 7.5kW (10HP), 380–500VAC 3P",
      "Tích hợp an toàn STO – Cat.3 PL d",
      "PLC on-board: logic đơn giản không cần PLC ngoài",
      "Kết nối Modbus RTU / CANopen / EtherNet/IP",
      "Màn hình LED 4 chữ số, điều chỉnh dễ dàng",
    ],
    image: "https://images.unsplash.com/photo-1593640408182-31c228ceedfe?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c228ceedfe?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    ],
    specs: [
      { label: "Công suất", value: "7.5kW (10HP)" },
      { label: "Điện áp vào", value: "380–500VAC, 3 pha ±15%" },
      { label: "Dòng ra định mức", value: "17A" },
      { label: "Tần số ra", value: "0.5–500Hz" },
      { label: "Moment khởi động", value: "200% tại 0.5Hz" },
      { label: "An toàn", value: "STO – Cat.3, PL d (IEC 62061)" },
      { label: "Giao thức", value: "Modbus RTU, CANopen" },
      { label: "Bảo vệ", value: "IP21" },
      { label: "Nhiệt độ hoạt động", value: "-10°C ~ +50°C" },
      { label: "Tiêu chuẩn", value: "IEC/EN 61800-5-1, UL, CE" },
      { label: "Kích thước (W×H×D)", value: "72×169×141mm" },
    ],
    documents: [
      { name: "Datasheet ATV320 7.5kW", type: "datasheet", size: "2.6 MB", url: "#" },
      { name: "Installation Manual ATV320", type: "manual", size: "8.4 MB", url: "#" },
      { name: "Programming Guide ATV320", type: "manual", size: "12 MB", url: "#" },
      { name: "Catalogue Altivar Machine 2026", type: "catalogue", size: "15 MB", url: "#" },
    ],
    tags: ["Biến tần", "7.5kW", "STO", "Modbus"],
    relatedIds: ["plc-siemens", "mccb-ls", "abb-acb"],
  },
  {
    id: "abb-acb",
    slug: "abb-acb-e2n-1600",
    name: "ACB ABB Emax2 E2N 1600A 3P 65kA",
    brand: "ABB",
    code: "1SDA055912R1",
    price: null,
    originalPrice: null,
    category: "thiet-bi-dien",
    badge: "LIÊN HỆ",
    inStock: false,
    deliveryDays: 21,
    warranty: "24 tháng",
    origin: "Ý",
    shortDesc: "Máy cắt không khí (ACB) ABB Emax2 E2N 1600A 3P, dung lượng cắt 65kA. Bảo vệ Ekip Touch tích hợp, kết nối Modbus/IEC 61850, dành cho tủ phân phối trung/hạ thế.",
    highlights: [
      "Dòng định mức 1600A, cắt ngắn mạch 65kA",
      "Bộ bảo vệ Ekip Touch với màn hình cảm ứng",
      "Giao tiếp Modbus RTU / PROFIBUS / IEC 61850",
      "Đo lường tích hợp: dòng, áp, công suất, điện năng",
      "Kết nối cloud ABB Ability™ quản lý từ xa",
    ],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    ],
    specs: [
      { label: "Dòng định mức (In)", value: "1600A" },
      { label: "Số cực", value: "3P" },
      { label: "Điện áp định mức (Ue)", value: "690V AC" },
      { label: "Cắt ngắn mạch (Icu)", value: "65kA @ 415V" },
      { label: "Cắt đỉnh (Icm)", value: "143kA" },
      { label: "Bộ bảo vệ", value: "Ekip Touch LSI" },
      { label: "Giao thức", value: "Modbus RTU, PROFIBUS DP, IEC 61850" },
      { label: "Đo lường tích hợp", value: "I, U, P, Q, S, PF, kWh" },
      { label: "Tiêu chuẩn", value: "IEC 60947-2" },
      { label: "Chứng nhận", value: "CB, CE, UL, CCC" },
      { label: "Nhiệt độ hoạt động", value: "-25°C ~ +70°C" },
    ],
    documents: [
      { name: "Datasheet Emax2 E2N 1600A", type: "datasheet", size: "4.1 MB", url: "#" },
      { name: "Installation Manual Emax2", type: "manual", size: "10.2 MB", url: "#" },
      { name: "Ekip Touch User Manual", type: "manual", size: "7.8 MB", url: "#" },
      { name: "Catalogue Emax2 2026", type: "catalogue", size: "18 MB", url: "#" },
      { name: "IEC 60947-2 Certificate", type: "certificate", size: "0.9 MB", url: "#" },
    ],
    tags: ["ACB", "1600A", "IEC 61850", "Modbus"],
    relatedIds: ["mccb-ls", "plc-siemens", "bien-tan-schneider"],
  },
  {
    id: "relay-omron",
    slug: "relay-omron-g2r-2",
    name: "Relay Trung Gian Omron G2R-2 24VDC DPDT",
    brand: "Omron",
    code: "G2R-2-24VDC",
    price: 45000,
    originalPrice: null,
    category: "thiet-bi-dien",
    badge: null,
    inStock: true,
    deliveryDays: 1,
    warranty: "12 tháng",
    origin: "Nhật Bản",
    shortDesc: "Relay trung gian Omron G2R-2 cuộn hút 24VDC, 2 tiếp điểm đổi chiều (DPDT). Thiết kế compact, tuổi thọ cơ học 10 triệu lần, phù hợp tủ điều khiển công nghiệp.",
    highlights: [
      "Cuộn hút 24VDC, tiêu thụ ~200mW",
      "2 tiếp điểm DPDT (2C) – 10A/250VAC",
      "Tuổi thọ cơ học: 10 triệu lần",
      "Tuổi thọ điện: 100.000 lần @ 10A/250VAC",
      "Lắp socket MY2 tiêu chuẩn, dễ thay thế",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    ],
    specs: [
      { label: "Cuộn hút (Coil)", value: "24 VDC" },
      { label: "Tiêu thụ cuộn", value: "200mW" },
      { label: "Tiếp điểm", value: "2C (DPDT)" },
      { label: "Dòng tiếp điểm", value: "10A" },
      { label: "Điện áp tiếp điểm", value: "250VAC / 30VDC" },
      { label: "Tuổi thọ cơ học", value: "10 triệu lần" },
      { label: "Tuổi thọ điện", value: "100.000 lần @ 10A/250VAC" },
      { label: "Nhiệt độ hoạt động", value: "-40°C ~ +70°C" },
      { label: "Socket phù hợp", value: "MY2, PTF08A" },
    ],
    documents: [
      { name: "Datasheet Relay G2R Series", type: "datasheet", size: "1.2 MB", url: "#" },
      { name: "Catalogue Omron Relay 2026", type: "catalogue", size: "6.8 MB", url: "#" },
    ],
    tags: ["Relay", "24VDC", "DPDT", "Omron"],
    relatedIds: ["plc-siemens", "mccb-ls", "bien-tan-schneider"],
  },
];

export const PRODUCT_CATEGORIES: ProductCategoryMeta[] = [
  {
    slug: "camera",
    label: "Camera & An Ninh",
    shortLabel: "Camera",
    description: "Camera AI, PTZ, camera nhiệt và đầu ghi cho trạm biến áp, nhà máy và hệ thống giám sát tập trung.",
    heroImage: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1600&q=80",
  },
  {
    slug: "thiet-bi-dien",
    label: "Thiết Bị Điện Hạ Thế",
    shortLabel: "Thiết bị điện",
    description: "MCCB, ACB, relay, PLC, biến tần và thiết bị điều khiển chính hãng cho tủ điện và dây chuyền công nghiệp.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
  },
  {
    slug: "may-bien-ap",
    label: "Máy Biến Áp",
    shortLabel: "Máy biến áp",
    description: "Máy biến áp dầu, máy biến áp khô và thiết bị phụ trợ cho trạm điện và công trình công nghiệp.",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80",
  },
  {
    slug: "tu-dien",
    label: "Tủ Điện & Phụ Kiện",
    shortLabel: "Tủ điện",
    description: "Tủ phân phối, tủ điều khiển, vỏ tủ và phụ kiện hoàn thiện cho hệ thống điện công nghiệp.",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80",
  },
  {
    slug: "phu-kien",
    label: "Phụ Kiện",
    shortLabel: "Phụ kiện",
    description: "Phụ kiện lắp đặt, relay, terminal, vật tư phụ trợ và linh kiện tiêu chuẩn cho hệ thống điện.",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&q=80",
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string) {
  return PRODUCTS.filter((product) => product.category === category);
}

export function getProductCategoryMeta(category: string) {
  return PRODUCT_CATEGORIES.find((item) => item.slug === category);
}

export function getRelatedProducts(product: Product) {
  const ids = new Set(product.relatedIds ?? []);
  return PRODUCTS.filter((item) => ids.has(item.id));
}

export const PROJECTS = [
  {
    id: 1,
    slug: "tba-220kv-phu-binh",
    title: "TBA 220kV Phú Bình",
    location: "Thái Nguyên",
    category: "220kV",
    client: "EVNNPT",
    year: 2025,
    tags: ["Camera AI", "Camera Nhiệt", "Hàng Rào"],
    image: "https://images.unsplash.com/photo-1487875961445-47a00398c267?w=800&q=80",
    description: "Thi công hệ thống an ninh tổng thể cho trạm biến áp 220kV Phú Bình bao gồm 48 camera AI, hệ thống giám sát nhiệt và hàng rào điện tử.",
  },
  {
    id: 2,
    slug: "tba-220kv-tuong-duong",
    title: "TBA 220kV Tương Dương",
    location: "Nghệ An",
    category: "220kV",
    client: "EVNNPT",
    year: 2025,
    tags: ["Camera AI", "Camera Nhiệt"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    description: "Lắp đặt hệ thống camera AI và giám sát nhiệt cho trạm biến áp 220kV vùng miền núi phía Tây Nghệ An.",
  },
  {
    id: 3,
    slug: "tba-220kv-gia-loc",
    title: "TBA 220kV Gia Lộc",
    location: "Hải Dương",
    category: "220kV",
    client: "EVNNPT",
    year: 2024,
    tags: ["Camera AI", "Hàng Rào"],
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    description: "Hệ thống an ninh tích hợp camera AI và hàng rào perimeter cho TBA 220kV khu vực đồng bằng sông Hồng.",
  },
  {
    id: 4,
    slug: "tba-110kv-dien-bien",
    title: "TBA 110kV Điện Biên",
    location: "Điện Biên",
    category: "110kV",
    client: "EVNNPC",
    year: 2024,
    tags: ["SCADA", "Camera AI"],
    image: "https://images.unsplash.com/photo-1487875961445-47a00398c267?w=800&q=80",
    description: "Tích hợp hệ thống SCADA và camera AI cho trạm 110kV vùng Tây Bắc.",
  },
  {
    id: 5,
    slug: "solar-20mw-ha-tinh",
    title: "Điện Mặt Trời 20MW",
    location: "Hà Tĩnh",
    category: "Solar",
    client: "Tập đoàn TH",
    year: 2024,
    tags: ["Solar", "Inverter", "Monitoring"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    description: "Thi công hệ thống điện mặt trời mặt đất 20MWp tích hợp hệ thống monitoring từ xa.",
  },
  {
    id: 6,
    slug: "tba-110kv-thanh-hoa",
    title: "TBA 110kV Thanh Hóa",
    location: "Thanh Hóa",
    category: "110kV",
    client: "EVNNPC",
    year: 2023,
    tags: ["DC System", "Camera AI"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    description: "Hệ thống giám sát ắc quy DC và camera an ninh cho chuỗi trạm 110kV tỉnh Thanh Hóa.",
  },
];

export const NEWS = [
  {
    id: 1,
    slug: "lotec-hoan-thanh-tba-220kv-phu-binh",
    title: "LOTEC hoàn thành thi công TBA 220kV Phú Bình đúng tiến độ",
    excerpt: "Đội ngũ kỹ sư LOTEC đã hoàn thành việc lắp đặt hệ thống an ninh tổng thể cho Trạm biến áp 220kV Phú Bình – Thái Nguyên chỉ trong 90 ngày.",
    category: "Dự Án",
    date: "28/06/2026",
    image: "https://images.unsplash.com/photo-1487875961445-47a00398c267?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    slug: "giai-phap-camera-nhiet-tba",
    title: "Ứng dụng camera nhiệt trong phòng ngừa sự cố thiết bị điện",
    excerpt: "Công nghệ giám sát nhiệt hồng ngoại đang trở thành giải pháp không thể thiếu trong vận hành trạm biến áp hiện đại.",
    category: "Kiến Thức",
    date: "15/06/2026",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    slug: "lotec-trien-khai-solar-ha-tinh",
    title: "LOTEC triển khai dự án điện mặt trời 20MW tại Hà Tĩnh",
    excerpt: "Dự án điện mặt trời mặt đất đầu tiên của LOTEC với quy mô 20MWp, tích hợp hệ thống monitoring thông minh.",
    category: "Dự Án",
    date: "01/06/2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    featured: false,
  },
];

export const PARTNERS = [
  { name: "Siemens", logo: "SIEMENS", logoUrl: siemensLogo.src, logoHeight: 34 },
  { name: "Hikvision", logo: "Hikvision", logoUrl: hikvisionLogo.src, logoHeight: 32 },
  { name: "FLIR", logo: "FLIR", logoUrl: flirLogo.src, logoHeight: 36 },
  { name: "Schneider Electric", logo: "Schneider", logoUrl: schneiderLogo.src, logoHeight: 38 },
  { name: "ABB", logo: "ABB", logoUrl: abbLogo.src, logoHeight: 38 },
  { name: "LS Electric", logo: "LS Electric", logoUrl: lsLogo.src, logoHeight: 36 },
  { name: "Dahua", logo: "Dahua", logoUrl: dahuaLogo.src, logoHeight: 32 },
  { name: "Omron", logo: "OMRON", logoUrl: omronLogo.src, logoHeight: 32 },
  { name: "Mitsubishi", logo: "Mitsubishi", logoUrl: mitsubishiLogo.src, logoHeight: 36 },
  { name: "BTB Electric", logo: "BTB Electric", logoUrl: btbLogo.src, logoHeight: 38 },
];

export const STATS = [
  { value: 130, suffix: "+", label: "Trạm 110–220kV", icon: "⚡" },
  { value: 20, suffix: "+", label: "Tỉnh thành", icon: "📍" },
  { value: 100, suffix: "%", label: "Đúng tiến độ", icon: "✅" },
  { value: 24, suffix: "/7", label: "Hỗ trợ kỹ thuật", icon: "🕐" },
];
