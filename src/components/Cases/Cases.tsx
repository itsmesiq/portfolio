import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { cases } from "@/data/projects";
import { Fragment } from "react";
import Divider from "../ui/Divider";

export default function Cases() {
    return (
        <section className="w-full">
            {cases.map((project, index) => (
                <Fragment key={project.title}>
                    <ProjectCard 
                        project={project} index={index}
                    />
                    {index < cases.length - 1 && <Divider />}
                </Fragment>
            ))}
        </section>
    );
};
