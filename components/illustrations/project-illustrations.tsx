import type { IllustrationId } from "@/config/constants";

const svgProps = {
  viewBox: "0 0 640 400",
  "aria-hidden": true,
  focusable: "false",
  className: "h-full w-full",
  preserveAspectRatio: "xMidYMid slice",
} as const;

function Ragnarok() {
  return (
    <svg {...svgProps}>
      <rect width="640" height="400" className="fill-muted" />
      {/* tokens */}
      <rect x="32" y="32" width="170" height="336" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
      {[
        "fill-brand",
        "fill-foreground",
        "fill-muted-foreground",
        "fill-border",
        "fill-brand opacity-40",
      ].map((c, i) => (
        <g key={i}>
          <circle cx="68" cy={78 + i * 58} r="18" className={c} />
          <rect x="100" y={68 + i * 58} width="70" height="8" rx="4" className="fill-border" />
          <rect x="100" y={84 + i * 58} width="46" height="6" rx="3" className="fill-border" opacity="0.6" />
        </g>
      ))}
      {/* components */}
      <rect x="222" y="32" width="250" height="336" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="246" y="60" width="120" height="38" rx="19" className="fill-brand" />
      <rect x="378" y="60" width="70" height="38" rx="19" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="246" y="122" width="202" height="40" rx="8" className="fill-background stroke-border" strokeWidth="1.5" />
      <rect x="260" y="138" width="80" height="8" rx="4" className="fill-border" />
      <rect x="246" y="186" width="44" height="24" rx="12" className="fill-brand" />
      <circle cx="278" cy="198" r="8" className="fill-background" />
      <rect x="300" y="192" width="90" height="10" rx="5" className="fill-border" />
      <rect x="246" y="228" width="20" height="20" rx="5" className="fill-brand" />
      <rect x="276" y="233" width="110" height="10" rx="5" className="fill-border" />
      <rect x="246" y="266" width="202" height="86" rx="10" className="fill-muted stroke-border" strokeWidth="1.5" />
      <rect x="262" y="284" width="100" height="10" rx="5" className="fill-foreground" opacity="0.8" />
      <rect x="262" y="306" width="150" height="8" rx="4" className="fill-muted-foreground" opacity="0.5" />
      <rect x="262" y="324" width="120" height="8" rx="4" className="fill-muted-foreground" opacity="0.5" />
      {/* type scale */}
      <rect x="492" y="32" width="116" height="336" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
      <text x="510" y="110" className="fill-foreground font-heading" fontSize="56" fontWeight="600">Aa</text>
      <text x="510" y="170" className="fill-foreground font-heading" fontSize="36" fontWeight="600">Aa</text>
      <text x="510" y="216" className="fill-muted-foreground font-heading" fontSize="24" fontWeight="500">Aa</text>
      <text x="510" y="250" className="fill-muted-foreground font-heading" fontSize="16">Aa</text>
      <rect x="510" y="290" width="80" height="6" rx="3" className="fill-brand" />
      <rect x="510" y="308" width="64" height="6" rx="3" className="fill-brand" opacity="0.6" />
      <rect x="510" y="326" width="48" height="6" rx="3" className="fill-brand" opacity="0.35" />
    </svg>
  );
}

function Datalab() {
  const bars = [90, 140, 110, 190, 160, 230, 200];
  return (
    <svg {...svgProps}>
      <rect width="640" height="400" className="fill-muted" />
      {/* KPI cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={32 + i * 200} y="32" width="184" height="78" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
          <rect x={52 + i * 200} y="52" width="64" height="8" rx="4" className="fill-muted-foreground" opacity="0.5" />
          <rect x={52 + i * 200} y="72" width={i === 0 ? 100 : 78} height="20" rx="6" className={i === 0 ? "fill-brand" : "fill-foreground"} opacity={i === 0 ? 1 : 0.8} />
        </g>
      ))}
      {/* bar chart */}
      <rect x="32" y="130" width="384" height="238" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
      {bars.map((h, i) => (
        <rect key={i} x={60 + i * 48} y={340 - h} width="28" height={h} rx="6" className={i === 5 ? "fill-brand" : "fill-border"} />
      ))}
      <path d="M74 250 L122 200 L170 222 L218 160 L266 184 L314 150 L362 168" fill="none" className="stroke-foreground" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      {/* donut */}
      <rect x="436" y="130" width="172" height="238" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
      <circle cx="522" cy="226" r="46" fill="none" className="stroke-border" strokeWidth="18" />
      <circle cx="522" cy="226" r="46" fill="none" className="stroke-brand" strokeWidth="18" strokeDasharray="170 289" strokeLinecap="round" transform="rotate(-90 522 226)" />
      <rect x="462" y="304" width="52" height="8" rx="4" className="fill-brand" />
      <rect x="462" y="324" width="96" height="8" rx="4" className="fill-border" />
      <rect x="462" y="344" width="72" height="8" rx="4" className="fill-border" />
    </svg>
  );
}

