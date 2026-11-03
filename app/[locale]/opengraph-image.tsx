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

        <svg width="360" height="486" viewBox="0 0 360 486" style={{ position: "absolute", right: 72, top: 72 }}>
          <rect x="30" y="20" width="250" height="250" rx="18" fill="#101012" stroke="#2a2a2e" strokeWidth="2" />
          <circle cx="62" cy="52" r="7" fill={BRAND} />
          <rect x="80" y="46" width="80" height="12" rx="6" fill="#2a2a2e" />
          <rect x="50" y="86" width="210" height="82" rx="12" fill="#18181b" />
          <circle cx="96" cy="127" r="24" fill={BRAND} />
          <rect x="136" y="112" width="100" height="12" rx="6" fill="#d4d4d8" />
          <rect x="136" y="134" width="70" height="10" rx="5" fill="#52525b" />
          <rect x="50" y="196" width="90" height="34" rx="17" fill={BRAND} />
          <rect x="120" y="290" width="220" height="170" rx="16" fill="#101012" stroke="#2a2a2e" strokeWidth="2" />
          <rect x="144" y="322" width="64" height="10" rx="5" fill={BRAND} />
          <rect x="216" y="322" width="90" height="10" rx="5" fill="#3f3f46" />
          <rect x="160" y="350" width="100" height="10" rx="5" fill="#3f3f46" />
          <rect x="144" y="378" width="76" height="10" rx="5" fill={BRAND} />
          <path d="M10 470 C 70 330, 170 380, 230 190 S 320 60, 342 40" fill="none" stroke={BRAND} strokeWidth="4" strokeLinecap="round" />
          <rect x="2" y="462" width="16" height="16" fill={BG} stroke={BRAND} strokeWidth="3" />
          <rect x="222" y="182" width="16" height="16" fill={BG} stroke={BRAND} strokeWidth="3" />
          <rect x="334" y="32" width="16" height="16" fill={BG} stroke={BRAND} strokeWidth="3" />
        </svg>
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
