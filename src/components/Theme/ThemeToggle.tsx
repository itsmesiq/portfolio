"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
        onClick={toggleTheme}
        className="relative flex items-center justify-center rounded-lg border border-border w-10 h-10 text-foreground hover:bg-secondary-hover transition-colors duration-500"
    >
        <SunIcon className="absolute size-6 transition-all duration-300 dark:rotate-0 hidden dark:block" />
        <MoonIcon className="absolute size-6 transition-all duration-300 dark:rotate-90 block dark:hidden" />
    </button>
  );
}