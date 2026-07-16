import type { Social } from "@/types/social.type";
import { WhatsappIcon, LinkedinIcon, GithubIcon, EmailIcon } from "../components/icons";

export const socialMedia: Social[] = [
    {
        label: 'Whatsapp',
        icon: WhatsappIcon,
        href: 'https://wa.me/5522981393078',
    },
    {
        label: 'Linkedin',
        icon: LinkedinIcon,
        href: 'https://www.linkedin.com/in/itsmesiq/',
    },
    {
        label: 'Github',
        icon: GithubIcon,
        href: 'https://github.com/itsmesiq',
    },
    {
        label: 'Email',
        icon: EmailIcon,
        href: 'mailto:anasiqueira.serpentis@gmail.com',
    },
];