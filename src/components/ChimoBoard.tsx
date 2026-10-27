import Image from 'next/image';

export function ChimoBoard() {
    const chimoInstructions = [
        {
            id: 1,
            text: '1 Chimo por cor',
            type: 'region',
        },
        {
            id: 2,
            text: '1 Chimo por linha e coluna',
            type: 'line',
        },
        {
            id: 3,
            text: 'Chimos não podem se tocar',
            type: 'adjacency',
        },
    ];

    return (
        <div className="flex h-full flex-col items-center justify-center gap-5 rounded-3xl border border-stroke bg-surface px-5 py-5">
            <div className="flex items-center gap-2">
                <Image src="/illustrations/chimo.svg" alt="ChimoBoard" width={40} height={36} />
                <h3 className="text-3xl font-semibold tracking-[-1px] text-foreground">
                    Chimo<span className="text-primary">Board</span>
                </h3>
            </div>
            <iframe
                src="https://chimoboard.vercel.app/?mode=embed"
                title="ChimoBoard"
                className="block aspect-[374/464] h-auto w-full max-w-[380px] rounded-lg border-none bg-transparent outline-none"
            ></iframe>
            <div className="flex items-center justify-center gap-2">
                {chimoInstructions.map((instruction) => (
                    <div
                        key={instruction.id}
                        className="flex items-center gap-3 rounded-lg border border-stroke px-2 py-1.5"
                    >
                        <div className="grid size-[56px] shrink-0 grid-cols-3 grid-rows-3 gap-0.5">
                            {Array.from({ length: 9 }, (_, index) => {
                                const isChimo =
                                    (instruction.type === 'region' && index === 4) ||
                                    (instruction.type === 'line' && index === 1) ||
                                    (instruction.type === 'adjacency' && index === 4);

                                const isMarked =
                                    (instruction.type === 'region' && index === 2) ||
                                    (instruction.type === 'line' && [0, 2, 4, 7].includes(index)) ||
                                    (instruction.type === 'adjacency' && index !== 4);

                                const isColor =
                                    instruction.type === 'region' && [0, 1, 3, 6].includes(index);

                                return (
                                    <div
                                        key={index}
                                        className={`flex min-h-0 min-w-0 items-center rounded-[3px] ${isChimo || isMarked || isColor ? 'bg-accent' : 'bg-muted/10'}`}
                                    >
                                        {isChimo && (
                                            <Image
                                                src="/illustrations/chimo.svg"
                                                alt="Chimo"
                                                width={16}
                                                height={15}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <span className="max-w-[72px] text-sm leading-[110%]">
                            {instruction.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
