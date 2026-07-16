import { ComponentType, SVGProps } from "react";

export type Skill = {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    title: string;
    description: string;
};