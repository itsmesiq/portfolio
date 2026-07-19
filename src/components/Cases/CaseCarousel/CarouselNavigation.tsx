import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { CarouselIndicators } from "./CarouselIndicators";
import { motion } from "motion/react";

type CarouselNavigationProps = {
    onNext: () => void;
    onPrevious: () => void;
    total: number;
    currentIndex: number;
    onSelect: (index: number) => void;
};

export function CarouselNavigation({ onNext, onPrevious, total, currentIndex, onSelect }: CarouselNavigationProps) {
    return (
        <div className="inline-flex gap-8 items-center">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }} onClick={onPrevious}>
                <ArrowLeftIcon className="size-6" />
            </motion.button>
            <CarouselIndicators total={total} currentIndex={currentIndex} onSelect={onSelect} />
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }} onClick={onNext}>
                <ArrowRightIcon className="size-6" />
            </motion.button>
        </div>
    );
}