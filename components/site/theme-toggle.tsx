"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ label }: { label: string }) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
    >
      <Sun className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  );
}
