import { ArrowUpRight } from "lucide-react";

import { StaticSvg } from "@/components/illustrations/static-svg";
import { Section } from "@/components/site/section";
import { Projects } from "@/config/projects";
import type { Locale } from "@/lib/i18n/config";
import { formatYears } from "@/lib/format";
import type { Dictionary } from "@/lib/i18n/types";

export function Work({ dict }: { dict: Dictionary; locale: Locale }) {
  return (
    <Section id="work" index={1} title={dict.work.title} intro={dict.work.intro}>
      <ol className="grid gap-6 md:grid-cols-2">
        {Projects.map((project, index) => {
          const text = dict.projects[project.id];
          return (
            <li key={project.id} className="min-w-0">
              <article
                aria-labelledby={`project-${project.id}`}
                className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card"
              >
                <div
                  className="relative w-full shrink-0 overflow-hidden border-b border-border bg-muted"
                  style={{ paddingTop: "62.5%" }}
                >
                  <StaticSvg
                    name={project.illustration}
                    className="absolute inset-0 overflow-hidden"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-heading text-brand" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>{" "}
                    · {project.company} ·{" "}
                    {formatYears(
                      project.startDate.getUTCFullYear(),
                      project.endDate.getUTCFullYear()
                    )}
                  </p>
                  <h3
                    id={`project-${project.id}`}
                    className="mt-2 font-heading text-2xl font-semibold tracking-tight"
                  >
                    {text.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{text.role}</p>
                  <p className="mt-4">{text.summary}</p>

                  {text.results.length > 0 ? (
                    <dl
                      aria-label={dict.work.resultsLabel}
                      className="mt-5 grid grid-cols-1 gap-4 border-y border-border py-4 sm:grid-cols-2"
                    >
                      {text.results.map((result) => (
                        <div key={result.label} className="flex flex-col">
                          <dt className="text-sm text-muted-foreground">{result.label}</dt>
                          <dd className="order-first font-heading text-3xl font-semibold text-brand">
                            {result.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}

                  <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-muted-foreground marker:text-brand">
                    {text.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-hidden="false">
                    {project.techStack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {project.repoLink ? (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${dict.work.repoLabel}: ${text.name}`}
                      className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
                    >
                      {dict.work.repoLabel}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
