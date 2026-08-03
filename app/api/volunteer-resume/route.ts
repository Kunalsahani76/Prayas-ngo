import { createHash } from "crypto";
import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(["pdf", "docx"]);

export async function POST(request: Request) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const uploadPreset = process.env.CLOUDINARY_RESUME_UPLOAD_PRESET;

  if (!cloudName || !apiKey || !apiSecret || !uploadPreset) {
    return NextResponse.json(
      { error: "Resume uploads are not configured yet." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const resume = formData.get("resume");

  if (!(resume instanceof File)) {
    return NextResponse.json({ error: "Please choose a resume file." }, { status: 400 });
  }

  const extension = resume.name.split(".").pop()?.toLowerCase();
  if (!extension || !ALLOWED_EXTENSIONS.has(extension)) {
    return NextResponse.json({ error: "Only PDF and DOCX resumes are allowed." }, { status: 400 });
  }

  if (resume.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: "Resume must be 10MB or smaller." }, { status: 400 });
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const signature = createHash("sha1")
    .update(`timestamp=${timestamp}&upload_preset=${uploadPreset}${apiSecret}`)
    .digest("hex");

  const cloudinaryData = new FormData();
  cloudinaryData.append("file", resume, resume.name);
  cloudinaryData.append("upload_preset", uploadPreset);
  cloudinaryData.append("timestamp", String(timestamp));
  cloudinaryData.append("api_key", apiKey);
  cloudinaryData.append("signature", signature);

  const cloudinaryResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`,
    { method: "POST", body: cloudinaryData }
  );
  const cloudinaryResult = await cloudinaryResponse.json();

  if (!cloudinaryResponse.ok) {
    return NextResponse.json(
      { error: cloudinaryResult.error?.message ?? "Cloudinary upload failed." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    secureUrl: cloudinaryResult.secure_url,
    originalFilename: cloudinaryResult.original_filename,
  });
}
