import type { Project, FeaturedCompany } from "@/types/project.type";
import { CoachLogo, WakeLogo, Shop2GetherLogo, CasaAlmeidaLogo } from "@/components/icons";

export const cases: Project[] = [
    {
        slug: 'coach',
        logo: CoachLogo,
        preview: '/img/cases/coachpreview.jpg',
        href: '/cases/coach',
        title: 'Coach Brasil',
        agency: 'Agência Oásis',
        tags: ['UX/UI Design', 'E-commerce', 'Wake'],
        full: {
            description: 'Projeto de migração do e-commerce da Coach Brasil para a plataforma Wake, com foco em criar uma experiência moderna, responsiva e consistente. O principal desafio foi equilibrar as diretrizes do design global da marca com as expectativas e o comportamento do consumidor brasileiro, adaptando a experiência sem perder a identidade visual da Coach.',
            highlight: '+40 telas desenvolvidas entre Desktop e Mobile',
            contribution: ['UI Design', 'Design Responsivo (Desktop e Mobile)', 'Design System no Figma', 'Prototipação de interfaces', 'Arquitetura de componentes', 'Colaboração com o time de desenvolvimento'],
            text: 'Desenvolvimento completo da interface do e-commerce, incluindo:',
            scope: ['Home', 'Páginas de categoria (PLP) com 6 variações', 'Página de Produto (PDP)', 'Área do Cliente (login, cadastro, pedidos, wishlist e demais funcionalidades)', 'Fluxo completo de Checkout, do carrinho à confirmação do pedido', 'Páginas institucionais e conteúdos personalizados da marca', 'Templates de e-mails transacionais para toda a jornada de compra'],
            handoff: {
                title: 'Design System e Handoff',
                content: 'Criação de componentes reutilizáveis utilizando Auto Layout e Variants no Figma, garantindo consistência visual, escalabilidade e maior agilidade durante a evolução do projeto. Toda a interface foi estruturada com foco em componentização, responsividade e organização, facilitando o handoff e a implementação pela equipe de Front-end.'
            },
            images: ['/img/cases/coachfull.png', '/img/cases/coachfull2.png', '/img/cases/coachfull3.png', '/img/cases/coachfull4.png']            
        }
    },
    {
        slug: 'wake',
        logo: WakeLogo,
        preview: '/img/cases/wakepreview.jpg',
        href: '/cases/wake',
        title: 'Wake',
        agency: 'Agência Oásis',
        tags: ['UX/UI Design', 'E-Commerce', 'Wake'],
        full: {
            description: 'Criação de um e-commerce demonstrativo para apresentar as principais funcionalidades da plataforma Wake durante o Fórum E-Commerce Brasil 2024 e o Wake Summit. O projeto foi desenvolvido para simular uma operação real de comércio eletrônico, destacando recursos da plataforma por meio de uma experiência moderna, intuitiva e totalmente responsiva.',
            contribution: ['UI Design', 'Design Responsivo (Desktop e Mobile)', 'Design System', 'Prototipação de Interfaces', 'Arquitetura da Experiência', 'Colaboração com o time de desenvolvimento'],
            text: 'Desenvolvimento completo da interface do e-commerce, contemplando toda a jornada de compra e funcionalidades estratégicas da plataforma:',
            scope: ['Home', 'Página de Categoria (PLP)', 'Três versões da Página de Produto (PDP)', 'Funcionalidades de Compre Junto, Compre o Look e Compra Rápida', 'Área do Cliente (login, cadastro, pedidos, wishlist e demais funcionalidades)', 'Fluxo completo de Checkout, do carrinho à confirmação do pedido', 'Carrinho organizado por categorias de produtos para facilitar a visualização dos envios', 'Página institucional com programação dos eventos, organizada por dias, temas e palestrantes'],
            images: ['/img/cases/wakefull.png', '/img/cases/wakefull2.png', '/img/cases/wakefull3.png', '/img/cases/wakefull4.png']
        }
    },
];

