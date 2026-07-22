type GlassCardProps = {
    children: React.ReactNode;
    className: string;
};

export default function GlassCard({ children, className = "", }: GlassCardProps) {
    return (
        <div className={`relative overflow-hidden rounded-[20px] border border-foreground/10 bg-surface/45 backdrop-blur-2xl shadow-xl ${className}`}>
            <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-foreground/8 via-transparent to-background/5" />
            <div className="relative">
                {children}
            </div>
        </div>
    );
}