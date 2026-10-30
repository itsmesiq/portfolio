import Image from 'next/image';

export function Footer() {
    return (
        <footer id="contact" className="w-full min-w-0">
            <div className="mb-10 flex w-full flex-col items-center rounded-3xl border border-stroke bg-surface p-10 xl:mb-20">
                <h2 className="text-3xl font-medium tracking-[1.5px]">Let&apos;s talk!</h2>
                <p className="py-3 text-center text-sm font-light tracking-[0.5px] text-muted lg:text-base">
                    Have an opportunity, an interesting idea, or just want to say hi?{' '}
                    <span className="font-medium text-accent">My inbox is open.</span>
                </p>
                <div className="mt-6 flex items-center gap-2.5 lg:gap-2 xl:gap-2.5">
                    <a
                        href="https://github.com/itsmesiq"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/github.svg"
                            alt="GitHub"
                            width={24}
                            height={24}
                            className="lg:size-5 xl:size-6"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/itsmesiq/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                            className="lg:size-5 xl:size-6"
                        />
                    </a>
                    <a
                        href="mailto:anasiqueira.serpentis@gmail.com"
                        aria-label="Email"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
            <div className="flex w-full items-center justify-center py-4">
                <p className="text-xs font-light text-muted md:text-base">
                    <span className="text-primary">
                        &copy; {new Date().getFullYear()} Ana Siqueira.
                    </span>{' '}
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}