function AidronDS() {
  return (
    <svg {...svgProps}>
      <rect width="640" height="400" className="fill-muted" />
      {/* stacked layers */}
      <rect x="120" y="70" width="400" height="260" rx="20" className="fill-card stroke-border" strokeWidth="1.5" opacity="0.5" transform="translate(40 40)" />
      <rect x="120" y="70" width="400" height="260" rx="20" className="fill-card stroke-border" strokeWidth="1.5" opacity="0.75" transform="translate(20 20)" />
      <rect x="120" y="70" width="400" height="260" rx="20" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="152" y="102" width="120" height="14" rx="7" className="fill-foreground" opacity="0.8" />
      <rect x="152" y="128" width="200" height="9" rx="4.5" className="fill-muted-foreground" opacity="0.5" />
      {/* buttons */}
      <rect x="152" y="166" width="104" height="38" rx="19" className="fill-brand" />
      <rect x="268" y="166" width="104" height="38" rx="19" className="fill-card stroke-brand" strokeWidth="2" />
      <rect x="384" y="166" width="104" height="38" rx="19" className="fill-muted" />
      {/* chips + input */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={152 + i * 62} y="228" width="52" height="22" rx="11" className={i === 1 ? "fill-brand" : "fill-muted stroke-border"} strokeWidth="1" />
      ))}
      <rect x="152" y="268" width="336" height="40" rx="8" className="fill-background stroke-border" strokeWidth="1.5" />
      <rect x="168" y="284" width="110" height="8" rx="4" className="fill-border" />
      {/* tokens */}
      {["fill-brand", "fill-foreground", "fill-muted-foreground", "fill-border"].map((c, i) => (
        <circle key={i} cx={470 + (i % 2) * 28} cy={110 + Math.floor(i / 2) * 28} r="10" className={c} />
      ))}
    </svg>
  );
}

function AidronSpa() {
  return (
    <svg {...svgProps}>
      <rect width="640" height="400" className="fill-muted" />
      <rect x="60" y="30" width="520" height="340" rx="16" className="fill-card stroke-border" strokeWidth="1.5" />
      <path d="M60 46 a16 16 0 0 1 16 -16 h488 a16 16 0 0 1 16 16 v22 h-520z" className="fill-muted" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={82 + i * 16} cy="49" r="4.5" className={i === 0 ? "fill-brand" : "fill-border"} />
      ))}
      <rect x="400" y="44" width="40" height="8" rx="4" className="fill-border" />
      <rect x="450" y="44" width="40" height="8" rx="4" className="fill-border" />
      <rect x="500" y="44" width="56" height="10" rx="5" className="fill-brand" />
      {/* hero */}
      <rect x="96" y="104" width="230" height="22" rx="8" className="fill-foreground" opacity="0.85" />
      <rect x="96" y="136" width="170" height="22" rx="8" className="fill-foreground" opacity="0.85" />
      <rect x="96" y="176" width="210" height="9" rx="4.5" className="fill-muted-foreground" opacity="0.5" />
      <rect x="96" y="194" width="170" height="9" rx="4.5" className="fill-muted-foreground" opacity="0.5" />
      <rect x="96" y="226" width="110" height="38" rx="19" className="fill-brand" />
      <rect x="360" y="96" width="190" height="180" rx="14" className="fill-muted" />
      <circle cx="455" cy="170" r="42" className="fill-brand" opacity="0.9" />
      <path d="M360 276 L420 220 L470 258 L510 226 L550 262 V262 L550 276z" className="fill-border" />
      {/* feature cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={96 + i * 152} y="296" width="136" height="52" rx="10" className="fill-muted" />
          <rect x={110 + i * 152} y="310" width="44" height="8" rx="4" className="fill-brand" />
          <rect x={110 + i * 152} y="326" width="90" height="7" rx="3.5" className="fill-border" />
        </g>
      ))}
    </svg>
  );
}

const map: Record<IllustrationId, () => JSX.Element> = {
  ragnarok: Ragnarok,
  datalab: Datalab,
  "aidron-ds": AidronDS,
  "aidron-spa": AidronSpa,
};

export function ProjectIllustration({ id }: { id: IllustrationId }) {
  const Component = map[id];
  return <Component />;
}
