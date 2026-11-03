import type { Dictionary } from "@/lib/i18n/types";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {dict.meta.siteName}. {dict.footer.rights}
        </p>
        <p>{dict.footer.location}</p>
      </div>
    </footer>
  );
}
