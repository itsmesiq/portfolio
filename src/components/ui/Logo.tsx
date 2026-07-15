"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function Logo() {
    const { resolvedTheme } = useTheme();

    if (!resolvedTheme) {
        return null;
    }

    return (
        <Image
            src={
                resolvedTheme === "dark" 
                ? "/img/logo-darkmode.svg" 
                : "/img/logo-lightmode.svg"                
            }
            alt="siq.dev"
            width={244}
            height={48}
        />
    );
}