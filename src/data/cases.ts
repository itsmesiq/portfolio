import { CasaAlmeidaLogo, CoachLogo, DevicesIcon, LayersIcon, LayoutIcon, Shop2GetherLogo, ShoppingBagIcon, WakeLogo } from '@/components/icons';
import type { Case } from '../types/case.type';

export const cases: Case[] = [
    {
        slug: 'wake',
        title: 'Wake',
        primary: '#C405F2',
        secondary: '#EE9BF7',
        terciary: '#BF9DE9',
        logo: {
            svg: WakeLogo,
            size: 'w-53 h-15',
        },
        client: 'Wake',

        mockup: '/img/cases/wake/mockup.png',
        preview: '/img/cases/wake/preview.jpg',

        tags: [
            'UX/UI Design',
            'E-Commerce',
            'Prototyping',
            'Wake',
        ],

        subtitle: 'E-commerce demonstrativo desenvolvido para apresentar a plataforma Wake durante os principais eventos do setor.',
        description: 'Projeto criado em parceria com a Agência Oasis para demonstrar as capacidades da plataforma Wake durante o Fórum E-Commerce Brasil 2024 e o Wake Summit. O e-commerce simula uma operação completa de varejo digital, destacando recursos da plataforma por meio de uma experiência moderna, responsiva e altamente interativa.',
        credits: 'Projeto desenvolvido associado à Agencia Oasis',

        highlights: [
            {
                icon: LayersIcon,
                title: '20+',
                subtitle: 'Telas Desenvolvidas',
                width: 'w-[97px]',
            },
            {
                icon: LayoutIcon,
                title: '4',
                subtitle: 'Versões de PDP',
                width: 'w-[97px]',
            },
            {
                icon: DevicesIcon,
                title: 'Responsivo',
                subtitle: 'Desktop e Mobile',
                width: 'w-[134px]',
            },
            {
                icon: ShoppingBagIcon,
                title: 'Wake Platform',
                subtitle: 'Checkout Headless',
                width: 'w-[170px]',
            },
        ],
        challenge: 'Desenvolver um e-commerce demonstrativo para apresentar as principais funcionalidades da plataforma Wake durante grandes eventos do setor. O projeto simulava uma operação completa de varejo digital, com foco em usabilidade, performance e demonstração prática dos recursos da plataforma.',
        contribution: [
            'UI Design Resposivo (Desktop e Mobile)',
            'Design System',
            'Organização da Identidade Visual',
            'Mockups de Produtos',
            'Prototipação',
            'Arquitetura de Componentes',
            'Fluxos de Autenticação',
            'E-mails trasacionais',
            'Colaboração com Desenvolvimento',
        ],
        scope: [
            'Spots de produto com Quickbuy',
            'Página de Categoria (PLP)',
            '3 versões de PDP',
            'PDP com Compre o Look',
            'Área do Cliente',
            'Fluxo completo de Checkout',
            'Carrinho Multiseller',
            'Modo Demonstrativo',
            'Landing Pages (Summit e Fórum)',
            'Agenda de Palestras',
        ],
        gallery: [
            {
                title: 'Compre o Look',
                thumb: '/img/cases/wake/thumb/thumb1.webp',
                thumbMobile: '/img/cases/wake/thumb/thumb1mobile.webp',
                alt: 'PDP Compre o Look - Imagem do projeto Wake',
                images: [
                    '/img/cases/wake/look1.webp',
                    '/img/cases/wake/look2.webp',
                    '/img/cases/wake/look3.webp'
                ]
            },
            {
                title: 'PDP V1',
                thumb: '/img/cases/wake/thumb/thumb2.webp',
                thumbMobile: '/img/cases/wake/thumb/thumb2mobile.webp',
                alt: 'PDP V1 - Imagem do projeto Wake',
                images: [
                    '/img/cases/wake/v1pdp1.webp',
                    '/img/cases/wake/v1pdp2.webp',
                    '/img/cases/wake/v1pdp3.webp',
                    '/img/cases/wake/v1pdp4.webp',
                ]
            },
            {
                title: 'Wake Summit 2024',
                thumb: '/img/cases/wake/thumb/thumb3.webp',
                thumbMobile: '/img/cases/wake/thumb/thumb3mobile.webp',
                alt: 'Landing Page Wake Summit2024 - Imagem do projeto Wake',
                images: [
                    '/img/cases/wake/summit1.webp',
                    '/img/cases/wake/summit2.webp',
                    '/img/cases/wake/summit3.webp',
                    '/img/cases/wake/summit4.webp',
                ]
            },
            {
                title: 'PDP V2',
                thumb: '/img/cases/wake/thumb/thumb4.webp',
                thumbMobile: '/img/cases/wake/thumb/thumb4mobile.webp',
                alt: 'PDP V2 - Imagem do projeto Wake',
                images: [
                    '/img/cases/wake/v2pdp1.webp',
                    '/img/cases/wake/v2pdp2.webp',
                    '/img/cases/wake/v2pdp3.webp',
                ]
            }
        ]
    },
    {
        slug: 'shop2gether',
        title: 'Shop2Gether',
        primary: '#EABFAC',
        secondary: '#000000',
        terciary: '#FFFFFF',
        logo: {
            svg: Shop2GetherLogo,
            size: 'w-104.5 h-12',
        },
        client: 'Shop2Gether',

        mockup: '/img/cases/coach/mockup.png',
        preview: '/img/cases/shop2gether/preview.jpg',

        tags: [
            'UX/UI Design',
            'E-Commerce',
            'Checkout',
            'Wake',
        ],

        subtitle: 'Migração de e-commerce para Wake com foco em performance, usabilidade e experiência',
        description: 'Projeto desenvolvido para a Coach Brasil com o objetivo de migrar sua loja para a plataforma Wake, modernizando a interface e otimizando a experiência de compra em todos os dispositivos',
        credits: 'Projeto desenvolvido associado à Agencia Oasis',

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
                title: 'Home',
                thumb: '/img/cases/coach/thumb/thumb1.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb1mobile.webp',
                alt: 'Home Coach - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/home1.webp',
                    '/img/cases/coach/home2.webp',
                    '/img/cases/coach/home3.webp'
                ]
            },
            {
                title: 'PDP',
                thumb: '/img/cases/coach/thumb/thumb2.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb2mobile.webp',
                alt: 'PDP Coach - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/pdp1.webp',
                    '/img/cases/coach/pdp2.webp',
                    '/img/cases/coach/pdp3.webp'
                ]
            },
            {
                title: 'PLP Nolita',
                thumb: '/img/cases/coach/thumb/thumb3.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb3mobile.webp',
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
                title: 'PLP Teri',
                thumb: '/img/cases/coach/thumb/thumb4.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb4mobile.webp',
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
    {
        slug: 'casa-almeida',
        title: 'Casa Almeida',
        primary: '#C405F2',
        secondary: '#000000',
        terciary: '#FFFFFF',
        logo: {
            svg: CasaAlmeidaLogo,
            size: 'w-104.5 h-12',
        },
        client: 'Casa Almeida',

        mockup: '/img/cases/coach/mockup.png',
        preview: '/img/cases/casaalmeida/preview.jpg',

        tags: [
            'UX/UI Design',
            'E-Commerce',
            'Checkout',
            'Wake',
        ],

        subtitle: 'Migração de e-commerce para Wake com foco em performance, usabilidade e experiência',
        description: 'Projeto desenvolvido para a Coach Brasil com o objetivo de migrar sua loja para a plataforma Wake, modernizando a interface e otimizando a experiência de compra em todos os dispositivos',
        credits: 'Projeto desenvolvido associado à Agencia Oasis',

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
                title: 'Home',
                thumb: '/img/cases/coach/thumb/thumb1.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb1mobile.webp',
                alt: 'Home Coach - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/home1.webp',
                    '/img/cases/coach/home2.webp',
                    '/img/cases/coach/home3.webp'
                ]
            },
            {
                title: 'PDP',
                thumb: '/img/cases/coach/thumb/thumb2.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb2mobile.webp',
                alt: 'PDP Coach - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/pdp1.webp',
                    '/img/cases/coach/pdp2.webp',
                    '/img/cases/coach/pdp3.webp'
                ]
            },
            {
                title: 'PLP Nolita',
                thumb: '/img/cases/coach/thumb/thumb3.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb3mobile.webp',
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
                title: 'PLP Teri',
                thumb: '/img/cases/coach/thumb/thumb4.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb4mobile.webp',
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
    {
        slug: 'coach',
        title: 'Coach',
        primary: '#EABFAC',
        secondary: '',
        terciary: '',
        logo: {
            svg: CoachLogo,
            size: 'w-104.5 h-12',
        },
        client: 'Coach Brasil',

        mockup: '/img/cases/coach/mockup.png',
        preview: '/img/cases/coach/preview.jpg',

        tags: [
            'UX/UI Design',
            'E-Commerce',
            'Wake',
        ],

        subtitle: 'Migração de e-commerce para Wake com foco em performance, usabilidade e experiência',
        description: 'Projeto desenvolvido para a Coach Brasil com o objetivo de migrar sua loja para a plataforma Wake, modernizando a interface e otimizando a experiência de compra em todos os dispositivos',
        credits: 'Projeto desenvolvido associado à Agencia Oasis',

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
                title: 'Home',
                thumb: '/img/cases/coach/thumb/thumb1.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb1mobile.webp',
                alt: 'Home Coach - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/home1.webp',
                    '/img/cases/coach/home2.webp',
                    '/img/cases/coach/home3.webp'
                ]
            },
            {
                title: 'PDP',
                thumb: '/img/cases/coach/thumb/thumb2.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb2mobile.webp',
                alt: 'PDP Coach - Imagem do projeto Coach',
                images: [
                    '/img/cases/coach/pdp1.webp',
                    '/img/cases/coach/pdp2.webp',
                    '/img/cases/coach/pdp3.webp'
                ]
            },
            {
                title: 'PLP Nolita',
                thumb: '/img/cases/coach/thumb/thumb3.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb3mobile.webp',
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
                title: 'PLP Teri',
                thumb: '/img/cases/coach/thumb/thumb4.webp',
                thumbMobile: '/img/cases/coach/thumb/thumb4mobile.webp',
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
    }    
]