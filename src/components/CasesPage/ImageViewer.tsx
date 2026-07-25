"use client";
import { CloseIcon } from "../icons";
import { useEffect } from "react";
import OverlayNextImage from "./OverlayNextImage";

type ImageViewerProps = {
    galleryItem: {
        title: string;
        images: string[];
        alt: string;
    };
    previousItem: {
        title: string;
        images: string[];
        alt: string;
    } | null;
    nextItem: {
        title: string;
        images: string[];
        alt: string;
    } | null;
    onClose: () => void;
    onPrevious?: () => void;
    onNext?: () => void;
}

export default function ImageViewer({ galleryItem, previousItem, nextItem, onClose, onPrevious, onNext }: ImageViewerProps ) {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm flex items-center justify-center p-8">
            <div className="relative">
                <div onClick={(e) => e.stopPropagation()} className="image-viewer-scroll pr-2 w-[90vw] h-[90vh] overflow-y-auto">
                    <div className="flex flex-col">
                        {galleryItem.images.map((image, index) => (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img key={index} src={image} alt={`${galleryItem.alt} ${index + 1}`} className="w-full h-auto" draggable={false} />
                        ))}
                    </div>
                    <button
                        onClick={onClose}
                        className="top-[7%] right-[7%] px-4 py-4 bg-surface/60 backdrop-blur-sm rounded-2xl fixed"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                <OverlayNextImage 
                    previousItem={previousItem!}
                    nextItem={nextItem!}
                    onPrevious={onPrevious}
                    onNext={onNext}
                />
            </div>
        </div>
    );
}