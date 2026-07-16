"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme !== "light";

  return (
    <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="flex items-center justify-center rounded-lg border border-border w-10 h-10 text-foreground hover:bg-secondary-hover transition-colors duration-500"
    >
        {isDark ? <SunIcon className="size-6" /> : <MoonIcon className="size-6" />}
    </button>
  );
}