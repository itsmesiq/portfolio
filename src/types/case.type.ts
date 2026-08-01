import { ComponentType, SVGProps } from "react";

export type Case ={
    slug: string;
    title: string;
    primary: string;
    secondary: string;
    terciary: string;
    logo: {
        svg: ComponentType<SVGProps<SVGSVGElement>>;
        size: string;
        featuredSize: string;
    };
    client: string;
    mockup: string;
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
        thumbMobile: string;
        alt: string;
        images: string[];
    }[];
}