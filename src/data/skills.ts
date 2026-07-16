import type { Skill } from '@/types/skill.type';
import { UiIcon, CroIcon, FrontIcon, ScriptsIcon } from '@/components/icons';

export const skills: Skill[] = [
    {
        icon: UiIcon,
        label: 'UI Design',
        title: 'Design de Interface',
        description: 'Criação de interfaces responsivas e experiências para e-commerce, desde wireframes até protótipos de alta fidelidade. Domínio de Figma com foco em Auto Layout, Componentização, Design Systems e handoff para desenvolvimento, garantindo consistência visual e eficiência na implementação.'
    },
    {
        icon: CroIcon,
        label: 'UX/CRO',
        title: 'Análise de UX/CRO',
        description: 'Implementação de interfaces digitais utilizando HTML, CSS e JavaScript, com foco em performance, acessibilidade e responsividade. Experiência em frameworks modernos como React e Next.js, garantindo uma experiência de usuário fluida e otimizada para diferentes dispositivos.'
    },
    {
        icon: FrontIcon,
        label: 'Frontend',
        title: 'Frontend',
        description: 'Desenvolvimento de interfaces modernas, responsivas e performáticas utilizando HTML, CSS, JavaScript, React, Next.js e Tailwind CSS. Experiência na implementação de layouts em plataformas de e-commerce e personalizações em WordPress.'
    },
    {
        icon: ScriptsIcon,
        label: 'Scripts & Automação',
        title: 'Scripts & Automação',
        description: 'Criação de scripts em Python para automatizar processos, manipular dados e reduzir tarefas repetitivas, aumentando a produtividade e a eficiência em fluxos de trabalho.'
    }
];