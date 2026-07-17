import type { Project } from "@/types/project.type";

type LogoProps = {
    project: Project;
    index: number;
};

export function ProjectLogo({ project, index }: LogoProps) {
    return (
        <div key={index}>
            {project.logo && ( <project.logo.svg className={project.logo.classname} />)}
        </div>
    );
}