"use client";

import { cases } from "@/data/projects";
import { useEffect, useState } from "react";
import { CaseImage } from "./CaseImage";
import { CaseOverlay } from "./CaseOverlay";
import useEmblaCarousel from "embla-carousel-react";

export function CaseCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    const [currentIndex, setCurrentIndex] = useState(0);

    const currentProject = cases[currentIndex];

    const next = () => {
        emblaApi?.scrollNext();
    };

    const previous = () => {
        emblaApi?.scrollPrev();
    };

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setCurrentIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);

        onSelect();

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <div>
            <div className="relative py-12">
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="grid grid-flow-col auto-cols-[90%] md:auto-cols-[85%] lg:auto-cols-[80%] xl:auto-cols-[75%] 2xl:auto-cols-[60%]">
                        {cases.map((project, index) => (
                            <CaseImage key={`${project.slug}-${index}`} project={project} index={index} activeIndex={currentIndex} />
                        ))}
                    </div>
                </div>
                <div className="absolute left-0 right-0 bottom-11 bg-[linear-gradient(180deg,rgba(16,16,33,0)_0%,#000109_100%)] w-full h-[82%] sm:h-[44.15%]"></div>
                <CaseOverlay
                    currentProject={currentProject}
                    currentIndex={currentIndex}
                    onNext={next}
                    onPrevious={previous}
                    total={cases.length}
                    onSelect={setCurrentIndex}
                />
            </div>
        </div>
    );
}