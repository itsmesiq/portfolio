import Link from "next/link";
import { menuItens } from "@/data/menu";

export function DesktopNav() {
    return(
        <nav className='hidden lg:flex'>
            <ul role="menu" className="flex space-x-6">
                {menuItens.map((item, index) => (
                    <li key={index} role='menuitem' className="relative group">
                        <Link href={item.href} className="text-foreground hover:text-primary transition-colors duration-500">
                            {item.label}
                        </Link>
                        {item.children && (
                            <div className="absolute invisible top-full left-0 w-full min-w-65 bg-background z-30 rounded-2xl flex py-8 flex-col gap-5 shadow-md group-hover:visible transition-all duration-300 ease-in-out">
                                {item.children.map((child, index) => (
                                    <Link key={index} href={child.href} className="text-sm text-muted font-light pl-8 py-2.5 border-l-3 border-transparent hover:text-foreground hover:font-semibold hover:border-primary transition-all duration-300 ease-in-out">{child.label}</Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}