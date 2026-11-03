import { ArrowUpRight, Mail } from "lucide-react";

import { Section } from "@/components/site/section";
import { SocialLinks } from "@/config/socials";
import type { Dictionary } from "@/lib/i18n/types";

export function Contact({ dict }: { dict: Dictionary }) {
  const links = [
    { label: dict.contact.links.linkedin, href: SocialLinks.linkedin },
    { label: dict.contact.links.github, href: SocialLinks.github },
    { label: dict.contact.links.lattes, href: SocialLinks.lattes },
  ];

  return (
    <Section id="contact" index={6} title={dict.contact.title} intro={dict.contact.text}>
      <a
        href={`mailto:${SocialLinks.email}`}
        className="inline-flex items-center gap-3 break-all font-heading text-2xl font-semibold tracking-tight text-brand underline-offset-8 hover:underline sm:text-4xl md:text-5xl"
      >
        <Mail className="hidden h-8 w-8 shrink-0 sm:block md:h-10 md:w-10" aria-hidden="true" />
        <span>
          <span className="sr-only">{dict.contact.emailCta}: </span>
          {SocialLinks.email}
        </span>
      </a>
      <ul className="mt-12 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer me"
              className="inline-flex items-center gap-1 rounded-full border border-border px-5 py-2.5 font-medium transition-colors hover:bg-muted"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
