import SkillCard from "./SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
    return (
        <section className="w-full px-16 my-22">
            <div className="font-heading mb-8 flex flex-col items-center gap-0">
                <span className="text-xl font-normal text-accent">Expertise</span>
                <h2 className="text-3xl font-semibold text-foreground">Design & Desenvolvimento</h2>
            </div>
            <div className="flex items-start justify-between 2xl:justify-center 2xl:gap-10">
                {skills.map((skill) => (
                    <SkillCard key={skill.label} skill={skill} />
                ))}
            </div>
        </section>
    );
}