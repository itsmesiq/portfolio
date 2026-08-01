"use client";

import { useTheme } from "next-themes";
import { LogoDark, LogoLight } from "../icons";

export function Logo() {
    const { resolvedTheme } = useTheme();

    return resolvedTheme === "light"
        ? <LogoDark className="w-49.25 h-8 md:w-61 md:h-10 text-foreground" />
        : <LogoDark className="w-49.25 h-8 md:w-61 md:h-10 text-foreground" />
}