import { ComponentType, SVGProps } from "react";

export type Case ={
    slug: string;
    title: string;
    color: string;
    logo: {
        svg: ComponentType<SVGProps<SVGSVGElement>>;
        size: string;
    };
    client: string;
    preview: string;
    tags: string[];
    subtitle: string;
    description: string;
    credits: string;
    highlights: {
        icon: ComponentType<SVGProps<SVGSVGElement>>;
        title: string;
        subtitle: string;
        width: string;
    }[];

    challenge: string;
    contribution: string[];
    scope: string[];
    gallery: {
        title: string;
        thumb: string;
        alt: string;
        images: string[];
    }[];
}