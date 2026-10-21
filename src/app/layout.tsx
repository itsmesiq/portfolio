import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
    variable: '--font-outfit',
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://portfolio-itsmesiq.vercel.app'),

    title: 'Ana Siqueira | Full Stack Developer',

    description:
        'Portfólio de Ana Siqueira com projetos de UI Design e Front-end para e-commerce, interfaces responsivas, design systems e desenvolvimento com React e Next.js.',

    keywords: [
        'Ana Siqueira',
        'UI Designer',
        'Frontend Developer',
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'UX/UI',
        'Design System',
        'E-commerce',
        'Wake',
        'Figma',
        'Portfolio',
    ],

    authors: [
        {
            name: 'Ana Siqueira',
        },
    ],

    creator: 'Ana Siqueira',

    alternates: {
        canonical: '/',
    },

    openGraph: {
        title: 'Ana Siqueira | UI Designer & Frontend Developer',

        description:
            'Projetos de UI Design, Front-end e e-commerce com foco em experiência, performance e interfaces responsivas.',

        url: 'https://portfolio-itsmesiq.vercel.app',

        siteName: 'Ana Siqueira Portfolio',

        type: 'website',

        locale: 'pt_BR',

        images: [
            {
                url: '/img/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Portfólio de Ana Siqueira',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-BR"
            data-scroll-behavior="smooth"
            className={`${outfit.variable} h-full scroll-smooth antialiased`}
            suppressHydrationWarning
        >
            <body className="flex min-h-full flex-col overflow-x-hidden">
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
