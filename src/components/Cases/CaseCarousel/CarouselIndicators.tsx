import { motion } from "motion/react";

type CarouselIndicatorsProps = {
    total: number;
    currentIndex: number;
    onSelect: (index: number) => void;
};

export function CarouselIndicators({ total, currentIndex, onSelect }: CarouselIndicatorsProps) {
    const isActive = (index: number) => currentIndex === index;

    return (
        <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, index) => (
                <motion.button
                    key={index}
                    onClick={() => onSelect(index)}
                    aria-label={`Ir para o projeto ${index + 1}`}
                    className={`h-1 rounded-full ${currentIndex === index ? "w-4 bg-primary" : "w-2 bg-muted"}`}
                    animate={{ width: isActive(index) ? 24 : 8, opacity: isActive(index) ? 1 : 0.5 }}
                />
            ))}
        </div>
    );
}