import type { Case } from "@/types/case.type";
import GlassCard from "../ui/GlassCard";
import { Fragment } from "react";
import { ChallengeIcon, ContributionIcon, ProcessArchitectureIcon, ProcessDesignIcon, ProcessHandoff, ProcessPrototypeIcon, ProcessResearchIcon, ScopeIcon } from "../icons";

type CaseProps = {
    project: Case;
};

type ProcessProps ={
    color: Case["color"];
}

export function Highlights({ project }: CaseProps) {
    return (
        <section className="w-full mb-8 px-4 sm:px-10 md:px-6 lg:px-10 xl:px-16">
            <GlassCard className="px-4 py-6 md:px-6 lg:px-8 xl:py-8 xl:px-16">
                <div className="grid grid-cols-2 justify-between gap-y-10 md:grid-cols-[auto_4px_auto_4px_auto_4px_auto]">
                    {project.highlights.map((highlight, index) => (
                        <Fragment key={index}>
                            <div className="flex items-center flex-col gap-3 lg:flex-row xl:gap-5">
                                <div className="px-2 py-2 xl:px-3 xl:py-3 bg-surface rounded-xl">
                                    <highlight.icon className="size-12 md:size-8 xl:size-12" style={{ color: project.color }} />
                                </div>
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="font-sans font-bold text-xl md:text-lg xl:text-xl" style={{ color: project.color }}>{highlight.title}</span>
                                    <p className="text-foreground font-normal text-sm md:text-xs xl:text-sm">{highlight.subtitle}</p>
                                </div>
                            </div>

                            {index < project.highlights.length - 1 && (
                                <div className="hidden md:block w-0.5 self-stretch" style={{ backgroundColor: project.color }}></div>
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
        <section className="w-full mb-8 px-4 sm:px-10 md:px-6 lg:px-10 xl:px-16">
            <GlassCard className="px-6 py-6 md:py-5 md:px-5 lg:py-6 lg:px-8 xl:py-8 xl:px-16">
                <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between items-start">
                    <div className="max-w-none md:max-w-45 lg:max-w-56.25 xl:max-w-70">
                        <div className="flex items-center gap-2 font-heading font-bold mb-2 lg:mb-4">
                            <ChallengeIcon className="size-6 md:size-4 lg:size-5 xl:size-6" style={{ color: project.color }} alt="Desafio Icon" />
                            <h2 className="text-lg md:text-sm lg:text-base xl:text-xl">Desafio</h2>
                        </div>
                        <p className="font-sans text-muted font-light text-sm md:text-xs xl:text-sm">{project.challenge}</p>
                    </div>
                    <div className="w-full h-0.5 md:h-auto md:w-0.5 self-stretch" style={{ backgroundColor: project.color }}></div>
                    <div className="max-w-none md:max-w-50 lg:max-w-85">
                        <div className="flex items-center gap-2 font-heading font-bold mb-2 lg:mb-4">
                            <ContributionIcon className="size-6 md:size-4 lg:size-5 xl:size-6" style={{ color: project.color }} alt="Minha Contribuição Icon" />
                            <h2 className="text-lg md:text-sm lg:text-base xl:text-xl">Minha Contribuição</h2>
                        </div>
                        <ul className="font-sans text-muted font-light list-disc pl-5 text-sm md:text-xs xl:text-sm">
                            {project.contribution.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>      
                            ))}
                        </ul>
                    </div>
                    <div className="w-full h-0.5 md:h-auto md:w-0.5 self-stretch" style={{ backgroundColor: project.color }}></div>
                     <div className="max-w-none md:max-w-50 lg:max-w-95">
                        <div className="flex items-center gap-2 font-heading font-bold mb-2 lg:mb-4">
                            <ScopeIcon className="size-6 md:size-4 lg:size-5 xl:size-6" style={{ color: project.color }} alt="Escopo do Projeto Icon" />
                            <h2 className="text-lg md:text-sm lg:text-base xl:text-xl">Escopo do Projeto</h2>
                        </div>
                        <ul className="font-sans text-muted font-light list-disc pl-5 text-sm md:text-xs xl:text-sm">
                            {project.scope.map((item, index) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>                   
                </div>
            </GlassCard>
        </section>
    );
}

export function MyProcess({ color }: ProcessProps) {
    return (
        <section className="w-full mb-22 px-4 sm:px-10 md:px-6 lg:px-10 xl:px-16">
            <GlassCard className="py-6 px-6 md:py-5 md:px-5 lg:py-6 lg:px-8 xl:py-8 xl:px-16">
                <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center gap-6 lg:gap-8 xl:gap-20">
                    <h2 className="font-heading text-lg md:text-sm font-bold w-full text-center md:text-left lg:text-base xl:text-xl md:w-[12%] md:w-[15%] xl:w-[12%] ">Meu Processo</h2>
                    <div className="flex flex-wrap justify-center gap-10 sm:gap-0 sm:justify-between items-start w-full md:w-[88%] md:w-[85%] xl:w-[88%] ">
                        <div className="max-w-15 md:max-w-20.75 flex flex-col items-center gap-3">
                            <ProcessResearchIcon className="size-12" />
                            <h3 className="font-sans text-xs xl:text-sm text-muted font-light text-center">Pesquisa e Análise</h3>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full my-5.5" style={{ backgroundColor: color }}></div>
                        <div className="max-w-22 md:max-w-24.25 flex flex-col items-center gap-3">
                            <ProcessArchitectureIcon className="size-12" />
                            <h3 className="font-sans text-xs xl:text-sm text-muted font-light text-center">Arquitetura da Informação</h3>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full my-5.5" style={{ backgroundColor: color }}></div>
                        <div className="max-w-15 md:max-w-20.25 flex flex-col items-center gap-3">
                            <ProcessDesignIcon className="size-12" />
                            <h3 className="font-sans text-xs xl:text-sm text-muted font-light text-center">UI Design no Figma</h3>
                        </div>  
                        <div className="hidden sm:block w-1 h-1 rounded-full my-5.5" style={{ backgroundColor: color }}></div>  
                        <div className="max-w-22.25 flex flex-col items-center gap-3">
                            <ProcessPrototypeIcon className="size-12" />
                            <h3 className="font-sans text-xs xl:text-sm text-muted font-light text-center">Prototipação</h3>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full my-5.5" style={{ backgroundColor: color }}></div>
                        <div className="max-w-25 flex flex-col items-center gap-3">
                            <ProcessHandoff className="size-12" />
                            <h3 className="font-sans text-xs xl:text-sm text-muted font-light text-center">Handoff para desenvolvimento</h3>
                        </div>                                                                                            
                    </div>
                </div>
            </GlassCard>
        </section>
    );
}