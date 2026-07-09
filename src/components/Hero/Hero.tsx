import Button from "@/components/ui/Button";
import Image from "next/image";

const socialMedia = [
    {
        label: 'Whatsapp',
        image: '/img/icon/whatsapp.svg',
        href: 'https://wa.me/5522981393078',
    },
    {
        label: 'Linkedin',
        image: '/img/icon/linkedin.svg',
        href: 'https://www.linkedin.com/in/ana-siqueira-247940125/',
    },
    {
        label: 'Github',
        image: '/img/icon/github.svg',
        href: 'https://github.com/itsmesiq',
    },
    {
        label: 'Email',
        image: '/img/icon/email.svg',
        href: 'mailto:anasiqueira.serpentis@gmail.com',
    },
];

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

export const Hero = () => {
    return (
        <section className="w-full font-sans text-sm text-text-gray-200 px-16 bg-[url('/img/hero/background.jpg')] bg-cover bg-bottom bg-no-repeat">
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
                    <span>Conecte-se comigo!</span>
                    <ul className="flex items-center justify-center gap-4">
                        {socialMedia.map((item, index) => (
                            <li key={index} className="flex items-center justify-center">
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
            <div className="flex flex-col gap-8 px-16 items-center">
                <Image
                    src="/img/hero/profile.png"
                    alt="Profile Image"
                    width={216}
                    height={216}
                    className="py-8"
                />
                <div className="text-center">
                    <p className="text-4xl font-light">Ana Siqueira</p>
                    <h1 className="font-heading text-5xl leading-[normal] text-foreground font-bold">UI Designer & Frontend Developer</h1>
                    <p className="text-xl font-light max-w-270 pt-3">Crio interfaces digitais de alta performance para e-commerce, combinando design estratégico, responsividade e foco em conversão. Habilidade em Frontend para garantir uma implementação fiel ao projeto.</p>
                </div>
                <ul className="flex gap-4 items-center justify-center pt-4 pb-12">
                    {techStack.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 px-4 py-2 bg-surface-gray rounded-4xl font-sans text-text-gray-200 text-base leading-5 font-normal text-center">
                            <Image
                                src={item.image}
                                alt={item.label}
                                width={24}
                                height={24}
                            />
                            {item.label}
                        </li>
                    ))}
                </ul>

            </div>
            <div className="flex justify-center px-16 py-14">
                <Image
                    src="/img/hero/hero-icons/doubledown.svg"
                    alt="Arrow Down Icon"
                    width={56}
                    height={56}
                />
            </div>
        </section>
    );
};