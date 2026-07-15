type ButtonProps = {
    href: string;
    children: React.ReactNode;
};

export default function Button({href, children}: ButtonProps) {
    return (
        <a
            href={href}
            download
            className="inline-flex items-center gap-3 rounded-lg px-4 py-2 font-sans text-sm md:text-base font-medium text-primary-foreground bg-primary hover:bg-primary-hover transition-colors duration-300"
        >
            {children}
        </a>
    );
};