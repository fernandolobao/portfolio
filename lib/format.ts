import type { Locale } from "@/lib/i18n/config";

export function formatMonthYear(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatPeriod(
  start: Date,
  end: Date | "Present",
  locale: Locale,
  presentLabel: string
): string {
  const from = formatMonthYear(start, locale);
  const to = end === "Present" ? presentLabel : formatMonthYear(end, locale);
  return `${from} – ${to}`;
}

export function formatYears(start: number, end: number): string {
  return start === end ? `${start}` : `${start} – ${end}`;
}
