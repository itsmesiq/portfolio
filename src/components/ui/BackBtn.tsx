"use client";
import { BackArrow } from "../icons"
import Link from "next/link";
import { motion, useAnimationControls, Variants } from "motion/react";

export function BackBtn() {
    const iconVariants: Variants = {
        initial: {
            x: 0,
        },
        hover: {
            x: -6,
            transition: {
                duration: 0.4,
                ease: "easeInOut",
            },
        },
    };

    const controls = useAnimationControls();

    return (
        <Link href="//#region">
            <motion.div
                whileHover={{ scale: 1.05, borderColor: "var(--color-primary)", }}
                onHoverStart={() => controls.start("hover")}
                onHoverEnd={() => controls.start("initial")}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="py-2.5 px-1 flex gap-2 items-center font-sans text-sm font-medium text-foreground border-b border-transparent"
            >
                <motion.div variants={iconVariants} initial="initial" animate={controls}>
                    <BackArrow className="size-5" />                
                </motion.div>
                <span>Voltar</span>
                
            </motion.div>
        </Link>
    );
}