export const featuredCompanies : FeaturedCompany[] = [
    {
        label: 'Coach',
        image: CoachLogo,
        className: 'w-[150px] h-[17px] max-w-30.5 max-h-3.5 sm:max-w-37.5 sm:max-h-4.25 opacity-60 hover:opacity-100 transition-opacity duration-300'
    },
    {
        label: 'Shop2Gether',
        image: Shop2GetherLogo,
        className: 'w-[150px] h-[17px] max-w-30.5 max-h-3.5 sm:max-w-37.5 sm:max-h-4.25 opacity-60 hover:opacity-100 transition-opacity duration-300'
    },
    {
        label: 'Wake',
        image: WakeLogo,
        className: 'w-[80px] h-[22px] max-w-14.25 max-h-4 sm:max-w-20 sm:max-h-5.5 opacity-60 hover:opacity-100 transition-opacity duration-300'
    },
    { 
        label: 'Casa Almeida',
        image: CasaAlmeidaLogo,
        className: 'w-[150px] h-[15px] max-w-30.5 max-h-3.5 sm:max-w-37.5 sm:max-h-4.25 opacity-60 hover:opacity-100 transition-opacity duration-300'
    }    
];

/*   
    {
        tags: ['UX/UI Design', 'E-commerce', 'Checkout', 'Conversão'],
        title: 'Shop2Gether',
        logo: {
            src: '/img/featured/shop2gether.svg',
            width: 279,
            height: 32
        },
        credits: 'Projeto desenvolvido em colaboração com a Agência Oásis',
        description: 'Redesenho da experiência de checkout da Shop2Gether com foco em aumentar as taxas de conversão e reduzir atritos durante a jornada de compra. Além da reformulação completa do fluxo, o projeto contemplou novas funcionalidades voltadas à experiência do usuário, cross sell e personalização da compra, sempre equilibrando usabilidade e as necessidades do negócio.',
        contribution: ['UI Design', 'Design Responsivo (Desktop e Mobile)', 'Otimização da Jornada de Compra', 'Prototipação de Interfaces', 'Design de Novas Funcionalidades', 'Colaboração com o time de desenvolvimento'],
        text: 'Desenvolvimento de uma nova experiência para o checkout e evolução de funcionalidades estratégicas do e-commerce, incluindo:',
        scope: ['Fluxo completo de checkout, do carrinho à confirmação do pedido', 'Processo de checkout simplificado', 'Cadastro rápido de clientes', 'Carrinho multiseller com agrupamento por entrega', 'Minicart e carrinho com vitrines de Cross Sell', 'Modal de produto adicionado ao carrinho com compra rápida (Compre o Look)', 'Funcionalidade para presentes, incluindo mensagem personalizada e opção de embalagem', 'Aviso automático de alteração de preço para produtos no carrinho', 'Reformulação da seleção de variações (cor e tamanho) na página de produto', 'Nova experiência para produtos esgotados, com sugestões de itens similares e opção Avise-me', 'Reformulação das avaliações de produtos, incluindo fotos, indicadores visuais e filtros de navegação', 'Lightbox promocional para captura de leads com oferta de cupom de desconto'],
        image: '/img/cases/shop2getherfull.png'
    },
    {
        tags: ['UX/UI Design', 'E-Commerce', 'Wake'],
        title: 'Wake',
        logo: {
            src: '/img/featured/wake.svg',
            width: 142,
            height: 40
        },
        credits: 'Projeto desenvolvido em colaboração com a Agência Oásis',
        description: 'Criação de um e-commerce demonstrativo para apresentar as principais funcionalidades da plataforma Wake durante o Fórum E-Commerce Brasil 2024 e o Wake Summit. O projeto foi desenvolvido para simular uma operação real de comércio eletrônico, destacando recursos da plataforma por meio de uma experiência moderna, intuitiva e totalmente responsiva.',
        contribution: ['UI Design', 'Design Responsivo (Desktop e Mobile)', 'Design System', 'Prototipação de Interfaces', 'Arquitetura da Experiência', 'Colaboração com o time de desenvolvimento'],
        text: 'Desenvolvimento completo da interface do e-commerce, contemplando toda a jornada de compra e funcionalidades estratégicas da plataforma:',
        scope: ['Home', 'Página de Categoria (PLP)', 'Três versões da Página de Produto (PDP)', 'Funcionalidades de Compre Junto, Compre o Look e Compra Rápida', 'Área do Cliente (login, cadastro, pedidos, wishlist e demais funcionalidades)', 'Fluxo completo de Checkout, do carrinho à confirmação do pedido', 'Carrinho organizado por categorias de produtos para facilitar a visualização dos envios', 'Página institucional com programação dos eventos, organizada por dias, temas e palestrantes'],
        image: '/img/cases/wakefull.png'
    },
*/
