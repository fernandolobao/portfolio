import { Section } from "@/components/site/section";
import { education } from "@/config/education";
import { publications } from "@/config/publications";
import { formatYears } from "@/lib/format";
import type { Dictionary } from "@/lib/i18n/types";

const subheading =
  "font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground";

export function Education({ dict }: { dict: Dictionary }) {
  return (
    <Section id="education" index={5} title={dict.education.title}>
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h3 className="sr-only">{dict.nav.education}</h3>
          <ol className="space-y-8">
            {education.map((item) => {
              const text = dict.education.items[item.id];
              return (
                <li key={item.id} className="border-l-2 border-border pl-6">
                  <p className="text-sm tabular-nums text-muted-foreground">
                    {formatYears(item.startYear, item.endYear)}
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold">{text.degree}</p>
                  <p className="text-muted-foreground">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:text-brand hover:underline"
                    >
                      {item.institution}
                    </a>
                  </p>
                  {text.detail ? (
                    <p className="mt-2 max-w-xl text-sm text-muted-foreground">{text.detail}</p>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className={subheading}>{dict.education.publicationsTitle}</h3>
            <ul className="mt-6 space-y-6">
              {publications.map((pub) => (
                <li key={pub.id} className="rounded-lg border border-border bg-card p-5">
                  <p className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span className="chip">{dict.education.kinds[pub.kind]}</span>
                    <span className="tabular-nums">{pub.year}</span>
                  </p>
                  <p className="mt-3 font-heading text-lg font-semibold leading-snug">
                    {pub.title}
                  </p>
                  {pub.authors ? (
                    <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>
                  ) : null}
                  {pub.venue ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {pub.venue}
                      {pub.pages ? `, ${pub.year}, p. ${pub.pages}` : ""}
                    </p>
                  ) : null}
                  {dict.education.notes[pub.id] ? (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {dict.education.notes[pub.id]}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={subheading}>{dict.education.certificationsTitle}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-brand">
              {dict.education.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={subheading}>{dict.education.awardsTitle}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-brand">
              {dict.education.awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
