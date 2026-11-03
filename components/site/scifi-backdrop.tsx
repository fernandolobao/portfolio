/**
 * Decorative sci-fi background: a perspective grid that slowly advances, a
 * faint radar with a rotating sweep, and sparse lights drifting upward.
 * No text; pure CSS transforms and opacity (compositor-friendly), no JS,
 * hidden from assistive tech and frozen under `prefers-reduced-motion`.
 */
const dots = [
  { left: "8%", top: "72%", d: 26, delay: 0 },
  { left: "17%", top: "38%", d: 31, delay: 6 },
  { left: "26%", top: "84%", d: 22, delay: 12 },
  { left: "34%", top: "56%", d: 29, delay: 3 },
  { left: "47%", top: "78%", d: 25, delay: 9 },
  { left: "55%", top: "30%", d: 33, delay: 15 },
  { left: "63%", top: "66%", d: 27, delay: 5 },
  { left: "72%", top: "88%", d: 23, delay: 11 },
  { left: "81%", top: "48%", d: 30, delay: 2 },
  { left: "90%", top: "70%", d: 28, delay: 8 },
  { left: "41%", top: "18%", d: 35, delay: 14 },
  { left: "95%", top: "26%", d: 32, delay: 18 },
] as const;

export function ScifiBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="scifi-radar">
        <div className="scifi-sweep" />
      </div>
      <div className="scifi-grid-wrap">
        <div className="scifi-grid" />
      </div>
      {dots.map((dot, index) => (
        <span
          key={index}
          className={index > 7 ? "scifi-dot hidden md:block" : "scifi-dot"}
          style={
            {
              left: dot.left,
              top: dot.top,
              "--d": `${dot.d}s`,
              "--delay": `-${dot.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
