import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";

export const alt = "Fernando Camilotti — Software Engineer & Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const BG = "#0a0a0a";
const FG = "#f4f4f0";
const MUTED = "#a1a1aa";
const BRAND = "#c8f169";

export default async function OpenGraphImage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : "pt-BR";
  const dict = getDictionary(locale);

  const portrait = await readFile(path.join(process.cwd(), "assets/images/og-portrait.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  const [bold, regular] = await Promise.all([
    readFile(path.join(process.cwd(), "assets/fonts/Inter-Bold.ttf")),
    readFile(path.join(process.cwd(), "assets/fonts/Inter-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: BG,
          color: FG,
          fontFamily: "Inter",
          padding: 72,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            FC<span style={{ color: BRAND }}>.</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.04, letterSpacing: -3 }}>
              {dict.hero.title}
            </div>
            <div style={{ display: "flex", fontSize: 30, color: MUTED, marginTop: 28 }}>
              Fernando Camilotti · {dict.hero.location}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 28, color: BRAND, fontWeight: 700 }}>
            fernandocamilotti.com
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          width={380}
          height={475}
          alt=""
          style={{
            position: "absolute",
            right: 72,
            top: 78,
            borderRadius: 20,
            border: "2px solid #1f3a4d",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: bold, weight: 700, style: "normal" },
        { name: "Inter", data: regular, weight: 400, style: "normal" },
      ],
    }
  );
}
