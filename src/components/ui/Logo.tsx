"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function Logo() {
    const { resolvedTheme } = useTheme();

    const logo =
        resolvedTheme === "light"
            ? "/img/logo-lightmode.svg"
            : "/img/logo-darkmode.svg";

    return (
        <Image
            src={logo}
            alt="siq.dev"
            width={244}
            height={40}
        />
    );
}