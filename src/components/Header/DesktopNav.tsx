import Link from "next/link";
import { menuItens } from "@/data/menu";

export function DesktopNav() {
    return(
        <nav className='hidden lg:flex'>
            <ul role="menu" className="flex space-x-6">
                {menuItens.map((item, index) => (
                    <li key={index} role='menuitem'>
                        <Link href={item.href} className="text-foreground hover:text-primary transition-colors duration-500">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}