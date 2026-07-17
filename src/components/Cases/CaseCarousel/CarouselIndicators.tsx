type CarouselIndicatorsProps = {
    total: number;
    currentIndex: number;
    onSelect: (index: number) => void;
};

export function CarouselIndicators({ total, currentIndex, onSelect }: CarouselIndicatorsProps) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(index)}
                    aria-label={`Ir para o projeto ${index + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${currentIndex === index ? "w-4 bg-primary" : "w-2 bg-muted"}`}
                />
            ))}
        </div>
    );
}