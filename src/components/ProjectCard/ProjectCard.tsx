import Image from "next/image";
import type { Project } from "@/types/project.type";


type ProjectCardProps = {
    project: Project;
    index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const isEven = index % 2 === 0;

    return (
        <div className={`w-full flex items-center gap-22 py-20 justify-between font-sans text-sm font-light text-foreground ${ isEven ? "flex-row pl-16 2xl:pl-50" : "flex-row-reverse pr-16 2xl:pr-64" }`}>
            <div className="flex flex-col gap-5 max-w-lg 2xl:max-w-2xl">
                <div className="project-heading">
                    <div className="flex item justify-start gap-4 mb-4">
                        { project.tags.map((tag, index) => (
                            <div key={index} className="px-4 py-1 bg-surface-gray text-text-gray-200 text-xs rounded-4xl">{tag}</div>
                        ))}
                    </div>
                    <Image
                        src={project.logo.src}
                        alt={project.title}
                        width={project.logo.width}
                        height={project.logo.height}
                    />
                    <div className="flex gap-2 mt-5">
                        <div className="w-0.5 bg-light-blue"></div>
                        <p>{project.credits}</p>
                    </div>
                </div>
                <div className="project-description">
                    <p>{project.description}</p>
                    <p className="mt-3 text-light-blue font-medium">{project.highlight}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold">Minha contribuição</h3>
                    <ul>
                        {project.contribution.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold">Escopo do projeto</h3>
                    <p>{project.text}</p>
                    <ul>
                        {project.scope.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold">{project.handoff?.title}</h3>
                    <p>{project.handoff?.content}</p>
                </div>
            </div>
            <div className="project-image">
                <div className="project-gallery">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={840}
                        height={800}
                    />
                </div>
            </div>
        </div>
    );
};