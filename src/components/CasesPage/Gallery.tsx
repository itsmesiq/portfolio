"use client";
import React from "react";
import type { Case } from "@/types/case.type";
import Image from "next/image";
import ImageViewer from "./ImageViewer";

type GalleryProps = {
    gallery: Case["gallery"];
};

export function Gallery({ gallery }: GalleryProps) {
    const [selectedImage, setSelectedImage] = React.useState<{ images: string[]; alt: string } | null>(null);

    return (
        <section className="w-full mb-22">
             <div className="grid grid-cols-1 md:grid-cols-2">
                {gallery.map((galleryItem, index) => (
                <div key={index} className="w-full h-[clamp(548px,50vw,620px)] overflow-hidden shrink-0 cursor-zoom-in" onClick={() => setSelectedImage({ images: galleryItem.images, alt: galleryItem.alt })}>
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

            {selectedImage && (
                <ImageViewer
                    images={selectedImage.images}
                    alt={selectedImage.alt}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </section>
    );
}