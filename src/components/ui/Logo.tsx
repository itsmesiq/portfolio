"use client";

import { useTheme } from "next-themes";
import { LogoDark, LogoLight } from "../icons";

export function Logo() {
    const { resolvedTheme } = useTheme();

    return resolvedTheme === "light"
        ? <LogoLight className="w-61 h-10" />
        : <LogoDark className="w-61 h-10" />
}