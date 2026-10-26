import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { ChimoBoard } from './ChimoBoard';
import { GitHubActivity } from './GitHubActivity';

export function Hero() {
    return (
        <section className="grid w-full max-w-[1366px] grid-cols-1 gap-8 font-sans lg:auto-rows-auto lg:grid-cols-[auto_auto] xl:grid-rows-2">
            <div className="grid max-w-[910px] auto-rows-auto grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-3xl border border-stroke bg-surface px-5 py-5 sm:gap-x-8 lg:min-w-[380px] lg:gap-0 xl:gap-4 2xl:gap-x-16 2xl:px-10 2xl:py-6">
                <div className="col-span-2 row-start-1 mb-2 flex items-center justify-between md:col-span-1 lg:col-span-2 xl:col-span-1">
                    <div className="flex items-center gap-1.5 rounded-full border border-[#00A613]/30 bg-[#00A613]/15 px-3 py-1">
                        <div className="size-1.5 rounded-full bg-[#00A613]"></div>
                        <span className="text-[10px] tracking-[0.5px] text-[#00A613] uppercase">
                            available for opportunities
                        </span>
                    </div>
                    <div className="flex items-center gap-2.5 lg:gap-2 xl:gap-2.5">
                        <a href="https://github.com/itsmesiq" aria-label="GitHub">
                            <Image
                                src="/icons/github.svg"
                                alt="GitHub"
                                width={24}
                                height={24}
                                className="lg:size-5 xl:size-6"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/itsmesiq/" aria-label="LinkedIn">
                            <Image
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={24}
                                height={24}
                                className="lg:size-5 xl:size-6"
                            />
                        </a>
                        <a href="mailto:anasiqueira.serpentis@gmail.com" aria-label="Email">
                            <Image
                                src="/icons/email.svg"
                                alt="Email"
                                width={24}
                                height={24}
                                className="lg:size-5 xl:size-6"
                            />
                        </a>
                    </div>
                </div>

                <div className="md:col-start-1 lg:col-span-2 xl:col-span-1">
                    <span className="text-xl text-foreground md:text-3xl lg:text-2xl xl:text-3xl">
                        Hey, I&apos;m Ana
                    </span>
                    <h1 className="text-3xl font-semibold text-primary sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        Fullstack Developer
                    </h1>
                </div>

                <div className="col-span-2 row-start-3 flex items-center gap-4 sm:col-span-1 lg:col-span-2 lg:row-start-4 xl:col-span-1 xl:row-start-3">
                    <a
                        href=""
                        className="flex items-center gap-2 rounded-full border border-foreground px-4 py-2 text-xs tracking-[0.5px] uppercase transition-all duration-300 ease-in-out hover:border-primary hover:text-accent hover:shadow-[0_0_6px_0] hover:shadow-accent"
                    >
                        Contact Me
                        <ArrowUpRight className="size-4" />
                    </a>
                    <button className="flex cursor-pointer items-center gap-2 rounded-full border border-foreground px-4 py-2 text-xs tracking-[0.5px] uppercase transition-all duration-300 ease-in-out hover:border-primary hover:text-accent hover:shadow-[0_0_6px_0] hover:shadow-accent">
                        Download CV
                        <ArrowDownToLine className="size-4" />
                    </button>
                </div>

                <Image
                    src="/illustrations/siq-avatar.svg"
                    alt="Avatar"
                    width={254}
                    height={254}
                    className="aspect-square max-w-[140px] rounded-3xl sm:row-span-2 sm:max-w-[200px] md:row-span-3 md:row-start-1 md:max-w-none lg:col-span-2 lg:row-span-1 lg:row-start-2 lg:max-w-[180px] xl:col-span-1 xl:row-span-3 xl:row-start-1 xl:max-w-none"
                    priority
                />
            </div>

            <div className="max-w-[910px] rounded-3xl border border-stroke bg-surface px-5 py-5 lg:col-start-1 xl:px-10 xl:py-6">
                <GitHubActivity />
            </div>

            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 xl:max-w-[416px]">
                <ChimoBoard />
            </div>
        </section>
    );
}
