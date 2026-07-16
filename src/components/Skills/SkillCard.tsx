import type { Skill } from "@/types/skill.type";
import Image from "next/image";

type SkillCardProps = {
    skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
    return (
        <div className="flex flex-col items-start self-stretch gap-3 py-8 px-8 bg-card rounded-3xl max-w-[289px] w-full overflow-visible shadow-none hover:shadow-[0_0_20px_rgba(254,182,0,0.60)] transition-all transition-discrete ease-in-out duration-500">
            {skill.icon && <skill.icon className="size-14" />}
            <h3 className="font-heading text-xl text-foreground font-semibold">{skill.title}</h3>
            <p className="font-sans text-sm font-normal text-muted ">{skill.description}</p>
        </div>
    );
}






