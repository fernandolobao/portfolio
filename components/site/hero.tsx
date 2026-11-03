import { ArrowDown, MapPin } from "lucide-react";

import { StaticSvg } from "@/components/illustrations/static-svg";
import type { Dictionary } from "@/lib/i18n/types";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="hero-title" className="pb-20 pt-14 md:pb-28 md:pt-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {dict.hero.location}
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-heading text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {dict.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              {dict.hero.subtitle}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{dict.hero.current}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-brand-foreground transition-opacity hover:opacity-90"
              >
                {dict.hero.ctaWork}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
              >
                {dict.hero.ctaContact}
              </a>
            </div>
          </div>
          <StaticSvg name="hero" className="mx-auto w-full max-w-sm lg:max-w-none" />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:mt-24 md:grid-cols-4">
          {dict.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-2 bg-background p-5 md:p-6">
              <dt className="text-sm text-muted-foreground">{metric.label}</dt>
              <dd className="order-first font-heading text-4xl font-semibold text-brand md:text-5xl">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
