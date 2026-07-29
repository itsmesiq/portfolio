"use client";
import React from "react";
import type { Case } from "@/types/case.type";
import Image from "next/image";
import ImageViewer from "./ImageViewer";
import { GalleryCarousel } from "./GalleryCarousel";
import { motion } from "motion/react";


type GalleryProps = {
    gallery: Case["gallery"];
};

export function Gallery({ gallery }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

    const currentItem = selectedIndex !== null ? gallery[selectedIndex] : null;

    const previousItem = gallery[(selectedIndex! - 1 + gallery.length) % gallery.length];

    const nextItem = gallery[(selectedIndex! + 1) % gallery.length];

    return (
        <section className="w-full mb-16 md:mb-22">
            <div className="md:hidden">
                <GalleryCarousel gallery={gallery} onSelect={(index) => setSelectedIndex(index)} />
            </div>
            <div className="hidden md:grid md:grid-cols-2">
               {gallery.map((galleryItem, index) => (
               <div key={index} className="w-full h-auto overflow-hidden shrink-0 cursor-zoom-in" onClick={() => setSelectedIndex(index)}>
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                        <Image
                            src={galleryItem.thumb}
                            alt={galleryItem.alt}
                            width={1440}
                            height={1200}
                            loading="eager"
                            className="object-cover object-top"
                        />
                   </motion.div>
               </div>
               ))}
            </div>

            {selectedIndex !== null && (
                <ImageViewer
                    galleryItem={currentItem!}
                    previousItem={previousItem}
                    nextItem={nextItem}
                    onClose={() => setSelectedIndex(null)}
                    onPrevious={() => setSelectedIndex((i) =>
                        i === null ? 0 : (i - 1 + gallery.length) % gallery.length
                    )}
                    onNext={() => setSelectedIndex((i) =>
                        i === null ? 0 : (i + 1) % gallery.length
                    )}
                />
            )}
        </section>
    );
}