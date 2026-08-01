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
            featuredSize: 'w-[80px] h-[22px] max-w-14.25 max-h-4 sm:max-w-20 sm:max-h-5.5',
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
        primary: '#DE7E2F',
        secondary: '#A34C41',
        terciary: '#744039',
        logo: {
            svg: Shop2GetherLogo,
            size: 'w-[318px] h-[36px] sm:w-104.5 sm:h-12',
            featuredSize: 'w-[150px] h-[17px] max-w-30.5 max-h-3.5 sm:max-w-37.5 sm:max-h-4.25',
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

        subtitle: 'Evolução contínua da experiência de compra da Shop2Gether através de novas funcionalidades para PDP, pós-compra e jornadas de conversão.',
        description: 'Projeto de evolução contínua do e-commerce da Shop2Gether, com foco na criação de novas funcionalidades para otimizar a jornada de compra em desktop e mobile. O trabalho envolveu interfaces para PDP, avaliações, Minha Conta, minicart, carrinho, cross sell e fluxos de pós-compra, considerando as particularidades de uma operação multiseller e priorizando a experiência mobile.',
        credits: 'Projeto desenvolvido associado à Agencia Oasis',

        highlights: [
            {
                icon: LayersIcon,
                title: 'Cross Sell',
                subtitle: 'Mini Cart e Carrinho',
                width: 'w-[97px]',
            },
            {
                icon: LayoutIcon,
                title: 'PDP',
                subtitle: 'Conversão e Confiança',
                width: 'w-[97px]',
            },
            {
                icon: DevicesIcon,
                title: 'Mobile First',
                subtitle: 'Desktop e Mobile',
                width: 'w-[134px]',
            },
            {
                icon: ShoppingBagIcon,
                title: 'Marketplace',
                subtitle: 'Operação Multiseller',
                width: 'w-[170px]',
            },
        ],
        challenge: 'Desenvolver e evoluir funcionalidades para um e-commerce de moda consolidado, equilibrando novas experiências de compra com as restrições da plataforma e de uma operação multiseller. O desafio era criar interfaces escaláveis, consistentes e mobile first, capazes de melhorar descoberta de produtos, confiança na compra e navegação pós-venda.',
        contribution: [
            'UI Design Responsivo (Desktop e Mobile)',
            'Fluxos da Área do Cliente',
            'Minha Conta e Pós-compra',
            'Página de Produto (PDP)',
            'Sistema de Avaliações',
            'Mini Cart e Carrinho',
            'Cross Sell e Recomendações',
            'Prototipação',
            'Handoff para Desenvolvimento'
        ],
        scope: [
            'Minha Conta Completa',
            'Pedidos e Detalhes do Pedido',
            'Cashback e Créditos',
            'Wishlist',
            'Trocas e Devoluções',
            'Página de Produto (PDP)',
            'Sistema de Avaliações',
            'Cross Sell',
            'Mini Cart e Carrinho',
            'Gift Message',
            'Avise-me quando voltar ao estoque',
            'Modal de Cupom'
        ],
        gallery: [
            {
                title: 'PDP',
                thumb: '/img/cases/shop2gether/thumb/thumb1.webp',
                thumbMobile: '/img/cases/shop2gether/thumb/thumb1mobile.webp',
                alt: 'PDP Shop2Gether',
                images: [
                    '/img/cases/shop2gether/pdp1.webp',
                    '/img/cases/shop2gether/pdp2.webp',
                    '/img/cases/shop2gether/pdp3.webp',
                    '/img/cases/shop2gether/pdp4.webp'
                ]
            },
            {
                title: 'Minha Conta',
                thumb: '/img/cases/shop2gether/thumb/thumb2.webp',
                thumbMobile: '/img/cases/shop2gether/thumb/thumb2mobile.webp',
                alt: 'Minha Conta Shop2Gether - Ambiente Logado',
                images: [
                    '/img/cases/shop2gether/logado1.webp',
                    '/img/cases/shop2gether/logado2.webp',
                    '/img/cases/shop2gether/logado3.webp',
                    '/img/cases/shop2gether/logado4.webp',
                    '/img/cases/shop2gether/logado5.webp',
                    '/img/cases/shop2gether/logado6.webp',
                    '/img/cases/shop2gether/logado7.webp',
                    '/img/cases/shop2gether/logado8.webp'
                ]
            },
            {
                title: 'Checkout',
                thumb: '/img/cases/shop2gether/thumb/thumb3.webp',
                thumbMobile: '/img/cases/shop2gether/thumb/thumb3mobile.webp',
                alt: 'Checkout Shop2Gether',
                images: [
                    '/img/cases/shop2gether/checkout1.webp',
                    '/img/cases/shop2gether/checkout2.webp',
                    '/img/cases/shop2gether/checkout3.webp',
                    '/img/cases/shop2gether/checkout4.webp',
                    '/img/cases/shop2gether/checkout5.webp',
                    '/img/cases/shop2gether/checkout6.webp',
                    '/img/cases/shop2gether/checkout7.webp'
                ]
            },
            {
                title: 'Avaliações',
                thumb: '/img/cases/shop2gether/thumb/thumb4.webp',
                thumbMobile: '/img/cases/shop2gether/thumb/thumb4mobile.webp',
                alt: 'Avaliações - PDP Shop2Gether',
                images: [
                    '/img/cases/shop2gether/avaliacao1.webp',
                    '/img/cases/shop2gether/avaliacao2.webp',
                    '/img/cases/shop2gether/avaliacao3.webp'
                ]
            }
        ]
    },
    {
        slug: 'casa-almeida',
        title: 'Casa Almeida',
        primary: '#D03F3C',
        secondary: '#561D27',
        terciary: '#301318',
        logo: {
            svg: CasaAlmeidaLogo,
            size: 'w-[318px] h-[36px] sm:w-104.5 sm:h-12',
            featuredSize: 'w-[150px] h-[15px] max-w-30.5 max-h-3.5 sm:max-w-37.5 sm:max-h-4.25',
        },
        client: 'Casa Almeida',

        mockup: '/img/cases/casaalmeida/mockup.png',
        preview: '/img/cases/casaalmeida/preview.jpg',

        tags: [
            'UX/UI Design',
            'E-Commerce',
            'CRO',
            'Wake',
        ],

        subtitle: 'Migração e evolução da experiência de compra da Casa Almeida para a plataforma Wake.',
        description: 'Projeto de migração do e-commerce da Casa Almeida para a plataforma Wake, preservando elementos já consolidados da experiência da marca e incorporando novas funcionalidades ao longo da jornada de compra. O trabalho envolveu análise do comportamento dos usuários, evolução de interfaces e criação de novas soluções para descoberta de produtos, personalização e checkout.',
        credits: 'Projeto desenvolvido associado à Agencia Oasis',

        highlights: [
            {
                icon: LayersIcon,
                title: 'UX & CRO',
                subtitle: 'Heatmaps',
                width: 'w-[97px]',
            },
            {
                icon: ShoppingBagIcon,
                title: 'Discovery',
                subtitle: 'Merchandising',
                width: 'w-[97px]',
            },
            {
                icon: DevicesIcon,
                title: 'Responsivo',
                subtitle: 'Desktop e Mobile',
                width: 'w-[134px]',
            },
            {
                icon: LayoutIcon,
                title: 'Wake',
                subtitle: 'Migração',
                width: 'w-[170px]',
            },
        ],
        challenge: 'Migrar uma operação de e-commerce já consolidada para a plataforma Wake sem descaracterizar a experiência que os clientes da Casa Almeida já conheciam. A partir da análise do site existente e do comportamento dos usuários, o projeto buscou preservar padrões relevantes, solucionar pontos de atrito e explorar as possibilidades da nova plataforma para criar uma jornada de compra mais intuitiva e completa.',
        contribution: [
            'UX/UI Design Responsivo (Desktop e Mobile)',
            'Análise de Comportamento e Heatmaps',
            'Evolução da Jornada de Compra',
            'Design de Novas Funcionalidades',
            'Prototipação de Interfaces',
            'Aplicação e Evolução de Componentes',
            'Fluxos de Autenticação e Área do Cliente',
            'Checkout e Pós-compra',
            'Colaboração com Desenvolvimento',
        ],
        scope: [
            'Home e Vitrines de Produtos',
            'Página de Categoria (PLP)',
            'Página de Produto (PDP)',
            'Compre Junto',
            'Personalização de Produtos',
            'Barra de Compra Fixa na PDP',
            'Minicart e Minicart Vazio',
            'Banners Interativos e Vitrines Laterais',
            'Cards de Categorias e Produtos',
            'Landing Page Buddemeyer Luxus',
            'Área do Cliente e Pós-compra',
            'Fluxo Completo de Checkout',
        ],
        gallery: [
            {
                title: 'PDP',
                thumb: '/img/cases/casaalmeida/thumb/thumb1.webp',
                thumbMobile: '/img/cases/casaalmeida/thumb/thumb1mobile.webp',
                alt: 'PDP & Experiência de Produto',
                images: [
                    '/img/cases/casaalmeida/pdp1.webp',
                    '/img/cases/casaalmeida/pdp2.webp',
                    '/img/cases/casaalmeida/pdp3.webp',
                    '/img/cases/casaalmeida/pdp4.webp',
                    '/img/cases/casaalmeida/pdp5.webp',
                    '/img/cases/casaalmeida/pdp6.webp'
                ]
            },
            {
                title: 'Luxus',
                thumb: '/img/cases/casaalmeida/thumb/thumb2.webp',
                thumbMobile: '/img/cases/casaalmeida/thumb/thumb2mobile.webp',
                alt: 'Buddemeyer Luxus',
                images: [
                    '/img/cases/casaalmeida/luxus1.webp',
                    '/img/cases/casaalmeida/luxus2.webp',
                    '/img/cases/casaalmeida/luxus3.webp',
                    '/img/cases/casaalmeida/luxus4.webp',
                    '/img/cases/casaalmeida/luxus5.webp',
                    '/img/cases/casaalmeida/luxus6.webp',
                    '/img/cases/casaalmeida/luxus7.webp'
                ]
            },
            {
                title: 'Home',
                thumb: '/img/cases/casaalmeida/thumb/thumb3.webp',
                thumbMobile: '/img/cases/casaalmeida/thumb/thumb3mobile.webp',
                alt: 'Home & Merchandising',
                images: [
                    '/img/cases/casaalmeida/home1.webp',
                    '/img/cases/casaalmeida/home2.webp',
                    '/img/cases/casaalmeida/home3.webp',
                    '/img/cases/casaalmeida/home4.webp',
                    '/img/cases/casaalmeida/home5.webp',
                    '/img/cases/casaalmeida/home6.webp',
                    '/img/cases/casaalmeida/home7.webp'
                ]
            },
            {
                title: 'PLP',
                thumb: '/img/cases/casaalmeida/thumb/thumb4.webp',
                thumbMobile: '/img/cases/casaalmeida/thumb/thumb4mobile.webp',
                alt: 'PLP & Categorias',
                images: [
                    '/img/cases/casaalmeida/plp1.webp',
                    '/img/cases/casaalmeida/plp2.webp',
                    '/img/cases/casaalmeida/plp3.webp',
                    '/img/cases/casaalmeida/plp4.webp'
                ]
            }
        ]
    },
    {
        slug: 'coach',
        title: 'Coach',
        primary: '#EABFAC',
        secondary: '#CFA08C',
        terciary: '#D68D6E',
        logo: {
            svg: CoachLogo,
            size: 'w-[318px] h-[36px] sm:w-104.5 sm:h-12',
            featuredSize: 'w-[150px] h-[17px] max-w-30.5 max-h-3.5 sm:max-w-37.5 sm:max-h-4.25',
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