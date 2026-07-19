import type { Project } from "@/types/project.type";
import { motion } from "motion/react";
import Image from "next/image";

type CaseImageProps = {
    project: Project;
    index: number;
    activeIndex: number;
};

export function CaseImage({ project, activeIndex, index }: CaseImageProps) {
    return (
        <div className="relative h-[clamp(544px,55vw,820px)] overflow-hidden shrink-0">
            <motion.div className="w-full h-full"
                animate={{ scale: index === activeIndex ? 1.03 : 1, opacity: index === activeIndex ? 1 : 0.5 }}
                transition={{ duration: 0.3, ease: "easeOut",}}>
                <Image
                    src={project.preview}
                    alt={project.title}
                    width={1152}
                    height={2598}
                    loading="eager"
                    className="object-cover object-top"
                />
            </motion.div>
        </div>
    );
}