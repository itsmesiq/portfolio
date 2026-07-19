'use client';
import type { Skill } from "@/types/skill.type";
import { motion } from "motion/react";

type SkillCardProps = {
    skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
    return (
        <motion.div whileHover={{ scale: 1.08, transition: { duration: 0.4 } }} className="flex flex-col items-start self-stretch gap-3 py-8 px-8 bg-card rounded-3xl w-72.25 ">
            {skill.icon && <skill.icon className="size-14" />}
            <h3 className="font-heading text-xl text-foreground font-semibold">{skill.title}</h3>
            <p className="font-sans text-sm font-normal text-muted ">{skill.description}</p>
        </motion.div>
    );
}






