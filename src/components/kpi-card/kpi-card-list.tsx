import { financialIndicators } from '@/constants/financial-indicators'
import { KpiCard } from './kpi-card'

export function KpiCardList() {
  return (
    <div className="grid gap-3 overflow-y-auto p-5 sm:p-6 md:grid-cols-2 lg:grid-cols-3">
      {financialIndicators.map((item) => {
        return <KpiCard key={item.id} {...item} />
      })}
    </div>
  )
}
