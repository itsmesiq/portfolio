import { ComponentType, SVGProps } from "react";

export type Project = {
    slug: string;
    logo: {
        svg: ComponentType<SVGProps<SVGSVGElement>>;
        classname: string;
    };
    preview: string;
    href: string;
    title: string;
    credits: string;
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