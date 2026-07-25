"use client";
import React from "react";
import type { Case } from "@/types/case.type";
import Image from "next/image";
import ImageViewer from "./ImageViewer";

type GalleryProps = {
    gallery: Case["gallery"];
};

export function Gallery({ gallery }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

    const currentItem = selectedIndex !== null ? gallery[selectedIndex] : null;

    const previousItem = gallery[(selectedIndex! - 1 + gallery.length) % gallery.length];

    const nextItem = gallery[(selectedIndex! + 1) % gallery.length];

    return (
        <section className="w-full mb-22">
             <div className="grid grid-cols-1 md:grid-cols-2">
                {gallery.map((galleryItem, index) => (
                <div key={index} className="w-full h-[clamp(548px,50vw,620px)] overflow-hidden shrink-0 cursor-zoom-in" onClick={() => setSelectedIndex(index)}>
                    <Image
                        src={galleryItem.thumb}
                        alt={galleryItem.alt}
                        width={1440}
                        height={1200}
                        loading="eager"
                        className="object-cover object-top"
                    />
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