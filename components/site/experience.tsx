import { Section } from "@/components/site/section";
import { experiences } from "@/config/experience";
import { formatPeriod, formatYears } from "@/lib/format";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

function CompanyName({ name, url }: { name: string; url?: string }) {
  if (!url) return <>{name}</>;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="underline-offset-4 hover:text-brand hover:underline"
    >
      {name}
    </a>
  );
}

export function Experience({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const featured = experiences.filter((e) => e.featured);
  const earlier = experiences.filter((e) => !e.featured);

  return (
    <Section id="experience" index={4} title={dict.experience.title} intro={dict.experience.intro}>
      <ol className="space-y-12">
        {featured.map((exp) => {
          const text = dict.experience.items[exp.id];
          return (
            <li key={exp.id} className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
              <p className="text-sm tabular-nums text-muted-foreground md:pt-2">
                {formatPeriod(exp.startDate, exp.endDate, locale, dict.ui.present)}
              </p>
              <div>
                <h3 className="font-heading text-2xl font-semibold tracking-tight">
                  {text.position}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  <CompanyName name={exp.company} url={exp.companyUrl} />
                  {text.location ? ` · ${text.location}` : ""}
                </p>
                {text.summary ? <p className="mt-4 max-w-2xl">{text.summary}</p> : null}
                {text.bullets?.length ? (
                  <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-muted-foreground marker:text-brand">
                    {text.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {exp.skills.length ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <li key={skill} className="chip">
                        {skill}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

      <h3 className="mb-6 mt-20 font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground">
        {dict.experience.earlierTitle}
      </h3>
      <ul className="divide-y divide-border border-y border-border">
        {earlier.map((exp) => {
          const text = dict.experience.items[exp.id];
          return (
            <li key={exp.id} className="grid gap-1 py-5 md:grid-cols-[200px_1fr] md:gap-10">
              <p className="text-sm tabular-nums text-muted-foreground">
                {exp.endDate === "Present"
                  ? `${exp.startDate.getUTCFullYear()} – ${dict.ui.present}`
                  : formatYears(exp.startDate.getUTCFullYear(), exp.endDate.getUTCFullYear())}
              </p>
              <div>
                <p className="font-medium">
                  {text.position} ·{" "}
                  <CompanyName name={exp.company} url={exp.companyUrl} />
                </p>
                {text.oneLiner ? (
                  <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{text.oneLiner}</p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
