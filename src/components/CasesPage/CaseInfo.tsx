import type { Case } from "@/types/case.type";
import GlassCard from "../ui/GlassCard";
import { Fragment } from "react";
import { ChallengeIcon, ContributionIcon, ProcessArchitectureIcon, ProcessDesignIcon, ProcessHandoff, ProcessPrototypeIcon, ProcessResearchIcon, ScopeIcon } from "../icons";

type CaseProps = {
    project: Case;
};

export function Highlights({ project }: CaseProps) {
    return (
        <section className="w-full px-16 mb-8">
            <GlassCard className="px-12 py-8">
                <div className="flex justify-between items-center 2xl:justify-center 2xl:gap-20">
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
                                <div className="w-0.5 h-20 bg-primary"></div>
                            )}
                        </Fragment>
                    ))}
                </div>
            </GlassCard>
        </section>
    );
}

export function ProjectDescription({ project }: CaseProps) {
    return (
        <section className="w-full px-16 mb-8">
            <GlassCard className="px-12 py-8">
                <div className="flex justify-between items-start 2xl:justify-center 2xl:gap-30">
                    <div className="max-w-73">
                        <div className="flex items-center gap-2 font-heading text-xl font-bold mb-4">
                            <ChallengeIcon className="size-6 text-primary" />
                            <h2>Desafio</h2>
                        </div>
                        <p className="font-sans text-sm text-muted font-light">{project.challenge}</p>
                    </div>
                    <div className="w-0.5 h-42 bg-primary"></div>
                    <div className="max-w-73">
                        <div className="flex items-center gap-2 font-heading text-xl font-bold mb-4">
                            <ContributionIcon className="size-6 text-primary" />
                            <h2>Minha Contribuição</h2>
                        </div>
                        <p className="font-sans text-sm text-muted font-light">{project.contribution}</p>
                    </div>
                    <div className="w-0.5 h-42 bg-primary"></div>
                     <div className="max-w-73">
                        <div className="flex items-center gap-2 font-heading text-xl font-bold mb-4">
                            <ScopeIcon className="size-6 text-primary" />
                            <h2>Escopo do Projeto</h2>
                        </div>
                        <p className="font-sans text-sm text-muted font-light">{project.scope}</p>
                    </div>                   
                </div>
            </GlassCard>
        </section>
    );
}

export function MyProcess() {
    return (
        <section className="w-full px-16 mb-22">
            <GlassCard className="px-12 py-8 2xl:px-54">
                <div className="flex items-start justify-center gap-14">
                    <h2 className="font-heading text-xl font-bold w-[12%] ">Meu Processo</h2>
                    <div className="flex justify-between items-start w-[88%] ">
                        <div className="max-w-20.75 flex flex-col items-center gap-3">
                            <ProcessResearchIcon className="size-12" />
                            <h3 className="font-sans text-sm text-muted font-light text-center">Pesquisa e Análise</h3>
                        </div>
                        <div className="w-1 h-1 bg-primary rounded-full my-5.5"></div>
                        <div className="max-w-24.25 flex flex-col items-center gap-3">
                            <ProcessArchitectureIcon className="size-12" />
                            <h3 className="font-sans text-sm text-muted font-light text-center">Arquitetura da Informação</h3>
                        </div>
                        <div className="w-1 h-1 bg-primary rounded-full my-5.5"></div>
                        <div className="max-w-20.25 flex flex-col items-center gap-3">
                            <ProcessDesignIcon className="size-12" />
                            <h3 className="font-sans text-sm text-muted font-light text-center">UI Design no Figma</h3>
                        </div>  
                        <div className="w-1 h-1 bg-primary rounded-full my-5.5"></div>  
                        <div className="max-w-22.25 flex flex-col items-center gap-3">
                            <ProcessPrototypeIcon className="size-12" />
                            <h3 className="font-sans text-sm text-muted font-light text-center">Prototipação</h3>
                        </div>
                        <div className="w-1 h-1 bg-primary rounded-full my-5.5"></div>
                        <div className="max-w-30.25 flex flex-col items-center gap-3">
                            <ProcessHandoff className="size-12" />
                            <h3 className="font-sans text-sm text-muted font-light text-center">Handoff para desenvolvimento</h3>
                        </div>                                                                                            
                    </div>
                </div>
            </GlassCard>
        </section>
    );
}