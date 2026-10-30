import Link from 'next/link';

export function Navigation() {
    const navItems = [
        { name: 'Hello', href: '/#hello' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Tech Stack', href: '/#tech-stack' },
        { name: 'About Me', href: '/#about-me' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className="fixed top-1/2 left-8 z-20 hidden -translate-y-1/2 lg:block">
            <ul className="flex flex-col items-center gap-2 rounded-full border border-stroke bg-surface px-3 py-3 text-base tracking-[1.5px]">
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className="rounded-full bg-transparent px-1.5 py-3 transition-colors duration-300 ease-in-out hover:text-accent"
                    >
                        <Link href={item.href} className="rotate-180 [writing-mode:vertical-rl]">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
