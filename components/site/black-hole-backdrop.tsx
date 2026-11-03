/**
 * Hero backdrop: a triangular "black hole". Nested, slightly twisted triangles
 * recede toward a dark core with a lime event-horizon rim. The rings are
 * self-similar, so scaling + rotating the whole drawing by one step maps each
 * ring onto the next, which makes a seamless, very slow inward spiral using a
 * single CSS transform animation (see `.hole-spin` in globals.css).
 * Static markup injected as raw HTML so React does not hydrate it.
 */

const R0 = 296; // outer ring circumradius (viewBox units)
const RATIO = 0.84; // each ring is this much smaller than the previous one
const RINGS = 26;
const TWIST = 2.2; // degrees of extra rotation per ring

function triangle(radius: number, rotation: number) {
  return Array.from({ length: 3 }, (_, k) => {
    const angle = ((-90 + 120 * k + rotation) * Math.PI) / 180;
    return `${(radius * Math.cos(angle)).toFixed(2)},${(radius * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");
}

function buildTunnel() {
  const rings = Array.from({ length: RINGS }, (_, i) => {
    const radius = R0 * Math.pow(RATIO, i);
    return `<polygon points="${triangle(radius, i * TWIST)}"/>`;
  }).join("");
  return `<svg class="hole-spin" viewBox="-300 -300 600 600" aria-hidden="true" focusable="false"><g class="hole-lines">${rings}</g></svg>`;
}

function buildCore() {
  const core = triangle(30, 0);
  return `<svg viewBox="-300 -300 600 600" aria-hidden="true" focusable="false">
<polygon points="${triangle(30, 0)}" class="hole-rim-soft"/>
<polygon points="${triangle(30, 0)}" class="hole-rim-mid"/>
<polygon points="${core}" class="hole-void"/>
</svg>`;
}

const TUNNEL = buildTunnel();
const CORE = buildCore();

/**
 * Full-width backdrop for the hero section only (absolute, not fixed). The
 * square drawing is much wider than the viewport, so its outer rings sweep
 * across the whole section; the void sits right of the text column.
 */
export function BlackHoleBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hole-fade absolute inset-0">
        <div className="hole-stage">
          <div className="hole-glow absolute inset-0" />
          <div
            className="hole-mask absolute inset-0"
            dangerouslySetInnerHTML={{ __html: TUNNEL }}
          />
          <div
            className="absolute inset-0"
            dangerouslySetInnerHTML={{ __html: CORE }}
          />
        </div>
      </div>
    </div>
  );
}
