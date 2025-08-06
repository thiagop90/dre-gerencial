import type { DREAccount } from '@/types/dre'

export const data: DREAccount[] = [
  {
    code: '1',
    description: 'Receita Bruta',
    values: generateMonthlyValues(10000, 15000),
    children: [
      {
        code: '1.1',
        description: 'Receita de Vendas',
        values: generateMonthlyValues(7000, 11000),
      },
      {
        code: '1.2',
        description: 'Receita de Serviços',
        values: generateMonthlyValues(2000, 5000),
      },
    ],
  },
  {
    code: '2',
    description: 'Deduções da Receita Bruta',
    values: generateMonthlyValues(1000, 3000),
    children: [
      {
        code: '2.1',
        description: 'Devoluções',
        values: generateMonthlyValues(200, 800),
      },
      {
        code: '2.2',
        description: 'Impostos sobre Vendas',
        values: generateMonthlyValues(800, 2200),
      },
    ],
  },
  {
    code: '3',
    description: 'Receita Líquida',
    values: generateMonthlyValues(8000, 12000),
  },
  {
    code: '4',
    description: 'Custos dos Produtos Vendidos',
    values: generateMonthlyValues(3000, 7000),
    children: [
      {
        code: '4.1',
        description: 'Matéria-prima',
        values: generateMonthlyValues(1500, 4000),
      },
      {
        code: '4.2',
        description: 'Mão de obra direta',
        values: generateMonthlyValues(1000, 3000),
      },
    ],
  },
  {
    code: '5',
    description: 'Lucro Bruto',
    values: generateMonthlyValues(3000, 7000),
  },
  {
    code: '6',
    description: 'Despesas Operacionais',
    values: generateMonthlyValues(1500, 4000),
    children: [
      {
        code: '6.1',
        description: 'Despesas com Vendas',
        values: generateMonthlyValues(800, 2000),
      },
      {
        code: '6.2',
        description: 'Despesas Administrativas',
        values: generateMonthlyValues(700, 1800),
      },
    ],
  },
  {
    code: '7',
    description: 'Resultado Operacional',
    values: generateMonthlyValues(1000, 5000),
  },
  {
    code: '8',
    description: 'Outras Receitas/Despesas',
    values: generateMonthlyValues(-1000, 1000),
    children: [
      {
        code: '8.1',
        description: 'Outras Receitas',
        values: generateMonthlyValues(100, 800),
      },
      {
        code: '8.2',
        description: 'Outras Despesas',
        values: generateMonthlyValues(100, 800),
      },
    ],
  },
  {
    code: '9',
    description: 'Resultado Antes do IR',
    values: generateMonthlyValues(500, 4500),
  },
  {
    code: '10',
    description: 'Imposto de Renda',
    values: generateMonthlyValues(300, 1000),
  },
  {
    code: '11',
    description: 'Resultado Líquido do Exercício',
    values: generateMonthlyValues(500, 4000),
  },
]

function generateMonthlyValues(
  min: number,
  max: number,
): Record<string, number> {
  const values: Record<string, number> = {}
  for (let month = 1; month <= 12; month++) {
    const key = `2025-${month.toString().padStart(2, '0')}`
    values[key] = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return values
}
