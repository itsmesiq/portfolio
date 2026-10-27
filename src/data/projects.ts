import type { Project } from '@/types/project.types';

export const projects: Project[] = [
    {
        image: '/img/etherea.jpg',
        title: 'Etherea',
        tags: ['Next.js', 'TypeScript', 'React', 'Node.js', 'Fastify', 'PostgreSQL', 'Notion API'],
        description:
            'Etherea is a personal productivity workspace that integrates with Notion to centralize tasks, habits, projects, and goals in a customizable dashboard. Built with a modern full-stack architecture, it features modular APIs, authentication, and embedded widgets for extending Notion’s capabilities.',
        githubLink: 'https://github.com/itsmesiq/etherea',
        demoLink: 'https://etherea.vercel.app/',
        isFeatured: true,
    },
    {
        title: 'Template Preview',
        tags: ['Node.js', 'TypeScript', 'Fastify', 'Scriban', 'PostgreSQL', 'Drizzle ORM', 'Zod'],
        description:
            'A development tool for processing and rendering HTML email templates, featuring a custom Scriban-based engine, reusable components, mock data, and a dedicated preview API.',
        githubLink: 'https://github.com/itsmesiq/template-preview',
        isFeatured: false,
    },
    {
        title: 'Fit AI',
        tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL'],
        description:
            'A workout management application featuring CRUD operations, a responsive interface built with Next.js, and REST API integration with a Node.js backend and PostgreSQL database.',
        githubLink: 'https://github.com/itsmesiq/bootcamp-treinos-frontend',
        secondaryLink: 'https://github.com/itsmesiq/bootcamp-treinos-api',
        isFeatured: false,
    },
    {
        image: '/illustrations/chimo.svg',
        title: 'ChimoBoard',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vitest'],
        description:
            'A logic puzzle game combining Sudoku and Minesweeper, featuring procedural puzzle generation, unique-solution validation, colored regions, and a limited-lives gameplay system.',
        githubLink: 'https://github.com/itsmesiq/chimoboard',
        demoLink: 'https://chimoboard.vercel.app/',
        isFeatured: false,
    },
];
