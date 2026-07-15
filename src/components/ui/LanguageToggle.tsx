export function LanguageToggle() {
    return (
        <button className="flex gap-2 items-center rounded-lg border border-border px-2 h-10 text-sm">
            <div className="rounded-xs bg-foreground text-background w-7 p-1 flex items-center justify-center">PT</div>
            <div className="rounded-xs w-7 p-1 flex items-center justify-center hover:bg-secondary-hover transition-colors duration-500">EN</div>
        </button>
    );
}