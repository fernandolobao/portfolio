export type IllustrationId =
  | "zeroserver-control"
  | "ragnarok"
  | "datalab"
  | "aidron-ds"
  | "aidron-spa";

const svgProps = {
  viewBox: "0 0 640 400",
  width: 640,
  height: 400,
  "aria-hidden": true,
  focusable: "false",
  className: "block h-full w-full",
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

/** ZeroServer Control: a distributed mesh of nodes + the menu bar dropdown + a 24 h telemetry chart. */
function ZeroServerControl() {
  const nodes: [number, number][] = [[44, 96], [96, 66], [150, 108], [210, 74], [262, 116], [66, 160], [124, 180], [190, 152], [246, 190], [40, 214], [100, 232], [168, 220], [228, 240], [292, 152]];
  const links: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [2, 7], [6, 7], [7, 8], [4, 8], [5, 9], [6, 10], [10, 11], [11, 7], [11, 12], [8, 12], [4, 13], [13, 8]];
  const lit = [2, 3, 7, 8, 11];
  const rows = [
    { y: 122, dot: "fill-brand", name: 92, cpu: 0.55, ram: 0.4, disk: 0.25 },
    { y: 170, dot: "fill-brand", name: 74, cpu: 0.82, ram: 0.62, disk: 0.3 },
    { y: 218, dot: "fill-brand opacity-50", name: 104, cpu: 0.18, ram: 0.3, disk: 0.22 },
    { y: 266, dot: "fill-muted-foreground opacity-60", name: 84, cpu: 0, ram: 0, disk: 0 },
  ];
  const line = "M46 336 L82 322 L118 328 L154 300 L190 312 L226 282 L262 296";
  return (
    <svg {...svgProps}>
      <rect width="640" height="400" className="fill-muted" />
      {/* the mesh */}
      <g className="stroke-brand" strokeWidth="1" opacity="0.38">
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          {lit.includes(i) ? <circle cx={x} cy={y} r="9" className="fill-brand" opacity="0.16" /> : null}
          <circle cx={x} cy={y} r={lit.includes(i) ? 4.5 : 3} className={lit.includes(i) ? "fill-brand" : "fill-muted-foreground"} opacity={lit.includes(i) ? 1 : 0.7} />
        </g>
      ))}
      {/* telemetry card */}
      <rect x="28" y="262" width="262" height="110" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="46" y="278" width="56" height="7" rx="3.5" className="fill-border" />
      <path d={line + " L262 346 L46 346 Z"} className="fill-brand" opacity="0.14" />
      <path d={line} fill="none" className="stroke-brand" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="262" cy="296" r="3.6" className="fill-brand" />
      {/* menu bar */}
      <rect x="0" y="0" width="640" height="34" className="fill-card" />
      <rect x="0" y="33" width="640" height="1" className="fill-border" />
      {[18, 70, 126, 170].map((x, i) => (
        <rect key={i} x={x} y="12" width={i === 0 ? 10 : 36} height="9" rx="4.5" className="fill-border" />
      ))}
      <rect x="420" y="12" width="26" height="9" rx="4.5" className="fill-border" />
      <rect x="456" y="12" width="20" height="9" rx="4.5" className="fill-border" />
      <rect x="486" y="5" width="34" height="24" rx="6" className="fill-muted" />
      <circle cx="503" cy="17" r="9" className="fill-brand" />
      <rect x="499" y="12" width="8" height="10" rx="4" fill="none" stroke="#0a0a0a" strokeWidth="1.8" />
      <circle cx="503" cy="17" r="1.4" fill="#0a0a0a" />
      <rect x="532" y="12" width="26" height="9" rx="4.5" className="fill-border" />
      <rect x="568" y="12" width="52" height="9" rx="4.5" className="fill-border" />
      {/* dropdown */}
      <rect x="338" y="44" width="282" height="332" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
      <circle cx="362" cy="72" r="11" className="fill-brand" />
      <rect x="358" y="66" width="8" height="12" rx="4" fill="none" stroke="#0a0a0a" strokeWidth="1.8" />
      <rect x="382" y="63" width="92" height="9" rx="4.5" className="fill-foreground" opacity="0.8" />
      <rect x="382" y="78" width="60" height="7" rx="3.5" className="fill-muted-foreground" opacity="0.5" />
      <rect x="548" y="62" width="52" height="22" rx="11" className="fill-brand" opacity="0.2" />
      <circle cx="562" cy="73" r="3.4" className="fill-brand" />
      <rect x="570" y="70" width="22" height="6" rx="3" className="fill-brand" />
      <rect x="354" y="100" width="250" height="1" className="fill-border" />
      {rows.map((r, i) => (
        <g key={i}>
          <circle cx="364" cy={r.y + 10} r="5.5" className={r.dot} />
          <rect x="380" y={r.y} width={r.name} height="9" rx="4.5" className="fill-foreground" opacity="0.78" />
          <rect x="380" y={r.y + 16} width="58" height="6" rx="3" className="fill-muted-foreground" opacity="0.45" />
          {[["cpu", r.cpu], ["ram", r.ram], ["disk", r.disk]].map(([k, v], j) => (
            <g key={k as string}>
              <rect x="484" y={r.y + 2 + j * 11} width="100" height="5" rx="2.5" className="fill-border" />
              <rect x="484" y={r.y + 2 + j * 11} width={100 * (v as number)} height="5" rx="2.5" className="fill-brand" opacity={r.cpu === 0 ? 0 : 1} />
            </g>
          ))}
          {i < rows.length - 1 ? <rect x="354" y={r.y + 38} width="250" height="1" className="fill-border" opacity="0.7" /> : null}
        </g>
      ))}
      <rect x="354" y="322" width="118" height="34" rx="17" className="fill-muted" />
      <rect x="376" y="336" width="74" height="7" rx="3.5" className="fill-muted-foreground" opacity="0.6" />
      <rect x="484" y="322" width="120" height="34" rx="17" fill="none" className="stroke-brand" strokeWidth="1.6" />
      <rect x="508" y="336" width="72" height="7" rx="3.5" className="fill-brand" />
    </svg>
  );
}

