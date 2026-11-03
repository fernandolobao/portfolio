import { skillGroups } from "@/config/skills";

/**
 * Decorative background: slow columns of skill names (code on the left,
 * design in the accent color on the right). Pure CSS transforms, no JS,
 * hidden from assistive tech and frozen with `prefers-reduced-motion`.
 */
const columns = [
  { id: "frontend", accent: false, duration: 90 },
  { id: "backend", accent: false, duration: 120 },
  { id: "infra", accent: false, duration: 105 },
  { id: "design", accent: true, duration: 135 },
] as const;

export function SkillsBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="skills-backdrop pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="mx-auto grid h-full max-w-[1400px] grid-cols-2 gap-6 px-5 sm:px-8 md:grid-cols-4">
        {columns.map((column, index) => {
          const group = skillGroups.find((g) => g.id === column.id);
          if (!group) return null;
          const text = group.skills.join("\n");
          return (
            <div
              key={column.id}
              className={index > 1 ? "hidden overflow-hidden md:block" : "overflow-hidden"}
            >
              <div
                className="skills-backdrop-track"
                style={{
                  animationDuration: `${column.duration}s`,
                  animationDirection: index % 2 === 0 ? "normal" : "reverse",
                }}
              >
                {[0, 1, 2].map((copy) => (
                  <p
                    key={copy}
                    className={
                      "whitespace-pre-line font-heading text-lg font-semibold leading-[2.8] tracking-tight md:text-2xl md:leading-[2.6] " +
                      (column.accent ? "text-brand/[0.075]" : "text-foreground/[0.04]")
                    }
                  >
                    {text}
                    {"\n"}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
