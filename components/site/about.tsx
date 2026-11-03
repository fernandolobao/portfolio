import Image from "next/image";

import { Section } from "@/components/site/section";
import type { Dictionary } from "@/lib/i18n/types";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <Section id="about" index={2} title={dict.about.title}>
      <div className="grid gap-12 md:grid-cols-[380px_1fr] lg:gap-16">
        <div>
          <Image
            src="/images/me-illustration.svg"
            alt={dict.about.photoAlt}
            width={800}
            height={1000}
            unoptimized
            className="h-auto w-full max-w-[380px] [-webkit-mask-image:radial-gradient(ellipse_76%_58%_at_50%_44%,#000_55%,transparent_100%)] [mask-image:radial-gradient(ellipse_76%_58%_at_50%_44%,#000_55%,transparent_100%)]"
          />
        </div>
        <div>
          <div className="max-w-2xl space-y-5 text-lg">
            {dict.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h3 className="mt-10 font-heading text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {dict.about.languagesTitle}
          </h3>
          <dl className="mt-4 grid max-w-xl grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
            {dict.about.languages.map((language) => (
              <div key={language.name}>
                <dt className="font-medium">{language.name}</dt>
                <dd className="text-sm text-muted-foreground">{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
          </Section>
  );
}
