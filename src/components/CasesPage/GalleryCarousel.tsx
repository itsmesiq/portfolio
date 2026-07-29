import type { Case } from "@/types/case.type";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { CarouselNavigation } from "@/components/Cases/CaseCarousel/CarouselNavigation";
import { useEffect, useState } from "react";

type GalleryCarouselProps = {
    gallery: Case["gallery"];
    onSelect: (index: number) => void;
};

export function GalleryCarousel({ gallery, onSelect }: GalleryCarouselProps) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    const next = () => {
        emblaApi?.scrollNext();
    };

    const previous = () => {
        emblaApi?.scrollPrev();
    };

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
        <div className="md:hidden flex flex-col gap-6 justify-center items-center">
            <div ref={emblaRef} className="overflow-hidden">
                <div className="grid grid-flow-col auto-cols-[100%]">
                    {gallery.map((galleryItem, index) => (
                        <div key={index} className="w-full h-125 shrink-0 cursor-zoom-in" onClick={() => onSelect(index)}>
                            <Image
                                src={galleryItem.thumbMobile}
                                alt={galleryItem.alt}
                                width={1440}
                                height={1200}
                                loading="eager"
                                className="object-cover object-top"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <CarouselNavigation onNext={next} onPrevious={previous} total={gallery.length} currentIndex={currentIndex} onSelect={onSelect} />
        </div>
    );
}