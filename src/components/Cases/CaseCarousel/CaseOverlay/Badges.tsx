import type { Project } from "@/types/project.type";

type BadgesProps = {
    project: Project;
    index: number;
};

export function Badges({ project, index }: BadgesProps) {
    return (
        <div className="flex justify-start gap-3">
            {project.tags.map((tag, tagIndex) => (
                <div key={tagIndex}>
                    <span className="inline-block bg-foreground text-background text-xs font-normal px-3 py-1 rounded-full">
                        {tag}
                    </span>
                </div>
            ))}
        </div>
    );
}