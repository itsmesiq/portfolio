import Image from "next/image";

const companies = [
    {
        label: 'Coach',
        image: '/img/featured/coach.svg',
        width: 150,
        height: 17,
        className: 'max-w-30.5 max-h-3.5 sm:max-w-37.5 sm:max-h-4.25 opacity-60 hover:opacity-100 transition-opacity duration-300'
    },
    {
        label: 'Shop2Gether',
        image: '/img/featured/shop2gether.svg',
        width: 150,
        height: 17,
        className: 'max-w-30.5 max-h-3.5 sm:max-w-37.5 sm:max-h-4.25 opacity-60 hover:opacity-100 transition-opacity duration-300'
    },
    {
        label: 'Wake',
        image: '/img/featured/wake.svg',
        width: 80,
        height: 22,
        className: 'max-w-14.25 max-h-4 sm:max-w-20 sm:max-h-5.5 opacity-60 hover:opacity-100 transition-opacity duration-300'
    },
];

export default function FeaturedCompanies() {
    return (
        <div className="w-full px-6 sm:px-16 py-6 flex items-center justify-between md:justify-center sm:gap-8 lg:gap-20 bg-surface-gray text-text-gray-200 font-sans text-sm lg:text-lg xl:text-xl font-light">
            <span className="hidden md:inline">Projetos em Destaque:</span>
            {companies.map((company, index) => (
                <Image
                    key={index}
                    src={company.image}
                    alt={company.label}
                    width={company.width}
                    height={company.height}
                    className={company.className}
                />
            ))}
        </div>
    );
};