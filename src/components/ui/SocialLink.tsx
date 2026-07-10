import Image from "next/image";
import type { Social } from "@/types/social.type";

type SocialLinkProp = {
    social: Social;
};

export default function SocialLink({ social }: SocialLinkProp) {
    return (
        <a href={social.href} target="_blank" rel="noopener noreferrer">
            <div className="w-full md:min-w-90 flex items-center justify-between py-5 px-5 bg-surface-gray rounded-lg hover:bg-surface-hover transition-colors duration-300">
                <div className="flex gap-3 items-center">
                    <Image
                        src={social.image}
                        alt={social.label}
                        width={24}
                        height={24}
                    />
                    <span>{social.label}</span>
                </div>
                <Image
                    src="/img/icon/arrow.svg"
                    alt="Arrow"
                    width={24}
                    height={24}
                />
            </div>
        </a>
    );
};