/** Architecture of ZeroServer Control (language-neutral labels). */
export function ZeroServerArchitecture() {
  const mods = [
    { y: 74, t: "UI", s: "SwiftUI · MenuBarExtra" },
    { y: 138, t: "Account", s: "APIClient · GraphQL · session" },
    { y: 202, t: "Remote", s: "polling · node actions" },
    { y: 266, t: "Controller", s: "launchctl · osascript" },
  ];
  const dots: [number, number][] = [[430, 62], [470, 84], [514, 58], [556, 86], [596, 60], [452, 110], [534, 108]];
  const dl: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [3, 6], [5, 6]];
  const arrow = "fill-muted-foreground";
  return (
    <svg {...svgProps}>
      <defs>
        <marker id="zs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className={arrow} />
        </marker>
      </defs>
      <rect width="640" height="400" className="fill-muted" />
      {/* the app */}
      <rect x="24" y="24" width="296" height="352" rx="16" className="fill-card stroke-border" strokeWidth="1.5" />
      <circle cx="48" cy="50" r="11" className="fill-brand" />
      <rect x="44" y="44" width="8" height="12" rx="4" fill="none" stroke="#0a0a0a" strokeWidth="1.8" />
      <text x="68" y="55" className="fill-foreground" fontSize="15" fontWeight="600">ZeroServer Control</text>
      {mods.map((m) => (
        <g key={m.t}>
          <rect x="44" y={m.y} width="256" height="52" rx="10" className="fill-muted stroke-border" strokeWidth="1.2" />
          <text x="60" y={m.y + 22} className="fill-foreground" fontSize="14" fontWeight="600">{m.t}</text>
          <text x="60" y={m.y + 40} className="fill-muted-foreground" fontSize="11.5">{m.s}</text>
        </g>
      ))}
      {[126, 190, 254].map((y) => (
        <line key={y} x1="172" y1={y} x2="172" y2={y + 12} className="stroke-muted-foreground" strokeWidth="1.4" markerEnd="url(#zs-arrow)" opacity="0.7" />
      ))}
      {/* nodes */}
      <g className="stroke-brand" strokeWidth="1" opacity="0.4">
        {dl.map(([a, b], i) => (
          <line key={i} x1={dots[a][0]} y1={dots[a][1]} x2={dots[b][0]} y2={dots[b][1]} />
        ))}
      </g>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.6} className={i % 3 === 0 ? "fill-brand" : "fill-muted-foreground"} />
      ))}
      <text x="508" y="140" textAnchor="middle" className="fill-muted-foreground" fontSize="11.5">Nodes</text>
      {/* GraphQL API */}
      <rect x="404" y="166" width="212" height="60" rx="12" fill="none" className="stroke-brand" strokeWidth="1.6" />
      <text x="420" y="192" className="fill-foreground" fontSize="14" fontWeight="600">GraphQL API</text>
      <text x="420" y="211" className="fill-muted-foreground" fontSize="11.5">api.zeroserver.cc</text>
      <line x1="510" y1="165" x2="510" y2="146" className="stroke-muted-foreground" strokeWidth="1.4" markerEnd="url(#zs-arrow)" opacity="0.7" />
      <line x1="300" y1="164" x2="402" y2="190" className="stroke-brand" strokeWidth="1.6" markerEnd="url(#zs-arrow)" />
      <text x="338" y="168" className="fill-muted-foreground" fontSize="11">GraphQL</text>
      {/* Keychain */}
      <rect x="404" y="244" width="212" height="52" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
      <text x="420" y="268" className="fill-foreground" fontSize="14" fontWeight="600">Keychain</text>
      <text x="420" y="285" className="fill-muted-foreground" fontSize="11.5">refresh token · this device only</text>
      <path d="M300 184 L352 184 L352 270 L402 270" fill="none" className="stroke-muted-foreground" strokeWidth="1.4" markerEnd="url(#zs-arrow)" opacity="0.7" />
      {/* launchd */}
      <rect x="404" y="314" width="212" height="52" rx="12" className="fill-card stroke-border" strokeWidth="1.4" />
      <text x="420" y="338" className="fill-foreground" fontSize="14" fontWeight="600">launchd</text>
      <text x="420" y="355" className="fill-muted-foreground" fontSize="11.5">cc.zeroserver.agent</text>
      <path d="M300 292 L362 292 L362 340 L402 340" fill="none" className="stroke-muted-foreground" strokeWidth="1.4" markerEnd="url(#zs-arrow)" opacity="0.7" />
    </svg>
  );
}

