import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { CarouselIndicators } from "./CarouselIndicators";

type CarouselNavigationProps = {
    onNext: () => void;
    onPrevious: () => void;
    total: number;
    currentIndex: number;
    onSelect: (index: number) => void;
};

export function CarouselNavigation({ onNext, onPrevious, total, currentIndex, onSelect }: CarouselNavigationProps) {
    return (
        <div className="inline-flex gap-6 items-center">
            <button onClick={onPrevious}>
                <ArrowLeftIcon className="size-5" />
            </button>
            <CarouselIndicators total={total} currentIndex={currentIndex} onSelect={onSelect} />
            <button onClick={onNext}>
                <ArrowRightIcon className="size-5" />
            </button>
        </div>
    );
}