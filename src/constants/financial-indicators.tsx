import { Icons } from '@/components/icons'
import { formatCurrency } from '@/lib/utils/format-currency'

export const financialIndicators = [
  {
    id: 1,
    Icon: Icons.moneyBag,
    label: 'Lucro Bruto',
    value: formatCurrency(205000),
    description:
      'Diferença entre a receita líquida e os custos diretos de produtos ou serviços.',
  },
  {
    id: 2,
    Icon: Icons.graphUp,
    label: 'Lucro Líquido',
    value: formatCurrency(150000),
    description:
      'Resultado final da empresa após todas as despesas, impostos e custos.',
  },
  {
    id: 3,
    Icon: Icons.wadOfMonet,
    label: 'Receita Líquida',
    value: formatCurrency(475000),
    description: 'Receita total após deduções como impostos e devoluções.',
  },
  {
    id: 4,
    Icon: Icons.chartSquare,
    label: 'Margem Bruta',
    value: `43.2%`,
    description: 'Percentual do lucro bruto sobre a receita líquida.',
  },
  {
    id: 5,
    Icon: Icons.graphDown,
    label: 'Margem Líquida',
    value: `31.5%`,
    description: 'Percentual do lucro líquido sobre a receita líquida.',
  },
  {
    id: 6,
    Icon: Icons.calculator,
    label: 'Margem Operacional',
    value: `24.3%`,
    description: 'Percentual do lucro operacional sobre a receita líquida.',
  },
  {
    id: 7,
    Icon: Icons.dollar,
    label: 'EBITDA',
    value: formatCurrency(210000),
    description: 'Lucro antes de juros, impostos, depreciação e amortização.',
  },
  {
    id: 8,
    Icon: Icons.case,
    label: 'Despesas Totais',
    value: formatCurrency(90000),
    description:
      'Somatório de todas as despesas operacionais e administrativas.',
  },
  {
    id: 9,
    Icon: Icons.hammer,
    label: 'Custo Total',
    value: formatCurrency(180000),
    description: 'Soma dos custos diretos e indiretos da empresa.',
  },
  {
    id: 10,
    Icon: Icons.buildings,
    label: 'Resultado Operacional',
    value: formatCurrency(115000),
    description: 'Lucro da operação principal da empresa, antes de impostos.',
  },
  {
    id: 11,
    Icon: Icons.scale,
    label: 'Ponto de Equilíbrio',
    value: formatCurrency(32000),
    description:
      'Valor mínimo de receita para cobrir todos os custos e despesas.',
  },
  {
    id: 12,
    Icon: Icons.ticket,
    label: 'Ticket Médio',
    value: formatCurrency(1200),
    description: 'Receita média por transação ou venda.',
  },
  {
    id: 13,
    Icon: Icons.graphUp,
    label: 'Crescimento da Receita',
    value: '+8.4%',
    description:
      'Variação percentual da receita em relação ao período anterior.',
  },
  {
    id: 14,
    Icon: Icons.graphDown,
    label: 'Variação de Lucro',
    value: '+6.2%',
    description: 'Variação percentual do lucro em relação ao período anterior.',
  },
  {
    id: 15,
    Icon: Icons.refresh,
    label: 'ROI',
    value: '15%',
    description: 'Retorno sobre o investimento em campanhas ou operações.',
  },
  {
    id: 16,
    Icon: Icons.buildings2,
    label: 'ROA',
    value: '9.2%',
    description: 'Retorno sobre os ativos totais da empresa.',
  },
  {
    id: 17,
    Icon: Icons.graph,
    label: 'ROE',
    value: '12.8%',
    description: 'Retorno sobre o patrimônio líquido.',
  },
  {
    id: 18,
    Icon: Icons.chartSquare,
    label: 'Índice de Endividamento',
    value: '35%',
    description: 'Proporção de capital de terceiros sobre o capital próprio.',
  },
  {
    id: 19,
    Icon: Icons.document,
    label: 'Cobertura de Juros',
    value: '4.5x',
    description:
      'Capacidade da empresa de pagar os juros da dívida com seu lucro operacional.',
  },
  {
    id: 20,
    Icon: Icons.waterdrop,
    label: 'Liquidez Corrente',
    value: '1.8',
    description: 'Capacidade de pagamento das obrigações de curto prazo.',
  },
]
