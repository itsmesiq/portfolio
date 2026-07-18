import type { Project } from "@/types/project.type";
import Image from "next/image";

type CaseImageProps = {
    project: Project;
    index: number;
    activeIndex: number;
};

export function CaseImage({ project, activeIndex, index }: CaseImageProps) {
    return (
        <div className="relative w-full shrink-0">
            <Image
                src={project.preview}
                alt={project.title}
                width={1080}
                height={724}
                loading="eager"
                className="w-full h-auto object-cover"
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