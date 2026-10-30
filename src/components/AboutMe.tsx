import Image from 'next/image';

export function AboutMe() {
    return (
        <section
            id="about-me"
            className="grid w-full max-w-[1366px] grid-cols-1 gap-8 font-sans xl:grid-cols-[minmax(0,1fr)_auto]"
        >
            <div className="relative flex w-full min-w-0 flex-col items-end gap-10 rounded-3xl border border-stroke bg-surface px-3 py-8 sm:px-8 xl:px-6 2xl:px-10">
                <div className="about-me w-full min-w-0 px-5 sm:max-w-[248px] sm:px-0 md:max-w-[280px] lg:max-w-[332px] xl:max-w-[224px] 2xl:max-w-[380px]">
                    <h2 className="mb-4 text-3xl font-medium text-foreground">About Me</h2>
                    <div className="flex flex-col items-start gap-3 text-sm font-light text-muted 2xl:gap-5">
                        <p>
                            I&apos;m a creative mind, a curious soul, and a proud pet parent to a
                            golden retriever, a shih-tzu, Chimo, a black cat, and a chubby cat. When
                            I&apos;m not coding, you&apos;ll probably find me playing story-driven
                            games, getting lost in a good mystery, or coming up with theories about
                            every possible plot twist.
                        </p>
                        <p>
                            I love figuring things out, exploring new ideas, and turning curiosity
                            into something tangible. Whether it&apos;s solving a problem, designing
                            an experience, or building something from scratch, I&apos;m always
                            looking for the next thing that makes me think, create, and see things
                            differently.
                        </p>
                        <p>And I love Monster.</p>
                    </div>
                </div>
                <Image
                    src="/illustrations/siq-computer.svg"
                    alt="Siq sitting in front of a computer"
                    width={570}
                    height={512}
                    className="-bottom-5 -left-14 z-10 block h-auto w-full sm:absolute sm:max-w-[364px] md:-left-6 md:max-w-[400px] lg:left-14 xl:-left-29 xl:max-w-[556px] 2xl:max-w-[570px]"
                />
                <Image
                    src="/illustrations/code-art.svg"
                    alt="Code, art, love illustration"
                    width={232}
                    height={250}
                    className="absolute top-[440px] left-6 z-5 h-auto w-full max-w-[180px] sm:top-6 sm:max-w-[212px] lg:left-12 xl:left-6 xl:max-w-[232px]"
                />
                <Image
                    src="/illustrations/monster.svg"
                    alt="Monster illustration"
                    width={156}
                    height={245}
                    className="absolute right-6 bottom-2.5 hidden h-auto w-full xl:block xl:max-w-[116px] 2xl:max-w-[156px]"
                />
            </div>

            <div className="relative hidden w-full min-w-0 flex-col items-end rounded-3xl border border-stroke bg-surface px-6 py-6 xl:flex xl:min-h-[640px] xl:max-w-[456px] 2xl:max-w-none">
                <Image
                    src="/illustrations/heart.svg"
                    alt="Heart illustration"
                    width={39}
                    height={32}
                    className="absolute top-8 left-8 h-auto w-full max-w-[39px]"
                />
                <Image
                    src="/illustrations/dogs.svg"
                    alt="Yoshi, Gaia and Aika illustration"
                    width={480}
                    height={345}
                    className="h-auto w-full max-w-[480px]"
                />
                <Image
                    src="/illustrations/hashi.svg"
                    alt="Hashi illustration"
                    width={235}
                    height={329}
                    className="absolute h-auto w-full xl:bottom-15.5 xl:left-4 xl:max-w-[220px] 2xl:bottom-6 2xl:left-6 2xl:max-w-[235px]"
                />
                <Image
                    src="/illustrations/pablo.svg"
                    alt="Pablo illustration"
                    width={390}
                    height={334}
                    className="absolute -right-20 -bottom-16 h-auto w-full xl:max-w-[356px] 2xl:max-w-[390px]"
                />
            </div>
        </section>
    );
}
