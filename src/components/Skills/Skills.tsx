'use client';

import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselIndicators } from "../Cases/CaseCarousel/CarouselIndicators";
import { useEffect, useState } from "react";

export default function Skills() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "center",
        active: true,
        breakpoints: {
            '(min-width: 1280px)': { active: false },
        },
    });

    const [currentIndex, setCurrentIndex] = useState(0);

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
        <section id="skills" className="w-full my-22">
            <div className="font-heading mb-6 flex flex-col items-center gap-0">
                <span className="text-xl font-normal text-accent">Expertise</span>
                <h2 className="text-3xl font-semibold text-foreground text-center">Design & Desenvolvimento</h2>
            </div>
            <div ref={emblaRef} className="overflow-hidden py-5 px-5 sm:px-10 lg:px-16">
                <div className="grid grid-flow-col auto-cols-max gap-8 xl:gap-10 xl:justify-center">
                    {skills.map((skill) => (
                        <SkillCard key={skill.label} skill={skill} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-2 xl:hidden">
                <CarouselIndicators total={skills.length} currentIndex={currentIndex} onSelect={setCurrentIndex} />
            </div>
        </section>
    );
}