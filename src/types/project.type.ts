export type Project = {
    tags: string[];
    title: string;
    logo: {
        src: string;
        width: number;
        height: number;
    };
    credits: string;
    description: string;
    highlight?: string;
    contribution: string[];
    text: string;
    scope: string[];
    handoff?: {
        title: string;
        content: string;
    }
    image: string;
};