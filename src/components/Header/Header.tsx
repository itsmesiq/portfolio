import Button from "../ui/Button";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { Logo } from "../ui/Logo";
import { LanguageToggle } from "../ui/LanguageToggle";
import { DownloadIcon } from "../icons";

export default function Header() {
    return (
        <header className="w-full items-center flex justify-between px-16 bg-background font-heading text-base py-6 font-normal fixed top-0 z-50">
            <nav>
                <ul className="flex space-x-6">
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors duration-500">Sobre Mim</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors duration-500">Cases</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors duration-500">Skills</a></li>
                    <li><a href="#" className="text-foreground hover:text-primary transition-colors duration-500">Contato</a></li>
                </ul>
            </nav>
            <Logo />
            <div className="flex items-center gap-5">
                <LanguageToggle />
                <ThemeToggle />
                <Button href="/cv/curriculoAnaSiqueira.pdf">
                    Baixar Currículo
                    <DownloadIcon className="size-6" />
                </Button>
            </div>
        </header>
    );
}