type ButtonProps = {
    href: string;
    children: React.ReactNode;
};

export default function Button({href, children}: ButtonProps) {
    return (
        <a
            href={href}
            download
            className="inline-flex items-center gap-3 rounded-lg px-5 py-3 border border-text-gray-200 font-sans text-base font-medium text-text-gray-200"
        >
            {children}
        </a>
    );
};