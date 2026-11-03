import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const bold = await readFile(path.join(process.cwd(), "assets/fonts/Inter-Bold.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#f4f4f0",
          fontSize: 92,
          fontWeight: 700,
          fontFamily: "Inter",
        }}
      >
        FC<span style={{ color: "#c8f169" }}>.</span>
      </div>
    ),
    { ...size, fonts: [{ name: "Inter", data: bold, weight: 700, style: "normal" }] }
  );
}
