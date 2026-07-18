import type { Project } from "@/types/project.type";
import Image from "next/image";

type CaseImageProps = {
    project: Project;
    index: number;
    activeIndex: number;
};

export function CaseImage({ project, activeIndex, index }: CaseImageProps) {
    return (
        <div className="relative h-[clamp(544px,55vw,820px)] overflow-hidden shrink-0">
            <Image
                src={project.preview}
                alt={project.title}
                width={1152}
                height={2598}
                loading="eager"
                className="object-cover object-top"
            />

            <div className={`
                absolute inset-0 bg-black transition-opacity duration-500
                ${
                    index === activeIndex
                        ? "opacity-0"
                        : "opacity-50"
                }`} 
            />
        </div>
    );
}