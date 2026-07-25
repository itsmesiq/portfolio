import { BackArrow, ForwardArrow, SiqIcon } from "../icons";
import GlassCard from "../ui/GlassCard";
import { motion } from "motion/react";

type OverlayNextImageProps = {
    onPrevious?: () => void;
    onNext?: () => void;
    previousItem?: {
        title: string;
        /* images: string[];
        alt: string; */
    };
    nextItem?: {
        title: string;
        /* images: string[];
        alt: string; */
    };
}

export default function OverlayNextImage({ onPrevious, onNext, previousItem, nextItem }: OverlayNextImageProps) {
    return (
        <div onClick={(e) => e.stopPropagation()} className="fixed bottom-[6vh] w-250 left-1/2 -translate-x-1/2 z-50">
            <GlassCard className="px-8 py-4">
                <div className="grid grid-cols-3 items-center">
                    <div>             
                        <motion.button onClick={onPrevious} whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }} className="flex items-center gap-3 cursor-pointer text-foreground">
                            <BackArrow className="size-8" />
                            <div className="text-left flex flex-col">
                                <span className="font-sans text-sm font-normal uppercase m-0">Anterior</span>
                                <h3 className="font-heading text-lg font-bold  leading-4.5">{previousItem?.title}</h3>
                            </div>
                        </motion.button>
                    </div>
                    <div className="flex justify-center">
                        <SiqIcon className="size-10" /> 
                    </div>
                    <div className="flex justify-end">                 
                        <motion.button onClick={onNext} whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }} className="flex items-center gap-3 cursor-pointer text-foreground">
                            <div className="text-right flex flex-col">
                                <span className="font-sans text-sm font-normal uppercase m-0">Próximo</span>
                                <h3 className="font-heading text-lg font-bold leading-4.5">{nextItem?.title}</h3> 
                            </div>  
                            <ForwardArrow className="size-8" />
                        </motion.button>  
                    </div>                                
                </div>
            </GlassCard>
        </div>
    );
}