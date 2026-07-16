import { SocialButton } from "../ui/SocialLink";
import { socialMedia } from "@/data/social";

export default function Contact() {
    return (
        <section>
            <div className="flex flex-col items-center gap-8 max-w-120 md:max-w-150 text-center font-sans text-sm md:text-base py-16 md:py-28 px-4">
                <div className="text-foreground flex flex-col items-center gap-2 md:gap-4">
                    <div className="font-heading flex flex-col items-center gap-0">
                        <span className="text-xl font-normal text-accent">Entre em contato</span>
                        <h2 className="text-2xl md:text-3xl font-bold">Vamos criar algo juntos?</h2>
                    </div>
                    <p className="font-light">Estou disponível para novos projetos, oportunidades e colaborações. Acompanhe meu trabalho ou <b>entre em contato pelos canais abaixo.</b></p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    {socialMedia.map((social) => (
                        <SocialButton key={social.label} social={social} />
                    ))}
                </div>
            </div>
        </section>
    );
}