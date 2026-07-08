# Kế Hoạch Xây Dựng Website – LOTEC Việt Nam

> **Phiên bản:** 1.0  
> **Ngày tạo:** 01/07/2026  
> **Người lập:** *(Điền tên)*  
> **Trạng thái:** Đang lên kế hoạch

---

## Mục Lục

1. [Tổng quan dự án](#1-tổng-quan-dự-án)
2. [Phân tích đối tượng khách hàng](#2-phân-tích-đối-tượng-khách-hàng)
3. [Phân tích website tham khảo](#3-phân-tích-website-tham-khảo)
4. [Cấu trúc website (Sitemap)](#4-cấu-trúc-website-sitemap)
5. [Thiết kế từng trang](#5-thiết-kế-từng-trang)
6. [Nhận diện thương hiệu & UI](#6-nhận-diện-thương-hiệu--ui)
7. [Tính năng cần có](#7-tính-năng-cần-có)
8. [Công nghệ đề xuất](#8-công-nghệ-đề-xuất)
9. [Kế hoạch triển khai](#9-kế-hoạch-triển-khai)
10. [Nội dung cần chuẩn bị](#10-nội-dung-cần-chuẩn-bị)
11. [Website quốc tế tham khảo giao diện](#11-website-quốc-tế-tham-khảo-giao-diện)
12. [Cấu trúc dự án Next.js](#12-cấu-trúc-dự-án-nextjs)
13. [Hình thức thanh toán](#13-hình-thức-thanh-toán)

---

## 1. Tổng Quan Dự Án

### Mục tiêu

Website LOTEC Việt Nam cần phục vụ **2 mảng kinh doanh** trên cùng một domain:

| | Mảng Thi Công | Mảng Phân Phối / Bán Lẻ |
|---|---|---|
| **Mục tiêu** | Thuyết phục năng lực, tạo dựng uy tín | Tra cứu sản phẩm, báo giá, đặt hàng |
| **Khách hàng** | Chủ đầu tư, EVN/EVNNPT, ban quản lý dự án | Kỹ sư thiết kế, nhà thầu điện, đại lý |
| **Hành động mong muốn** | Gọi điện tư vấn, gửi hồ sơ, yêu cầu khảo sát | Xem giá, tải datasheet, đặt hàng/báo giá |
| **Tham khảo** | AIT Corp, HAECO | Etinco, HopLong Tech |

### Thông tin công ty

- **Tên:** Công ty TNHH Phát Triển LOTEC Việt Nam
- **Slogan:** *"Công nghệ tiên phong – Giá trị trường tồn"*
- **Phương châm:** An toàn – Tin cậy – Đổi Mới – Phát Triển Bền Vững
- **Trụ sở:** Số 90, Ngõ 74 Đường Hữu Hưng, TDP Ngang, Tây Mỗ, Hà Nội
- **Văn phòng:** 50 Tân Thụy – Phúc Lợi – Long Biên – Hà Nội
- **Hotline:** 0945 225 884 / 0847 641 813
- **Email:** lotec.kd@gmail.com / lotec.kd3@gmail.com
- **Điểm mạnh:** 130+ trạm biến áp 110kV–220kV, 20+ tỉnh thành, 100% đúng tiến độ

---

## 2. Phân Tích Đối Tượng Khách Hàng

### 2.1 Nhóm khách hàng thi công (B2B – Dự án lớn)

| Tiêu chí | Chi tiết |
|---|---|
| **Đối tượng** | Kỹ sư trưởng, Trưởng ban QLDA, Lãnh đạo EVN/EVNNPT |
| **Cách tìm** | Google tên giải pháp, được giới thiệu, hội thảo ngành |
| **Nhu cầu** | Xem năng lực, dự án thực tế, chứng chỉ, quy trình thi công |
| **Lo ngại** | Tiến độ, chất lượng thiết bị, hậu mãi sau bàn giao |
| **CTA phù hợp** | "Tải hồ sơ năng lực", "Yêu cầu tư vấn", "Xem dự án đã triển khai" |

### 2.2 Nhóm khách hàng phân phối / bán lẻ (B2B – Nhỏ lẻ)

| Tiêu chí | Chi tiết |
|---|---|
| **Đối tượng** | Kỹ sư thiết kế, nhà thầu điện nhỏ, đại lý thiết bị |
| **Cách tìm** | Google tên thiết bị + giá, Zalo nhóm kỹ thuật |
| **Nhu cầu** | Giá rõ ràng, datasheet, thời gian giao hàng, hàng chính hãng |
| **Lo ngại** | Hàng giả, chờ báo giá lâu, không có tồn kho |
| **CTA phù hợp** | "Xem giá", "Báo giá nhanh", "Tải bảng giá PDF", "Chat Zalo" |

---

## 3. Phân Tích Website Tham Khảo

### 3.1 AIT Corp (aitcorp.com.vn) – Học phần Thi Công

**Điểm mạnh cần học:**
- ✅ Header sticky với mega menu rõ ràng theo lĩnh vực
- ✅ Số liệu ấn tượng nổi bật ngay trang chủ (doanh thu, năm kinh nghiệm, số dự án)
- ✅ Section "Lĩnh vực hoạt động" dạng card có ảnh + mô tả
- ✅ Bản đồ nhà phân phối thiết bị theo quốc gia rất chuyên nghiệp
- ✅ Dự án chia theo category: Năng lượng tái tạo / Truyền thống / Công nghiệp
- ✅ Tông màu xanh navy + trắng = uy tín, chuyên nghiệp

**Có thể cải thiện hơn:**
- ⚡ Load nhanh hơn (ảnh tối ưu hơn)
- ⚡ Mobile UX cần mượt mà hơn

### 3.2 HAECO (haeco.com.vn) – Học phần Sản Phẩm + Thi Công

**Điểm mạnh cần học:**
- ✅ Kết hợp cả thi công + phân phối sản phẩm trên cùng 1 site
- ✅ Menu "Sản phẩm" và "Lĩnh vực hoạt động" tách biệt rõ ràng
- ✅ Section chứng chỉ đối tác (Schneider, LS Electric...) tạo tin cậy
- ✅ Slider dự án tiêu biểu có ảnh thực tế đẹp
- ✅ Footer đầy đủ thông tin liên hệ

### 3.3 Etinco (etinco.vn) – Học phần Phân Phối Bán Lẻ

**Điểm mạnh cần học:**
- ✅ Hero rõ ràng: "Nhà nhập khẩu & phân phối – Tiên phong trải nghiệm khách hàng"
- ✅ Sản phẩm nhóm theo hãng (LS Electric, Cadisun, BTB...) rất trực quan
- ✅ Có giá niêm yết rõ ràng, có giá gốc bị gạch → thuyết phục
- ✅ Testimonial khách hàng thực tế với ảnh + chức danh
- ✅ Section "Vì sao chọn Etinco" với icon đẹp
- ✅ Footer có đầy đủ chính sách (bảo hành, đổi trả, vận chuyển)

### 3.4 HopLong Tech (hoplongtech.com) – Học phần Danh Mục Sản Phẩm

**Điểm mạnh cần học:**
- ✅ Danh mục sản phẩm cây (sidebar) rất chi tiết và dễ lọc
- ✅ "Yêu cầu báo giá" với form nhập nhiều sản phẩm cùng lúc
- ✅ Tìm kiếm sản phẩm theo mã hàng
- ✅ Trang danh mục phụ kiện tủ điện rất đầy đủ

---

## 4. Cấu Trúc Website (Sitemap)

```
lotecvietnam.vn
│
├── 🏠 Trang Chủ
│
├── 🏢 Về Chúng Tôi
│   ├── Giới thiệu công ty
│   ├── Tầm nhìn & Sứ mệnh
│   ├── Đội ngũ kỹ sư
│   ├── Năng lực & Chứng chỉ (EVN, EVNNPT, IEC, TCVN)
│   └── Tuyển dụng
│
├── 🔧 Giải Pháp Thi Công
│   ├── Camera AI & Giám sát an ninh
│   ├── Giám sát nhiệt thiết bị điện
│   ├── Bảo vệ hàng rào & hành lang trạm điện
│   ├── Tự động hóa & SCADA/PLC
│   ├── Giám sát tủ điện một chiều (DC)
│   ├── Giám sát nguồn ắc quy trạm truyền tải
│   └── Điện năng lượng mặt trời (Solar)
│
├── 🛒 Phân Phối Thiết Bị
│   ├── Camera & Thiết bị an ninh
│   │   ├── Camera AI PTZ
│   │   ├── Camera nhiệt (Thermal)
│   │   └── Đầu ghi & Phụ kiện
│   ├── Thiết bị điện hạ thế
│   │   ├── CB, MCCB, ACB
│   │   ├── Biến tần, Khởi động mềm
│   │   └── Relay, Timer, Contactor
│   ├── Máy biến áp
│   │   ├── MBA dầu 22/0.4kV – 35/110kV
│   │   └── MBA khô Amorphous
│   ├── Tủ điện & Phụ kiện
│   │   ├── Tủ trung thế RMU/MV Switchgear
│   │   ├── Tủ phân phối MDB/MSB
│   │   └── Phụ kiện tủ điện
│   └── Phần mềm giám sát
│       ├── SCADA/EMS bản quyền
│       └── Phần mềm giám sát nhiệt
│
├── 📁 Dự Án Tiêu Biểu
│   ├── [Lọc theo] Tất cả / 220kV / 110kV / Tự động hóa / Solar
│   └── Chi tiết từng dự án
│
├── 📰 Tin Tức & Kiến Thức
│   ├── Tin tức công ty
│   ├── Dự án mới hoàn thành
│   └── Kiến thức kỹ thuật
│
└── 📞 Liên Hệ & Báo Giá
    ├── Form liên hệ thi công
    ├── Form báo giá thiết bị
    └── Bản đồ văn phòng
```

---

## 5. Thiết Kế Từng Trang

> **Cách đọc tài liệu này:** Mỗi trang có 3 phần:
> 1. 🌐 **Tham khảo** – URL website nước ngoài có giao diện tương tự, mở ra xem trực tiếp
> 2. 📐 **Wireframe** – Khung bố cục từng section bằng ASCII
> 3. 💡 **Ghi chú thiết kế** – Màu sắc, font, chi tiết cần lưu ý

---

### 5.1 Trang Chủ (Homepage)

> Đây là trang quan trọng nhất – cần dẫn dắt được cả 2 nhóm khách hàng ngay lần đầu truy cập.

#### 🌐 Tham khảo giao diện

| Phần trang | Website tham khảo | URL | Học gì |
|---|---|---|---|
| Tổng thể layout + màu navy/cam | **Prysmian Group** | prysmian.com | Bố cục section, tông màu gần LOTEC nhất |
| Hero slider + overlay gradient | **Wärtsilä** | wartsila.com | Hero full-screen, typography mỏng nhẹ |
| Chia 2 mảng (thi công / phân phối) | **Hitachi Energy** | hitachienergy.com | Split card 2 hướng, hover effect |
| Stats bar (số liệu nổi bật) | **SPIE Group** | spie.com/en | Counter animation khi scroll |
| Section giải pháp grid | **Schneider Electric** | se.com/vn/vi | Card giải pháp theo ngành, icon đẹp |
| Banner đối tác chạy ngang | **Phoenix Contact** | phoenixcontact.com | Logo scroll mượt |
| CTA band cuối trang | **Bouygues Energies** | bouygues-es.com | Gradient đậm + hotline to |

---

#### 📐 Wireframe – Desktop (1440px)

```
╔══════════════════════════════════════════════════════════════════════╗
║  TOP BAR  (nền #0D2B5E, chữ trắng mờ, cao 36px)                    ║
║  📍 50 Tân Thụy, Long Biên, HN    │  📞 0945 225 884 │ 🕐 24/7     ║
╠══════════════════════════════════════════════════════════════════════╣
║  HEADER  (nền trắng, sticky, cao 70px, shadow khi scroll)           ║
║                                                                      ║
║  [🔵 LOTEC LOGO]  Trang chủ  Giới thiệu▼  Thi Công▼  Thiết Bị▼     ║
║                   Dự Án  Tin Tức  Liên Hệ    [Tư vấn] [Đặt hàng🛒] ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  HERO SLIDER  (cao 620px, ảnh thực tế công trình full-width)        ║
║  ┌──────────────────────────────────────────────────────────────┐   ║
║  │▓▓▓▓▓▓▓ OVERLAY GRADIENT navy → transparent ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│   ║
║  │                                                              │   ║
║  │  [TAG: Công nghệ tiên phong]                                │   ║
║  │                                                              │   ║
║  │  Giải Pháp Giám Sát                                         │   ║
║  │  An Ninh Thông Minh          ← H1, 52px, trắng, đậm        │   ║
║  │  Cho Trạm Biến Áp                                           │   ║
║  │                                                              │   ║
║  │  Camera AI · Giám sát nhiệt · Hàng rào 110kV–500kV         │   ║
║  │                                                              │   ║
║  │  [  Xem Giải Pháp →  ]  [  Liên Hệ Tư Vấn  ]              │   ║
║  │                                                              │   ║
║  │              ●  ○  ○    ‹  ›   (dots + mũi tên)            │   ║
║  └──────────────────────────────────────────────────────────────┘   ║
║  Slide 2: SCADA/PLC tự động hóa                                     ║
║  Slide 3: Điện mặt trời Solar                                       ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  STATS BAR  (nền #0D2B5E)                                           ║
║  ┌──────────────┬──────────────┬──────────────┬──────────────┐      ║
║  │  ⚡          │  📍          │  ✅          │  🕐          │      ║
║  │  130+        │  20+         │  100%        │  24/7        │      ║
║  │  Trạm 110–  │  Tỉnh thành  │  Đúng tiến  │  Hỗ trợ     │      ║
║  │  220kV       │  phía Bắc    │  độ          │  kỹ thuật    │      ║
║  └──────────────┴──────────────┴──────────────┴──────────────┘      ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  VỀ CHÚNG TÔI  (nền trắng, padding 90px top/bottom)                ║
║  ┌─────────────────────────┐   ┌────────────────────────────────┐   ║
║  │                         │   │  [Label cam] Về LOTEC Việt Nam │   ║
║  │   [ẢNH CHÍNH công trình]│   │                                │   ║
║  │   (bo góc, shadow)      │   │  Đơn vị tiên phong về          │   ║
║  │                         │   │  Giải pháp Năng lượng &        │   ║
║  │   ┌─────────────────┐   │   │  Tự động hóa                   │   ║
║  │   │ [ẢNH PHỤ nhỏ]  │   │   │  (H2, 32px, navy)              │   ║
║  │   │ (góc dưới phải) │   │   │                                │   ║
║  │   └─────────────────┘   │   │  Mô tả 2–3 câu về công ty...  │   ║
║  │                         │   │                                │   ║
║  │  [Badge: EVN Certified] │   │  ┌──────────┐ ┌──────────┐    │   ║
║  └─────────────────────────┘   │  │🛡️ An Toàn│ │✅Tin Cậy │    │   ║
║                                │  └──────────┘ └──────────┘    │   ║
║                                │  ┌──────────┐ ┌──────────┐    │   ║
║                                │  │💡 Đổi Mới│ │🌱Bền Vững│    │   ║
║                                │  └──────────┘ └──────────┘    │   ║
║                                │                                │   ║
║                                │  [ Xem Hồ Sơ Năng Lực → ]    │   ║
║                                └────────────────────────────────┘   ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  GIẢI PHÁP THI CÔNG  (nền #F4F7FB)                                  ║
║  [Label cam] Lĩnh vực thi công                                      ║
║  Giải Pháp Thi Công Chuyên Nghiệp        [Xem tất cả →]            ║
║                                                                      ║
║  ┌────────────┐ ┌────────────┐ ┌────────────┐                       ║
║  │[ẢNH nền]  │ │[ẢNH nền]  │ │[ẢNH nền]  │                       ║
║  │📷         │ │🌡️         │ │🛡️         │                       ║
║  │Camera AI  │ │Giám sát   │ │Bảo vệ     │                       ║
║  │& An ninh  │ │Nhiệt TB   │ │Hàng rào   │                       ║
║  │Mô tả ngắn │ │Mô tả ngắn │ │Mô tả ngắn │                       ║
║  │[tag][tag] │ │[tag][tag] │ │[tag][tag] │                       ║
║  │Xem chi tiết│ │Xem chi tiết│ │Xem chi tiết│                       ║
║  └────────────┘ └────────────┘ └────────────┘                       ║
║  ┌────────────┐ ┌────────────┐ ┌────────────┐                       ║
║  │⚙️ SCADA   │ │🔋 DC &    │ │☀️ Điện    │                       ║
║  │/PLC Tự ĐH │ │Ắc quy     │ │Mặt trời   │                       ║
║  └────────────┘ └────────────┘ └────────────┘                       ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  PHÂN PHỐI THIẾT BỊ  (nền trắng)                                    ║
║  [Label cam] Phân phối & Bán lẻ                                     ║
║  Thiết Bị & Phần Mềm Chính Hãng    [Danh mục] [Báo giá nhanh]     ║
║                                                                      ║
║  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐               ║
║  │  📷     │ │  ⚡     │ │  🗄️    │ │  💻     │               ║
║  │Camera & │ │Thiết bị │ │Tủ điện │ │Phần mềm│               ║
║  │An ninh  │ │điện hạ  │ │& Phụ kện│ │Giám sát│               ║
║  │ 50 SP   │ │ 200 SP  │ │  80 SP  │ │ 10 GP  │               ║
║  └──────────┘ └──────────┘ └──────────┘ └──────────┘               ║
║                                                                      ║
║  Grid sản phẩm nổi bật (4 cột):                                     ║
║  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                            ║
║  │[ảnh] │  │[ảnh] │  │[ảnh] │  │[ảnh] │                            ║
║  │Hãng  │  │Hãng  │  │Hãng  │  │Hãng  │                            ║
║  │Tên SP│  │Tên SP│  │Tên SP│  │Tên SP│                            ║
║  │Giá   │  │Giá   │  │Liên hệ│  │Giá   │                            ║
║  │[Giỏ] │  │[Giỏ] │  │[Giỏ] │  │[Giỏ] │                            ║
║  └──────┘  └──────┘  └──────┘  └──────┘                            ║
║                                                                      ║
║  ┌─────────────────────────────────────────────────────────────┐    ║
║  │  📋 Cần báo giá nhanh?  [Nhập tên/mã SP...]  [SĐT...]  [Gửi]   ║
║  └─────────────────────────────────────────────────────────────┘    ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  DỰ ÁN TIÊU BIỂU  (nền #F4F7FB)                                    ║
║  [Label cam] Công trình tiêu biểu                                   ║
║  130+ Dự Án Đã Triển Khai       [Tất cả] [220kV] [110kV] [Solar]  ║
║                                                                      ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                 ║
║  │[ẢNH thực tế]│ │[ẢNH thực tế]│ │[ẢNH thực tế]│                 ║
║  │ 01           │ │ 02           │ │ 03           │                 ║
║  │📍 Thái Nguyên│ │📍 Nghệ An    │ │📍 Hải Dương  │                 ║
║  │TBA 220kV     │ │TBA 220kV     │ │TBA 220kV     │                 ║
║  │Phú Bình      │ │Tương Dương   │ │Gia Lộc       │                 ║
║  │[cam][xanh]   │ │[cam][xanh]   │ │[cam][xanh]   │                 ║
║  │EVNNPT        │ │EVNNPT        │ │EVNNPT        │                 ║
║  │Xem chi tiết→ │ │Xem chi tiết→ │ │Xem chi tiết→ │                 ║
║  └──────────────┘ └──────────────┘ └──────────────┘                 ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  ĐỐI TÁC  (nền trắng, border top/bottom)                           ║
║  "Hợp tác với các thương hiệu hàng đầu thế giới"                   ║
║  ← [Siemens] [Hikvision] [FLIR] [Schneider] [ABB] [LS] [Dahua] →  ║
║                        (auto-scroll vô tận)                         ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  TIN TỨC  (nền #F4F7FB)                                            ║
║  ┌────────────────────────────┐  ┌─────────────┐  ┌─────────────┐  ║
║  │  [ẢNH TO]                 │  │ [ảnh nhỏ]   │  │ [ảnh nhỏ]  │  ║
║  │  [Tag dự án] 28/06/2026   │  │ [Tag] Ngày  │  │ [Tag] Ngày │  ║
║  │  LOTEC hoàn thành TBA     │  │ Tiêu đề bài │  │ Tiêu đề bài│  ║
║  │  220kV Phú Bình...        │  │ Đọc tiếp →  │  │ Đọc tiếp → │  ║
║  │  Đọc tiếp →               │  └─────────────┘  └─────────────┘  ║
║  └────────────────────────────┘                                     ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  CTA BAND  (nền gradient #0D2B5E → #1A4490)                        ║
║                                                                      ║
║             Bắt Đầu Dự Án Của Bạn Ngay Hôm Nay                    ║
║         Đội ngũ kỹ sư LOTEC sẵn sàng tư vấn miễn phí              ║
║                                                                      ║
║    [📞 Gọi Ngay: 0945 225 884]  [📧 Gửi Email]  [📋 Hồ Sơ NL]    ║
║                                                                      ║
║   📞 0945 225 884  │  📞 0847 641 813  │  📍 Long Biên, HN         ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  FOOTER  (nền #0B1E45)                                             ║
║  ┌──────────────┬──────────────┬──────────────┬──────────────┐      ║
║  │ [Logo]       │ Giải Pháp    │ Phân Phối    │ Liên Hệ     │      ║
║  │ Mô tả công  │ • Camera AI  │ • Camera     │ 📍 Địa chỉ  │      ║
║  │ ty (3 dòng) │ • Giám sát   │ • TB điện    │ 📞 Hotline  │      ║
║  │             │   nhiệt      │ • Máy BA     │ 📧 Email    │      ║
║  │ [f][Z][▶]  │ • Hàng rào   │ • Tủ điện    │ 🌐 Website  │      ║
║  └──────────────┴──────────────┴──────────────┴──────────────┘      ║
║  © 2026 LOTEC Việt Nam  |  Chính sách bảo mật  |  Điều khoản      ║
╚══════════════════════════════════════════════════════════════════════╝
```

#### 💡 Ghi chú thiết kế trang chủ
- **Top bar:** Ẩn trên mobile, chỉ hiện trên tablet+
- **Header:** Khi scroll > 50px → thêm `box-shadow`, logo thu nhỏ nhẹ
- **Hero:** Ảnh phải là ảnh thực tế công trình LOTEC, KHÔNG dùng stock photo
- **Stats:** Số đếm animation từ 0 lên khi section vào viewport
- **Solutions grid:** Hover → card nổi lên 6px, ảnh nền scale 1.05
- **Footer:** Tông `#0B1E45` tối hơn header một chút để phân biệt

---

### 5.2 Trang Giới Thiệu Công Ty

#### 🌐 Tham khảo giao diện

| Phần | Website | URL | Học gì |
|---|---|---|---|
| Hero + tagline | **SPIE Group** | spie.com/en/about-spie | Layout about page công ty EPC điện |
| Timeline lịch sử | **Hitachi Energy** | hitachienergy.com/about | Timeline ngang đẹp |
| Đội ngũ | **Bouygues Energies** | bouygues-es.com | Card nhân sự chuyên nghiệp |
| Chứng chỉ | **HAECO** | haeco.com.vn | Gallery giấy chứng nhận |

---

#### 📐 Wireframe

```
╔══════════════════════════════════════════════════════════════════╗
║  HEADER (sticky)                                                ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  HERO NHỎ  (cao 300px, ảnh nền mờ + overlay navy)             ║
║  ┌──────────────────────────────────────────────────────────┐  ║
║  │  Trang chủ > Về Chúng Tôi    ← Breadcrumb               │  ║
║  │                                                          │  ║
║  │  Về LOTEC Việt Nam                                       │  ║
║  │  "Công nghệ tiên phong – Giá trị trường tồn"            │  ║
║  └──────────────────────────────────────────────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  TỔNG QUAN (2 cột 50/50, padding 80px)                         ║
║  ┌───────────────────────────┐  ┌───────────────────────────┐  ║
║  │  [ẢNH văn phòng / team]  │  │  Câu chuyện công ty       │  ║
║  │  (bo góc 12px, shadow)   │  │  (300–400 chữ)            │  ║
║  │                           │  │                           │  ║
║  │  ┌──────────────────────┐ │  │  Phương châm:            │  ║
║  │  │ 🏆 EVN & EVNNPT      │ │  │  "AN TOÀN – TIN CẬY –   │  ║
║  │  │ Đáp ứng tiêu chuẩn  │ │  │  ĐỔI MỚI – BỀN VỮNG"    │  ║
║  │  └──────────────────────┘ │  │                           │  ║
║  └───────────────────────────┘  │  [ Tải Hồ Sơ Năng Lực ] │  ║
║                                  └───────────────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  CON SỐ NỔI BẬT  (nền #F4F7FB, 4 cột)                        ║
║  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          ║
║  │  130+    │ │  20+     │ │  500+    │ │  100+    │          ║
║  │ Trạm đã │ │Tỉnh thành│ │ Camera   │ │  Tủ điện │          ║
║  │triển khai│ │đã có mặt │ │lắp đặt  │ │PLC/SCADA │          ║
║  └──────────┘ └──────────┘ └──────────┘ └──────────┘          ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  GIÁ TRỊ CỐT LÕI  (4 thẻ hàng ngang, border-left cam)        ║
║  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌─────┐ ║
║  │ 🛡️ AN TOÀN  │ │ ✅ TIN CẬY   │ │ 💡 ĐỔI MỚI  │ │ 🌱 │ ║
║  │ Mô tả ngắn  │ │ Mô tả ngắn   │ │ Mô tả ngắn  │ │ ... │ ║
║  └───────────────┘ └───────────────┘ └───────────────┘ └─────┘ ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  ĐỘI NGŨ KỸ SƯ  (grid 4 cột)                                  ║
║  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          ║
║  │ [Ảnh]   │ │ [Ảnh]   │ │ [Ảnh]   │ │ [Ảnh]   │          ║
║  │ Họ tên  │ │ Họ tên  │ │ Họ tên  │ │ Họ tên  │          ║
║  │ Chức vụ │ │ Chức vụ │ │ Chức vụ │ │ Chức vụ │          ║
║  │ 10+ năm │ │  8+ năm │ │  6+ năm │ │  5+ năm │          ║
║  └──────────┘ └──────────┘ └──────────┘ └──────────┘          ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  CHỨNG CHỈ & ĐỐI TÁC  (2 row)                                 ║
║  Row 1 – Chứng chỉ: [EVN] [EVNNPT] [ISO] [IEC] [TCVN]        ║
║  Row 2 – Đại lý:    [Siemens] [Hikvision] [FLIR] [ABB]...    ║
╠══════════════════════════════════════════════════════════════════╣
║  FOOTER                                                         ║
╚══════════════════════════════════════════════════════════════════╝
```

---

### 5.3 Trang Chi Tiết Giải Pháp

#### 🌐 Tham khảo giao diện

| Phần | Website | URL | Học gì |
|---|---|---|---|
| Tổng thể layout | **Schneider Electric** | se.com/vn/vi/work/solutions | Cách trình bày giải pháp kỹ thuật |
| Sơ đồ hệ thống | **Beckhoff** | beckhoff.com | Diagram kiến trúc hệ thống |
| Tính năng icon | **Endress+Hauser** | endress.com | Feature grid với icon đẹp |
| Video demo | **Siemens Energy** | siemens-energy.com | Storytelling giải pháp có video |

---

#### 📐 Wireframe

```
╔══════════════════════════════════════════════════════════════════╗
║  HEADER (sticky)                                                ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  HERO  (cao 340px, ảnh thực tế + overlay navy)                 ║
║  ┌──────────────────────────────────────────────────────────┐  ║
║  │  Trang chủ > Giải Pháp > Camera AI & An Ninh            │  ║
║  │                                                          │  ║
║  │  📷  Giải Pháp Giám Sát An Ninh Thông Minh              │  ║
║  │  Cho trạm biến áp 110kV – 500kV · Nhà máy · KCN        │  ║
║  │                                                          │  ║
║  │  [AN NINH] [CAMERA AI] [GIÁM SÁT 24/7]  ← Tags         │  ║
║  └──────────────────────────────────────────────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  TỔNG QUAN  (2 cột 55/45)                                     ║
║  ┌────────────────────────────────┐  ┌────────────────────┐   ║
║  │  Mô tả tổng quan (300 chữ)    │  │  [VIDEO/ẢNH demo] │   ║
║  │                                │  │  (thumbnail + play)│   ║
║  │  ✅ Camera AI nhận diện người  │  │                    │   ║
║  │  ✅ Phát hiện xâm nhập tức thì │  │  [ẢNH phụ 1]      │   ║
║  │  ✅ Cảnh báo qua app/SMS      │  │  [ẢNH phụ 2]      │   ║
║  │  ✅ Lưu trữ đám mây           │  └────────────────────┘   ║
║  └────────────────────────────────┘                            ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  TÍNH NĂNG NỔI BẬT  (nền #F4F7FB, 3 cột × 2 hàng)            ║
║  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐  ║
║  │  📡             │ │  🔔             │ │  💾             │  ║
║  │  Giám sát 24/7  │ │  Cảnh báo tức  │ │  Lưu trữ &      │  ║
║  │  Theo dõi liên  │ │  thời qua App, │ │  Phân tích dữ   │  ║
║  │  tục, ổn định   │ │  SMS, Email    │ │  liệu           │  ║
║  └─────────────────┘ └─────────────────┘ └─────────────────┘  ║
║  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐  ║
║  │  🤖 AI nhận    │ │  📍 Quản lý    │ │  🔧 Tích hợp   │  ║
║  │  diện đối tượng │ │  tập trung từ  │ │  PTZ, khởi cắt │  ║
║  └─────────────────┘ └─────────────────┘ └─────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  SƠ ĐỒ HỆ THỐNG  (infographic, nền trắng)                     ║
║                                                                 ║
║  [Camera AI] → [Tủ trung tâm] → [Server/NVR] → [Màn hình]   ║
║                      ↓                  ↓                      ║
║                  [Cảnh báo]    [App điện thoại]               ║
║                  [âm thanh]    [SMS / Email]                   ║
║                                                                 ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  LỢI ÍCH CỤ THỂ  (nền navy, chữ trắng, 4 cột)               ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌───────┐ ║
║  │  < 0.5s      │ │  99.9%       │ │  -70%        │ │  24/7 │ ║
║  │  Phát hiện   │ │  Uptime hệ  │ │  Giảm chi phí│ │ Hỗ trợ│ ║
║  │  xâm nhập    │ │  thống      │ │  tuần tra    │ │kỹ thuật│ ║
║  └──────────────┘ └──────────────┘ └──────────────┘ └───────┘ ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  THIẾT BỊ SỬ DỤNG  (nền #F4F7FB, grid 4 cột)                 ║
║  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                       ║
║  │[ảnh] │  │[ảnh] │  │[ảnh] │  │[ảnh] │                       ║
║  │Camera│  │NVR   │  │Cột   │  │Phần  │                       ║
║  │AI PTZ│  │8ch   │  │camera│  │mềm   │                       ║
║  │[→ SP]│  │[→ SP]│  │[→ SP]│  │[→ SP]│                       ║
║  └──────┘  └──────┘  └──────┘  └──────┘                       ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  DỰ ÁN ĐÃ TRIỂN KHAI  (3 thẻ ngang)                          ║
║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         ║
║  │[ảnh TBA]    │  │[ảnh TBA]    │  │[ảnh TBA]    │         ║
║  │TBA 220kV    │  │TBA 110kV    │  │KCN Thái     │         ║
║  │Phú Bình     │  │Điện Biên    │  │Nguyên       │         ║
║  │Xem chi tiết →  │Xem chi tiết →  │Xem chi tiết →         ║
║  └──────────────┘  └──────────────┘  └──────────────┘         ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  FORM TƯ VẤN  (nền navy)                                       ║
║  ┌────────────────────────────────────────────────────────┐    ║
║  │  Nhận tư vấn miễn phí từ kỹ sư LOTEC                  │    ║
║  │                                                        │    ║
║  │  [Tên / Công ty]  [Số điện thoại]  [Email]            │    ║
║  │  [Mô tả yêu cầu của bạn...]                           │    ║
║  │                    [ Gửi Yêu Cầu → ]                  │    ║
║  └────────────────────────────────────────────────────────┘    ║
╠══════════════════════════════════════════════════════════════════╣
║  FOOTER                                                         ║
╚══════════════════════════════════════════════════════════════════╝
```

---

### 5.3 Trang Phân Phối Thiết Bị (học Etinco + HopLong)

> **Nguyên tắc:** Khách B2B ngành điện thường biết rõ tên/mã hàng → ưu tiên **Search mạnh** + **lọc thông số kỹ thuật** thay vì chỉ lọc giá như e-commerce thông thường.

---

#### A. Trang Danh Mục Sản Phẩm (tổng thể)

```
╔══════════════════════════════════════════════════════════════════╗
║  HEADER (sticky)                                                ║
╠══════════════════════════════════════════════════════════════════╣
║  Trang chủ > Phân Phối Thiết Bị  [Breadcrumb]                  ║
╠════════════════════════════════════════════════════════════════╣
║                    THANH TÌM KIẾM CHÍNH                         ║
║  ┌──────────────────────────────────────────┐  ┌─────────────┐ ║
║  │  🔍  Tìm theo tên, mã hàng, hãng...     │  │  TÌM KIẾM  │ ║
║  └──────────────────────────────────────────┘  └─────────────┘ ║
║  Gợi ý nhanh: [Camera AI]  [MCCB LS]  [PLC Siemens]  [FLIR]   ║
╠════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  DANH MỤC NỔI BẬT (icon grid – hiển thị trước sidebar)        ║
║  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          ║
║  │   📷    │ │    ⚡    │ │   🗄️    │ │   💻    │          ║
║  │ Camera & │ │ Thiết bị │ │  Tủ điện │ │ Phần mềm │          ║
║  │ An ninh  │ │  điện hạ │ │& Phụ kiện│ │ Giám sát │          ║
║  │  50 SP   │ │  200 SP  │ │  80 SP   │ │  10 GP   │          ║
║  └──────────┘ └──────────┘ └──────────┘ └──────────┘          ║
║  ┌──────────┐ ┌──────────┐                                     ║
║  │   🏭    │ │   🔧    │                                     ║
║  │   Máy   │ │  Phụ    │                                     ║
║  │ Biến áp │ │  kiện   │                                     ║
║  │  30 SP  │ │  100 SP │                                     ║
║  └──────────┘ └──────────┘                                     ║
╚══════════════════════════════════════════════════════════════════╝
```

---

#### B. Trang Danh Sách Sản Phẩm Theo Danh Mục

```
╔══════════════════════════════════════════════════════════════════════╗
║  HEADER (sticky)                                                    ║
╠══════════════════════════════════════════════════════════════════════╣
║  Trang chủ > Phân phối > Thiết bị điện hạ thế  [Breadcrumb]       ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                     ║
║  ┌─ SIDEBAR (240px, cố định) ──┐  ┌─ NỘI DUNG CHÍNH (flex) ──────┐ ║
║  │                              │  │                               │ ║
║  │  📂 DANH MỤC                │  │  ┌───────────────────────┐   │ ║
║  │  ├─ Camera & An ninh        │  │  │ 🔍 Tìm trong danh mục │   │ ║
║  │  ├─ ▶ Thiết bị điện  ← đây │  │  └───────────────────────┘   │ ║
║  │  │   ├─ CB / MCB / MCCB    │  │                               │ ║
║  │  │   ├─ ACB                │  │  Hiển thị: 48 sản phẩm       │ ║
║  │  │   ├─ Biến tần           │  │  [Sắp xếp ▼] [Lưới / Danh sách] ║
║  │  │   ├─ Contactor          │  │                               │ ║
║  │  │   └─ Relay / Timer      │  │  ┌──────┐┌──────┐┌──────┐┌──────┐║
║  │  ├─ Máy biến áp            │  │  │[ảnh] ││[ảnh] ││[ảnh] ││[ảnh] │║
║  │  ├─ Tủ điện & Phụ kiện     │  │  │Hãng  ││Hãng  ││Hãng  ││Hãng  │║
║  │  └─ Phần mềm               │  │  │Tên SP││Tên SP││Tên SP││Tên SP│║
║  │                              │  │  │Giá   ││Giá   ││Giá   ││Giá   │║
║  │  ──────────────────────────  │  │  │[Giỏ] ││[Giỏ] ││[Giỏ] ││[Giỏ] │║
║  │  🏷️ LỌC THEO HÃNG          │  │  └──────┘└──────┘└──────┘└──────┘║
║  │  ☑ LS Electric (45)        │  │                               │ ║
║  │  ☑ Schneider (32)          │  │  ┌──────┐┌──────┐┌──────┐┌──────┐║
║  │  ☐ Siemens (18)            │  │  │      ││      ││      ││      │║
║  │  ☐ Mitsubishi (12)         │  │  │      ││      ││      ││      │║
║  │  ☐ ABB (9)                 │  │  └──────┘└──────┘└──────┘└──────┘║
║  │  ☐ BTB Electric (27)       │  │                               │ ║
║  │  [+ Xem thêm hãng]         │  │  ┌──────┐┌──────┐┌──────┐┌──────┐║
║  │                              │  │  │      ││      ││      ││      │║
║  │  ──────────────────────────  │  │  └──────┘└──────┘└──────┘└──────┘║
║  │  💰 LỌC THEO GIÁ            │  │                               │ ║
║  │                              │  │  [◀ 1  2  3  4  5 ... ▶]    │ ║
║  │  Từ: [________] đ            │  │                               │ ║
║  │  Đến: [________] đ           │  └───────────────────────────────┘ ║
║  │  [●────────────○] slider     │                                    ║
║  │  [Áp dụng]                   │                                    ║
║  │                              │                                    ║
║  │  ──────────────────────────  │                                    ║
║  │  📦 LỌC THEO TỒN KHO        │                                    ║
║  │  ● Tất cả                   │                                    ║
║  │  ○ Còn hàng                 │                                    ║
║  │  ○ Hàng đặt trước           │                                    ║
║  │                              │                                    ║
║  │  ──────────────────────────  │                                    ║
║  │  [🔄 Xóa tất cả bộ lọc]    │                                    ║
║  └──────────────────────────────┘                                    ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

#### C. Thẻ Sản Phẩm (Product Card) – Chi tiết

```
┌─────────────────────────┐
│  [Badge: BÁN CHẠY 🔥]  │  ← Hoặc "MỚI", "% GIẢM"
│                         │
│    ┌───────────────┐    │
│    │               │    │
│    │   [ẢNH SP]   │    │  ← Hover: hiện nút "Xem nhanh"
│    │               │    │
│    └───────────────┘    │
│                         │
│  Siemens               │  ← Tên hãng (màu cam)
│  PLC S7-1200 CPU 1214C │  ← Tên sản phẩm (2 dòng max)
│  Mã: 6ES7214-1AG40-0XB0│  ← Mã hàng (màu xám)
│                         │
│  12.800.000 đ           │  ← Giá (màu cam, đậm)
│  ~~15.000.000 đ~~       │  ← Giá gốc gạch (nếu có KM)
│                         │
│  ✅ Còn hàng            │  ← Hoặc 🕐 "Hàng đặt 3–5 ngày"
│                         │
│  [🛒 Thêm báo giá]  [→] │  ← 2 nút: thêm giỏ + xem chi tiết
└─────────────────────────┘
```

> **Lưu ý giá:** Với sản phẩm > 50 triệu hoặc theo dự án → hiển thị **"Liên hệ báo giá"** thay vì giá cụ thể, tránh mất lợi thế thương lượng.

---

#### D. Trang Chi Tiết Sản Phẩm

```
╔══════════════════════════════════════════════════════════════════╗
║  Trang chủ > Thiết bị điện > Biến tần > Siemens S7-1200        ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  ┌─── ẢNH (45%) ────────────┐  ┌─── THÔNG TIN (55%) ─────────┐ ║
║  │                           │  │  Siemens                    │ ║
║  │  ┌───────────────────┐    │  │  PLC S7-1200 CPU 1214C DC   │ ║
║  │  │                   │    │  │  Mã: 6ES7214-1AG40-0XB0     │ ║
║  │  │   [ẢNH CHÍNH]    │    │  │                              │ ║
║  │  │   (zoom hover)   │    │  │  12.800.000 đ               │ ║
║  │  │                   │    │  │  ~~15.000.000 đ~~           │ ║
║  │  └───────────────────┘    │  │                              │ ║
║  │                           │  │  ✅ Còn hàng – Giao 1–2 ngày│ ║
║  │  [img1][img2][img3][img4] │  │                              │ ║
║  │  (thumbnail dạng strip)   │  │  Số lượng: [─ 1 +]          │ ║
║  │                           │  │                              │ ║
║  └───────────────────────────┘  │  [🛒 THÊM VÀO GIỎ BÁO GIÁ] │ ║
║                                 │  [📋 YÊU CẦU BÁO GIÁ NGAY] │ ║
║                                 │  [📄 Tải Datasheet PDF]      │ ║
║                                 │                              │ ║
║                                 │  ──────────────────────────  │ ║
║                                 │  📦 Giao hàng toàn quốc     │ ║
║                                 │  🔒 Hàng chính hãng 100%    │ ║
║                                 │  🔧 Bảo hành 12 tháng       │ ║
║                                 │  📞 Hỗ trợ kỹ thuật 24/7   │ ║
║                                 └──────────────────────────────┘ ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  [Thông số kỹ thuật] [Mô tả] [Tài liệu] [Đánh giá]  ← TABS   ║
║  ─────────────────────────────────────────────────────────────  ║
║                                                                 ║
║  TAB: THÔNG SỐ KỸ THUẬT                                        ║
║  ┌─────────────────────────┬──────────────────────────────────┐ ║
║  │ Nguồn cấp               │ 24 VDC                          │ ║
║  ├─────────────────────────┼──────────────────────────────────┤ ║
║  │ Digital Input           │ 14 DI                           │ ║
║  ├─────────────────────────┼──────────────────────────────────┤ ║
║  │ Digital Output          │ 10 DO                           │ ║
║  ├─────────────────────────┼──────────────────────────────────┤ ║
║  │ Analog Input            │ 2 AI (0–10V / 0–20mA)          │ ║
║  ├─────────────────────────┼──────────────────────────────────┤ ║
║  │ Cổng giao tiếp          │ 1x PROFINET, 1x RS-485          │ ║
║  ├─────────────────────────┼──────────────────────────────────┤ ║
║  │ Nhiệt độ hoạt động      │ 0°C – 55°C                      │ ║
║  ├─────────────────────────┼──────────────────────────────────┤ ║
║  │ Chuẩn bảo vệ            │ IP20                            │ ║
║  └─────────────────────────┴──────────────────────────────────┘ ║
║                                                                 ║
║  TAB: TÀI LIỆU                                                 ║
║  📄 Datasheet S7-1200 v4.5.pdf          [Tải xuống ↓]         ║
║  📚 Manual lập trình TIA Portal.pdf     [Tải xuống ↓]         ║
║  📋 Catalogue Siemens PLC 2026.pdf      [Tải xuống ↓]         ║
║                                                                 ║
╠══════════════════════════════════════════════════════════════════╣
║  SẢN PHẨM LIÊN QUAN                                            ║
║  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                       ║
║  │      │  │      │  │      │  │      │                       ║
║  └──────┘  └──────┘  └──────┘  └──────┘                       ║
╚══════════════════════════════════════════════════════════════════╝
```

---

#### E. Giỏ Báo Giá (Quote Cart) – Khác với giỏ hàng thông thường

```
╔══════════════════════════════════════════════════════════════╗
║  GIỎ BÁO GIÁ CỦA BẠN  (3 sản phẩm)        [X Xóa tất cả] ║
╠══════════════════════════════════════════════════════════════╣
║  ┌──────┬──────────────────────────────┬──────┬───────────┐ ║
║  │ [ảnh]│ PLC Siemens S7-1200 CPU 1214C│ SL:2 │ Xóa ✕    │ ║
║  │      │ Mã: 6ES7214-1AG40-0XB0       │ [─2+]│           │ ║
║  ├──────┼──────────────────────────────┼──────┼───────────┤ ║
║  │ [ảnh]│ Camera FLIR A315 Thermal      │ SL:1 │ Xóa ✕    │ ║
║  │      │ Mã: FLIR-A315-15MM           │ [─1+]│           │ ║
║  ├──────┼──────────────────────────────┼──────┼───────────┤ ║
║  │ [ảnh]│ MCCB LS ABN103c 100A 3P      │ SL:5 │ Xóa ✕    │ ║
║  │      │ Mã: ABN103c                  │ [─5+]│           │ ║
║  └──────┴──────────────────────────────┴──────┴───────────┘ ║
║                                                              ║
║  Ghi chú đơn hàng: [_____________________________________]  ║
║                                                              ║
║  THÔNG TIN LIÊN HỆ                                          ║
║  Họ tên *         [________________________]                ║
║  Công ty          [________________________]                ║
║  Số điện thoại *  [________________________]                ║
║  Email            [________________________]                ║
║  Địa chỉ giao    [________________________]                ║
║                                                              ║
║  Nhận báo giá qua:  ○ Gọi điện  ○ Email  ○ Zalo            ║
║                                                              ║
║              [ 📋 GỬI YÊU CẦU BÁO GIÁ ]                    ║
║                                                              ║
║  ✅ Phản hồi trong vòng 2 giờ làm việc                      ║
╚══════════════════════════════════════════════════════════════╝
```

---

#### F. Tóm tắt – Bộ Lọc Nên Có Cho Từng Danh Mục

| Danh mục | Lọc phổ biến cần có |
|---|---|
| **Camera & An ninh** | Hãng · Loại (AI/Thermal/PTZ) · Độ phân giải · IP rating |
| **Thiết bị điện** | Hãng · Loại (MCB/MCCB/ACB) · Dòng điện (A) · Số cực · Giá |
| **Biến tần** | Hãng · Công suất (kW) · Pha (1P/3P) · Điện áp |
| **Máy biến áp** | Công suất (kVA) · Cấp điện áp · Loại (dầu/khô) |
| **Phần mềm** | Loại license · Số user · Nền tảng |

> 💡 **Gợi ý thực tế:** Không cần làm hết cùng lúc — Phase 1 chỉ cần **Lọc hãng + Lọc giá**. Phase 2 mới thêm lọc thông số kỹ thuật chuyên sâu (dòng điện, công suất...) như RS Components.

---

---

### 5.4 Trang Dự Án Tiêu Biểu

#### 🌐 Tham khảo giao diện

| Phần | Website | URL | Học gì |
|---|---|---|---|
| Tổng thể trang dự án | **Bouygues Energies** | bouygues-es.com/references | Card dự án ngành điện gần nhất |
| Filter + Grid | **ABB** | global.abb/references | Filter địa lý + ngành + loại |
| Bản đồ phạm vi | **SPIE Group** | spie.com/en/references | Interactive map đẹp |
| Chi tiết dự án | **Implenia** | implenia.com/projects | Gallery ảnh + thông tin dự án |

---

#### 📐 Wireframe – Trang danh sách dự án

```
╔══════════════════════════════════════════════════════════════════╗
║  HEADER (sticky)                                                ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  HERO NHỎ  (cao 280px)                                         ║
║  ┌──────────────────────────────────────────────────────────┐  ║
║  │  Trang chủ > Dự Án Tiêu Biểu                            │  ║
║  │  130+ Công Trình Đã Triển Khai Thành Công                │  ║
║  │  Trạm biến áp 110kV – 220kV · Tự động hóa · Solar       │  ║
║  └──────────────────────────────────────────────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  BẢN ĐỒ PHẠM VI  (nền #F4F7FB)                               ║
║  ┌──────────────────────────────────────────────────────────┐  ║
║  │         🗺️  Bản đồ Việt Nam (SVG)                       │  ║
║  │                                                          │  ║
║  │   Lào Cai ●    Hà Giang ●    Cao Bằng ●                │  ║
║  │   Lai Châu ●   Bắc Kạn ●    Thái Nguyên ●              │  ║
║  │   Điện Biên ●  Bắc Giang ●  Hải Phòng ●               │  ║
║  │   Sơn La ●     Hưng Yên ●   Ninh Bình ●               │  ║
║  │   Hòa Bình ●   Thanh Hóa ●  Nghệ An ●                 │  ║
║  │                                                          │  ║
║  │   ● Đã triển khai (20+ tỉnh)                            │  ║
║  └──────────────────────────────────────────────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  FILTER BAR  (sticky dưới header khi scroll)                   ║
║  ┌──────────────────────────────────────────────────────────┐  ║
║  │  [ Tất cả (130) ] [ 220kV (45) ] [ 110kV (85) ]        │  ║
║  │  [ Tự động hóa (20) ] [ Solar (8) ]                     │  ║
║  │                            🔍 [Tìm theo tỉnh, tên TBA] │  ║
║  └──────────────────────────────────────────────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  GRID DỰ ÁN  (3 cột, gap 24px)                                ║
║                                                                 ║
║  ┌──────────────────┐ ┌──────────────────┐ ┌────────────────┐ ║
║  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │ │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │ │ ▓▓▓▓▓▓▓▓▓▓▓▓  │ ║
║  │ [ẢNH thực tế]   │ │ [ẢNH thực tế]   │ │ [ẢNH thực tế] │ ║
║  │  01              │ │  02              │ │  03            │ ║
║  │  📍 Thái Nguyên  │ │  📍 Nghệ An      │ │  📍 Hải Dương  │ ║
║  ├──────────────────┤ ├──────────────────┤ ├────────────────┤ ║
║  │ TBA 220kV        │ │ TBA 220kV        │ │ TBA 220kV      │ ║
║  │ Phú Bình         │ │ Tương Dương      │ │ Gia Lộc        │ ║
║  │                  │ │                  │ │                │ ║
║  │ [Camera AI]      │ │ [Camera AI]      │ │ [Camera AI]    │ ║
║  │ [Camera nhiệt]   │ │ [Camera nhiệt]   │ │ [Hàng rào]     │ ║
║  │ [Hàng rào]       │ │                  │ │                │ ║
║  │                  │ │                  │ │                │ ║
║  │ Chủ đầu tư:      │ │ Chủ đầu tư:      │ │ Chủ đầu tư:    │ ║
║  │ EVNNPT           │ │ EVNNPT           │ │ EVNNPT         │ ║
║  │ [Xem chi tiết →] │ │ [Xem chi tiết →] │ │ [Xem chi tiết→]│ ║
║  └──────────────────┘ └──────────────────┘ └────────────────┘ ║
║                                                                 ║
║              [ Xem thêm dự án... ]  ← Load more               ║
╠══════════════════════════════════════════════════════════════════╣
║  CTA BAND + FOOTER                                              ║
╚══════════════════════════════════════════════════════════════════╝
```

#### 📐 Wireframe – Trang chi tiết một dự án

```
╔══════════════════════════════════════════════════════════════════╗
║  HEADER                                                         ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  HERO  (ảnh dự án full-width, cao 400px)                       ║
║  ┌──────────────────────────────────────────────────────────┐  ║
║  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  ║
║  │                                                          │  ║
║  │  [220kV]  [Camera AI]  [Hàng rào]                       │  ║
║  │  TBA 220kV Phú Bình – Thái Nguyên                       │  ║
║  │  Chủ đầu tư: EVNNPT · Hoàn thành: 2025                 │  ║
║  └──────────────────────────────────────────────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  NỘI DUNG  (2 cột 65/35)                                      ║
║  ┌───────────────────────────────────┐  ┌──────────────────┐  ║
║  │  MÔ TẢ DỰ ÁN                     │  │  THÔNG TIN       │  ║
║  │  (400–600 chữ về giải pháp,       │  │  NHANH           │  ║
║  │  quy mô, kết quả đạt được)        │  │  ──────────────  │  ║
║  │                                   │  │  📍 Địa điểm:    │  ║
║  │  GIẢI PHÁP ĐÃ TRIỂN KHAI         │  │  Thái Nguyên     │  ║
║  │  ✅ Hệ thống Camera AI 48 điểm   │  │                  │  ║
║  │  ✅ Camera nhiệt MBA/Thanh cái   │  │  📅 Năm: 2025    │  ║
║  │  ✅ Hàng rào điện tử perimeter   │  │                  │  ║
║  │  ✅ Tủ điều khiển trung tâm      │  │  🏢 Chủ đầu tư:  │  ║
║  │                                   │  │  EVNNPT          │  ║
║  │  KẾT QUẢ ĐẠT ĐƯỢC               │  │                  │  ║
║  │  • Giảm 80% thời gian tuần tra   │  │  ⚡ Loại TBA:    │  ║
║  │  • Phát hiện xâm nhập trong <1s  │  │  220kV           │  ║
║  │  • Hoàn thành đúng 90 ngày KH   │  │                  │  ║
║  └───────────────────────────────────┘  │  [📞 Tư vấn tương│  ║
║                                         │  tự dự án này]   │  ║
║                                         └──────────────────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  GALLERY ẢNH  (grid 3 cột, click để phóng to)                 ║
║  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ║
║  │[ảnh] │  │[ảnh] │  │[ảnh] │  │[ảnh] │  │[ảnh] │  │[ảnh] │  ║
║  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  DỰ ÁN LIÊN QUAN  (3 thẻ)                                     ║
║  ← [Dự án trước]                         [Dự án tiếp theo] → ║
╠══════════════════════════════════════════════════════════════════╣
║  FOOTER                                                         ║
╚══════════════════════════════════════════════════════════════════╝
```

---

### 5.5 Trang Tin Tức

#### 🌐 Tham khảo giao diện

| Website | URL | Học gì |
|---|---|---|
| **Wärtsilä** | wartsila.com/insights | Layout bài viết + sidebar filter |
| **Hitachi Energy** | hitachienergy.com/news | Card tin tức với thumbnail đẹp |

---

#### 📐 Wireframe

```
╔══════════════════════════════════════════════════════════════════╗
║  HEADER                                                         ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO NHỎ: "Tin Tức & Kiến Thức"                               ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  FILTER  [Tất cả] [Tin tức công ty] [Dự án] [Kiến thức KT]   ║
║                                                                 ║
║  ┌─────────────────────────────────────┐  ┌─────────────────┐  ║
║  │                                     │  │  BÀI PHỔ BIẾN  │  ║
║  │  BÀI NỔI BẬT (1 bài to)           │  │  ─────────────  │  ║
║  │  ┌───────────────────────────────┐  │  │ [ảnh] Tiêu đề │  ║
║  │  │  [ẢNH TO 60% chiều cao]      │  │  │ Ngày    Tag   │  ║
║  │  └───────────────────────────────┘  │  │               │  ║
║  │  [Tag dự án]  28/06/2026           │  │ [ảnh] Tiêu đề │  ║
║  │  LOTEC hoàn thành TBA 220kV...     │  │ Ngày    Tag   │  ║
║  │  Mô tả ngắn 2 dòng...             │  │               │  ║
║  │  Đọc tiếp →                        │  │ [ảnh] Tiêu đề │  ║
║  └─────────────────────────────────────┘  └─────────────────┘  ║
║                                                                 ║
║  GRID BÀI VIẾT (3 cột)                                         ║
║  ┌──────────┐ ┌──────────┐ ┌──────────┐                        ║
║  │[ảnh]    │ │[ảnh]    │ │[ảnh]    │                        ║
║  │[Tag]Ngày│ │[Tag]Ngày│ │[Tag]Ngày│                        ║
║  │Tiêu đề  │ │Tiêu đề  │ │Tiêu đề  │                        ║
║  │Mô tả... │ │Mô tả... │ │Mô tả... │                        ║
║  │Đọc tiếp→│ │Đọc tiếp→│ │Đọc tiếp→│                        ║
║  └──────────┘ └──────────┘ └──────────┘                        ║
╚══════════════════════════════════════════════════════════════════╝
```

---

### 5.6 Trang Liên Hệ & Báo Giá

#### 🌐 Tham khảo giao diện

| Website | URL | Học gì |
|---|---|---|
| **Fluke** | fluke.com/contact | Form gọn + hotline rõ |
| **Siemens** | siemens.com/contact | Phân loại form theo chủ đề |

---

#### 📐 Wireframe

```
╔══════════════════════════════════════════════════════════════════╗
║  HEADER                                                         ║
╠══════════════════════════════════════════════════════════════════╣
║  HERO NHỎ: "Liên Hệ & Báo Giá"                                 ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  THÔNG TIN LIÊN HỆ NHANH  (3 thẻ hàng ngang, nền #F4F7FB)    ║
║  ┌───────────────────┐ ┌───────────────────┐ ┌───────────────┐ ║
║  │  📞 Gọi Ngay      │ │  💬 Chat Zalo     │ │  📧 Email     │ ║
║  │  0945 225 884     │ │  Phản hồi ngay    │ │  lotec.kd@    │ ║
║  │  0847 641 813     │ │  trong 15 phút    │ │  gmail.com    │ ║
║  │  [Gọi ngay]       │ │  [Mở Zalo]        │ │  [Gửi email]  │ ║
║  └───────────────────┘ └───────────────────┘ └───────────────┘ ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                 ║
║  FORM + BẢN ĐỒ  (2 cột 55/45)                                 ║
║  ┌──────────────────────────────────┐  ┌──────────────────┐   ║
║  │  BẠN CẦN TƯ VẤN VỀ?            │  │                  │   ║
║  │  ○ Giải pháp thi công           │  │  [Google Maps    │   ║
║  │  ○ Báo giá thiết bị             │  │   văn phòng      │   ║
║  │  ○ Hợp tác phân phối            │  │   Long Biên]     │   ║
║  │  ○ Khác                         │  │                  │   ║
║  │  ─────────────────────────────  │  │                  │   ║
║  │  Họ và tên *   [____________]   │  │  📍 VĂN PHÒNG    │   ║
║  │  Công ty       [____________]   │  │  50 Tân Thụy,    │   ║
║  │  Điện thoại *  [____________]   │  │  Phúc Lợi,       │   ║
║  │  Email         [____________]   │  │  Long Biên, HN   │   ║
║  │  Nội dung *    [____________]   │  │                  │   ║
║  │                [____________]   │  │  📍 TRỤ SỞ       │   ║
║  │                [____________]   │  │  90/74 Hữu Hưng, │   ║
║  │                                 │  │  Tây Mỗ, HN     │   ║
║  │  [ 📨 Gửi Yêu Cầu Ngay ]       │  │                  │   ║
║  │  ✅ Phản hồi trong 2 giờ        │  └──────────────────┘   ║
║  └──────────────────────────────────┘                          ║
╠══════════════════════════════════════════════════════════════════╣
║  FOOTER                                                         ║
╚══════════════════════════════════════════════════════════════════╝
```

---

### 5.7 Mega Menu – Thiết kế Navigation

#### 🌐 Tham khảo

| Website | URL | Học gì |
|---|---|---|
| **Phoenix Contact** | phoenixcontact.com | Mega menu 2 mảng rất rõ ràng |
| **Schneider Electric** | se.com | Mega menu theo segment + icon |

#### 📐 Wireframe – Mega menu "Giải Pháp Thi Công"

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo]  Trang Chủ  [GIẢI PHÁP THI CÔNG ▼]  Thiết Bị  Dự Án  │
└──────────────────────────────────────────────────────────────────┘
         │
         ▼ (hover / click)
┌──────────────────────────────────────────────────────────────────┐
│                    GIẢI PHÁP THI CÔNG                            │
│  ─────────────────────────────────────────────────────────────   │
│  ┌──────────────────────┐    ┌───────────────────────────────┐  │
│  │  📷  Camera AI &     │    │  [ẢNH minh họa giải pháp]    │  │
│  │     An ninh          │    │                               │  │
│  │  Giám sát trạm 24/7  │    │  Chúng tôi cung cấp giải    │  │
│  ├──────────────────────┤    │  pháp tổng thể cho các       │  │
│  │  🌡️  Giám sát nhiệt  │    │  trạm biến áp 110–500kV     │  │
│  │     Thiết bị điện    │    │                               │  │
│  │  Phát hiện điểm nóng │    │  ✅ 130+ công trình          │  │
│  ├──────────────────────┤    │  ✅ 20+ tỉnh thành           │  │
│  │  🛡️  Bảo vệ hàng rào │    │  ✅ Tiêu chuẩn EVN/EVNNPT  │  │
│  │     Trạm điện        │    │                               │  │
│  ├──────────────────────┤    │  [Xem tất cả giải pháp →]   │  │
│  │  ⚙️  Tự động hóa &   │    └───────────────────────────────┘  │
│  │     SCADA / PLC      │                                        │
│  ├──────────────────────┤                                        │
│  │  🔋  Giám sát DC &   │                                        │
│  │     Nguồn ắc quy     │                                        │
│  ├──────────────────────┤                                        │
│  │  ☀️  Điện năng lượng  │                                        │
│  │     Mặt trời Solar   │                                        │
│  └──────────────────────┘                                        │
└──────────────────────────────────────────────────────────────────┘
```

#### 📐 Wireframe – Mega menu "Phân Phối Thiết Bị"

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo]  Trang Chủ  Giải Pháp  [PHÂN PHỐI THIẾT BỊ ▼]  Dự Án  │
└──────────────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────────────┐
│                   PHÂN PHỐI THIẾT BỊ                             │
│  ─────────────────────────────────────────────────────────────   │
│  ┌──────────────────┐  ┌──────────────────┐  ┌───────────────┐  │
│  │  DANH MỤC        │  │  HÃNG NỔI BẬT    │  │  NHANH        │  │
│  │  ─────────────   │  │  ─────────────   │  │  ─────────    │  │
│  │  📷 Camera &     │  │  [Siemens]       │  │  🔥 Bán chạy  │  │
│  │  An ninh         │  │  [Hikvision]     │  │  🆕 Mới về    │  │
│  │                  │  │  [FLIR]          │  │  📋 Báo giá   │  │
│  │  ⚡ Thiết bị     │  │  [Schneider]     │  │  📄 Bảng giá  │  │
│  │  điện hạ thế     │  │  [ABB]           │  │  PDF          │  │
│  │                  │  │  [LS Electric]   │  │               │  │
│  │  🏭 Máy biến áp  │  │  [Dahua]        │  │               │  │
│  │                  │  │  [+ Xem tất cả] │  │               │  │
│  │  🗄️ Tủ điện &    │  └──────────────────┘  └───────────────┘  │
│  │  Phụ kiện        │                                            │
│  │                  │                                            │
│  │  💻 Phần mềm     │                                            │
│  │  Giám sát        │                                            │
│  └──────────────────┘                                            │
└──────────────────────────────────────────────────────────────────┘
```

#### 💡 Ghi chú Navigation
- **Mobile:** Menu hamburger → Slide-in từ trái, accordion cho submenu
- **Tablet:** Menu thu gọn, mega menu thành dropdown đơn
- **Active state:** Trang hiện tại → chữ màu cam + gạch dưới
- **Sticky:** Sau 50px scroll → header nhỏ lại, chỉ còn logo + nav + 2 nút CTA

---

### 6.1 Bảng màu

| Vai trò | Mã màu | Sử dụng |
|---|---|---|
| **Màu chính** | `#0D2B5E` – Xanh navy đậm | Header, Footer, Tiêu đề, Button chính |
| **Màu phụ** | `#1A4490` – Xanh navy nhạt | Gradient, Hover states |
| **Màu nhấn** | `#E87722` – Cam | CTA button, Badge, Icon highlight |
| **Màu nhấn 2** | `#F5A623` – Vàng cam | Số liệu, Tag, Accent text |
| **Nền sáng** | `#F4F7FB` – Xám nhạt | Background section xen kẽ |
| **Đường viền** | `#DCE4F0` – Xám nhạt | Border card, Divider |
| **Văn bản** | `#2C3E50` – Đen xanh | Body text |
| **Văn bản mờ** | `#7B8FA8` – Xám | Mô tả phụ, Meta |

> 💡 Màu xanh navy + cam là bộ đôi truyền thống trong ngành điện/công nghiệp – tạo cảm giác tin cậy, chuyên nghiệp.

### 6.2 Typography

| Loại | Font | Cỡ chữ | Cách dùng |
|---|---|---|---|
| **Font chính** | Be Vietnam Pro | — | Toàn bộ nội dung |
| **Tiêu đề lớn (H1)** | Be Vietnam Pro | 42–52px, 800 | Hero, Page title |
| **Tiêu đề section (H2)** | Be Vietnam Pro | 28–34px, 800 | Tên section |
| **Tiêu đề card (H3)** | Be Vietnam Pro | 16–18px, 700 | Card, Dropdown |
| **Body text** | Be Vietnam Pro | 14–15px, 400 | Đoạn văn thường |
| **Label/Tag** | Be Vietnam Pro | 11–12px, 700 | Badge, Uppercase label |

### 6.3 Component cần thiết kế

- **Thẻ giải pháp (Solution Card):** Ảnh nền + overlay gradient + icon + tên + mô tả + tags
- **Thẻ sản phẩm (Product Card):** Ảnh + hãng + tên + giá + 2 nút (Giỏ hàng / Mua ngay)
- **Thẻ dự án (Project Card):** Ảnh thực tế + số thứ tự + tên TBA + địa điểm + tags
- **Thẻ tin tức (News Card):** Ảnh + ngày + category tag + tiêu đề + "Đọc tiếp"
- **Thanh số liệu (Stats Bar):** Icon + Số to + Mô tả (nền màu navy)
- **Inquiry Bar:** Thanh ngang để nhập sản phẩm + SĐT → gửi báo giá

### 6.4 Nguyên tắc UX

1. **Sticky header** – Menu luôn hiển thị khi scroll
2. **Floating buttons** – Nút Zalo + Hotline cố định góc phải màn hình
3. **Above the fold** – Mọi CTA quan trọng phải thấy được mà không cần scroll
4. **Tách biệt 2 mảng** – Màu cam nhấn cho phân phối, xanh navy cho thi công
5. **Trust signals** – Logo EVN/EVNNPT, số dự án, chứng chỉ phải xuất hiện sớm

---

## 7. Tính Năng Cần Có

### Phase 1 – Ra mắt MVP

| # | Tính năng | Ưu tiên | Ghi chú |
|---|---|---|---|
| 1 | Menu mega dropdown có ảnh/icon | 🔴 Cao | Chia rõ Thi công / Phân phối |
| 2 | Hero slider tự động (3 slide) | 🔴 Cao | |
| 3 | Form yêu cầu báo giá | 🔴 Cao | Gửi email + thông báo Zalo |
| 4 | Trang dự án có filter | 🔴 Cao | Lọc theo loại TBA |
| 5 | Trang sản phẩm có tìm kiếm + lọc | 🔴 Cao | |
| 6 | Mobile responsive 100% | 🔴 Cao | Ưu tiên mobile-first |
| 7 | Floating Zalo + Hotline button | 🔴 Cao | |
| 8 | Tải hồ sơ năng lực (PDF) | 🟡 TB | |
| 9 | Bản đồ phạm vi triển khai | 🟡 TB | SVG Việt Nam với dot |
| 10 | SEO cơ bản (meta, OG, sitemap XML) | 🟡 TB | |
| 11 | Tích hợp Google Maps văn phòng | 🟡 TB | |
| 12 | Tải datasheet sản phẩm (PDF) | 🟡 TB | |

### Phase 2 – Nâng cấp

| # | Tính năng | Ghi chú |
|---|---|---|
| 1 | Giỏ hàng / danh sách báo giá nhiều sản phẩm | Như HopLong |
| 2 | Bảng giá download theo hãng (PDF) | Như Etinco |
| 3 | Live chat tích hợp (Tawk.to / Zalo OA) | |
| 4 | Trang đa ngôn ngữ VI / EN | Phục vụ khách nước ngoài |
| 5 | Blog / Kiến thức kỹ thuật có SEO | Tăng traffic organic |
| 6 | Trang Tuyển dụng có form ứng tuyển | |
| 7 | Admin dashboard quản lý sản phẩm/dự án | |

---

## 8. Công Nghệ Đề Xuất

### Lựa chọn 1: WordPress (Khuyến nghị cho giai đoạn đầu)

| | |
|---|---|
| **Phù hợp** | Muốn tự quản lý nội dung, thêm sản phẩm, đăng tin tức |
| **Theme** | Divi / Astra Pro / hoặc theme điện tùy chỉnh |
| **Plugin shop** | WooCommerce (cho trang phân phối) |
| **Plugin form** | WPForms / Contact Form 7 |
| **Plugin SEO** | Rank Math / Yoast SEO |
| **Hosting** | VPS tại AZDIGI / BKNS (tối thiểu 2GB RAM) |
| **Chi phí ước tính** | 15–40 triệu (thiết kế + phát triển) + 3–5 triệu/năm hosting |
| **Ưu điểm** | Dễ tự cập nhật, nhiều plugin sẵn, hệ sinh thái lớn |
| **Nhược điểm** | Tốc độ cần tối ưu, bảo mật cần chú ý |

### Lựa chọn 2: Next.js + Headless CMS (Cho hiệu năng cao)

| | |
|---|---|
| **Phù hợp** | Có đội ngũ dev, muốn tốc độ và SEO tốt nhất |
| **CMS** | Sanity / Strapi / Contentful |
| **Hosting** | Vercel (frontend) + VPS (backend/CMS) |
| **Chi phí ước tính** | 40–80 triệu (thiết kế + phát triển) |
| **Ưu điểm** | Nhanh vượt trội, linh hoạt, SEO tốt nhất |
| **Nhược điểm** | Cần dev để cập nhật code, phức tạp hơn |

### Lựa chọn 3: HTML/CSS tĩnh (Nhanh + rẻ)

| | |
|---|---|
| **Phù hợp** | Chỉ cần website giới thiệu, không cần cập nhật thường xuyên |
| **Hosting** | GitHub Pages / Netlify (miễn phí) hoặc shared hosting |
| **Chi phí ước tính** | 8–20 triệu |
| **Nhược điểm** | Khó tự cập nhật nội dung, không có CMS |

> **✅ Gợi ý:** Giai đoạn đầu nên dùng **WordPress** để nhanh ra mắt và dễ tự quản lý. Khi doanh thu ổn định, nâng cấp lên **Next.js** nếu cần.

---

## 9. Kế Hoạch Triển Khai

### Giai đoạn 1: Chuẩn bị (2–3 tuần)

- [ ] Chốt domain (lotecvietnam.vn hoặc lotec.vn)
- [ ] Đăng ký hosting / VPS
- [ ] Thu thập ảnh thực tế công trình (chất lượng cao)
- [ ] Viết nội dung cho 6 trang giải pháp
- [ ] Chuẩn bị thông tin 8–12 dự án tiêu biểu có ảnh
- [ ] Chuẩn bị danh sách sản phẩm phân phối (tên, giá, datasheet)
- [ ] Thiết kế logo vector (nếu chưa có file chuẩn)
- [ ] Chuẩn bị hồ sơ năng lực PDF để cho download

### Giai đoạn 2: Thiết kế (2–3 tuần)

- [ ] Wireframe tất cả trang (Figma hoặc bút tay)
- [ ] Thiết kế UI mockup trang chủ (Desktop + Mobile)
- [ ] Duyệt thiết kế → chỉnh sửa
- [ ] Thiết kế các trang con còn lại

### Giai đoạn 3: Phát triển (3–4 tuần)

- [ ] Cài đặt WordPress + theme
- [ ] Phát triển trang chủ
- [ ] Phát triển 6 trang giải pháp
- [ ] Phát triển trang phân phối thiết bị (WooCommerce)
- [ ] Phát triển trang dự án + filter
- [ ] Tích hợp form báo giá → email/Zalo
- [ ] Tích hợp Zalo OA + floating button

### Giai đoạn 4: Kiểm tra & Ra mắt (1 tuần)

- [ ] Test responsive trên mobile/tablet/desktop
- [ ] Test tốc độ (PageSpeed > 80)
- [ ] Test form liên hệ / báo giá
- [ ] SEO cơ bản (meta, schema, sitemap)
- [ ] Duyệt nội dung lần cuối
- [ ] Go live + submit Google Search Console

---

## 10. Nội Dung Cần Chuẩn Bị

### 10.1 Ảnh (cần chất lượng cao ≥ 1MB, không bị mờ)

| Loại ảnh | Số lượng cần | Ghi chú |
|---|---|---|
| Ảnh công trình thực tế (trạm biến áp) | 20–30 ảnh | Chụp đẹp, đúng giờ vàng sáng/chiều |
| Ảnh thiết bị đã lắp đặt (camera, tủ điện...) | 15–20 ảnh | |
| Ảnh đội ngũ kỹ sư đang thi công | 10 ảnh | Tạo trust |
| Ảnh văn phòng, nhà kho | 5 ảnh | |
| Ảnh sản phẩm phân phối (nền trắng) | Theo số SP | Mỗi sản phẩm 1–3 ảnh |
| Logo đối tác (Hikvision, Siemens...) | Theo số đối tác | File PNG nền trong |
| Logo chứng chỉ (EVN, EVNNPT) | 3–5 ảnh | |

### 10.2 Văn bản cần viết

| Trang | Nội dung cần |
|---|---|
| Trang chủ | Tagline, mô tả ngắn công ty (100–150 chữ) |
| Về chúng tôi | Lịch sử, tầm nhìn, sứ mệnh, giới thiệu đội ngũ (300–500 chữ) |
| 6 trang giải pháp | Mỗi trang 300–500 chữ + thông số kỹ thuật |
| 8–12 dự án | Mỗi dự án: Tên, địa điểm, chủ đầu tư, giải pháp áp dụng, kết quả |
| Sản phẩm | Tên, mã hàng, thông số kỹ thuật, giá (hoặc "liên hệ") |
| Tin tức | 3–5 bài đầu tiên (200–400 chữ/bài) |

### 10.3 Tài liệu kỹ thuật

| Loại | Mục đích |
|---|---|
| Hồ sơ năng lực (PDF) | Cho download ở trang Về chúng tôi + trang CTA |
| Datasheet sản phẩm (PDF) | Đính kèm trang chi tiết sản phẩm |
| Bảng giá (PDF, tùy chọn) | Cho khách đại lý download |
| Giấy phép kinh doanh | Hiển thị footer (số ĐKKD) |

---

## Ghi Chú & Quyết Định Cần Chốt

> Những điểm dưới đây cần được thống nhất trước khi bắt đầu thiết kế:

- [ ] **Domain:** lotecvietnam.vn hay lotec.vn hay lotec-vietnam.com?
- [ ] **Công nghệ:** WordPress hay Next.js hay thuê agency?
- [ ] **Ngân sách dự kiến** cho toàn bộ dự án website
- [ ] **Người phụ trách** cập nhật nội dung sau khi site ra mắt
- [ ] **Tích hợp thanh toán online** cho mảng phân phối hay chỉ "liên hệ báo giá"?
- [ ] **Ngôn ngữ:** Tiếng Việt thôi hay cần thêm tiếng Anh (cho đối tác nước ngoài)?
- [ ] **Zalo OA** của công ty đã có chưa?
- [ ] **Sanity CMS** hay tự xây admin panel?
- [ ] **Cổng thanh toán** Phase 1 dùng VietQR hay tích hợp VNPay ngay?

---

## 11. Website Quốc Tế Tham Khảo Giao Diện

Dưới đây là các website nước ngoài trong ngành điện, tự động hóa và phân phối thiết bị công nghiệp — có giao diện hiện đại, UX tốt, đáng học tập từng phần.

---

### 11.1 Mảng Thi Công & Giải Pháp Kỹ Thuật

#### 🌐 Schneider Electric (se.com)
> **Học gì:** Cách trình bày Solutions theo ngành dọc (Energy, Industry, Buildings)
- Mega menu chia theo "Segment" rất rõ ràng
- Trang giải pháp có sơ đồ hệ thống (diagram) + video demo
- Section "Case Studies" với filter theo ngành, quốc gia
- Thanh tìm kiếm sản phẩm theo mã hàng cực mạnh
- 🔗 `https://www.se.com/vn/vi/`

#### 🌐 ABB (abb.com)
> **Học gì:** Trang chủ dạng "Impact sections" – mỗi section một vấn đề lớn → giải pháp
- Hero full-screen video ngắn tạo ấn tượng mạnh
- Layout "Explore our offering" chia rõ theo Division
- Trang dự án (References) có filter địa lý + ngành + loại sản phẩm
- Chỉ số ESG / Sustainability hiển thị nổi bật
- 🔗 `https://global.abb/`

#### 🌐 Siemens Energy (siemens-energy.com)
> **Học gì:** Storytelling kỹ thuật – biến nội dung khô khan thành câu chuyện hấp dẫn
- Dùng infographic động để giải thích sơ đồ hệ thống
- Section "By the numbers" (dạng Stats bar) rất ấn tượng
- Màu sắc xanh lá + đen = hiện đại, khác biệt
- 🔗 `https://www.siemens-energy.com/`

#### 🌐 Hitachi Energy (hitachienergy.com)
> **Học gì:** Trang Solutions theo Use-case (trạm biến áp, lưới điện, tái tạo)
- Card giải pháp dạng "Before / After" với số liệu cụ thể
- Section "Our customers" có logo + quote ngắn
- 🔗 `https://www.hitachienergy.com/`

---

### 11.2 Mảng Phân Phối Thiết Bị & Bán Lẻ B2B

#### 🌐 RS Components (rs-online.com)
> **Học gì:** UX trang phân phối thiết bị công nghiệp B2B chuyên nghiệp nhất thế giới
- Thanh tìm kiếm theo mã hàng + tên + hãng cực mạnh
- Bộ lọc sản phẩm sidebar rất chi tiết (điện áp, dòng điện, hãng, giá...)
- Trang sản phẩm có: thông số, CAD file, datasheet, ảnh thực tế, so sánh
- "Request a quote" cho đơn hàng lớn tách biệt với mua lẻ
- 🔗 `https://vn.rs-online.com/`

#### 🌐 Mouser Electronics (mouser.com)
> **Học gì:** Cách hiển thị thông số kỹ thuật và tồn kho real-time
- Hiển thị "X in stock – ships today" → tạo urgency
- Bảng so sánh sản phẩm tương đồng rất tiện
- Tài liệu kỹ thuật PDF gắn trực tiếp vào từng sản phẩm
- 🔗 `https://www.mouser.com/`

#### 🌐 Automation Direct (automationdirect.com)
> **Học gì:** B2B industrial shop với giá hiển thị rõ ràng + tìm kiếm mạnh
- Layout đơn giản, tập trung vào chức năng hơn thẩm mỹ
- Giá niêm yết công khai, không cần đăng nhập
- "Volume pricing" cho đơn hàng lớn
- 🔗 `https://www.automationdirect.com/`

#### 🌐 Distrelec (distrelec.com)
> **Học gì:** Phân phối thiết bị điện tử / tự động hóa tại châu Âu
- Trang danh mục sản phẩm có "parametric search" theo thông số kỹ thuật
- Badge "New", "Best seller", "Clearance" trên thẻ sản phẩm
- Giao diện sạch, màu trắng + cam — gần với tone của LOTEC
- 🔗 `https://www.distrelec.com/`

---

### 11.3 Giao Diện Tổng Thể (Học Về Aesthetics)

#### 🌐 Windmill Strategy (windmillstrategy.com)
> Chuyên tư vấn website cho công ty công nghiệp B2B — gallery thiết kế rất đẹp
- Tham khảo portfolio của họ để lấy cảm hứng layout

#### 🌐 Wärtsilä (wartsila.com)
> **Học gì:** Hero section với video nền + text ngắn gọn + CTA mạnh
- Gradient overlay xanh navy trên video — đẹp và chuyên nghiệp
- Section "Key figures" dạng animated counter
- 🔗 `https://www.wartsila.com/`

#### 🌐 Eaton (eaton.com)
> **Học gì:** Mega menu phức tạp nhưng vẫn dễ điều hướng
- "By market / By product" song song — giống với cấu trúc của LOTEC
- Trang "Case Studies" có filter và thumbnail ảnh thực tế
- 🔗 `https://www.eaton.com/`

---

### 11.4 Bảng Tóm Tắt – Học Gì Từ Đâu

| Website | URL | Học điều gì |
|---|---|---|
| Schneider Electric | se.com | Mega menu, trang giải pháp theo ngành |
| ABB | global.abb | Hero video, layout tổng thể uy tín |
| Siemens Energy | siemens-energy.com | Storytelling + infographic hệ thống |
| RS Components | rs-online.com | UX phân phối B2B, bộ lọc sản phẩm |
| Mouser | mouser.com | Thông số kỹ thuật, datasheet |
| Automation Direct | automationdirect.com | Giá niêm yết rõ ràng |
| Distrelec | distrelec.com | Màu sắc, card sản phẩm |
| Wärtsilä | wartsila.com | Hero section, animated stats |
| Eaton | eaton.com | Mega menu + Case studies |

---

## 12. Cấu Trúc Dự Án Next.js

Dưới đây là cấu trúc folder chuẩn cho dự án website LOTEC dùng **Next.js 14+ (App Router)** kết hợp **Tailwind CSS** và **Sanity CMS**.

```
lotec-website/
├── public/                        # File tĩnh (ảnh, PDF, icon)
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero/                  # Ảnh slide hero
│   │   ├── projects/              # Ảnh dự án tiêu biểu
│   │   ├── solutions/             # Ảnh minh họa giải pháp
│   │   └── partners/              # Logo đối tác
│   ├── documents/
│   │   ├── ho-so-nang-luc.pdf
│   │   └── products/              # Datasheet từng sản phẩm
│   └── favicon.ico
│
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Layout gốc (header + footer)
│   │   ├── page.tsx               # Trang chủ
│   │   │
│   │   ├── ve-chung-toi/
│   │   │   ├── page.tsx           # Giới thiệu công ty
│   │   │   ├── doi-ngu/page.tsx   # Đội ngũ kỹ sư
│   │   │   └── nang-luc/page.tsx  # Năng lực & Chứng chỉ
│   │   │
│   │   ├── giai-phap/
│   │   │   ├── page.tsx           # Danh sách giải pháp
│   │   │   └── [slug]/page.tsx    # Chi tiết từng giải pháp
│   │   │
│   │   ├── thiet-bi/
│   │   │   ├── page.tsx           # Trang phân phối (danh mục)
│   │   │   ├── [category]/
│   │   │   │   └── page.tsx       # Danh sách sản phẩm theo danh mục
│   │   │   └── san-pham/
│   │   │       └── [slug]/page.tsx # Chi tiết sản phẩm
│   │   │
│   │   ├── du-an/
│   │   │   ├── page.tsx           # Danh sách dự án + filter
│   │   │   └── [slug]/page.tsx    # Chi tiết dự án
│   │   │
│   │   ├── tin-tuc/
│   │   │   ├── page.tsx           # Danh sách bài viết
│   │   │   └── [slug]/page.tsx    # Chi tiết bài viết
│   │   │
│   │   ├── lien-he/page.tsx       # Liên hệ + Form báo giá
│   │   ├── bao-gia/page.tsx       # Trang báo giá nhanh
│   │   │
│   │   ├── sitemap.ts             # Tự động tạo sitemap XML
│   │   ├── robots.ts              # robots.txt
│   │   └── not-found.tsx          # Trang 404
│   │
│   ├── components/                # Tái sử dụng toàn site
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Navbar sticky + mega menu
│   │   │   ├── Footer.tsx
│   │   │   ├── TopBar.tsx         # Thanh hotline / địa chỉ
│   │   │   └── MobileMenu.tsx
│   │   │
│   │   ├── home/                  # Sections riêng của trang chủ
│   │   │   ├── HeroSlider.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SolutionsGrid.tsx
│   │   │   ├── ProductsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── PartnersScroll.tsx
│   │   │   ├── NewsSection.tsx
│   │   │   └── CtaBand.tsx
│   │   │
│   │   ├── ui/                    # Atom components
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   └── Pagination.tsx
│   │   │
│   │   ├── cards/
│   │   │   ├── SolutionCard.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── NewsCard.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx    # Form liên hệ thi công
│   │   │   ├── QuoteForm.tsx      # Form báo giá thiết bị
│   │   │   └── QuickInquiry.tsx   # Thanh báo giá nhanh
│   │   │
│   │   └── common/
│   │       ├── FloatingButtons.tsx # Zalo + Hotline fixed
│   │       ├── ScrollToTop.tsx
│   │       └── ImageGallery.tsx
│   │
│   ├── lib/                       # Utilities & helpers
│   │   ├── sanity/
│   │   │   ├── client.ts          # Kết nối Sanity CMS
│   │   │   ├── queries.ts         # GROQ queries
│   │   │   └── image.ts           # URL builder cho ảnh
│   │   ├── email.ts               # Gửi email (Resend / Nodemailer)
│   │   ├── utils.ts               # Hàm helper chung
│   │   └── seo.ts                 # Tạo metadata SEO
│   │
│   ├── types/                     # TypeScript types
│   │   ├── solution.ts
│   │   ├── product.ts
│   │   ├── project.ts
│   │   └── post.ts
│   │
│   └── styles/
│       └── globals.css            # Tailwind + custom CSS
│
├── sanity/                        # Sanity CMS Studio
│   ├── schemas/
│   │   ├── solution.ts            # Schema giải pháp
│   │   ├── product.ts             # Schema sản phẩm
│   │   ├── project.ts             # Schema dự án
│   │   ├── post.ts                # Schema bài viết
│   │   └── partner.ts             # Schema đối tác
│   └── sanity.config.ts
│
├── .env.local                     # Biến môi trường (không commit)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Stack công nghệ chi tiết

| Lớp | Công nghệ | Mục đích |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | SSR + SSG, SEO tốt |
| **Styling** | Tailwind CSS + shadcn/ui | Nhanh, nhất quán |
| **CMS** | Sanity.io | Quản lý nội dung (sản phẩm, dự án, tin tức) |
| **Form** | React Hook Form + Zod | Validation form liên hệ/báo giá |
| **Email** | Resend | Gửi email thông báo khi có form |
| **Ảnh** | Next/Image + Cloudinary | Tối ưu ảnh tự động |
| **Animation** | Framer Motion | Hiệu ứng scroll, counter, slide |
| **Deploy** | Vercel | CI/CD tự động từ GitHub |
| **Analytics** | Google Analytics 4 | Theo dõi traffic |
| **Search** | Algolia / Fuse.js | Tìm kiếm sản phẩm theo mã |

---

## 13. Hình Thức Thanh Toán

### 13.1 Phân tích đặc thù ngành

Khác với e-commerce thông thường, ngành thiết bị điện công nghiệp có đặc điểm:
- Giá trị đơn hàng cao (từ vài triệu đến hàng tỷ đồng)
- Khách hàng chủ yếu là doanh nghiệp (B2B), không phải cá nhân
- Cần xác nhận thông số kỹ thuật trước khi thanh toán
- Thường có quy trình duyệt mua hàng nội bộ

→ **Không nên ép khách thanh toán online ngay** — ưu tiên luồng "báo giá → xác nhận → thanh toán"

---

### 13.2 Luồng đặt hàng đề xuất

```
Khách chọn sản phẩm
        │
        ▼
[Thêm vào giỏ báo giá]    ← KHÔNG phải "Mua ngay" như Shopee
        │
        ▼
[Điền thông tin: Tên, Công ty, SĐT, Địa chỉ giao hàng]
        │
        ▼
[Gửi yêu cầu báo giá]
        │
        ▼
Sales LOTEC liên hệ lại trong 2h → Xác nhận giá + tồn kho
        │
        ▼
Khách xác nhận đơn hàng
        │
        ├── Đơn nhỏ (< 20 triệu) → Thanh toán online hoặc CK ngay
        └── Đơn lớn (> 20 triệu) → Ký hợp đồng → Thanh toán theo tiến độ
```

---

### 13.3 Các hình thức thanh toán cần tích hợp

#### Nhóm 1: Chuyển khoản ngân hàng (Ưu tiên cao nhất)

| Hình thức | Tích hợp | Phù hợp |
|---|---|---|
| **QR Code ngân hàng** | Hiển thị tĩnh trên trang thanh toán | Đơn hàng mọi giá trị |
| **VietQR** | API VietQR.io – tự động sinh QR theo số tiền | Rất tiện, không cần app riêng |
| **Internet Banking thông thường** | Hiển thị STK + tên + nội dung CK | Doanh nghiệp |

> 💡 VietQR hỗ trợ 30+ ngân hàng Việt Nam, tích hợp dễ, miễn phí API cơ bản.

---

#### Nhóm 2: Cổng thanh toán trực tuyến (Phase 2)

| Cổng | Phí | Ưu điểm | Phù hợp cho |
|---|---|---|---|
| **VNPay** | 1.1–1.5% | Phổ biến nhất VN, hỗ trợ ATM/Visa/QR | Đơn nhỏ lẻ < 20 triệu |
| **MoMo** | 1–1.5% | Ví điện tử phổ biến, cài đặt nhanh | Cá nhân, đơn nhỏ |
| **ZaloPay** | 1% | Khách dùng Zalo nhiều → tiện | Khách hàng quen Zalo |
| **PayOS** | 0.5–1% | Do VNPAY phát triển, tích hợp đơn giản | Thay thế cho VNPay |
| **Stripe** | 2.9% + $0.30 | Hỗ trợ Visa/Mastercard quốc tế | Khách hàng nước ngoài |

> ⚠️ Lưu ý: Cổng thanh toán yêu cầu đăng ký tài khoản doanh nghiệp + giấy phép kinh doanh + thời gian duyệt 5–15 ngày.

---

#### Nhóm 3: Thanh toán theo hợp đồng (Dành cho thi công & đơn lớn)

| Hình thức | Điều kiện |
|---|---|
| **Đặt cọc 30% – thanh toán 70% khi giao hàng** | Đơn > 50 triệu |
| **Thanh toán 3 đợt theo tiến độ** | Hợp đồng thi công lớn |
| **Công nợ 30–45 ngày** | Khách hàng doanh nghiệp có quan hệ lâu dài |
| **L/C (Letter of Credit)** | Nhập khẩu thiết bị quốc tế |

---

#### Nhóm 4: Trả góp / Tài chính (Phase 2 – Nếu cần)

| Đối tác | Hình thức | Phù hợp |
|---|---|---|
| **Home Credit / FE Credit** | Trả góp 0% cho cá nhân | Thiết bị nhỏ < 5 triệu |
| **MISA AMIS** | Quản lý công nợ B2B | Khách đại lý |

---

### 13.4 Giao diện trang thanh toán / Đặt hàng đề xuất

```
┌─────────────────────────────────────────────────────┐
│  GIỎ BÁO GIÁ CỦA BẠN                               │
│  ─────────────────────────────────────────────────  │
│  [Ảnh] Tên sản phẩm – Mã hàng   SL: [1▲▼]  Xóa ✕  │
│  [Ảnh] Tên sản phẩm – Mã hàng   SL: [2▲▼]  Xóa ✕  │
│  ─────────────────────────────────────────────────  │
│  Tạm tính: Liên hệ để báo giá chính xác             │
│                                                     │
│  THÔNG TIN LIÊN HỆ                                  │
│  Họ tên *        [________________]                 │
│  Công ty         [________________]                 │
│  Số điện thoại * [________________]                 │
│  Email           [________________]                 │
│  Ghi chú         [________________]                 │
│                                                     │
│  HÌNH THỨC NHẬN BÁO GIÁ                             │
│  ○ Gọi điện tư vấn     ○ Email báo giá PDF          │
│  ○ Chat Zalo            ○ Tự đặt hàng & thanh toán  │
│                                                     │
│          [   GỬI YÊU CẦU BÁO GIÁ   ]               │
└─────────────────────────────────────────────────────┘
```

---

### 13.5 Khuyến nghị theo giai đoạn

| Giai đoạn | Làm gì |
|---|---|
| **Phase 1 – Ra mắt** | VietQR + Chuyển khoản + Form báo giá qua email/Zalo |
| **Phase 2 – Tăng trưởng** | Tích hợp VNPay hoặc PayOS cho đơn nhỏ |
| **Phase 3 – Mở rộng** | Thêm Stripe cho khách quốc tế, hệ thống công nợ B2B |

> ✅ **Gợi ý thực tế:** Giai đoạn đầu **KHÔNG cần cổng thanh toán phức tạp**. Chỉ cần form báo giá tốt + VietQR + Zalo là đủ để vận hành. Tập trung vào chất lượng tư vấn hơn là tự động hóa thanh toán.

---

## Ghi Chú & Quyết Định Cần Chốt
