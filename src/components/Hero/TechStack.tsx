import { FigmaIcon, HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, NextIcon, TailwindIcon, GithubIcon } from "../icons";

const techStack = [
    {
        label: 'Figma',
        icon: FigmaIcon,
    },
    {
        label: 'HTML',
        icon: HtmlIcon,
    },
    {
        label: 'CSS',
        icon: CssIcon,
    },
    {
        label: 'JavaScript',
        icon: JavascriptIcon,
    },
    {
        label: 'React',
        icon: ReactIcon,
    },
    {
        label: 'Next.js',
        icon: NextIcon,
    },
    {
        label: 'Tailwind',
        icon: TailwindIcon,
    },
    {
        label: 'Github',
        icon: GithubIcon,
    },
];

export default function TechStack() {
    return (
        <div className="px-0 py-5 sm:py-6 sm:px-3.5 flex gap-3 flex-wrap justify-start items-center">
            {techStack.map((tech) => (
                <div key={tech.label} className="flex items-center gap-1 bg-surface rounded-4xl px-3 py-1">
                    {tech.icon && <tech.icon className="w-4 h-4" />}
                    <span className="font-sans text-sm text-muted">{tech.label}</span>
                </div>
            ))}            
        </div>
    );
}