import { featuredCompanies } from "@/data/projects";

export default function FeaturedCompanies() {
    return (
        <div className="w-full px-6 md:px-16 py-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 xl:gap-20 bg-card">
            <span className="hidden lg:inline text-muted font-sans text-sm lg:text-lg xl:text-xl font-light">Projetos em Destaque:</span>
            {featuredCompanies.map((company, index) => (
                company.image && (
                    <company.image key={index} className={company.className} />
                )
            ))}
        </div>
    );
};