import Image from "next/image";
import type { Project } from "@/types/project.type";


type ProjectCardProps = {
    project: Project;
    index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const isEven = index % 2 === 0;

    return (
        <div className={`w-full flex flex-col md:flex-row items-center gap-8 lg:gap-12 py-16 px-4 md:py-12 lg:py-20 1720:px-16 justify-between xl:justify-center font-sans text-xs lg:text-sm font-light text-foreground ${ isEven ? "md:pl-8 md:pr-0 xl:pl-16" : "md:flex-row-reverse md:pr-8 md:pl-0 md:gap-2 xl:pr-16" }`}>
            <div className="flex flex-col gap-3 lg:gap-5 md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-lg">
                <div className="project-heading">
                    <div className="flex item justify-start gap-2 md:gap-4 mb-4">
                        { project.tags.map((tag, index) => (
                            <div key={index} className="px-2 lg:px-4 py-1 bg-surface-gray text-text-gray-200 text-xs rounded-4xl">{tag}</div>
                        ))}
                    </div>
                    <Image
                        src={project.logo.src}
                        alt={project.title}
                        width={project.logo.width}
                        height={project.logo.height}
                    />
                    <div className="flex gap-2 mt-3 lg:mt-5">
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
            <div className={`project-image overflow-hidden flex ${isEven ? "justify-start" : "justify-end"}`}>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={840}
                    height={800}
                    className={isEven ? "max-w-none w-110 sm:w-150 md:w-165 lg:w-200 xl:w-225 2xl:w-300" : "max-w-none w-110 sm:w-150 md:w-140 lg:w-180 xl:w-200 2xl:w-270"}
                />
            </div>
        </div>
    );
};