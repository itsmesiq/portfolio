import Image from "next/image";
import { BackBtn } from "../ui/BackBtn";
import type { Case } from "@/types/case.type";

type CaseHeroProps = {
    project: Case;
};

export default function HeroCases({ project }: CaseHeroProps) {    
    return (
        <section id="hero" className="w-full mt-22 px-4 sm:px-10 md:px-1 lg:px-16 bg-background">
            <div className="flex justify-end mx-16">
                <BackBtn />
            </div>
            <div className="flex items-center py-16 justify-between 2xl:justify-center 2xl:gap-16">
                <div className="pb-8 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-start gap-3">
                            {project.tags.map((tag, tagIndex) => (
                                <div key={tagIndex}>
                                    <span className="inline-block bg-foreground text-background text-xs font-normal px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                </div>
                            ))}
                        </div>                        
                        <project.logo className="w-104.5 h-12" />
                        <div className="flex gap-3 font-heading text-foreground text-sm font-light max-w-104.5">
                            <div className="w-0.5 bg-primary"></div>
                            <p>{project.subtitle}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14 font-sans max-w-112.75">
                        <p className="text-sm text-muted">{project.description}</p>
                        <span className="text-xs font-medium text-foreground">{project.credits}</span>
                    </div>
                </div>
                <Image
                    src={project.preview}
                    alt={project.title}
                    width={1000}
                    height={558.25}
                    className="h-auto object-cover w-206 2xl:w-250"
                />


            </div>
        </section>
    );
}