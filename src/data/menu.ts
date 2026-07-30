import { Case } from '@/types/case.type'

export const menuItens = [
    {
        label: 'Sobre Mim',
        href: '/#about',
    },
    {
        label: 'Cases',
        href: '/#cases',
        children: [
            {
                label: 'Wake',
                href: '/cases/wake',
            },
            {
                label: 'Shop2Gether',
                href: 'shop2gether',
            },
            {
                label: 'Casa Almeida',
                href: '/cases/casa-almeida',
            },
            {
                label: 'Coach Brasil',
                href: '/cases/coach',
            }
        ]
    },
    {
        label: 'Skills',
        href: '/#skills',
    },
    {
        label: 'Contato',
        href: '#contact',
    }
]