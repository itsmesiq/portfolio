"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        <Image
            src={theme === "dark" ? "/img/icon/sun.svg" : "/img/icon/moon.svg"}
            alt="Toggle theme"
            width={24}
            height={24}
        />
    </button>
  );
}