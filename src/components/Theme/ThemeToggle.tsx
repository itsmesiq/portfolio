"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) {
    return null;
  }

  return (
    <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="flex items-center justify-center rounded-lg border border-border w-10 h-10 hover:bg-secondary-hover transition-colors duration-500"
    >
        <Image
            src={resolvedTheme === "dark" ? "/img/icon/sun.svg" : "/img/icon/moon.svg"}
            alt="Toggle theme"
            width={24}
            height={24}
        />
    </button>
  );
}