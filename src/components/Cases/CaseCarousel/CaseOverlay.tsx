import { CarouselNavigation } from "./CarouselNavigation";
import { Badges } from "./CaseOverlay/Badges";
import { Button } from "./CaseOverlay/Button";
import { ProjectLogo } from "./CaseOverlay/ProjectLogo";
import { Credits } from "./CaseOverlay/Credits";
import { Project } from "@/types/project.type";
import { AnimatePresence, motion } from "motion/react";

type CaseOverlayProps = {
    currentProject: Project;
    onNext: () => void;
    onPrevious: () => void;
    total: number;
    currentIndex: number;
    onSelect: (index: number) => void;
};

export function CaseOverlay({ currentProject, currentIndex, onNext, onPrevious, total, onSelect }: CaseOverlayProps) {
    return (
        <div className="w-full absolute bottom-0 left-0 right-0">
            <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[60%] px-4 md:px-10 xl:px-16 flex flex-col items-center gap-6 lg:gap-4">
                <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between items-start sm:items-center">
                    <AnimatePresence mode="wait">
                        <motion.div className="flex flex-col items-start gap-4"
                            key={currentProject.slug}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badges project={currentProject} index={currentIndex} />
                            <div className="flex flex-col items-start gap-3">
                                <div className="flex items-center h-10">
                                    <ProjectLogo project={currentProject} index={currentIndex} />
                                </div>
                                <Credits project={currentProject} index={currentIndex} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <Button project={currentProject} index={currentIndex} />
                </div>
                <CarouselNavigation onNext={onNext} onPrevious={onPrevious} total={total} currentIndex={currentIndex} onSelect={onSelect} />
            </div>
        </div>
    );
}