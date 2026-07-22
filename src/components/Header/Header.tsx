"use client";
import Button from "../ui/Button";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { Logo } from "../ui/Logo";
import { LanguageToggle } from "../ui/LanguageToggle";
import { CloseIcon, DownloadIcon, MenuIcon } from "../icons";
import { DesktopNav } from "./DesktopNav";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import Link from "next/link";
import { motion } from "motion/react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`w-full items-center flex justify-between py-6 px-5 xl:px-16 bg-background font-heading text-base font-normal fixed top-0 z-50 ${scrolled ? 'bg-background/90 backdrop-blur-md' : 'bg-transparent'} transition-colors duration-300 ease-in-out`}>
            <DesktopNav />
            <motion.div className="flex items-center justify-center"
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}>
                <Link href="//#region ">
                    <Logo />
                </Link>
            </motion.div>
            <div className="hidden lg:flex items-center gap-5">
                <LanguageToggle />
                <ThemeToggle />
                <Button href="/cv/curriculoAnaSiqueira.pdf">
                    Baixar Currículo
                    <DownloadIcon className="size-6" />
                </Button>
            </div>
            <button className="flex items-center justify-center lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon className={`size-8 transition-all ease-in-out duration-300 ${isMenuOpen && 'invisible opacity-0'}`} />
                <CloseIcon className={`size-8 transition-all ease-in-out duration-300 absolute z-10 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`} />
            </button>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    );
}