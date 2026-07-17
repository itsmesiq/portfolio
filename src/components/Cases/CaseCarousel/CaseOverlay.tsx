import { CarouselNavigation } from "./CarouselNavigation";
import { Badges } from "./CaseOverlay/Badges";
import { Button } from "./CaseOverlay/Button";
import { ProjectLogo } from "./CaseOverlay/ProjectLogo";
import { Credits } from "./CaseOverlay/Credits";
import { Project } from "@/types/project.type";

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
            <div className="max-w-270 px-16 flex flex-col items-center gap-4">
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col items-start gap-4">
                        <Badges project={currentProject} index={currentIndex} />
                        <div className="flex flex-col items-start gap-3">
                            <div className="flex items-center h-10">
                                <ProjectLogo project={currentProject} index={currentIndex} />
                            </div>
                            <Credits project={currentProject} index={currentIndex} />
                        </div>
                    </div>
                    <Button project={currentProject} index={currentIndex} />
                </div>
                <div>
                    <CarouselNavigation onNext={onNext} onPrevious={onPrevious} total={total} currentIndex={currentIndex} onSelect={onSelect} />
                </div>
            </div>
        </div>
    );
}