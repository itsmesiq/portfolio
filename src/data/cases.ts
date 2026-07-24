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
                width: 'w-[97px]',
            },
            {
                icon: LayoutIcon,
                title: '6',
                subtitle: 'PLPs otimizadas',
                width: 'w-[97px]',
            },
            {
                icon: DevicesIcon,
                title: 'Responsivo',
                subtitle: 'Layout desktop e mobile',
                width: 'w-[134px]',
            },
            {
                icon: ShoppingBagIcon,
                title: 'Wake Platform',
                subtitle: 'E-commerce headless',
                width: 'w-[170px]',
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
            {
                thumb: '/img/cases/coach/thumb/thumb1.webp',
                alt: 'Home Coach - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/home1.webp',
                    '/img/cases/coach/home2.webp',
                    '/img/cases/coach/home3.webp'
                ]
            },
            {
                thumb: '/img/cases/coach/thumb/thumb2.webp',
                alt: 'PDP Coach - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/pdp1.webp',
                    '/img/cases/coach/pdp2.webp',
                    '/img/cases/coach/pdp3.webp'
                ]
            },
            {
                thumb: '/img/cases/coach/thumb/thumb3.webp',
                alt: 'PLP Nolita Collection - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/nolita1.webp',
                    '/img/cases/coach/nolita2.webp',
                    '/img/cases/coach/nolita3.webp',
                    '/img/cases/coach/nolita4.webp',
                    '/img/cases/coach/nolita5.webp',
                    '/img/cases/coach/nolita6.webp',
                    '/img/cases/coach/nolita7.webp'
                ]
            },
            {
                thumb: '/img/cases/coach/thumb/thumb4.webp',
                alt: 'PLP Teri Collection - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/teri1.webp',
                    '/img/cases/coach/teri2.webp',
                    '/img/cases/coach/teri3.webp',
                    '/img/cases/coach/teri4.webp',
                    '/img/cases/coach/teri5.webp',
                    '/img/cases/coach/teri6.webp',
                    '/img/cases/coach/teri7.webp'
                ]
            }
        ]
    },
]