import type { DREAccount } from '@/types/dre'

export const data: DREAccount[] = [
  {
    code: '1',
    description: 'Receita Bruta',
    values: {},
    total: 0,
    children: [
      {
        code: '1.1',
        description: 'Receita de Vendas',
        values: {},
        total: 0,
      },
      {
        code: '1.2',
        description: 'Receita de Serviços',
        values: {},
        total: 0,
      },
    ],
  },
  {
    code: '2',
    description: 'Deduções da Receita Bruta',
    values: {},
    total: 0,
    children: [
      {
        code: '2.1',
        description: 'Devoluções',
        values: {},
        total: 0,
      },
      {
        code: '2.2',
        description: 'Impostos sobre Vendas',
        values: {},
        total: 0,
      },
    ],
  },
  {
    code: '3',
    description: 'Receita Líquida',
    values: {},
    total: 0,
  },
  {
    code: '4',
    description: 'Custos dos Produtos Vendidos',
    values: {},
    total: 0,
    children: [
      {
        code: '4.1',
        description: 'Matéria-prima',
        values: {},
        total: 0,
      },
      {
        code: '4.2',
        description: 'Mão de obra direta',
        values: {},
        total: 0,
      },
    ],
  },
  {
    code: '5',
    description: 'Lucro Bruto',
    values: {},
    total: 0,
  },
  {
    code: '6',
    description: 'Despesas Operacionais',
    values: {},
    total: 0,
    children: [
      {
        code: '6.1',
        description: 'Despesas com Vendas',
        values: {},
        total: 0,
      },
      {
        code: '6.2',
        description: 'Despesas Administrativas',
        values: {},
        total: 0,
      },
    ],
  },
  {
    code: '7',
    description: 'Resultado Operacional',
    values: {},
    total: 0,
  },
  {
    code: '8',
    description: 'Outras Receitas/Despesas',
    values: {},
    total: 0,
    children: [
      {
        code: '8.1',
        description: 'Outras Receitas',
        values: {},
        total: 0,
      },
      {
        code: '6.2',
        description: 'Outras Despesas',
        values: {},
        total: 0,
      },
    ],
  },
  {
    code: '9',
    description: 'Resultado Antes do IR',
    values: {},
    total: 0,
  },
  {
    code: '10',
    description: 'Imposto de Renda',
    values: {},
    total: 0,
  },
  {
    code: '11',
    description: 'Resultado Líquido do Exercício',
    values: {},
    total: 0,
  },
]
