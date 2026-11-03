/** Decorative: a UI wireframe, a code panel and a Bézier path — engineering meets design. */
export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 520"
      className="block h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      {/* grid */}
      <g className="stroke-border" strokeWidth="1">
        {[80, 160, 240, 320, 400, 480].map((v) => (
          <g key={v}>
            <line x1={v} y1="20" x2={v} y2="500" opacity="0.5" />
            <line x1="20" y1={v} x2="500" y2={v} opacity="0.5" />
          </g>
        ))}
      </g>

      {/* UI wireframe card */}
      <rect x="60" y="60" width="330" height="330" rx="20" className="fill-card stroke-border" strokeWidth="1.5" />
      <circle cx="90" cy="92" r="6" className="fill-brand" />
      <rect x="108" y="87" width="90" height="10" rx="5" className="fill-border" />
      <rect x="300" y="87" width="60" height="10" rx="5" className="fill-border" />
      <rect x="84" y="124" width="282" height="110" rx="12" className="fill-muted" />
      <circle cx="150" cy="180" r="30" className="fill-brand" opacity="0.9" />
      <rect x="200" y="160" width="130" height="12" rx="6" className="fill-foreground" opacity="0.8" />
      <rect x="200" y="184" width="96" height="10" rx="5" className="fill-muted-foreground" opacity="0.6" />
      <rect x="84" y="256" width="150" height="10" rx="5" className="fill-muted-foreground" opacity="0.5" />
      <rect x="84" y="276" width="200" height="10" rx="5" className="fill-muted-foreground" opacity="0.35" />
      <rect x="84" y="316" width="104" height="36" rx="18" className="fill-brand" />

      {/* code panel */}
      <rect x="210" y="270" width="270" height="200" rx="16" className="fill-card stroke-border" strokeWidth="1.5" />
      <circle cx="236" cy="294" r="5" className="fill-muted-foreground" opacity="0.5" />
      <circle cx="254" cy="294" r="5" className="fill-muted-foreground" opacity="0.5" />
      <circle cx="272" cy="294" r="5" className="fill-muted-foreground" opacity="0.5" />
      <rect x="236" y="320" width="70" height="9" rx="4.5" className="fill-brand" />
      <rect x="314" y="320" width="110" height="9" rx="4.5" className="fill-muted-foreground" opacity="0.45" />
      <rect x="252" y="342" width="120" height="9" rx="4.5" className="fill-muted-foreground" opacity="0.45" />
      <rect x="380" y="342" width="60" height="9" rx="4.5" className="fill-brand" opacity="0.7" />
      <rect x="252" y="364" width="84" height="9" rx="4.5" className="fill-brand" opacity="0.7" />
      <rect x="344" y="364" width="96" height="9" rx="4.5" className="fill-muted-foreground" opacity="0.45" />
      <rect x="252" y="386" width="140" height="9" rx="4.5" className="fill-muted-foreground" opacity="0.45" />
      <rect x="236" y="426" width="60" height="9" rx="4.5" className="fill-brand" />

      {/* Bézier path with handles */}
      <path d="M48 470 C 120 330, 250 380, 330 190 S 450 70, 470 60" fill="none" className="stroke-brand" strokeWidth="3" strokeLinecap="round" />
      <g className="stroke-brand" strokeWidth="1.5" strokeDasharray="4 4">
        <line x1="48" y1="470" x2="120" y2="330" />
        <line x1="330" y1="190" x2="250" y2="380" />
        <line x1="330" y1="190" x2="410" y2="40" />
      </g>
      <g className="fill-background stroke-brand" strokeWidth="2">
        <rect x="41" y="463" width="14" height="14" />
        <rect x="323" y="183" width="14" height="14" />
        <rect x="463" y="53" width="14" height="14" />
      </g>
      <g className="fill-brand">
        <circle cx="120" cy="330" r="5" />
        <circle cx="250" cy="380" r="5" />
        <circle cx="410" cy="40" r="5" />
      </g>

      <text x="404" y="130" className="fill-brand font-heading" fontSize="34" fontWeight="600">
        {"</>"}
      </text>
    </svg>
  );
}
