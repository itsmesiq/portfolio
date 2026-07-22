export default function BackgroundGlow() {
    return (
        <>
            <div className="absolute left-[45%] top-20 h-96 w-96 rounded-full bg-cyan-500/50 blur-[140px]" />
            <div className="absolute right-[6%] top-35 h-96 w-96 rounded-full bg-pink-500/60 blur-[140px]" />
            <div className="absolute left-[68%] top-98 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-300/60 blur-[140px]" />
        </>
    );
}