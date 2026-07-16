import { ComponentType, SVGProps } from "react";

export type Project = {
    slug: string;
    logo: ComponentType<SVGProps<SVGSVGElement>>;
    preview: string;
    href: string;
    title: string;
    agency: string;
    tags: string[];
    full: {
        description: string;
        highlight?: string;
        contribution: string[];
        text: string;
        scope: string[];
        handoff?: {
            title: string;
            content: string;
        },
        images: string[];
    }
};

export type FeaturedCompany = {
    label: string;
    image: ComponentType<SVGProps<SVGSVGElement>>;
    className: string;
};