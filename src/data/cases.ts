import { CoachLogo, DevicesIcon, LayersIcon, LayoutIcon, ShoppingBagIcon } from '@/components/icons';
import type { Case } from '../types/case.type';

export const cases: Case[] = [
    {
        slug: 'coach',
        title: 'Coach',
        logo: CoachLogo,
        client: 'Coach Brasil',

        preview: '/img/cases/coach/preview.png',

        tags: [
            'UX/UI Design',
            'E-Commerce',
            'Wake',
        ],

        subtitle: 'Migração de e-commerce para Wake com foco em performance, usabilidade e experiência',
        description: 'Projeto desenvolvido para a Coach Brasil com o objetivo de migrar sua loja para a plataforma Wake, modernizando a interface e otimizando a experiência de compra em todos os dispositivos',
        credits: '*Projeto desenvolvido associado à Agencia Oasis',

        highlights: [
            {
                icon: LayersIcon,
                title: '40+',
                subtitle: 'Telas desenvolvidas',
            },
            {
                icon: LayoutIcon,
                title: '6',
                subtitle: 'PLPs otimizadas',
            },
            {
                icon: DevicesIcon,
                title: 'Responsivo',
                subtitle: 'Layout desktop e mobile',
            },
            {
                icon: ShoppingBagIcon,
                title: 'Wake Platform',
                subtitle: 'E-commerce headless',
            },
        ],
        challenge: 'Migrar o e-commerce da Coach Brasil para a plataforma Wake, mantendo a identidade da marca e melhorando a performance e a usabilidade do site. Além disso, era necessário adaptar componentes e fluxos para o público brasileiro.',
        contribution: [
            'UI Design',
            'Design Responsivo (Desktop e Mobile)',
            'Design System no Figma',
            'Prototipação de interfaces',
            'Arquitetura de componentes',
            'Colaboração com o time de desenvolvimento',
        ],
        scope: [
            'Páginas de categoria (PLP) com 6 variações',
            'Página de Produto (PDP)',
            'Área do Cliente',
            'Fluxo completo de Checkout',
            'Páginas institucionais e conteúdos personalizados',
        ],
        gallery: [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            'image4.jpg',
        ]
    },
]