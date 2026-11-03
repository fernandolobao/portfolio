import { Section } from "@/components/site/section";
import { skillGroups } from "@/config/skills";
import type { Dictionary } from "@/lib/i18n/types";

export function Skills({ dict }: { dict: Dictionary }) {
  return (
    <Section id="skills" index={3} title={dict.skills.title} intro={dict.skills.intro}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section
            key={group.id}
            aria-labelledby={`skills-${group.id}`}
            className="rounded-lg border border-border bg-card p-6"
          >
            <h3 id={`skills-${group.id}`} className="font-heading text-xl font-semibold">
              {dict.skills.groups[group.id]}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
