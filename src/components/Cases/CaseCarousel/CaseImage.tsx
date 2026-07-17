import type { Project } from "@/types/project.type";
import Image from "next/image";

type CaseImageProps = {
    project: Project;
    index: number;
};

export function CaseImage({ project }: CaseImageProps) {
    return (
        <div className="w-full shrink-0">
            <Image
                src={project.preview}
                alt={project.title}
                width={1080}
                height={724}
                loading="eager"
                className="w-full h-auto object-cover"
            />
        </div>
    );
}