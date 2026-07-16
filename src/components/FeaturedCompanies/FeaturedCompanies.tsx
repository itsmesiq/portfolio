import { featuredCompanies } from "@/data/projects";

export default function FeaturedCompanies() {
    return (
        <div className="w-full px-6 sm:px-16 py-6 flex items-center justify-between md:justify-center sm:gap-8 lg:gap-20 bg-card">
            <span className="hidden md:inline text-muted font-sans text-sm lg:text-lg xl:text-xl font-light">Projetos em Destaque:</span>
            {featuredCompanies.map((company, index) => (
                company.image && (
                    <company.image key={index} className={company.className} />
                )
            ))}
        </div>
    );
};