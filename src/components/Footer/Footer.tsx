import SocialLink from "../ui/SocialLink";
import { socialMedia } from "@/data/social";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-8 max-w-150 text-center font-sans text-base py-28">
                <div className="text-foreground flex flex-col items-center gap-4">
                    <h2 className="font-heading text-3xl font-bold">Vamos criar algo juntos?</h2>
                    <p className="font-light">Estou disponível para novos projetos, oportunidades e colaborações. Acompanhe meu trabalho ou <b>entre em contato pelos canais abaixo.</b></p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    {socialMedia.map((social) => (
                        <SocialLink key={social.label} social={social} />
                    ))}
                </div>
            </div>
            <div className="w-full py-3 bg-surface-gray">
                <p className="text-foreground text-sm font-light text-center">© Ana Siqueira 2026</p>
            </div>
        </footer>
    );
};