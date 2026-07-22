import type { Case } from "@/types/case.type";
import GlassCard from "../ui/GlassCard";
import { Fragment } from "react";

type CaseProps = {
    project: Case;
};

export function Highlights({ project }: CaseProps) {
    return (
        <section className="w-full px-16 mb-8">
            <GlassCard className="px-22 py-8">
                <div className="flex justify-between items-center">
                    {project.highlights.map((highlight, index) => (
                        <Fragment key={index}>
                            <div className="flex items-center gap-5">
                                <div className="px-3 py-3 bg-surface rounded-xl">
                                    <highlight.icon className="size-12 text-primary" />
                                </div>
                                <div>
                                    <span className="font-sans text-primary text-xl font-bold">{highlight.title}</span>
                                    <p className="text-sm text-foreground font-normal">{highlight.subtitle}</p>
                                </div>
                            </div>

                            {index < project.highlights.length - 1 && (
                                <div className="w-0.5 h-12 bg-primary"></div>
                            )}
                        </Fragment>
                    ))}
                </div>
            </GlassCard>
        </section>
    );
}