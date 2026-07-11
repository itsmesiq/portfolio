import Button from "@/components/ui/Button";
import Image from "next/image";
import { socialMedia } from "@/data/social";
import * as motion from "motion/react-client";
import { easeIn, stagger } from "motion";

const techStack = [
    {
        label: 'Figma',
        image: '/img/hero/hero-icons/figma.svg'
    },
    {
        label: 'HTML',
        image: '/img/hero/hero-icons/html.svg'
    },
    {
        label: 'CSS',
        image: '/img/hero/hero-icons/css.svg'
    },
    {
        label: 'JavaScript',
        image: '/img/hero/hero-icons/javascript.svg'
    },
    {
        label: 'React',
        image: '/img/hero/hero-icons/react.svg'
    },
    {
        label: 'Next.js',
        image: '/img/hero/hero-icons/next.svg'
    },
    {
        label: 'Tailwind',
        image: '/img/hero/hero-icons/tailwind.svg'
    },
    {
        label: 'Github',
        image: '/img/hero/hero-icons/github.svg'
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            duration: 0.7,
            delayChildren: 0.2,
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

export default function Hero() {
    return (
        <section className="w-full font-sans text-sm text-text-gray-200 px-4 md:px-16 bg-[url('/img/hero/background.jpg')] bg-cover bg-position-[center_bottom_-0.1rem] 2xl:bg-position-[center_bottom_-1rem] bg-no-repeat ">
            <div className="w-full flex items-center justify-between py-6">
                <Button href="/cv/curriculoAnaSiqueira.pdf">
                    Baixar Currículo
                    <Image
                        src="/img/icon/arrow.svg"
                        alt="Download Icon"
                        width={20}
                        height={20}
                    />
                </Button>
                <div className="flex items-center gap-6">
                    <span className="hidden sm:inline">Conecte-se comigo!</span>
                    <ul className="flex items-center justify-center gap-4">
                        {socialMedia.map((item, index) => (
                            <li key={index} className="flex items-center justify-center hover:scale-130 transition-transform duration-300">
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.label}
                                        width={24}
                                        height={24}
                                        aria-label="Entre em contato"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-8 mt-8 lg:max-w-[1560px] items-center mx-auto">
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeIn"
                    }}
                >
                    <Image
                        src="/img/hero/profile.png"
                        alt="Profile Image"
                        width={216}
                        height={216}
                        className="w-45 h-45 md:w-54 md:h-54"
                    />
                </motion.div>
                <motion.div className="text-center" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.p className="text-2xl lg:text-4xl font-light" variants={itemVariants} transition={{ease: "easeIn"}}>Ana Siqueira</motion.p>
                    <motion.h1 className="font-heading text-3xl lg:text-5xl leading-[normal] text-foreground font-bold" variants={itemVariants} transition={{ease: "easeIn"}}>UI Designer & Frontend Developer</motion.h1>
                    <motion.p className="text-base lg:text-xl font-light max-w-270 mt-3" variants={itemVariants} transition={{ease: "easeIn"}}>Crio interfaces digitais de alta performance para e-commerce, combinando design estratégico, responsividade e foco em conversão. Habilidade em Frontend para garantir uma implementação fiel ao projeto.</motion.p>
                </motion.div>
                <motion.ul 
                    className="flex gap-4 items-center justify-center my-4 flex-wrap"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.7,
                        duration: 0.6,
                        ease: "easeIn"
                    }}
                >
                    {techStack.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 px-4 py-2 bg-surface-gray rounded-4xl font-sans text-text-gray-200 text-sm sm:text-base leading-5 font-normal text-center">
                            <Image
                                src={item.image}
                                alt={item.label}
                                width={24}
                                height={24}
                                className="w-4.5 h-4.5 sm:w-6 sm:h-6"
                            />
                            {item.label}
                        </li>
                    ))}
                </motion.ul>

            </div>
            <motion.div 
                className="flex justify-center px-16 mb-10 md:my-14"
                animate={{
                    y: [0,6,0],
                    opacity: [1,0.8,1]
                }}
                transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                >
                <Image
                    src="/img/hero/hero-icons/doubledown.svg"
                    alt="Arrow Down Icon"
                    width={56}
                    height={56}
                />
            </motion.div>
        </section>
    );
};