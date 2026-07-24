"use client";
import { CloseIcon } from "../icons";
import { useEffect } from "react";

type ImageViewerProps = {
    images: string[];
    alt: string;
    onClose: () => void;
}

export default function ImageViewer( { images, alt, onClose }: ImageViewerProps ) {

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
            <div onClick={(e) => e.stopPropagation()} className="relative w-[80vw] h-[80vh] overflow-y-auto">
                <div className="flex flex-col">
                    {images.map((image, index) => (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img key={index} src={image} alt={`${alt} ${index + 1}`} className="w-full h-auto" draggable={false} />
                    ))}
                </div>
                <button
                    onClick={onClose}
                    className="top-[15%] right-[12%] px-4 py-4 bg-surface/60 backdrop-blur-sm rounded-2xl fixed"
                >
                    <CloseIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}