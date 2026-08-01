"use client";

import { ReactNode } from "react";

interface ThemeSwitchProps {
    light: ReactNode;
    dark: ReactNode;
}

export function ThemeSwitch({ light, dark }: ThemeSwitchProps) {
    return (
        <>
            <div className="block dark:hidden">
                {light}
            </div>
            <div className="hidden dark:block">
                {dark}
            </div>
        </>
    )
}