import Image from "next/image";

const companies = [
    {
        label: 'Coach',
        image: '/img/featured/coach.svg',
        width: 150,
        height: 17
    },
    {
        label: 'Shop2Gether',
        image: '/img/featured/shop2gether.svg',
        width: 150,
        height: 17
    },
    {
        label: 'Wake',
        image: '/img/featured/wake.svg',
        width: 80,
        height: 22
    },
];

export default function FeaturedCompanies() {
    return (
        <div className="w-full px-16 py-6 flex justify-center gap-20 bg-surface-gray text-foreground font-sans text-xl font-light">
            <span>Projetos em Destaque:</span>
            {companies.map((company, index) => (
                <Image
                    key={index}
                    src={company.image}
                    alt={company.label}
                    width={company.width}
                    height={company.height}
                />
            ))}
        </div>
    );
};