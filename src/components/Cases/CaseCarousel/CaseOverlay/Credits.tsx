import type { Project } from "@/types/project.type";

type CreditsProps = {
    project: Project;
    index: number;
};

export function Credits({ project, index }: CreditsProps) {
    return (
        <div key={index} className="flex gap-2 font-sans text-xs text-muted">
            <div className="w-0.5 bg-primary"></div>
            <p>{project.credits}</p>
        </div>
    );
}
