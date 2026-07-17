"use client";

import { cases } from "@/data/projects";
import { useLayoutEffect, useRef, useState } from "react";
import { CaseImage } from "./CaseImage";
import { CaseOverlay } from "./CaseOverlay";
import { motion } from "motion/react";

export function CaseCarousel() {
    const slides = [
        cases[cases.length - 1],
        ...cases,
        cases[0]
    ];

    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const [currentIndex, setCurrentIndex] = useState(1);

    const currentProject = slides[currentIndex];

    const next = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1 );
    };

    const previous = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const trackRef = useRef<HTMLDivElement>(null);
    const [slideWidth, setSlideWidth] = useState(0);

    useLayoutEffect(() => {
        if (!trackRef.current) return;

        const update = () => {
            const slide = trackRef.current!.firstElementChild as HTMLElement;

            setSlideWidth(slide.clientWidth);
        };

        update();

        const observer = new ResizeObserver(update);
        observer.observe(trackRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <div className="relative py-12">
                <div className="overflow-hidden">
                    <motion.div 
                        ref={trackRef}
                        className="grid grid-flow-col xl:auto-cols-[75%] 2xl:auto-cols-[60%]"
                        animate={{ x: -(currentIndex * slideWidth) }}
                        transition={
                            transitionEnabled
                            ? { duration: 0.7, ease: "easeOut" }
                            : { duration: 0, ease: "linear" }
                        }
                        onAnimationComplete={() => {
                            if (currentIndex === slides.length - 1) {
                                setTransitionEnabled(false);
                                setCurrentIndex(1);

                                requestAnimationFrame(() => {
                                    setTransitionEnabled(true);
                                });
                            }

                            if (currentIndex === 0) {
                                setTransitionEnabled(false);
                                setCurrentIndex(slides.length - 2);

                                requestAnimationFrame(() => {
                                    setTransitionEnabled(true);
                                });
                            }
                        }}
                    >
                        {slides.map((project, index) => (
                            <CaseImage key={`${project.slug}-${index}`} project={project} index={index} />
                        ))}
                    </motion.div>
                </div>
                <div className="absolute left-0 right-0 bottom-11 bg-[linear-gradient(180deg,rgba(16,16,33,0)_0%,#000109_100%)] w-full h-90.5"></div>
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