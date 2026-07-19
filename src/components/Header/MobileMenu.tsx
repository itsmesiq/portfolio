import Link from "next/link";
import { menuItens } from "@/data/menu";
import { LanguageToggle } from "../ui/LanguageToggle";
import { ThemeToggle } from "../Theme/ThemeToggle";
import Button from "../ui/Button";
import { DownloadIcon } from "../icons";
import { useEffect } from "react";

type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
        document.body.style.overflow = "";
    };
    }, [isOpen]);

    return (
        <div className={`fixed top-20 left-0 right-0 bottom-0 z-50 bg-background ${isOpen ? 'block' : 'hidden'}`}>           
            <div className="flex flex-col h-full mt-12">
                <ul role="menu" className="flex flex-col space-y-8 px-10">
                    {menuItens.map((item, index) => (
                        <li key={index} role='menuitem'>
                            <Link href={item.href} className="text-foreground hover:text-primary transition-colors duration-500" onClick={onClose}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center py-10 px-5">
                    <div className="h-px w-full rounded-full bg-primary" />
                </div>
                {/* <div className="flex items-center gap-10 px-10">
                    <LanguageToggle />
                    <ThemeToggle />
                </div> */}
                <div className="flex flex-col gap-6 justify-center py-10 px-5">
                    <Button href="/cv/curriculoAnaSiqueira.pdf">
                        Baixar Currículo
                        <DownloadIcon className="size-6" />
                    </Button>
                </div>
            </div>

        </div>
    );
}