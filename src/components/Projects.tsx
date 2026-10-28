import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { projects } from '@/data/projects';

export function Projects() {
    return (
        <section className="grid w-full max-w-[1366px] grid-cols-1 gap-4 font-sans md:grid-cols-[auto_auto] md:gap-8 lg:auto-rows-auto lg:grid-cols-[minmax(0,1fr)_auto]">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`relative flex flex-col gap-3 rounded-3xl border border-stroke bg-surface px-5 py-5 md:gap-6 md:px-6 md:py-6 ${project.isFeatured ? 'col-span-1 col-start-1 row-start-1 w-full max-w-[752px] md:col-span-2 lg:col-span-1 lg:row-span-2 xl:max-w-[910px]' : index === 3 ? 'col-span-1 col-start-1 row-start-4 w-full items-start md:col-span-2 md:row-start-3 md:flex-row lg:items-center' : 'w-full md:max-w-[416px] lg:col-start-2 2xl:max-w-[500px]'}`}
                >
                    {project.image &&
                        (project.isFeatured ? (
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={784}
                                height={407}
                                className="h-auto w-full rounded-3xl"
                            />
                        ) : (
                            <div className="flex aspect-square h-auto w-full max-w-[80px] items-center justify-center rounded-2xl border border-stroke bg-muted p-2 md:max-w-[144px]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={123}
                                    height={112}
                                />
                            </div>
                        ))}

                    <div className="flex flex-col gap-3 lg:gap-5">
                        <div>
                            <h3 className="text-3xl font-medium tracking-[0.5px] text-foreground">
                                {project.title}
                            </h3>
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-stroke px-3 py-1 text-xs text-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-4 text-sm text-muted">{project.description}</p>
                        </div>

                        <div
                            className={`flex items-center gap-2.5 lg:gap-4 ${index === 3 ? 'lg:absolute lg:right-6' : project.secondaryLink ? 'md:flex-col md:items-start' : ''}`}
                        >
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-xs tracking-[0.5px] uppercase"
                            >
                                <span>{index === 2 ? 'Front Code' : 'See code'}</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </a>

                            {project.demoLink && (
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-xs tracking-[0.5px] uppercase"
                                >
                                    <span>See demo</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            )}

                            {project.secondaryLink && (
                                <a
                                    href={project.secondaryLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-xs tracking-[0.5px] uppercase"
                                >
                                    <span>Back code</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
