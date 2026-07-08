import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "tai lieu",
    "HO SO NANG LUC VS3.pdf",
  );

  try {
    const fileBuffer = await fs.readFile(filePath);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="ho-so-nang-luc-lotec-viet-nam.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Không tìm thấy hồ sơ năng lực.", { status: 404 });
  }
}
