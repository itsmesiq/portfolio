"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import TechStack from "./TechStack";
import { socialMedia } from "@/data/social";
import { SocialLink } from "../ui/SocialLink";
import { DownloadIcon, DoubledownIcon } from "../icons";
import { motion } from "motion/react";

export default function Hero() {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            y: 16,
        },
        show: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <section id="about" className="w-full mt-22 px-4 sm:px-10 md:px-0 bg-background">
            <div className="flex items-center justify-center gap-0 mt-5 md:mt-10 2xl:gap-10 max-h-none md:max-h-161 lg:max-h-none">
                <motion.div variants={container} initial="hidden" animate="show"  className="flex flex-col gap-3 px-4 py-4 max-w-90.25 sm:max-w-none sm:px-8 sm:py-8 xl:px-16 xl:py-16 rounded-2xl md:rounded-r-3xl md:rounded-l-none lg:rounded-r-[40px] bg-card 2xl:rounded-[40px] lg:max-w-133.5 xl:max-w-149.5">
                    <motion.div variants={item} className="md:w-117.5 pb-5">
                        <div className="w-full relative">
                            <Image
                                src="/img/hero/profile-banner.jpg"
                                alt="Profile Banner"
                                width={470}
                                height={124}
                                loading="eager"
                                className="rounded-2xl w-82.25 h-auto sm:w-124 sm:h-auto md:w-117.5 md:h-auto"
                            />
                            <Image
                                src="/img/hero/profile.png"
                                alt="Profile Picture"
                                width={148}
                                height={148}
                                loading="eager"
                                className="absolute w-28 h-auto sm:w-37 sm:h-auto -bottom-18 left-3"
                            />
                        </div>
                        <div className="ml-33 sm:ml-44 flex flex-col gap-0 mt-3">
                            <span className="font-heading text-xl font-medium text-foreground">Ana Siqueira</span>
                            <span className="font-sans text-sm text-muted">@itsmesiq</span>
                        </div>
                    </motion.div>
                    
                    <motion.div variants={item} className="sm:px-3.5 flex flex-col gap-2">
                        <h1 className="font-heading text-xl sm:text-2xl font-semibold text-foreground">UI Designer & Frontend Dev</h1>
                        <p className="font-sans text-sm font-light text-muted">Crio interfaces digitais de alta performance para e-commerce, combinando design estratégico, responsividade e foco em conversão. Habilidade em Frontend para garantir uma implementação fiel ao projeto.</p>
                    </motion.div>
                    <motion.div variants={item}>
                        <TechStack />
                    </motion.div>
                    <motion.div variants={item} className="pb-5 sm:pb-0 sm:px-3.5 flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <Button href="/cv/curriculoAnaSiqueira.pdf">
                            Baixar Currículo
                            <DownloadIcon className="size-6" />
                        </Button>

                        <div className="flex gap-4">
                            <div className="flex items-center gap-6 sm:gap-4">
                                {socialMedia.map((social) => (
                                    <SocialLink key={social.label} social={social} />
                                ))}
                            </div>
                        </div>                 
                    </motion.div>
                </motion.div>
                <motion.div className="overflow-hidden hidden md:flex justify-start"
                    initial={{ opacity: 0, x: 60, scale: .95}}
                    animate={{ opacity: 1, x: 0, y: [0, -6, 0], scale: [1,1.015,1] }}
                    transition={{ 
                        opacity:{ duration: .7 },
                        x:{ duration: .7 },
                        y:{ duration: 5, repeat: Infinity },
                        scale:{ duration: 6, repeat: Infinity }
                        }}>
                    <Image
                        src="/img/hero/background.png"
                        alt="Hero Image"
                        width={1000}
                        height={750}
                        className="hidden sm:inline max-w-none md:w-241.25 md:h-181 2xl:w-250 2xl:h-187.5"
                    />
                </motion.div>
            </div>
            <motion.div className="flex justify-center items-center py-5 sm:py-8 lg:py-12"
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}>
                <DoubledownIcon className="size-14" />
            </motion.div>
        </section>
    );
};