import type { Case } from "@/types/case.type";

type LogoProps = {
    project: Case;
    index: number;
};

export function ProjectLogo({ project, index }: LogoProps) {
    return (
        <div key={index} className="text-muted dark:text-foreground">
            {project.logo && ( <project.logo.svg className={project.logo.size} />)}
        </div>
    );
}