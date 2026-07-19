"use client";
import { featuredCompanies } from "@/data/projects";
import { motion } from "motion/react";

export default function FeaturedCompanies() {
    return (
        <div className="w-full px-6 md:px-16 py-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 xl:gap-20 bg-card">
            <span className="hidden lg:inline text-muted font-sans text-sm lg:text-lg xl:text-xl font-light">Projetos em Destaque:</span>
            {featuredCompanies.map((company, index) => (
                <motion.div key={index} whileHover={{ scale: 1.08, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }} className="opacity-60">
                    {company.image && (
                        <company.image className={company.className} />
                    )}
                </motion.div>
            ))}
        </div>
    );
};