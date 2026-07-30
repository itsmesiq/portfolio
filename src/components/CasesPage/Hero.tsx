import Image from "next/image";
import { BackBtn } from "../ui/BackBtn";
import type { Case } from "@/types/case.type";

type CaseProps = {
    project: Case;
};

export default function HeroCases({ project }: CaseProps) {    
    return (
        <section id="hero" className="w-full mt-22 px-4 lg:px-10 xl:px-16">
            <div className="flex justify-end mt-0 lg:mt-5">
                <BackBtn />
            </div>
            <div className="flex items-center flex-col-reverse py-2 gap-6 lg:flex-row lg:justify-between lg:py-5 lg:gap-0 xl:py-16 2xl:justify-center 2xl:gap-16">
                <div className="pb-8 sm:px-10 flex flex-col gap-8 lg:px-0">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-start gap-2 flex-wrap sm:gap-3">
                            {project.tags.map((tag, tagIndex) => (
                                <div key={tagIndex}>
                                    <span className="inline-block bg-foreground text-background text-xs font-normal px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                </div>
                            ))}
                        </div> 
                        <div className="flex flex-col gap-6">                       
                            <project.logo.svg className={project.logo.size} />
                            <div className="flex gap-3 font-heading text-foreground text-sm font-light max-w-104.5">
                                <div className={'w-1'} style={{ backgroundColor: project.primary }}></div>
                                <p>{project.subtitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 font-sans sm:gap-14 md:max-w-191 lg:max-w-112.75">
                        <p className="text-sm text-muted">{project.description}</p>
                        <span className="text-xs font-medium text-foreground">{project.credits}</span>
                    </div>
                </div>
                <div className="overflow-hidden flex justify-center -ml-6 sm:ml-0 lg:justify-start lg:-mr-10 xl:mr-0">
                    <Image
                        src={project.mockup}
                        alt={project.title}
                        width={1500}
                        height={841}
                        loading="eager"
                        className="h-auto w-100 max-w-none sm:w-150 sm:h-auto md:w-180 md:h-auto xl:w-250 xl:h-auto object-cover"
                    />
                </div> 
            </div>
        </section>
    );
}