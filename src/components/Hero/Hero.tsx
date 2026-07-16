import Image from "next/image";
import Button from "@/components/ui/Button";
import TechStack from "./TechStack";
import { socialMedia } from "@/data/social";
import { SocialLink } from "../ui/SocialLink";
import { DownloadIcon, DoubledownIcon } from "../icons";

export default function Hero() {
    return (
        <section className="w-full mt-22 px-4 md:px-0 bg-background">
            <div className="flex items-center justify-center gap-0 2xl:gap-10">
                <div className="flex flex-col gap-3 px-16 py-16 rounded-r-[40px] bg-card 2xl:rounded-[40px] md:max-w-149.5">
                <div className="w-117.5 pb-5">
                    <div className="w-full relative">
                        <Image
                            src="/img/hero/profile-banner.jpg"
                            alt="Profile Banner"
                            width={470}
                            height={124}
                            className="rounded-2xl"
                        />
                        <Image
                            src="/img/hero/profile.png"
                            alt="Profile Picture"
                            width={148}
                            height={148}
                            className="absolute -bottom-18 left-3"
                        />
                    </div>
                    <div className="ml-44 flex flex-col gap-0 mt-3">
                        <span className="font-heading text-xl font-medium text-foreground">Ana Siqueira</span>
                        <span className="font-sans text-sm text-muted">@itsmesiq</span>
                    </div>
                </div>
                <div className="px-3.5 flex flex-col gap-2">
                    <h1 className="font-heading text-2xl font-semibold text-foreground">UI Designer & Frontend Developer</h1>
                    <p className="font-sans text-sm font-light text-muted">Crio interfaces digitais de alta performance para e-commerce, combinando design estratégico, responsividade e foco em conversão. Habilidade em Frontend para garantir uma implementação fiel ao projeto.</p>
                </div>
                <TechStack />
                <div className="px-3.5 flex justify-between">
                    <Button href="/cv/curriculoAnaSiqueira.pdf">
                        Baixar Currículo
                        <DownloadIcon className="size-6" />
                    </Button>

                    <div className="flex gap-4">
                        <div className="flex items-center gap-4">
                            {socialMedia.map((social) => (
                                <SocialLink key={social.label} social={social} />
                            ))}
                        </div>
                    </div>                 
                </div>
                </div>
                <div className="overflow-hidden flex justify-start">
                    <Image
                        src="/img/hero/background.png"
                        alt="Hero Image"
                        width={1000}
                        height={750}
                        className="hidden sm:inline max-w-none md:w-241.25 md:h-181 2xl:w-250 2xl:h-187.5"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center py-12">
                <DoubledownIcon className="size-14" />
            </div>
        </section>
    );
};