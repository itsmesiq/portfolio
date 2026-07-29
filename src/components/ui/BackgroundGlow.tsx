import type { Case } from "@/types/case.type";

type BackgroundGlowProps = {
    primary: Case["primary"];
    secondary: Case["secondary"];
    terciary: Case["terciary"];
};

export default function BackgroundGlow({ primary, secondary, terciary }: BackgroundGlowProps) {
    return (
        <>
            <div className="absolute invisible sm:visible left-[45%] top-20 h-96 w-96 rounded-full blur-[140px]" style={{ backgroundColor: terciary }} />
            <div className="absolute invisible sm:visible right-[6%] top-35 h-96 w-96 rounded-full blur-[140px]" style={{ backgroundColor: secondary }} />
            <div className="absolute invisible sm:visible left-[68%] top-98 h-96 w-96 -translate-x-1/2 rounded-full blur-[140px]" style={{ backgroundColor: primary}} />

            <div className="absolute sm:invisible left-[45%] top-20 h-50 w-50 rounded-full blur-[140px]" style={{ backgroundColor: terciary }} />
            <div className="absolute sm:invisible right-[6%] top-35 h-50 w-50 rounded-full blur-[140px]" style={{ backgroundColor: secondary }} />
            <div className="absolute sm:invisible left-[68%] top-98 h-50 w-50 -translate-x-1/2 rounded-full blur-[140px]" style={{ backgroundColor: primary}} />
        </>
    );
}