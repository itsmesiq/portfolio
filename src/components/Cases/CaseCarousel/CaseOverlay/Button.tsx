import { MoreIcon } from "@/components/icons";
import type { Project } from "@/types/project.type";

type ButtonProps = {
    project: Project;
    index: number;
};

export function Button({ project, index }: ButtonProps) {
    return (
        <a href={`/cases/${project.slug}`} rel="noopener noreferrer" key={index} className="inline-flex gap-2 items-center py-2 px-4 border border-border font-sans text-xs md:text-base text-foreground rounded-lg hover:bg-secondary-hover transition-colors duration-500">
            <span>Saiba Mais</span>
            <MoreIcon className="size-5" />
        </a>
    );
}