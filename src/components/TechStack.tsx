const techStack = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Drizzle ORM',
    'Fastify',
    'REST APIs',
    'Jest',
    'Git',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Sass',
];

export function TechStack() {
    return (
        <div
            id="tech-stack"
            className="flex w-full max-w-[1366px] flex-col items-center gap-6 rounded-3xl border border-stroke bg-surface px-5 py-5 font-sans md:px-6 md:py-6 lg:flex-row lg:gap-22 2xl:px-10 2xl:py-6"
        >
            <h2 className="text-3xl font-medium text-foreground lg:max-w-[76px]">
                <span className="text-primary">Tech </span>
                Stack
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 lg:justify-start xl:gap-x-4 xl:gap-y-3">
                {techStack.map((tech, index) => (
                    <span
                        key={index}
                        className="rounded-lg border border-stroke bg-background px-3 py-1.5 text-sm tracking-[1.5px] text-foreground xl:text-base"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
