'use client'

import { financialIndicators } from '@/constants/financial-indicators'
import { ManageIndicators } from './manage-indicators'
import { KpiCard } from './kpi-card/kpi-card'

export function SectionCards() {
  return (
    <div className="flex flex-col gap-4 border-b px-4 pb-4 lg:px-6 lg:pb-6">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">Indicadores Financeiros</div>

        <ManageIndicators />
      </div>
      <div className="grid grid-cols-1 gap-4 @2xl/main:grid-cols-2 @6xl/main:grid-cols-4">
        {financialIndicators.map((item) => (
          <KpiCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