/** From Figma to the products: the engineering path of the design system (language-neutral labels). */
export function RagnarokPipeline() {
  const stages = [
    { x: 28, y: 44, t: "Figma", s: "tokens · variants", accent: false },
    { x: 238, y: 44, t: "Handoff", s: "DesignOps · DevOps", accent: false },
    { x: 448, y: 44, t: "Tokens", s: "Sass variables", accent: false },
    { x: 28, y: 176, t: "Components", s: "React · TypeScript", accent: true },
    { x: 238, y: 176, t: "Storybook", s: "docs · guidelines", accent: true },
    { x: 448, y: 176, t: "Package", s: "published · versioned", accent: true },
  ];
  const w = 164, h = 72;
  const arrow = "fill-muted-foreground";
  return (
    <svg {...svgProps}>
      <defs>
        <marker id="rg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className={arrow} />
        </marker>
      </defs>
      <rect width="640" height="400" className="fill-muted" />
      <text x="28" y="28" className="fill-muted-foreground" fontSize="11.5" letterSpacing="2">DESIGN</text>
      <text x="28" y="160" className="fill-brand" fontSize="11.5" letterSpacing="2">ENGINEERING</text>
      {stages.map((st) => (
        <g key={st.t}>
          <rect x={st.x} y={st.y} width={w} height={h} rx="14" className={st.accent ? "fill-card stroke-brand" : "fill-card stroke-border"} strokeWidth={st.accent ? 1.6 : 1.4} />
          <text x={st.x + 18} y={st.y + 33} className="fill-foreground" fontSize="17" fontWeight="600">{st.t}</text>
          <text x={st.x + 18} y={st.y + 54} className="fill-muted-foreground" fontSize="12">{st.s}</text>
        </g>
      ))}
      {[[28 + w, 80, 238, 80], [238 + w, 80, 448, 80], [28 + w, 212, 238, 212], [238 + w, 212, 448, 212]].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1 + 6} y1={y1} x2={x2 - 6} y2={y2} className="stroke-muted-foreground" strokeWidth="1.6" markerEnd="url(#rg-arrow)" opacity="0.8" />
      ))}
      <path d="M530 116 L530 146 L110 146 L110 174" fill="none" className="stroke-muted-foreground" strokeWidth="1.6" markerEnd="url(#rg-arrow)" opacity="0.8" />
      {/* products */}
      <path d="M530 250 L530 292" fill="none" className="stroke-brand" strokeWidth="1.8" markerEnd="url(#rg-arrow)" />
      <rect x="28" y="296" width="584" height="72" rx="14" fill="none" className="stroke-brand" strokeWidth="1.6" />
      <text x="46" y="328" className="fill-foreground" fontSize="17" fontWeight="600">Data products</text>
      <text x="46" y="350" className="fill-muted-foreground" fontSize="12">one system · several products and brands</text>
      {[386, 424, 462, 500].map((x, i) => (
        <rect key={x} x={x + 40} y="316" width="26" height="26" rx="7" className={i === 0 ? "fill-brand" : "fill-muted stroke-border"} strokeWidth="1.2" />
      ))}
    </svg>
  );
}

export const illustrationIds: IllustrationId[] = [
  "zeroserver-control",
  "ragnarok",
  "datalab",
  "aidron-ds",
  "aidron-spa",
];

const map: Record<IllustrationId, () => JSX.Element> = {
  "zeroserver-control": ZeroServerControl,
  ragnarok: Ragnarok,
  datalab: Datalab,
  "aidron-ds": AidronDS,
  "aidron-spa": AidronSpa,
};

export function ProjectIllustration({ id }: { id: IllustrationId }) {
  const Component = map[id];
  return <Component />;
}
