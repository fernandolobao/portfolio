import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  index: number;
  title: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  index,
  title,
  intro,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("py-20 md:py-28", className)}
    >
      <div className="container">
        <header className="mb-12 max-w-2xl md:mb-16">
          <p className="section-eyebrow" aria-hidden="true">
            {String(index).padStart(2, "0")}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 font-heading text-4xl font-semibold tracking-tight md:text-5xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-lg text-muted-foreground">{intro}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
