import type { Social } from "@/types/social.type";
import { ArrowIcon } from "../icons";

type SocialLinkProp = {
    social: Social;
};

export function SocialButton({ social }: SocialLinkProp) {
    return (
        <a href={social.href} target="_blank" rel="noopener noreferrer">
            <div className="w-full min-w-80 md:min-w-90 flex items-center justify-between py-5 px-5 bg-surface text-surface-foreground border border-transparent rounded-lg hover:bg-surface-hover hover:text-surface-foreground-hover hover:border-primary transition-all transition-discrete duration-500">
                <div className="flex gap-3 items-center">
                    {social.icon && <social.icon className="size-5" />}
                    <span>{social.label}</span>
                </div>
                <ArrowIcon className="size-5" />
            </div>
        </a>
    );
};

export function SocialLink({ social }: SocialLinkProp) {
    return (
        <a href={social.href} target="_blank" rel="noopener noreferrer">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:bg-secondary-hover transition-colors duration-500">
                {social.icon && <social.icon className="size-5" />}
            </div>
        </a>
    );
}

