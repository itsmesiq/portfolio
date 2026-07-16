import { ComponentType, SVGProps } from "react";

export type Social = {
    label: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    href: string;
}