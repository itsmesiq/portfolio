import { BackArrow, ForwardArrow, SiqIcon } from "../icons";
import GlassCard from "../ui/GlassCard";
import type { Case } from '@/types/case.type';
import Link from "next/link";

type BottomNavProps = {
    previousCase: Case;
    nextCase: Case;
}

export default function BottomNav( { previousCase, nextCase }: BottomNavProps ) {
    return (
        <section className="w-full px-16 mb-28">
            <GlassCard className="px-12 py-8">
                <div className="grid grid-cols-3 items-center">
                    <div>
                        <Link href={`/cases/${previousCase.slug}`} className="flex items-center gap-3 cursor-pointer text-foreground">
                            <BackArrow className="size-8" />
                            <div className="text-left flex flex-col">
                                <span className="font-sans text-sm font-normal uppercase m-0">Anterior</span>
                                <h3 className="font-heading text-lg font-bold  leading-4.5">{previousCase.title}</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <SiqIcon className="size-10" />
                    </div>
                    <div className="flex justify-end">
                        <Link href={`/cases/${nextCase.slug}`} className="flex items-center gap-3 cursor-pointer text-foreground">
                            <div className="text-right flex flex-col">
                                <span className="font-sans text-sm font-normal uppercase m-0">Próximo</span>
                                <h3 className="font-heading text-lg font-bold leading-4.5">{nextCase.title}</h3>
                            </div>
                            <ForwardArrow className="size-8" />
                        </Link>
                    </div>
                </div>
            </GlassCard>
        </section>
    );
}